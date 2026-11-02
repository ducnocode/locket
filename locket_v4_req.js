// ============================================================================
// SOURCE CODE GIẢI MÃ (ĐÃ NHÚNG TRONG DATA URI Ở TRÊN) ĐỂ DỄ KIỂM TRA & CHỈNH SỬA
// ============================================================================

// --- [1] locket_v4_req.js ---
const LOCK_DATE = "2026-05-25T08:30:00Z", EXPIRE_DATE = "2099-12-31T23:59:59Z", PID = "locket_1600_1y";
function save(k, v) {
  if (!v) return;
  if (typeof $persistentStore !== "undefined") $persistentStore.write(String(v), k);
  else if (typeof $prefs !== "undefined") $prefs.setValueForKey(String(v), k);
}
function load(k) {
  if (typeof $persistentStore !== "undefined") return $persistentStore.read(k);
  if (typeof $prefs !== "undefined") return $prefs.valueForKey(k);
  return null;
}

const isReq = typeof $request !== "undefined" && typeof $response === "undefined";
if (isReq) {
  const url = $request.url || "", h = Object.assign({}, $request.headers || {});
  const auth = h["Authorization"] || h["authorization"] || "";

  // Thu thập Bearer Token của Locket & API Key / UID của RevenueCat để dùng cho lệnh mua giả
  if (url.includes("locketcamera.com") && auth.startsWith("Bearer ")) {
    save("LOCKET_BEARER", auth);
  }
  if (url.includes("revenuecat.com") || url.includes("rc-backup.com")) {
    if (auth) save("RC_AUTH", auth);
    const m = url.match(/\/subscribers\/([^/?]+)/);
    if (m && m[1]) save("RC_UID", decodeURIComponent(m[1]));
  }

  if (url.includes("locket.gold")) {
    const st = load("LAST_SYNC_STATUS") || "Ready", uid = load("RC_UID") || "Unknown";
    $done({
      response: {
        status: 200,
        headers: { "Content-Type": "text/html;charset=utf-8" },
        body: "<div style='color:#fbbf24;background:#09090b;padding:24px;font-family:sans-serif'><h2>Locket Gold V4.5 Active (Locked: 25/05/2026)</h2><p>UID: " + uid + "</p><p>Auto-Purchase & Badge Sync: " + st + "</p></div>"
      }
    });
  } else {
    for (const k of Object.keys(h)) {
      const l = k.toLowerCase();
      if (l.includes("etag") || l.includes("if-none-match") || l.includes("if-modified-since") || l.includes("signature") || l.includes("hash")) delete h[k];
    }
    h["Cache-Control"] = "no-cache,no-store";
    let b = $request.body;
    if (typeof b === "string" && b.trim().startsWith("{")) {
      try {
        const j = JSON.parse(b), ms = Date.now();
        if (url.includes("receipts")) {
          j.product_id = PID;
          j.price = 399000;
          j.currency = "VND";
          if (j.app_user_id) save("RC_UID", j.app_user_id);
        }
        if (j.attributes) {
          j.attributes.locket_gold_badge = { value: "true", updated_at_ms: ms };
          j.attributes.badge = { value: "locket_gold", updated_at_ms: ms };
          j.attributes.has_gold_badge = { value: "true", updated_at_ms: ms };
          j.attributes.gold_badge_enabled = { value: "true", updated_at_ms: ms };
          j.attributes.is_gold = { value: "true", updated_at_ms: ms };
        }
        if (j.data && typeof j.data === "object") {
          j.data.badge = "locket_gold";
          j.data.locket_gold_badge = true;
          j.data.has_gold_badge = true;
          j.data.show_gold_badge = true;
          j.data.is_gold = true;
        }
        if ("badge" in j || url.includes("changeProfileInfo") || url.includes("updateUser")) {
          j.badge = "locket_gold";
          j.locket_gold_badge = true;
          j.has_gold_badge = true;
          j.show_gold_badge = true;
        }
        b = JSON.stringify(j);
      } catch (e) {}
    }
    $done({ headers: h, body: b });
  }
} else {
  $done({});
}

// --- [2] locket_v4_res.js (Hàm kiểm tra & Bắn lệnh mua giả) ---
function checkServerBadge(o) {
  if (!o || typeof o !== "object") return false;
  if (o.subscriber) {
    const e = o.subscriber.entitlements || {}, a = o.subscriber.subscriber_attributes || {};
    const hasEnt = !!(e.Gold || e.gold || e.locket_gold);
    const hasAttr = a.locket_gold_badge && a.locket_gold_badge.value === "true";
    return hasEnt && hasAttr;
  }
  if (o.result && o.result.data) {
    return o.result.data.badge === "locket_gold" && o.result.data.locket_gold_badge === true;
  }
  if (o.data && typeof o.data === "object") {
    return o.data.badge === "locket_gold" && o.data.locket_gold_badge === true;
  }
  if ("badge" in o) {
    return o.badge === "locket_gold";
  }
  return true;
}

function triggerFakePurchaseAndBadge(cb) {
  const rcAuth = load("RC_AUTH") || "Bearer appl_ScJ********************";
  const locketBearer = load("LOCKET_BEARER");
  const uid = load("RC_UID");
  const lastTry = Number(load("LAST_FAKE_BUY_TS") || 0);
  if (nowMs - lastTry < 8000) return cb(); // Chống lặp vô hạn (cooldown 8s)
  save("LAST_FAKE_BUY_TS", String(nowMs));

  let pending = 0;
  const doneOne = () => { pending--; if (pending <= 0) cb(); };

  if (uid && rcAuth) {
    pending += 2;
    const fakeReceipt = btoa(JSON.stringify({
      environment: "Production",
      bundle_id: "com.locket.Locket",
      application_version: "1.0",
      in_app: [{
        quantity: "1",
        product_id: PID,
        transaction_id: "490001234567893",
        original_transaction_id: "490001234567893",
        purchase_date_ms: "1779697800000",
        original_purchase_date_ms: "1779697800000",
        expires_date_ms: "4102444799000",
        is_trial_period: "false"
      }]
    }));
    // 1. Gửi lệnh mua giả tới RevenueCat /v1/receipts
    httpPost({
      url: "https://api.revenuecat.com/v1/receipts",
      headers: {
        "Authorization": rcAuth,
        "Content-Type": "application/json",
        "X-Platform": "iOS",
        "X-Client-Bundle-ID": "com.locket.Locket"
      },
      body: JSON.stringify({
        app_user_id: uid,
        fetch_token: fakeReceipt,
        product_id: PID,
        price: 399000,
        currency: "VND",
        is_restore: false,
        attributes: {
          locket_gold_badge: { value: "true", updated_at_ms: nowMs },
          badge: { value: "locket_gold", updated_at_ms: nowMs },
          has_gold_badge: { value: "true", updated_at_ms: nowMs },
          is_gold: { value: "true", updated_at_ms: nowMs }
        }
      })
    }, () => doneOne());

    // 2. Ép đồng bộ Subscriber Attributes trên RevenueCat
    httpPost({
      url: "https://api.revenuecat.com/v1/subscribers/" + encodeURIComponent(uid) + "/attributes",
      headers: {
        "Authorization": rcAuth,
        "Content-Type": "application/json",
        "X-Platform": "iOS"
      },
      body: JSON.stringify({
        attributes: {
          locket_gold_badge: { value: "true", updated_at_ms: nowMs },
          badge: { value: "locket_gold", updated_at_ms: nowMs },
          has_gold_badge: { value: "true", updated_at_ms: nowMs },
          gold_badge_enabled: { value: "true", updated_at_ms: nowMs },
          is_gold: { value: "true", updated_at_ms: nowMs }
        }
      })
    }, () => doneOne());
  }

  // 3. Gọi thẳng API Locket để bật cờ Huy hiệu trên Profile Server
  if (locketBearer) {
    pending += 1;
    httpPost({
      url: "https://api.locketcamera.com/changeProfileInfo",
      headers: {
        "Authorization": locketBearer,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: {
          badge: "locket_gold",
          locket_gold_badge: true,
          has_gold_badge: true,
          show_gold_badge: true,
          is_gold: true
        }
      })
    }, () => doneOne());
  }
  save("LAST_SYNC_STATUS", "Triggered Fake Purchase + Badge at " + nowIso);
  if (pending === 0) cb();
}

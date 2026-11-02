// file: locket_25_05_2026.js
// Repo: https://raw.githubusercontent.com/ducnocode/locket/main/locket_25_05_2026.js
// Locket Gold Hard Lock V4 + Remote PHP Admin Gatekeeper (Auto Register UID + Remote Block/Unblock)

const ADMIN_API_URL = "https://locketgold.66ghz.com/admin.php"; // <-- THAY LINK FILE admin.php CỦA BẠN VÀO ĐÂY

const DEFAULT_CONFIG = {
    lockDate: "2026-05-25",
    lockTime: "T08:30:00Z",
    expireDate: "2099-12-31",
    expireTime: "T23:59:59Z",
    productId: "locket_1600_1y",
    ownershipType: "PURCHASED",
    periodType: "normal",
    store: "app_store",
    storeTransactionId: "490001234567893",
    priceAmount: 399000,
    priceCurrency: "VND",
    appVersion: "1.0",
    forceSandboxFalse: true,
    alwaysForceBadge: true,
    cronKeepAlive: true,
    notifyOnSync: false
};

const STORE_KEY = "LOCKET_GOLD_MAX_CONFIG_V4";
const USER_ID_CACHE_KEY = "LOCKET_LAST_APP_USER_ID";
const AUTH_TOKEN_CACHE_KEY = "LOCKET_LAST_AUTH_BEARER";
const RC_API_KEY_CACHE_KEY = "LOCKET_LAST_RC_API_KEY";
const REMOTE_AUTH_CACHE_KEY = "LOCKET_REMOTE_ADMIN_STATE";

const Env = (() => {
    const isQuanX = typeof $prefs !== "undefined";
    const isSurgeLoon = typeof $persistentStore !== "undefined";

    return {
        read(key) {
            try {
                if (isSurgeLoon) return $persistentStore.read(key);
                if (isQuanX) return $prefs.valueForKey(key);
            } catch (e) {}
            return null;
        },
        write(val, key) {
            try {
                if (isSurgeLoon) return $persistentStore.write(String(val), key);
                if (isQuanX) return $prefs.setValueForKey(String(val), key);
            } catch (e) {}
            return false;
        },
        notify(title, subtitle, body) {
            try {
                if (typeof $notification !== "undefined" && typeof $notification.post === "function") {
                    $notification.post(title, subtitle, body);
                } else if (typeof $notify === "function") {
                    $notify(title, subtitle, body);
                }
            } catch (e) {}
        },
        httpPost(options, callback) {
            try {
                if (typeof $httpClient !== "undefined" && typeof $httpClient.post === "function") {
                    $httpClient.post(options, callback);
                } else if (typeof $task !== "undefined" && typeof $task.fetch === "function") {
                    $task.fetch({ method: "POST", ...options }).then(
                        (resp) => callback(null, resp, resp.body),
                        (err) => callback(err, null, null)
                    );
                } else {
                    callback(new Error("No HTTP client"), null, null);
                }
            } catch (e) {
                callback(e, null, null);
            }
        },
        done(val = {}) {
            if (typeof $done === "function") $done(val);
        }
    };
})();

function toIsoDate(raw, fallbackDate, timeSuffix = "T08:30:00Z") {
    if (!raw || typeof raw !== "string") return fallbackDate + timeSuffix;
    const s = raw.trim();
    if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(s)) {
        return s.endsWith("Z") ? s : s + "Z";
    }
    const dmy = s.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
    if (dmy) {
        return `${dmy[3]}-${dmy[2].padStart(2, "0")}-${dmy[1].padStart(2, "0")}${timeSuffix}`;
    }
    const ymd = s.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})$/);
    if (ymd) {
        return `${ymd[1]}-${ymd[2].padStart(2, "0")}-${ymd[3].padStart(2, "0")}${timeSuffix}`;
    }
    return fallbackDate + timeSuffix;
}

function getRemoteState() {
    try {
        const raw = Env.read(REMOTE_AUTH_CACHE_KEY);
        if (raw) return JSON.parse(raw);
    } catch (e) {}
    return { blocked: false, status: "active", force_lock_date: null, reason: "" };
}

function syncWithAdminServer(uid, cfg, callback) {
    if (!ADMIN_API_URL || ADMIN_API_URL.includes("your-domain.com") || !uid || uid.includes("RCAnonymousID")) {
        if (callback) callback(getRemoteState());
        return;
    }

    const syncUrl = ADMIN_API_URL + (ADMIN_API_URL.includes("?") ? "&" : "?") + "api=sync";
    const payload = JSON.stringify({
        uid: uid,
        lockDate: cfg.lockDate,
        productId: cfg.productId,
        ts: Date.now()
    });

    Env.httpPost({
        url: syncUrl,
        headers: { "Content-Type": "application/json" },
        body: payload,
        timeout: 4
    }, (err, resp, body) => {
        let state = getRemoteState();
        if (!err && body) {
            try {
                const parsed = JSON.parse(body);
                if (parsed && typeof parsed === "object" && parsed.ok) {
                    state = {
                        blocked: !!parsed.blocked || parsed.status === "blocked",
                        status: parsed.status || "active",
                        force_lock_date: parsed.force_lock_date || null,
                        reason: parsed.reason || "Đã bị Admin chặn quyền sử dụng."
                    };
                    Env.write(JSON.stringify(state), REMOTE_AUTH_CACHE_KEY);
                }
            } catch (e) {}
        }
        if (callback) callback(state);
    });
}

function loadConfig() {
    let cfg = { ...DEFAULT_CONFIG };
    try {
        const raw =
            Env.read(STORE_KEY) ||
            Env.read("LOCKET_GOLD_MAX_CONFIG_V3") ||
            Env.read("LOCKET_GOLD_MAX_CONFIG_V2");
        if (raw) {
            const parsed = JSON.parse(raw);
            cfg = { ...cfg, ...parsed };
        }
    } catch (e) {}

    const remote = getRemoteState();
    if (remote && remote.force_lock_date) {
        cfg.lockDate = remote.force_lock_date.slice(0, 10);
    }

    cfg.alwaysForceBadge = !remote.blocked;
    cfg.isBlockedByAdmin = !!remote.blocked;
    cfg.blockReason = remote.reason || "Tài khoản đã bị Admin khoá quyền sử dụng.";
    cfg.lockIso = toIsoDate(cfg.lockDate, DEFAULT_CONFIG.lockDate, cfg.lockTime || "T08:30:00Z");
    cfg.expireIso = toIsoDate(cfg.expireDate, DEFAULT_CONFIG.expireDate, cfg.expireTime || "T23:59:59Z");
    return cfg;
}

function saveConfig(newCfg) {
    Env.write(JSON.stringify(newCfg), STORE_KEY);
    Env.write(toIsoDate(newCfg.lockDate, DEFAULT_CONFIG.lockDate, "T08:30:00Z"), "locket_custom_date_lock");
}

function extractAndCacheCredentials(url, headers) {
    if (url) {
        const m = url.match(/\/subscribers\/([^/?#]+)/i);
        if (m && m[1]) {
            const uid = decodeURIComponent(m[1]);
            Env.write(uid, USER_ID_CACHE_KEY);
        }
    }
    if (headers && typeof headers === "object") {
        for (const k of Object.keys(headers)) {
            const low = k.toLowerCase();
            const val = headers[k];
            if (!val) continue;
            if (low === "authorization") {
                if (/^Bearer\s+eyJ/i.test(val)) {
                    Env.write(val, AUTH_TOKEN_CACHE_KEY);
                } else if (/^appl_|^goog_|^rcb_/i.test(val.replace(/^Bearer\s+/i, ""))) {
                    Env.write(val, RC_API_KEY_CACHE_KEY);
                }
            }
        }
    }
    return Env.read(USER_ID_CACHE_KEY) || "$RCAnonymousID:locket_hard_lock";
}

function parseQuery(url) {
    const q = {};
    const idx = url.indexOf("?");
    if (idx === -1) return q;
    const pairs = url.slice(idx + 1).split("&");
    for (const p of pairs) {
        if (!p) continue;
        const eq = p.indexOf("=");
        if (eq === -1) {
            q[decodeURIComponent(p)] = "";
        } else {
            const k = decodeURIComponent(p.slice(0, eq));
            const v = decodeURIComponent(p.slice(eq + 1).replace(/\+/g, " "));
            q[k] = v;
        }
    }
    return q;
}

// Khi bị Admin chặn: Xoá sạch gói Gold và tắt toàn bộ huy hiệu trả về cho App
function buildRevokedPayload(existingObj, resolvedUserId) {
    const nowIso = new Date().toISOString();
    const nowMs = Date.now();
    const obj = (existingObj && typeof existingObj === "object") ? existingObj : {};
    obj.Attention = "Access Blocked by Admin";
    obj.request_date = nowIso;
    obj.request_date_ms = nowMs;
    obj.subscriber = {
        original_app_user_id: resolvedUserId || "blocked_user",
        first_seen: nowIso,
        last_seen: nowIso,
        original_application_version: "1.0",
        original_purchase_date: null,
        management_url: null,
        other_purchases: {},
        non_subscriptions: {},
        subscriptions: {},
        entitlements: {},
        subscriber_attributes: {
            locket_gold_badge: { value: "false", updated_at_ms: nowMs },
            badge: { value: "none", updated_at_ms: nowMs },
            is_gold: { value: "false", updated_at_ms: nowMs }
        }
    };
    return obj;
}

function deepStripBadgeInObject(node, depth = 0) {
    if (!node || typeof node !== "object" || depth > 8) return node;
    if (Array.isArray(node)) {
        for (let i = 0; i < node.length; i++) deepStripBadgeInObject(node[i], depth + 1);
        return node;
    }
    if ("badge" in node || "locket_gold_badge" in node || "is_gold" in node) {
        node.badge = null;
        node.locket_gold_badge = false;
        node.has_gold_badge = false;
        node.gold_badge = false;
        node.is_gold = false;
        node.gold_subscription = false;
        node.subscription_status = "none";
    }
    if (node.fields && typeof node.fields === "object") {
        if (node.fields.badge || node.fields.locket_gold_badge) {
            node.fields.badge = { nullValue: null };
            node.fields.locket_gold_badge = { booleanValue: false };
            node.fields.has_gold_badge = { booleanValue: false };
            node.fields.is_gold = { booleanValue: false };
        }
    }
    for (const k of Object.keys(node)) {
        if (typeof node[k] === "object" && node[k] !== null) {
            deepStripBadgeInObject(node[k], depth + 1);
        }
    }
    return node;
}

function buildSubscriberPayload(existingObj, cfg, resolvedUserId) {
    if (cfg.isBlockedByAdmin) {
        return buildRevokedPayload(existingObj, resolvedUserId);
    }

    const LOCK_DATE = cfg.lockIso;
    const EXPIRE_DATE = cfg.expireIso;
    const PRIMARY_PID = cfg.productId || "locket_1600_1y";
    const nowIso = new Date().toISOString();
    const nowMs = Date.now();

    const obj = (existingObj && typeof existingObj === "object") ? existingObj : {};
    obj.Attention = "Locket Gold Hard Lock 25/05/2026 Activated";
    obj.request_date = nowIso;
    obj.request_date_ms = nowMs;

    if (!obj.subscriber || typeof obj.subscriber !== "object") {
        obj.subscriber = {};
    }

    const uid = obj.subscriber.original_app_user_id || resolvedUserId || "$RCAnonymousID:locket_hard_lock";
    obj.subscriber.original_app_user_id = uid;
    obj.subscriber.first_seen = LOCK_DATE;
    obj.subscriber.last_seen = nowIso;
    obj.subscriber.original_application_version = cfg.appVersion || "1.0";
    obj.subscriber.original_purchase_date = LOCK_DATE;
    obj.subscriber.management_url = "https://apps.apple.com/account/subscriptions";
    obj.subscriber.other_purchases = obj.subscriber.other_purchases || {};
    obj.subscriber.non_subscriptions = obj.subscriber.non_subscriptions || {};

    if (!obj.subscriber.subscriptions || typeof obj.subscriber.subscriptions !== "object") {
        obj.subscriber.subscriptions = {};
    }
    if (!obj.subscriber.entitlements || typeof obj.subscriber.entitlements !== "object") {
        obj.subscriber.entitlements = {};
    }
    if (!obj.subscriber.subscriber_attributes || typeof obj.subscriber.subscriber_attributes !== "object") {
        obj.subscriber.subscriber_attributes = {};
    }

    const forcedAttributes = {
        "locket_gold_badge": "true",
        "badge": "locket_gold",
        "has_gold_badge": "true",
        "gold_badge_enabled": "true",
        "is_gold": "true",
        "membership_badge": "gold"
    };

    for (const [attrKey, attrVal] of Object.entries(forcedAttributes)) {
        obj.subscriber.subscriber_attributes[attrKey] = {
            value: attrVal,
            updated_at_ms: nowMs
        };
    }

    const buildSubEntry = (pid) => ({
        auto_resume_date: null,
        display_name: pid,
        is_sandbox: false,
        ownership_type: cfg.ownershipType || "PURCHASED",
        billing_issues_detected_at: null,
        management_url: "https://apps.apple.com/account/subscriptions",
        period_type: cfg.periodType || "normal",
        price: {
            amount: cfg.priceAmount || 399000,
            currency: cfg.priceCurrency || "VND"
        },
        expires_date: EXPIRE_DATE,
        grace_period_expires_date: null,
        refunded_at: null,
        unsubscribe_detected_at: null,
        original_purchase_date: LOCK_DATE,
        purchase_date: LOCK_DATE,
        store: cfg.store || "app_store",
        store_transaction_id: cfg.storeTransactionId || "490001234567893"
    });

    const buildEntEntry = (pid) => ({
        grace_period_expires_date: null,
        purchase_date: LOCK_DATE,
        original_purchase_date: LOCK_DATE,
        product_identifier: pid,
        expires_date: EXPIRE_DATE,
        ownership_type: cfg.ownershipType || "PURCHASED",
        store: cfg.store || "app_store"
    });

    const allProductIds = [
        PRIMARY_PID,
        "locket_1600_1y",
        "locket_3600_1y",
        "locket_399_1m",
        "locket_199_1m",
        "gold",
        "locket_gold_1y",
        "locket_gold_1m",
        "locket_gold_lifetime"
    ];

    for (const pid of allProductIds) {
        obj.subscriber.subscriptions[pid] = buildSubEntry(pid);
    }

    const allEntitlements = ["Gold", "gold", "pro", "Pro", "locket_gold", "premium", "plus"];
    for (const entKey of allEntitlements) {
        obj.subscriber.entitlements[entKey] = buildEntEntry(PRIMARY_PID);
    }

    return obj;
}

function deepForceBadgeInObject(node, cfg, depth = 0) {
    if (cfg.isBlockedByAdmin) {
        return deepStripBadgeInObject(node, depth);
    }
    if (!node || typeof node !== "object" || depth > 8) return node;

    if (Array.isArray(node)) {
        for (let i = 0; i < node.length; i++) {
            deepForceBadgeInObject(node[i], cfg, depth + 1);
        }
        return node;
    }

    const hasUserShape = (
        "badge" in node ||
        "locket_gold_badge" in node ||
        "is_gold" in node ||
        ("uid" in node && ("username" in node || "first_name" in node || "profile_picture_url" in node))
    );

    if (hasUserShape) {
        node.badge = "locket_gold";
        node.locket_gold_badge = true;
        node.has_gold_badge = true;
        node.gold_badge = true;
        node.is_gold = true;
        node.gold_subscription = true;
        node.subscription_status = "active";
        node.original_purchase_date = cfg.lockIso;
        node.expires_date = cfg.expireIso;
    }

    if (node.fields && typeof node.fields === "object") {
        if (node.fields.uid || node.fields.username || node.fields.badge || node.fields.profile_picture_url) {
            node.fields.badge = { stringValue: "locket_gold" };
            node.fields.locket_gold_badge = { booleanValue: true };
            node.fields.has_gold_badge = { booleanValue: true };
            node.fields.is_gold = { booleanValue: true };
            node.fields.gold_subscription_since = { timestampValue: cfg.lockIso };
        }
    }

    for (const k of Object.keys(node)) {
        if (k === "badge" && (node[k] === null || node[k] === "" || node[k] === false || node[k] === "none")) {
            node[k] = "locket_gold";
        } else if ((k === "locket_gold_badge" || k === "has_gold_badge" || k === "show_gold_badge") && node[k] === false) {
            node[k] = true;
        } else if (typeof node[k] === "object" && node[k] !== null) {
            deepForceBadgeInObject(node[k], cfg, depth + 1);
        }
    }

    return node;
}

function renderWebPanel(cfg, statusMsg) {
    const cachedUid = Env.read(USER_ID_CACHE_KEY) || "Chưa ghi nhận (Mở Locket để tự bắt)";

    if (cfg.isBlockedByAdmin) {
        return `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<title>Truy cập bị từ chối — Locket Gold V4</title>
<style>
  body { margin:0; padding:24px 16px; background:#09090b; color:#f4f4f5; font-family:-apple-system,BlinkMacSystemFont,sans-serif; display:flex; align-items:center; justify-content:center; min-height:90vh; }
  .card { max-width:420px; width:100%; background:#18181b; border:1px solid rgba(255,69,58,0.5); border-radius:20px; padding:26px 20px; text-align:center; box-shadow:0 20px 40px rgba(0,0,0,0.6); }
  .pill { display:inline-block; background:rgba(255,69,58,0.18); color:#ff453a; border:1px solid rgba(255,69,58,0.45); font-size:12px; font-weight:700; padding:5px 12px; border-radius:999px; margin-bottom:14px; }
  h1 { font-size:22px; margin:0 0 10px; color:#fff; }
  p { font-size:14px; color:#a1a1aa; line-height:1.5; margin-bottom:18px; }
  .uid-box { background:#09090b; border:1px solid #27272a; padding:12px; border-radius:12px; font-family:monospace; font-size:13px; color:#fbbf24; word-break:break-all; }
</style>
</head>
<body>
  <div class="card">
    <div class="pill">ACCESS REVOKED BY ADMIN</div>
    <h1>Tài khoản đã bị khoá Module</h1>
    <p>${cfg.blockReason}</p>
    <div class="uid-box">User ID: ${cachedUid}</div>
  </div>
</body>
</html>`;
    }

    return `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<title>Locket Gold Max Control Panel V4</title>
<style>
  :root { --gold: #f59e0b; --gold-light: #fbbf24; --bg: #09090b; --card: #18181b; --border: #27272a; --text: #f4f4f5; --muted: #a1a1aa; }
  * { box-sizing: border-box; }
  body { margin: 0; padding: 20px 14px 40px; background: var(--bg); color: var(--text); font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif; }
  .wrap { max-width: 460px; margin: 0 auto; }
  .badge { display: inline-block; background: rgba(245,158,11,0.15); color: var(--gold-light); border: 1px solid rgba(245,158,11,0.4); font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 999px; letter-spacing: 0.5px; margin-bottom: 8px; }
  h1 { font-size: 22px; margin: 4px 0 6px; color: #fff; }
  .desc { font-size: 13px; color: var(--muted); margin-bottom: 18px; }
  .alert { background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.45); color: #34d399; padding: 12px 14px; border-radius: 12px; font-size: 13px; font-weight: 600; margin-bottom: 16px; display: ${statusMsg ? "block" : "none"}; }
  .card { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 18px; margin-bottom: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.4); }
  .stat-row { display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid var(--border); font-size: 13px; gap: 10px; }
  .stat-row:last-child { border-bottom: none; }
  .stat-label { color: var(--muted); flex-shrink: 0; }
  .stat-val { color: var(--gold-light); font-family: ui-monospace, SFMono-Regular, monospace; font-weight: 600; text-align: right; word-break: break-all; }
  label { display: block; font-size: 13px; font-weight: 600; margin: 12px 0 6px; color: #e4e4e7; }
  input[type="text"], select { width: 100%; padding: 12px; border-radius: 10px; border: 1px solid #3f3f46; background: #09090b; color: #fff; font-size: 15px; outline: none; }
  input:focus, select:focus { border-color: var(--gold); }
  .presets { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px; }
  .preset-btn { background: #27272a; color: #e4e4e7; border: 1px solid #3f3f46; border-radius: 8px; padding: 6px 10px; font-size: 12px; cursor: pointer; }
  .preset-btn:active { background: var(--gold); color: #000; }
  .check-row { display: flex; align-items: center; gap: 10px; margin-top: 14px; font-size: 13px; color: #d4d4d8; }
  .check-row input { width: 18px; height: 18px; accent-color: var(--gold); }
  .btn-main { width: 100%; margin-top: 18px; background: linear-gradient(135deg, #fbbf24, #d97706); color: #000; font-weight: 800; border: none; padding: 14px; border-radius: 12px; font-size: 15px; cursor: pointer; }
  .btn-reset { width: 100%; margin-top: 10px; background: transparent; color: var(--muted); border: 1px solid var(--border); padding: 10px; border-radius: 10px; font-size: 13px; cursor: pointer; }
  .footer { text-align: center; font-size: 12px; color: #71717a; margin-top: 18px; line-height: 1.5; }
</style>
</head>
<body>
<div class="wrap">
  <div style="text-align:center">
    <span class="badge">FORCE BADGE V4 • DUCNOCODE/LOCKET</span>
    <h1>Locket Gold Control Panel</h1>
    <div class="desc">Khoá cứng huy hiệu luôn bật 24/7 & cố định ngày đăng ký 25/05/2026</div>
  </div>
  <div class="alert">${statusMsg || ""}</div>
  <div class="card">
    <div class="stat-row"><span class="stat-label">Trạng thái Huy hiệu</span><span class="stat-val">ALWAYS ON (NEVER OFF)</span></div>
    <div class="stat-row"><span class="stat-label">Giá & Giao dịch</span><span class="stat-val">399.000 VND (#${cfg.storeTransactionId})</span></div>
    <div class="stat-row"><span class="stat-label">Mốc Đăng Ký (ISO)</span><span class="stat-val">${cfg.lockIso}</span></div>
    <div class="stat-row"><span class="stat-label">Ngày Hết Hạn</span><span class="stat-val">${cfg.expireIso}</span></div>
    <div class="stat-row"><span class="stat-label">Mã Gói (Product ID)</span><span class="stat-val">${cfg.productId}</span></div>
    <div class="stat-row"><span class="stat-label">User ID Đã Bắt</span><span class="stat-val">${cachedUid}</span></div>
  </div>
  <form class="card" method="GET" action="/setdate">
    <input type="hidden" name="save" value="1" />
    <label>Ngày đăng ký hiển thị (DD/MM/YYYY hoặc YYYY-MM-DD)</label>
    <input type="text" id="lockDateInput" name="lockDate" value="${cfg.lockDate}" placeholder="VD: 25/05/2026 hoặc 2026-05-25" />
    <div class="presets">
      <button type="button" class="preset-btn" onclick="setD('25/05/2026')">25/05/2026</button>
      <button type="button" class="preset-btn" onclick="setD('26/05/2010')">26/05/2010</button>
      <button type="button" class="preset-btn" onclick="setD('01/01/2022')">01/01/2022</button>
      <button type="button" class="preset-btn" onclick="setD('01/01/2020')">01/01/2020</button>
    </div>
    <label>Ngày hết hạn gói (Mặc định vĩnh viễn 2099)</label>
    <input type="text" name="expireDate" value="${cfg.expireDate}" placeholder="2099-12-31" />
    <label>Mã gói đăng ký (Product Identifier)</label>
    <select name="productId">
      <option value="locket_1600_1y" ${cfg.productId === "locket_1600_1y" ? "selected" : ""}>locket_1600_1y (Gold Yearly - 399.000đ)</option>
      <option value="locket_399_1m" ${cfg.productId === "locket_399_1m" ? "selected" : ""}>locket_399_1m (Gold Monthly)</option>
      <option value="locket_199_1m" ${cfg.productId === "locket_199_1m" ? "selected" : ""}>locket_199_1m (Gold Promo)</option>
    </select>
    <label>Quyền sở hữu (Ownership Type)</label>
    <select name="ownershipType">
      <option value="PURCHASED" ${cfg.ownershipType === "PURCHASED" ? "selected" : ""}>PURCHASED (Đã mua trực tiếp)</option>
      <option value="FAMILY_SHARED" ${cfg.ownershipType === "FAMILY_SHARED" ? "selected" : ""}>FAMILY_SHARED (Chia sẻ gia đình)</option>
    </select>
    <label class="check-row">
      <input type="checkbox" name="notifyOnSync" value="1" ${cfg.notifyOnSync ? "checked" : ""} />
      <span>Bắn thông báo đẩy mỗi khi đồng bộ Huy hiệu</span>
    </label>
    <button type="submit" class="btn-main">LƯU & KHOÁ CỨNG HUY HIỆU 24/7</button>
  </form>
  <form method="GET" action="/setdate">
    <input type="hidden" name="reset" value="1" />
    <button type="submit" class="btn-reset">Khôi phục mặc định (25/05/2026)</button>
  </form>
  <div class="footer">Truy cập nhanh bằng địa chỉ: <b>http://locket.gold</b></div>
</div>
<script>function setD(v) { document.getElementById('lockDateInput').value = v; }</script>
</body>
</html>`;
}

function runCronBadgeSync() {
    const cfg = loadConfig();
    const uid = Env.read(USER_ID_CACHE_KEY);
    const rcKey = Env.read(RC_API_KEY_CACHE_KEY);
    const bearer = Env.read(AUTH_TOKEN_CACHE_KEY);
    const nowMs = Date.now();

    syncWithAdminServer(uid, cfg, (remoteState) => {
        if (remoteState && remoteState.blocked) {
            Env.done();
            return;
        }

        if (!uid && !bearer) {
            Env.done();
            return;
        }

        let pending = 0;
        const finishOne = () => {
            pending--;
            if (pending <= 0) {
                if (cfg.notifyOnSync) {
                    Env.notify("Locket Gold V4 Cron", "Đã đồng bộ giữ huy hiệu", `UID: ${uid || "Auto"}`);
                }
                Env.done();
            }
        };

        if (uid && rcKey) {
            pending++;
            const attrUrl = `https://api.revenuecat.com/v1/subscribers/${encodeURIComponent(uid)}/attributes`;
            const attrBody = JSON.stringify({
                attributes: {
                    locket_gold_badge: { value: "true", updated_at_ms: nowMs },
                    badge: { value: "locket_gold", updated_at_ms: nowMs },
                    is_gold: { value: "true", updated_at_ms: nowMs }
                }
            });
            Env.httpPost({
                url: attrUrl,
                headers: {
                    "Authorization": rcKey,
                    "Content-Type": "application/json",
                    "X-Platform": "iOS"
                },
                body: attrBody
            }, () => finishOne());
        }

        if (bearer) {
            pending++;
            Env.httpPost({
                url: "https://api.locketcamera.com/changeProfileInfo",
                headers: {
                    "Authorization": bearer,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    data: {
                        badge: "locket_gold",
                        locket_gold_badge: true
                    }
                })
            })
            , () => finishOne();
        }

        if (pending === 0) {
            Env.done();
        }
    });
}

const isCronMode = typeof $request === "undefined" && typeof $response === "undefined";
const isRequestMode = typeof $request !== "undefined" && typeof $response === "undefined";
const isResponseMode = typeof $response !== "undefined";

if (isCronMode) {
    runCronBadgeSync();
} else if (isRequestMode) {
    const url = $request.url || "";
    const headers = $request.headers || {};
    const uid = extractAndCacheCredentials(url, headers);
    const currentCfg = loadConfig();

    if (url.includes("/setdate") || url.includes("locket.gold")) {
        syncWithAdminServer(uid, currentCfg, () => {
            const q = parseQuery(url);
            let statusMsg = "";
            let current = loadConfig();

            if (!current.isBlockedByAdmin) {
                if (q.reset === "1") {
                    const resetCfg = { ...DEFAULT_CONFIG, preferWebOverArg: true };
                    saveConfig(resetCfg);
                    current = loadConfig();
                    statusMsg = "Đã khôi phục mốc mặc định 25/05/2026!";
                } else if (q.save === "1" || q.d || q.lockDate) {
                    const rawLock = q.lockDate || q.d || current.lockDate;
                    const isoLock = toIsoDate(rawLock, DEFAULT_CONFIG.lockDate, "T08:30:00Z");
                    const rawExp = q.expireDate || current.expireDate;
                    const isoExp = toIsoDate(rawExp, DEFAULT_CONFIG.expireDate, "T23:59:59Z");

                    const updated = {
                        ...DEFAULT_CONFIG,
                        lockDate: isoLock.slice(0, 10),
                        expireDate: isoExp.slice(0, 10),
                        productId: q.productId || current.productId || DEFAULT_CONFIG.productId,
                        ownershipType: q.ownershipType || current.ownershipType || "PURCHASED",
                        notifyOnSync: q.notifyOnSync === "1",
                        preferWebOverArg: true
                    };
                    saveConfig(updated);
                    current = loadConfig();
                    statusMsg = `Đã khoá cứng ngày đăng ký: ${current.lockIso} (Huy hiệu: LUÔN BẬT)`;
                }
            }

            Env.done({
                response: {
                    status: 200,
                    headers: {
                        "Content-Type": "text/html; charset=utf-8",
                        "Cache-Control": "no-store, no-cache, must-revalidate"
                    },
                    body: renderWebPanel(current, statusMsg)
                }
            });
        });
    } else {
        for (const k of Object.keys(headers)) {
            const low = k.toLowerCase();
            if (
                low === "x-revenuecat-etag" ||
                low === "if-none-match" ||
                low === "if-modified-since" ||
                low === "x-signature" ||
                low === "x-post-params-hash"
            ) {
                delete headers[k];
            }
        }
        headers["Cache-Control"] = "no-cache, no-store, must-revalidate";
        headers["Pragma"] = "no-cache";

        let modifiedBody = $request.body;
        if (typeof modifiedBody === "string" && modifiedBody.trim().startsWith("{")) {
            try {
                const reqJson = JSON.parse(modifiedBody);
                let touched = false;
                const nowMs = Date.now();

                if (currentCfg.isBlockedByAdmin) {
                    if (reqJson.attributes && typeof reqJson.attributes === "object") {
                        reqJson.attributes.locket_gold_badge = { value: "false", updated_at_ms: nowMs };
                        reqJson.attributes.badge = { value: "none", updated_at_ms: nowMs };
                        reqJson.attributes.is_gold = { value: "false", updated_at_ms: nowMs };
                        touched = true;
                    }
                    if (reqJson.data && typeof reqJson.data === "object") {
                        reqJson.data.badge = null;
                        reqJson.data.locket_gold_badge = false;
                        touched = true;
                    }
                } else {
                    if (reqJson.attributes && typeof reqJson.attributes === "object") {
                        reqJson.attributes.locket_gold_badge = { value: "true", updated_at_ms: nowMs };
                        reqJson.attributes.badge = { value: "locket_gold", updated_at_ms: nowMs };
                        reqJson.attributes.is_gold = { value: "true", updated_at_ms: nowMs };
                        touched = true;
                    }
                    if (reqJson.data && typeof reqJson.data === "object") {
                        if ("badge" in reqJson.data || url.includes("changeProfileInfo") || url.includes("updateUser")) {
                            reqJson.data.badge = "locket_gold";
                            reqJson.data.locket_gold_badge = true;
                            touched = true;
                        }
                    }
                }

                if (touched) {
                    modifiedBody = JSON.stringify(reqJson);
                }
            } catch (e) {}
        }

        if (modifiedBody !== undefined && modifiedBody !== $request.body) {
            Env.done({ headers, body: modifiedBody });
        } else {
            Env.done({ headers });
        }
    }
} else if (isResponseMode) {
    const reqUrl = (typeof $request !== "undefined" && $request.url) ? $request.url : "";
    const reqHeaders = (typeof $request !== "undefined" && $request.headers) ? $request.headers : {};
    const resolvedUserId = extractAndCacheCredentials(reqUrl, reqHeaders);
    const initialCfg = loadConfig();

    syncWithAdminServer(resolvedUserId, initialCfg, () => {
        const cfg = loadConfig();
        let obj;
        try {
            obj = JSON.parse($response.body || "{}");
        } catch (e) {
            obj = {};
        }
        if (!obj || typeof obj !== "object") obj = {};

        const isRevenueCat = (
            reqUrl.includes("revenuecat.com") ||
            reqUrl.includes("rc-backup.com") ||
            reqUrl.includes("/subscribers") ||
            reqUrl.includes("/receipts") ||
            obj.subscriber !== undefined
        );

        if (isRevenueCat) {
            obj = buildSubscriberPayload(obj, cfg, resolvedUserId);
        } else {
            obj = deepForceBadgeInObject(obj, cfg);
            if (obj.subscriber && typeof obj.subscriber === "object") {
                obj = buildSubscriberPayload(obj, cfg, resolvedUserId);
            }
        }

        const resHeaders = { ...($response.headers || {}) };
        for (const k of Object.keys(resHeaders)) {
            const low = k.toLowerCase();
            if (
                low === "x-revenuecat-etag" ||
                low === "etag" ||
                low === "x-signature" ||
                low === "x-revenuecat-request-id" ||
                low === "content-length"
            ) {
                delete resHeaders[k];
            }
        }
        resHeaders["Content-Type"] = "application/json; charset=utf-8";
        resHeaders["Cache-Control"] = "no-store, no-cache, must-revalidate";

        Env.done({
            status: 200,
            headers: resHeaders,
            body: JSON.stringify(obj)
        });
    });
}

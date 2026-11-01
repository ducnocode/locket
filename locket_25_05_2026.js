// file: locket_25_05_2026.js
// Locket Gold Hard Lock - Max Bypass + Built-in Web Control Panel
// Chạy chung cho cả http-request (Web UI + Xoá ETag/Nonce/Cache) và http-response (Khoá cứng Gold + Xoá Signature)

const DEFAULT_CONFIG = {
    lockDate: "2026-05-25",
    expireDate: "2099-12-31",
    productId: "locket_1600_1y",
    ownershipType: "PURCHASED",
    periodType: "normal",
    store: "app_store",
    appVersion: "1.0",
    forceSandboxFalse: true,
    notifyOnSync: false
};

const STORE_KEY = "LOCKET_GOLD_MAX_CONFIG_V2";

// Chuẩn hoá ngày nhập vào (DD/MM/YYYY, DD-MM-YYYY, YYYY-MM-DD) sang ISO 8601 UTC
function toIsoDate(raw, fallbackDate) {
    if (!raw || typeof raw !== "string") return fallbackDate + "T00:00:00Z";
    const s = raw.trim();
    if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(s)) {
        return s.endsWith("Z") ? s : s + "Z";
    }
    const dmy = s.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
    if (dmy) {
        return `${dmy[3]}-${dmy[2].padStart(2, "0")}-${dmy[1].padStart(2, "0")}T00:00:00Z`;
    }
    const ymd = s.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})$/);
    if (ymd) {
        return `${ymd[1]}-${ymd[2].padStart(2, "0")}-${ymd[3].padStart(2, "0")}T00:00:00Z`;
    }
    return fallbackDate + "T00:00:00Z";
}

function loadConfig() {
    let cfg = { ...DEFAULT_CONFIG };
    if (typeof $persistentStore !== "undefined") {
        try {
            const raw = $persistentStore.read(STORE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                cfg = { ...cfg, ...parsed };
            } else {
                const oldDate = $persistentStore.read("locket_custom_date_lock");
                if (oldDate) cfg.lockDate = oldDate.slice(0, 10);
            }
        } catch (e) {}
    }

    if (typeof $argument === "string" && $argument.trim() !== "" && !cfg.preferWebOverArg) {
        const arg = $argument.trim();
        const kv = arg.match(/date=([^&\s]+)/i);
        const dateVal = kv ? decodeURIComponent(kv[1]) : arg;
        cfg.lockDate = toIsoDate(dateVal, DEFAULT_CONFIG.lockDate).slice(0, 10);
    }

    cfg.lockIso = toIsoDate(cfg.lockDate, DEFAULT_CONFIG.lockDate);
    cfg.expireIso = toIsoDate(cfg.expireDate, DEFAULT_CONFIG.expireDate).replace("T00:00:00Z", "T23:59:59Z");
    return cfg;
}

function saveConfig(newCfg) {
    if (typeof $persistentStore !== "undefined") {
        $persistentStore.write(JSON.stringify(newCfg), STORE_KEY);
        $persistentStore.write(toIsoDate(newCfg.lockDate, DEFAULT_CONFIG.lockDate), "locket_custom_date_lock");
    }
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

function renderWebPanel(cfg, statusMsg) {
    return `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<title>Locket Gold Max Control Panel</title>
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
  .stat-row { display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid var(--border); font-size: 13px; }
  .stat-row:last-child { border-bottom: none; }
  .stat-label { color: var(--muted); }
  .stat-val { color: var(--gold-light); font-family: ui-monospace, SFMono-Regular, monospace; font-weight: 600; }
  label { display: block; font-size: 13px; font-weight: 600; margin: 12px 0 6px; color: #e4e4e7; }
  input[type="text"], input[type="date"], select { width: 100%; padding: 12px; border-radius: 10px; border: 1px solid #3f3f46; background: #09090b; color: #fff; font-size: 15px; outline: none; }
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
    <span class="badge">HARD LOCK ACTIVE • ANTI-304 ETAG</span>
    <h1>Locket Gold Control Panel</h1>
    <div class="desc">Tuỳ chỉnh ngày đăng ký & đóng băng huy hiệu trực tiếp</div>
  </div>

  <div class="alert">${statusMsg || ""}</div>

  <div class="card">
    <div class="stat-row"><span class="stat-label">Trạng thái Huy hiệu</span><span class="stat-val">LOCKED (GOLD + PRO)</span></div>
    <div class="stat-row"><span class="stat-label">Mốc Đăng Ký (ISO)</span><span class="stat-val">${cfg.lockIso}</span></div>
    <div class="stat-row"><span class="stat-label">Ngày Hết Hạn</span><span class="stat-val">${cfg.expireIso}</span></div>
    <div class="stat-row"><span class="stat-label">Mã Gói (Product ID)</span><span class="stat-val">${cfg.productId}</span></div>
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
      <option value="locket_1600_1y" ${cfg.productId === "locket_1600_1y" ? "selected" : ""}>locket_1600_1y (Gold Yearly - Chuẩn)</option>
      <option value="locket_399_1m" ${cfg.productId === "locket_399_1m" ? "selected" : ""}>locket_399_1m (Gold Monthly)</option>
      <option value="locket_gold_lifetime" ${cfg.productId === "locket_gold_lifetime" ? "selected" : ""}>locket_gold_lifetime (Lifetime)</option>
    </select>

    <label>Quyền sở hữu (Ownership Type)</label>
    <select name="ownershipType">
      <option value="PURCHASED" ${cfg.ownershipType === "PURCHASED" ? "selected" : ""}>PURCHASED (Đã mua trực tiếp)</option>
      <option value="FAMILY_SHARED" ${cfg.ownershipType === "FAMILY_SHARED" ? "selected" : ""}>FAMILY_SHARED (Chia sẻ gia đình)</option>
    </select>

    <label class="check-row">
      <input type="checkbox" name="notifyOnSync" value="1" ${cfg.notifyOnSync ? "checked" : ""} />
      <span>Bắn thông báo đẩy mỗi khi Locket đồng bộ Huy hiệu</span>
    </label>

    <button type="submit" class="btn-main">LƯU & ĐÓNG BĂNG NGAY</button>
  </form>

  <form method="GET" action="/setdate">
    <input type="hidden" name="reset" value="1" />
    <button type="submit" class="btn-reset">Khôi phục mặc định (25/05/2026)</button>
  </form>

  <div class="footer">
    Mẹo: Đặt dấu trang (Bookmark) trang này trên Safari để đổi ngày bất kỳ lúc nào.<br>
    Sau khi bấm Lưu, vuốt đóng hẳn ứng dụng Locket rồi mở lại.
  </div>
</div>
<script>
function setD(v) { document.getElementById('lockDateInput').value = v; }
</script>
</body>
</html>`;
}

if (typeof $response === "undefined") {
    // =========================================================================
    // PHA 1: HTTP-REQUEST (Web Control Panel + Chặn đứng Cache/ETag/Signature)
    // =========================================================================
    const url = $request.url || "";

    if (url.includes("/setdate") || url.includes("locket.gold")) {
        const q = parseQuery(url);
        let statusMsg = "";
        let current = loadConfig();

        if (q.reset === "1") {
            const resetCfg = { ...DEFAULT_CONFIG, preferWebOverArg: true };
            saveConfig(resetCfg);
            current = loadConfig();
            statusMsg = "Đã khôi phục mốc mặc định 25/05/2026!";
        } else if (q.save === "1" || q.d || q.lockDate) {
            const rawLock = q.lockDate || q.d || current.lockDate;
            const isoLock = toIsoDate(rawLock, DEFAULT_CONFIG.lockDate);
            const rawExp = q.expireDate || current.expireDate;
            const isoExp = toIsoDate(rawExp, DEFAULT_CONFIG.expireDate);

            const updated = {
                lockDate: isoLock.slice(0, 10),
                expireDate: isoExp.slice(0, 10),
                productId: q.productId || current.productId || DEFAULT_CONFIG.productId,
                ownershipType: q.ownershipType || current.ownershipType || "PURCHASED",
                periodType: "normal",
                store: "app_store",
                appVersion: "1.0",
                forceSandboxFalse: true,
                notifyOnSync: q.notifyOnSync === "1",
                preferWebOverArg: true
            };
            saveConfig(updated);
            current = loadConfig();
            statusMsg = `Đã khoá cứng ngày đăng ký: ${current.lockIso}`;

            if (typeof $notification !== "undefined" && typeof $notification.post === "function") {
                $notification.post("Locket Gold Hard Lock", "Đã cập nhật cấu hình mới", `Mốc ngày: ${current.lockIso}`);
            }
        }

        $done({
            response: {
                status: 200,
                headers: {
                    "Content-Type": "text/html; charset=utf-8",
                    "Cache-Control": "no-store, no-cache, must-revalidate"
                },
                body: renderWebPanel(current, statusMsg)
            }
        });
    } else {
        const headers = $request.headers || {};
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
        $done({ headers });
    }
} else {
    // =========================================================================
    // PHA 2: HTTP-RESPONSE (Đóng băng toàn diện Subscribers, Receipts, Offerings)
    // =========================================================================
    const cfg = loadConfig();
    const LOCK_DATE = cfg.lockIso;
    const EXPIRE_DATE = cfg.expireIso;
    const PRIMARY_PID = cfg.productId || "locket_1600_1y";

    let obj;
    try {
        obj = JSON.parse($response.body || "{}");
    } catch (e) {
        obj = {};
    }
    if (!obj || typeof obj !== "object") obj = {};

    const nowIso = new Date().toISOString();
    obj.request_date = nowIso;
    obj.request_date_ms = Date.now();

    if (!obj.subscriber || typeof obj.subscriber !== "object") {
        obj.subscriber = {};
    }

    obj.subscriber.first_seen = LOCK_DATE;
    obj.subscriber.last_seen = nowIso;
    obj.subscriber.original_application_version = cfg.appVersion || "1.0";
    obj.subscriber.original_purchase_date = LOCK_DATE;
    obj.subscriber.management_url = "https://apps.apple.com/account/subscriptions";

    if (!obj.subscriber.subscriptions || typeof obj.subscriber.subscriptions !== "object") {
        obj.subscriber.subscriptions = {};
    }
    if (!obj.subscriber.entitlements || typeof obj.subscriber.entitlements !== "object") {
        obj.subscriber.entitlements = {};
    }
    if (!obj.subscriber.non_subscriptions || typeof obj.subscriber.non_subscriptions !== "object") {
        obj.subscriber.non_subscriptions = {};
    }

    const buildSubEntry = () => ({
        auto_resume_date: null,
        billing_issues_detected_at: null,
        expires_date: EXPIRE_DATE,
        grace_period_expires_date: null,
        is_sandbox: false,
        original_purchase_date: LOCK_DATE,
        ownership_type: cfg.ownershipType || "PURCHASED",
        period_type: cfg.periodType || "normal",
        purchase_date: LOCK_DATE,
        refunded_at: null,
        store: cfg.store || "app_store",
        unsubscribe_detected_at: null
    });

    const buildEntEntry = (pid) => ({
        expires_date: EXPIRE_DATE,
        grace_period_expires_date: null,
        product_identifier: pid,
        purchase_date: LOCK_DATE
    });

    const allProductIds = [
        PRIMARY_PID,
        "locket_1600_1y",
        "locket_399_1m",
        "locket_199_1m",
        "locket_gold_1y",
        "locket_gold_1m",
        "locket_gold_lifetime"
    ];
    for (const pid of allProductIds) {
        obj.subscriber.subscriptions[pid] = buildSubEntry();
    }

    const allEntitlements = ["Gold", "gold", "pro", "Pro", "locket_gold", "premium", "plus"];
    for (const entKey of allEntitlements) {
        obj.subscriber.entitlements[entKey] = buildEntEntry(PRIMARY_PID);
    }

    const resHeaders = $response.headers || {};
    for (const k of Object.keys(resHeaders)) {
        const low = k.toLowerCase();
        if (
            low === "x-revenuecat-etag" ||
            low === "etag" ||
            low === "x-signature" ||
            low === "x-revenuecat-request-id"
        ) {
            delete resHeaders[k];
        }
    }
    resHeaders["Content-Type"] = "application/json; charset=utf-8";
    resHeaders["Cache-Control"] = "no-store";

    if (cfg.notifyOnSync && typeof $notification !== "undefined" && typeof $notification.post === "function") {
        $notification.post("Locket Gold Synced", "Huy hiệu đã khoá cứng", `Ngày đăng ký: ${LOCK_DATE.slice(0, 10)}`);
    }

    $done({
        status: 200,
        headers: resHeaders,
        body: JSON.stringify(obj)
    });
}

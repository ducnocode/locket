// file: locket_25_05_2026.js
// Runtime: Shadowrocket / Loon / Surge / Quantumult X
// Locket Gold Hard Lock V4 — True Apple iOS 18 ProMotion UI (Zero Icons, Sliding Segmented Pill, iOS Switch, Zero Exposed Credentials)

const ADMIN_API_URL = "https://locketgold.66ghz.com/admin.php";
const ADMIN_USER = "ngominhduc";
const ADMIN_PASS = "ducff123#";

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
const LOCAL_ADMIN_DB_KEY = "LOCKET_USERS_JSON_STORE_V4";
const ADMIN_SESSION_KEY = "LOCKET_ADMIN_SESSION_V4";
const BLOCK_NOTIFY_COOLDOWN_KEY = "LOCKET_BLOCK_PUSH_TS_V4";

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

function notifyShadowrocketBlocked(uid, reason, forceNow = false) {
    const now = Date.now();
    const lastTs = parseInt(Env.read(BLOCK_NOTIFY_COOLDOWN_KEY) || "0", 10);
    if (forceNow || (now - lastTs > 15000)) {
        Env.write(String(now), BLOCK_NOTIFY_COOLDOWN_KEY);
        Env.notify(
            "Locket Gold Control Panel",
            "Tài khoản đã bị Admin chặn",
            `User ID: ${uid || "Unknown"} — ${reason || "Quyền sử dụng Locket Gold đã bị thu hồi bởi Quản trị viên."}`
        );
    }
}

function getLocalUserStore() {
    try {
        const raw = Env.read(LOCAL_ADMIN_DB_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === "object" && parsed.users) return parsed;
        }
    } catch (e) {}
    return { users: {} };
}

function saveLocalUserStore(db) {
    Env.write(JSON.stringify(db), LOCAL_ADMIN_DB_KEY);
}

function registerUidIfNew(uid, extra = {}) {
    if (!uid || uid.includes("RCAnonymousID")) return null;
    const db = getLocalUserStore();
    const nowStr = new Date().toISOString().replace("T", " ").slice(0, 19);
    if (!db.users[uid]) {
        db.users[uid] = {
            uid: uid,
            status: "unactivated",
            note: extra.note || "",
            lock_date: extra.lockDate || DEFAULT_CONFIG.lockDate,
            product_id: extra.productId || DEFAULT_CONFIG.productId,
            requested_at: null,
            approved_at: null,
            updated_at: nowStr,
            reason: "Chưa kích hoạt. Vui lòng nhấn Kích hoạt trong bảng điều khiển và chờ Admin duyệt."
        };
        saveLocalUserStore(db);
    } else if (extra.touch) {
        db.users[uid].updated_at = nowStr;
        if (extra.lockDate) db.users[uid].lock_date = extra.lockDate;
        if (extra.productId) db.users[uid].product_id = extra.productId;
        saveLocalUserStore(db);
    }
    return db.users[uid];
}

function getAccessState(uid) {
    const cleanUid = uid || Env.read(USER_ID_CACHE_KEY) || "";
    const db = getLocalUserStore();
    const localUser = (cleanUid && db.users[cleanUid]) ? db.users[cleanUid] : null;

    let cachedRemote = null;
    try {
        const raw = Env.read(REMOTE_AUTH_CACHE_KEY);
        if (raw) cachedRemote = JSON.parse(raw);
    } catch (e) {}

    if (localUser) {
        if (localUser.status === "blocked") {
            return {
                approved: false,
                blocked: true,
                status: "blocked",
                force_lock_date: null,
                reason: localUser.reason || "Tài khoản của bạn đã bị Admin chặn quyền sử dụng."
            };
        }
        if (localUser.status === "approved") {
            return {
                approved: true,
                blocked: false,
                status: "approved",
                force_lock_date: localUser.force_lock_date || null,
                reason: ""
            };
        }
        if (localUser.status === "pending") {
            if (cachedRemote && cachedRemote.uid === cleanUid && cachedRemote.status === "approved") {
                localUser.status = "approved";
                saveLocalUserStore(db);
                return {
                    approved: true,
                    blocked: false,
                    status: "approved",
                    force_lock_date: cachedRemote.force_lock_date || null,
                    reason: ""
                };
            }
            return {
                approved: false,
                blocked: false,
                status: "pending",
                force_lock_date: null,
                reason: "Yêu cầu kích hoạt đã được gửi. Đang chờ Admin phê duyệt."
            };
        }
    }

    if (cachedRemote && (!cleanUid || cachedRemote.uid === cleanUid)) {
        if (cachedRemote.status === "blocked") {
            return {
                approved: false,
                blocked: true,
                status: "blocked",
                force_lock_date: null,
                reason: cachedRemote.reason || "Tài khoản của bạn đã bị Admin chặn quyền sử dụng."
            };
        }
        if (cachedRemote.status === "approved") {
            return {
                approved: true,
                blocked: false,
                status: "approved",
                force_lock_date: cachedRemote.force_lock_date || null,
                reason: ""
            };
        }
    }

    return {
        approved: false,
        blocked: false,
        status: localUser ? localUser.status : "unactivated",
        force_lock_date: null,
        reason: "Chưa kích hoạt. Hãy nhấn Kích hoạt trong bảng điều khiển để gửi User ID cho Admin duyệt."
    };
}

function syncWithAdminServer(uid, cfg, actionType, callback) {
    const cleanUid = uid || Env.read(USER_ID_CACHE_KEY) || "";
    if (cleanUid && !cleanUid.includes("RCAnonymousID")) {
        registerUidIfNew(cleanUid, { lockDate: cfg.lockDate, productId: cfg.productId });
    }

    if (!ADMIN_API_URL || ADMIN_API_URL.includes("your-domain.com") || !cleanUid || cleanUid.includes("RCAnonymousID")) {
        const st = getAccessState(cleanUid);
        if (st.status === "blocked") {
            notifyShadowrocketBlocked(cleanUid, st.reason, false);
        }
        if (callback) callback(st);
        return;
    }

    const syncUrl = ADMIN_API_URL + (ADMIN_API_URL.includes("?") ? "&" : "?") + "api=sync";
    const localDb = getLocalUserStore();
    const localEntry = localDb.users[cleanUid] || {};

    const payload = JSON.stringify({
        uid: cleanUid,
        action: actionType || "sync",
        local_status: localEntry.status || "unactivated",
        note: localEntry.note || "",
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
        if (!err && body) {
            try {
                const parsed = JSON.parse(body);
                if (parsed && typeof parsed === "object" && parsed.ok) {
                    const db = getLocalUserStore();
                    if (parsed.users && typeof parsed.users === "object") {
                        db.users = { ...db.users, ...parsed.users };
                    }
                    if (parsed.status && db.users[cleanUid]) {
                        db.users[cleanUid].status = parsed.status;
                        if (parsed.force_lock_date) db.users[cleanUid].force_lock_date = parsed.force_lock_date;
                        if (parsed.reason) db.users[cleanUid].reason = parsed.reason;
                    }
                    saveLocalUserStore(db);

                    const remoteStateObj = {
                        uid: cleanUid,
                        approved: parsed.status === "approved",
                        blocked: parsed.status === "blocked",
                        status: parsed.status || "unactivated",
                        force_lock_date: parsed.force_lock_date || null,
                        reason: parsed.reason || ""
                    };
                    Env.write(JSON.stringify(remoteStateObj), REMOTE_AUTH_CACHE_KEY);
                }
            } catch (e) {}
        }

        const finalState = getAccessState(cleanUid);
        if (finalState.status === "blocked") {
            notifyShadowrocketBlocked(cleanUid, finalState.reason, false);
        }
        if (callback) callback(finalState);
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
    const access = getAccessState(uid);
    if (access && access.force_lock_date) {
        cfg.lockDate = access.force_lock_date.slice(0, 10);
    }

    const isApproved = access.status === "approved";
    const isExplicitlyBlocked = access.status === "blocked";

    cfg.approvalStatus = access.status || "unactivated";
    cfg.isApprovedByAdmin = isApproved;
    cfg.isBlockedByAdmin = isExplicitlyBlocked;
    cfg.alwaysForceBadge = isApproved && !isExplicitlyBlocked;
    cfg.blockReason = access.reason || "Tài khoản chưa được kích hoạt hoặc đã bị Admin chặn.";
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
    if (!foundUid && typeof bodyStr === "string" && bodyStr.includes("{")) {
        try {
            const parsed = JSON.parse(bodyStr);
            const candidate =
                (parsed.subscriber && parsed.subscriber.original_app_user_id) ||
                parsed.app_user_id ||
                (parsed.data && (parsed.data.uid || parsed.data.user_id)) ||
                parsed.uid ||
                parsed.localId;
            if (candidate && typeof candidate === "string" && !candidate.includes("RCAnonymousID")) {
                foundUid = candidate;
                Env.write(foundUid, USER_ID_CACHE_KEY);
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
            }
        }
    }
    const finalUid = foundUid || Env.read(USER_ID_CACHE_KEY) || "$RCAnonymousID:locket_hard_lock";
    if (finalUid && !finalUid.includes("RCAnonymousID")) {
        registerUidIfNew(finalUid);
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

function buildRevokedPayload(existingObj, resolvedUserId, statusReason) {
    const nowIso = new Date().toISOString();
    const nowMs = Date.now();
    const obj = (existingObj && typeof existingObj === "object") ? existingObj : {};
    obj.Attention = statusReason || "Access Restricted by Admin Gatekeeper";
    obj.request_date = nowIso;
    obj.request_date_ms = nowMs;
    obj.subscriber = {
        original_app_user_id: resolvedUserId || "unapproved_user",
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
    if (!cfg.isApprovedByAdmin || cfg.isBlockedByAdmin) {
        if (cfg.isBlockedByAdmin) {
            notifyShadowrocketBlocked(resolvedUserId, cfg.blockReason, false);
        }
        return buildRevokedPayload(existingObj, resolvedUserId, cfg.blockReason);
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
    if (!cfg.isApprovedByAdmin || cfg.isBlockedByAdmin) {
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

// Giao diện Apple iOS 18 ProMotion (Sliding Pill Segmented Control, Native iOS Switch, Inset Grouped Cards, Không lộ tên tài khoản Admin)
function renderWebPanel(cfg, statusMsg, initialView = "user") {
    const cachedUid = Env.read(USER_ID_CACHE_KEY) || "";
    const hasValidUid = cachedUid && !cachedUid.includes("RCAnonymousID");
    const displayUid = hasValidUid ? cachedUid : "Chưa ghi nhận (Mở Locket 1 lần)";
    const isAdminAuthenticated = Env.read(ADMIN_SESSION_KEY) === "1";

    const db = getLocalUserStore();
    const allUsers = Object.values(db.users || {}).sort((a, b) => {
        const priority = { pending: 0, approved: 1, unactivated: 2, blocked: 3 };
        return (priority[a.status] ?? 9) - (priority[b.status] ?? 9);
    });

    const countPending = allUsers.filter(u => u.status === "pending").length;
    const countApproved = allUsers.filter(u => u.status === "approved").length;
    const countBlocked = allUsers.filter(u => u.status === "blocked").length;

    let badgeStateText = "CHỜ KÍCH HOẠT";
    let badgeStateColor = "#8e8e93";
    if (cfg.approvalStatus === "approved") {
        badgeStateText = "ALWAYS ON (NEVER OFF)";
        badgeStateColor = "#ff9f0a";
    } else if (cfg.approvalStatus === "pending") {
        badgeStateText = "ĐANG CHỜ ADMIN DUYỆT";
        badgeStateColor = "#ff9f0a";
    } else if (cfg.approvalStatus === "blocked") {
        badgeStateText = "ĐÃ BỊ ADMIN CHẶN";
        badgeStateColor = "#ff453a";
    }

    let adminRowsHtml = "";
    if (allUsers.length === 0) {
        adminRowsHtml = `<div class="empty-box">Chưa có yêu cầu kích hoạt nào trong bộ nhớ.</div>`;
    } else {
        for (const item of allUsers) {
            const st = item.status || "unactivated";
            let pillClass = "pill-gray";
            let pillLabel = "Chưa gửi";
            if (st === "pending") { pillClass = "pill-amber"; pillLabel = "Chờ duyệt"; }
            else if (st === "approved") { pillClass = "pill-green"; pillLabel = "Đã duyệt"; }
            else if (st === "blocked") { pillClass = "pill-red"; pillLabel = "Đã chặn"; }

            adminRowsHtml += `
            <div class="u-card">
              <div class="u-head">
                <span class="u-id">${escapeHtml(item.uid)}</span>
                <span class="u-pill ${pillClass}">${pillLabel}</span>
              </div>
              <div class="u-sub">
                <span>${escapeHtml(item.note || "Thiết bị người dùng")}</span>
                <span>${escapeHtml(item.force_lock_date || item.lock_date || "2026-05-25")}</span>
              </div>
              <div class="u-btns">
                <a class="u-btn b-ok" href="/setdate?view=admin&admin_action=approve&target_uid=${encodeURIComponent(item.uid)}">Phê duyệt</a>
                <a class="u-btn b-blk" href="/setdate?view=admin&admin_action=block&target_uid=${encodeURIComponent(item.uid)}">Chặn</a>
                <a class="u-btn b-del" href="/setdate?view=admin&admin_action=delete&target_uid=${encodeURIComponent(item.uid)}">Xoá</a>
              </div>
            </div>`;
        }
    }

    const startOnAdmin = initialView === "admin";

    return `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
<title>Locket Gold Control Panel</title>
<style>
  :root {
    --bg: #000000;
    --card: rgba(28, 28, 30, 0.72);
    --card-solid: #1c1c1e;
    --input-bg: rgba(44, 44, 46, 0.65);
    --sep: rgba(255, 255, 255, 0.08);
    --border: rgba(255, 255, 255, 0.07);
    --text: #ffffff;
    --sub: #8e8e93;
    --gold: #ff9f0a;
    --gold-grad: linear-gradient(180deg, #ffb340 0%, #ff9f0a 100%);
    --green: #30d158;
    --red: #ff453a;
    --spring: cubic-bezier(0.32, 0.72, 0, 1);
  }
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }
  body {
    margin: 0;
    padding: 24px 16px 64px;
    background: var(--bg);
    background-image:
      radial-gradient(ellipse 80% 35% at 50% -8%, rgba(255, 159, 10, 0.16), transparent 70%);
    color: var(--text);
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif;
    letter-spacing: -0.015em;
    overflow-x: hidden;
  }
  .shell {
    max-width: 430px;
    margin: 0 auto;
  }
  .header {
    text-align: center;
    margin-bottom: 20px;
  }
  .badge-cap {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 999px;
    background: rgba(255, 159, 10, 0.12);
    border: 0.5px solid rgba(255, 159, 10, 0.35);
    color: var(--gold);
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  h1 {
    font-size: 26px;
    font-weight: 700;
    letter-spacing: -0.03em;
    margin: 0 0 6px;
  }
  .lead {
    font-size: 13px;
    line-height: 1.45;
    color: var(--sub);
    max-width: 310px;
    margin: 0 auto;
  }
  /* Apple iOS Sliding Segmented Control */
  .seg-wrap {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: rgba(118, 118, 128, 0.24);
    border-radius: 10px;
    padding: 2px;
    margin-bottom: 18px;
    user-select: none;
  }
  .seg-glider {
    position: absolute;
    top: 2px;
    bottom: 2px;
    left: 2px;
    width: calc(50% - 2px);
    background: #636366;
    border-radius: 8px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12), 0 3px 1px rgba(0, 0, 0, 0.04);
    transition: transform 0.35s var(--spring);
    z-index: 1;
  }
  .seg-wrap.admin-active .seg-glider {
    transform: translateX(100%);
  }
  .seg-btn {
    position: relative;
    z-index: 2;
    border: none;
    background: transparent;
    color: rgba(255, 255, 255, 0.65);
    padding: 7px 10px;
    font-size: 13px;
    font-weight: 600;
    font-family: inherit;
    cursor: pointer;
    transition: color 0.25s ease;
  }
  .seg-btn.active {
    color: #ffffff;
  }
  /* Toast Alert */
  .toast {
    background: rgba(48, 209, 88, 0.14);
    border: 0.5px solid rgba(48, 209, 88, 0.4);
    color: #4cd964;
    padding: 12px 15px;
    border-radius: 14px;
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 16px;
    display: ${statusMsg ? "block" : "none"};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
  .toast.danger {
    background: rgba(255, 69, 58, 0.14);
    border-color: rgba(255, 69, 58, 0.4);
    color: #ff6961;
  }
  /* Views */
  .view-pane {
    display: none;
    animation: fadeSlide 0.32s var(--spring);
  }
  .view-pane.active {
    display: block;
  }
  @keyframes fadeSlide {
    from { opacity: 0; transform: translateY(6px) scale(0.992); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }
  /* Apple Inset Grouped Section */
  .sec-title {
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--sub);
    margin: 0 0 7px 14px;
  }
  .ios-group {
    background: var(--card);
    border: 0.5px solid var(--border);
    border-radius: 16px;
    padding: 0 16px;
    margin-bottom: 18px;
    backdrop-filter: blur(40px) saturate(180%);
    -webkit-backdrop-filter: blur(40px) saturate(180%);
  }
  .ios-group.padded {
    padding: 16px;
  }
  .ios-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 46px;
    padding: 10px 0;
    border-bottom: 0.5px solid var(--sep);
    font-size: 14px;
    gap: 12px;
  }
  .ios-row:last-child {
    border-bottom: none;
  }
  .r-label {
    color: var(--text);
    font-weight: 400;
    flex-shrink: 0;
  }
  .r-val {
    color: var(--sub);
    font-family: "SF Mono", ui-monospace, SFMono-Regular, monospace;
    font-size: 12.5px;
    font-weight: 500;
    text-align: right;
    word-break: break-all;
  }
  .r-val.gold {
    color: var(--gold);
    font-weight: 600;
  }
  /* Form Controls inside iOS Cards */
  .f-label {
    display: block;
    font-size: 12.5px;
    font-weight: 500;
    color: var(--sub);
    margin: 14px 0 6px;
  }
  .f-label:first-child {
    margin-top: 0;
  }
  .ios-input,
  .ios-select {
    width: 100%;
    height: 44px;
    padding: 0 14px;
    border-radius: 11px;
    border: 0.5px solid rgba(255, 255, 255, 0.1);
    background: var(--input-bg);
    color: var(--text);
    font-size: 15px;
    font-family: inherit;
    outline: none;
    transition: border-color 0.2s ease, background 0.2s ease;
    appearance: none;
    -webkit-appearance: none;
  }
  .ios-input::placeholder {
    color: rgba(235, 235, 245, 0.3);
  }
  .ios-input:focus,
  .ios-select:focus {
    border-color: var(--gold);
    background: rgba(58, 58, 60, 0.75);
  }
  .preset-bar {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 7px;
    margin-top: 8px;
  }
  .preset-pill {
    background: rgba(255, 255, 255, 0.06);
    border: 0.5px solid rgba(255, 255, 255, 0.08);
    color: #ebebf5;
    border-radius: 8px;
    padding: 7px 0;
    font-size: 11.5px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    transition: transform 0.12s ease, background 0.15s ease;
  }
  .preset-pill:active {
    background: var(--gold);
    color: #000;
    transform: scale(0.96);
  }
  /* Native iOS Switch */
  .switch-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    padding-top: 14px;
    border-top: 0.5px solid var(--sep);
    font-size: 14px;
    color: var(--text);
  }
  .ios-switch {
    position: relative;
    width: 51px;
    height: 31px;
    flex-shrink: 0;
  }
  .ios-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: rgba(120, 120, 128, 0.32);
    transition: 0.3s var(--spring);
    border-radius: 31px;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 27px;
    width: 27px;
    left: 2px;
    bottom: 2px;
    background-color: #ffffff;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
    transition: 0.3s var(--spring);
    border-radius: 50%;
  }
  .ios-switch input:checked + .slider {
    background-color: var(--gold);
  }
  .ios-switch input:checked + .slider:before {
    transform: translateX(20px);
  }
  /* Buttons */
  .btn-gold {
    display: block;
    width: 100%;
    height: 48px;
    line-height: 48px;
    margin-top: 18px;
    border-radius: 13px;
    border: none;
    background: var(--gold-grad);
    color: #000000;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: -0.01em;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.12s ease, opacity 0.15s ease;
  }
  .btn-gold:active {
    transform: scale(0.985);
    opacity: 0.88;
  }
  .btn-ghost {
    display: block;
    width: 100%;
    height: 44px;
    line-height: 44px;
    margin-top: 10px;
    border-radius: 12px;
    border: 0.5px solid var(--border);
    background: rgba(28, 28, 30, 0.5);
    color: var(--sub);
    font-size: 13.5px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
  }
  /* Admin Metrics & Cards */
  .kpi-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-bottom: 16px;
  }
  .kpi-cell {
    background: rgba(0, 0, 0, 0.35);
    border: 0.5px solid var(--sep);
    border-radius: 12px;
    padding: 12px 6px;
    text-align: center;
  }
  .kpi-num {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.02em;
  }
  .kpi-txt {
    font-size: 11px;
    color: var(--sub);
    margin-top: 2px;
  }
  .u-card {
    background: rgba(0, 0, 0, 0.32);
    border: 0.5px solid var(--sep);
    border-radius: 13px;
    padding: 13px;
    margin-bottom: 10px;
  }
  .u-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    margin-bottom: 6px;
  }
  .u-id {
    font-family: "SF Mono", ui-monospace, monospace;
    font-size: 12.5px;
    font-weight: 600;
    color: var(--gold);
    word-break: break-all;
  }
  .u-pill {
    font-size: 10.5px;
    font-weight: 600;
    padding: 3px 9px;
    border-radius: 999px;
    flex-shrink: 0;
  }
  .pill-green { background: rgba(48, 209, 88, 0.16); color: var(--green); }
  .pill-amber { background: rgba(255, 159, 10, 0.16); color: var(--gold); }
  .pill-red { background: rgba(255, 69, 58, 0.16); color: var(--red); }
  .pill-gray { background: rgba(142, 142, 147, 0.18); color: var(--sub); }
  .u-sub {
    display: flex;
    justify-content: space-between;
    font-size: 11.5px;
    color: var(--sub);
    margin-bottom: 11px;
  }
  .u-btns {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 7px;
  }
  .u-btn {
    text-align: center;
    padding: 7px 0;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;
  }
  .b-ok { background: rgba(48, 209, 88, 0.15); color: var(--green); }
  .b-blk { background: rgba(255, 159, 10, 0.15); color: var(--gold); }
  .b-del { background: rgba(255, 69, 58, 0.15); color: var(--red); }
  .empty-box {
    text-align: center;
    padding: 24px 10px;
    font-size: 13px;
    color: var(--sub);
  }
  .foot {
    text-align: center;
    font-size: 11.5px;
    color: #48484a;
    margin-top: 24px;
  }
</style>
</head>
<body>
<div class="shell">
  <div class="header">
    <div class="badge-cap">FORCE BADGE V4 • DUCNOCODE/LOCKET</div>
    <h1>Locket Gold Control Panel</h1>
    <div class="lead">Khoá cứng huy hiệu luôn bật 24/7 & cố định ngày đăng ký 25/05/2026</div>
  </div>

  <div id="segBar" class="seg-wrap ${startOnAdmin ? "admin-active" : ""}">
    <div class="seg-glider"></div>
    <button type="button" id="btnTabUser" class="seg-btn ${!startOnAdmin ? "active" : ""}" onclick="switchView('user')">Bảng Điều Khiển</button>
    <button type="button" id="btnTabAdmin" class="seg-btn ${startOnAdmin ? "active" : ""}" onclick="switchView('admin')">Quản Trị Viên${countPending > 0 ? ` (${countPending})` : ""}</button>
  </div>

  <div class="toast ${cfg.isBlockedByAdmin ? "danger" : ""}">${escapeHtml(statusMsg || (cfg.isBlockedByAdmin ? cfg.blockReason : ""))}</div>

  <!-- VIEW 1: USER CONTROL PANEL -->
  <div id="paneUser" class="view-pane ${!startOnAdmin ? "active" : ""}">
    <div class="sec-title">Trạng thái thiết bị</div>
    <div class="ios-group">
      <div class="ios-row">
        <span class="r-label">Trạng thái Huy hiệu</span>
        <span class="r-val" style="color:${badgeStateColor};font-weight:600;">${badgeStateText}</span>
      </div>
      <div class="ios-row">
        <span class="r-label">Giá & Giao dịch</span>
        <span class="r-val gold">399.000 VND (#${escapeHtml(cfg.storeTransactionId)})</span>
      </div>
      <div class="ios-row">
        <span class="r-label">Mốc Đăng Ký (ISO)</span>
        <span class="r-val gold">${escapeHtml(cfg.lockIso)}</span>
      </div>
      <div class="ios-row">
        <span class="r-label">Ngày Hết Hạn</span>
        <span class="r-val gold">${escapeHtml(cfg.expireIso)}</span>
      </div>
      <div class="ios-row">
        <span class="r-label">Mã Gói (Product ID)</span>
        <span class="r-val gold">${escapeHtml(cfg.productId)}</span>
      </div>
      <div class="ios-row">
        <span class="r-label">User ID Đã Bắt</span>
        <span class="r-val gold">${escapeHtml(displayUid)}</span>
      </div>
    </div>

    ${!cfg.isApprovedByAdmin ? `
      <div class="sec-title">Kích hoạt quyền sử dụng</div>
      <form class="ios-group padded" method="GET" action="/setdate">
        <input type="hidden" name="request_activate" value="1" />
        <label class="f-label">Ghi chú gửi Quản trị viên phê duyệt</label>
        <input type="text" class="ios-input" name="note" placeholder="Nhập tên hoặc ghi chú thiết bị..." autocomplete="off" />
        <button type="submit" class="btn-gold">Kích Hoạt & Gửi Admin Duyệt</button>
        <a class="btn-ghost" href="/setdate?check_status=1">Kiểm tra trạng thái phê duyệt</a>
      </form>
    ` : ""}

    <div class="sec-title">Tuỳ chỉnh thông số gói Gold</div>
    <form class="ios-group padded" method="GET" action="/setdate">
      <input type="hidden" name="save" value="1" />
      <label class="f-label">Ngày đăng ký hiển thị (DD/MM/YYYY hoặc YYYY-MM-DD)</label>
      <input type="text" class="ios-input" id="lockDateInput" name="lockDate" value="${escapeHtml(cfg.lockDate)}" placeholder="2026-05-25" autocomplete="off" />
      <div class="preset-bar">
        <button type="button" class="preset-pill" onclick="setD('25/05/2026')">25/05/2026</button>
        <button type="button" class="preset-pill" onclick="setD('26/05/2010')">26/05/2010</button>
        <button type="button" class="preset-pill" onclick="setD('01/01/2022')">01/01/2022</button>
        <button type="button" class="preset-pill" onclick="setD('01/01/2020')">01/01/2020</button>
      </div>

      <label class="f-label">Ngày hết hạn gói (Mặc định vĩnh viễn 2099)</label>
      <input type="text" class="ios-input" name="expireDate" value="${escapeHtml(cfg.expireDate)}" placeholder="2099-12-31" autocomplete="off" />

      <label class="f-label">Mã gói đăng ký (Product Identifier)</label>
      <select class="ios-select" name="productId">
        <option value="locket_1600_1y" ${cfg.productId === "locket_1600_1y" ? "selected" : ""}>locket_1600_1y (Gold Yearly - 399.000đ)</option>
        <option value="locket_399_1m" ${cfg.productId === "locket_399_1m" ? "selected" : ""}>locket_399_1m (Gold Monthly)</option>
        <option value="locket_199_1m" ${cfg.productId === "locket_199_1m" ? "selected" : ""}>locket_199_1m (Gold Promo)</option>
      </select>

      <label class="f-label">Quyền sở hữu (Ownership Type)</label>
      <select class="ios-select" name="ownershipType">
        <option value="PURCHASED" ${cfg.ownershipType === "PURCHASED" ? "selected" : ""}>PURCHASED (Đã mua trực tiếp)</option>
        <option value="FAMILY_SHARED" ${cfg.ownershipType === "FAMILY_SHARED" ? "selected" : ""}>FAMILY_SHARED (Chia sẻ gia đình)</option>
      </select>

      <div class="switch-row">
        <span>Thông báo đẩy khi đồng bộ Huy hiệu</span>
        <label class="ios-switch">
          <input type="checkbox" name="notifyOnSync" value="1" ${cfg.notifyOnSync ? "checked" : ""} />
          <span class="slider"></span>
        </label>
      </div>

      <button type="submit" class="btn-gold">Lưu & Khoá Cứng Huy Hiệu 24/7</button>
    </form>

    <form method="GET" action="/setdate">
      <input type="hidden" name="reset" value="1" />
      <button type="submit" class="btn-ghost">Khôi phục mặc định (25/05/2026)</button>
    </form>
  </div>

  <!-- VIEW 2: ADMIN GATEKEEPER PANEL -->
  <div id="paneAdmin" class="view-pane ${startOnAdmin ? "active" : ""}">
    ${!isAdminAuthenticated ? `
      <div class="sec-title">Xác thực quyền Quản trị</div>
      <form class="ios-group padded" method="GET" action="/setdate" autocomplete="off">
        <input type="hidden" name="view" value="admin" />
        <input type="hidden" name="admin_login" value="1" />
        <label class="f-label">Tài khoản Quản trị viên</label>
        <input type="text" class="ios-input" name="user" value="" placeholder="Nhập tên tài khoản" autocomplete="off" autocapitalize="none" spellcheck="false" required />
        <label class="f-label">Mật khẩu bảo mật</label>
        <input type="password" class="ios-input" name="pass" value="" placeholder="Nhập mật khẩu" autocomplete="new-password" required />
        <button type="submit" class="btn-gold">Đăng Nhập Quản Trị</button>
      </form>
    ` : `
      <div class="sec-title">Bảng điều hành Quản trị viên</div>
      <div class="ios-group padded">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
          <div>
            <div style="font-size:15px;font-weight:600;">Quản Lý Phê Duyệt Thiết Bị</div>
            <div style="font-size:12px;color:var(--sub);">Phiên quản trị đang hoạt động</div>
          </div>
          <a href="/setdate?admin_logout=1" style="font-size:13px;font-weight:500;color:var(--red);text-decoration:none;">Đăng xuất</a>
        </div>

        <div class="kpi-row">
          <div class="kpi-cell">
            <div class="kpi-num" style="color:var(--gold)">${countPending}</div>
            <div class="kpi-txt">Chờ duyệt</div>
          </div>
          <div class="kpi-cell">
            <div class="kpi-num" style="color:var(--green)">${countApproved}</div>
            <div class="kpi-txt">Đã duyệt</div>
          </div>
          <div class="kpi-cell">
            <div class="kpi-num" style="color:var(--red)">${countBlocked}</div>
            <div class="kpi-txt">Đã chặn</div>
          </div>
        </div>

        <form method="GET" action="/setdate" style="margin-bottom:16px;padding-bottom:16px;border-bottom:0.5px solid var(--sep);">
          <input type="hidden" name="view" value="admin" />
          <input type="hidden" name="admin_action" value="add_manual" />
          <label class="f-label">Duyệt nhanh User ID</label>
          <div style="display:flex;gap:8px;">
            <input type="text" class="ios-input" name="target_uid" value="${escapeHtml(hasValidUid ? cachedUid : "")}" placeholder="Dán User ID cần duyệt..." autocomplete="off" required />
            <button type="submit" style="background:var(--gold-grad);color:#000;border:none;border-radius:11px;padding:0 18px;font-size:13.5px;font-weight:600;cursor:pointer;flex-shrink:0;">Duyệt</button>
          </div>
        </form>

        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <span style="font-size:12.5px;font-weight:500;color:var(--sub);">Danh sách người dùng (${allUsers.length})</span>
          <a href="/setdate?view=admin&admin_action=approve_all" style="font-size:12.5px;font-weight:500;color:var(--green);text-decoration:none;">Duyệt tất cả</a>
        </div>

        ${adminRowsHtml}
      </div>
    `}
  </div>

  <div class="foot">Locket Gold Control Panel • Apple ProMotion Interface</div>
</div>
<script>
  function setD(v) {
    var el = document.getElementById('lockDateInput');
    if (el) el.value = v;
  }
  function switchView(target) {
    var bar = document.getElementById('segBar');
    var btnU = document.getElementById('btnTabUser');
    var btnA = document.getElementById('btnTabAdmin');
    var paneU = document.getElementById('paneUser');
    var paneA = document.getElementById('paneAdmin');
    if (target === 'admin') {
      bar.classList.add('admin-active');
      btnU.classList.remove('active');
      btnA.classList.add('active');
      paneU.classList.remove('active');
      paneA.classList.add('active');
    } else {
      bar.classList.remove('admin-active');
      btnA.classList.remove('active');
      btnU.classList.add('active');
      paneA.classList.remove('active');
      paneU.classList.add('active');
    }
  }
</script>
</body>
</html>`;
}

function pushAdminCommandToRemote(action, targetUid, callback) {
    if (!ADMIN_API_URL || ADMIN_API_URL.includes("your-domain.com") || !targetUid) {
        if (callback) callback();
        return;
    }
    const apiUrl = ADMIN_API_URL + (ADMIN_API_URL.includes("?") ? "&" : "?") + "api=admin_cmd";
    Env.httpPost({
        url: apiUrl,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            admin_user: ADMIN_USER,
            admin_pass: ADMIN_PASS,
            action: action,
            target_uid: targetUid,
            ts: Date.now()
        }),
        timeout: 4
    }, () => {
        if (callback) callback();
    });
}

function runCronBadgeSync() {
    const cfg = loadConfig();
    const uid = Env.read(USER_ID_CACHE_KEY);
    const rcKey = Env.read(RC_API_KEY_CACHE_KEY);
    const bearer = Env.read(AUTH_TOKEN_CACHE_KEY);
    const nowMs = Date.now();

    syncWithAdminServer(uid, cfg, "sync", (remoteState) => {
        if (remoteState && remoteState.blocked) {
            notifyShadowrocketBlocked(uid, remoteState.reason, false);
            Env.done();
            return;
        }
        if (!remoteState || !remoteState.approved) {
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
                    Env.notify("Locket Gold Control Panel", "Đồng bộ huy hiệu hoàn tất", `User ID: ${uid || "Auto"}`);
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
            }, () => finishOne());
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
    const uid = extractAndCacheCredentials(url, headers, $request.body);
    const currentCfg = loadConfig();

    if (url.includes("/setdate") || url.includes("locket.gold")) {
        const q = parseQuery(url);
        // Mặc định luôn mở ở Bảng Điều Khiển (user), chỉ mở tab Admin khi đang thao tác trong Admin
        let activeView = (q.view === "admin" || q.admin_login === "1" || q.admin_action) ? "admin" : "user";
        let statusMsg = "";
        const nowStr = new Date().toISOString().replace("T", " ").slice(0, 19);

        if (q.admin_login === "1") {
            activeView = "admin";
            if (q.user === ADMIN_USER && q.pass === ADMIN_PASS) {
                Env.write("1", ADMIN_SESSION_KEY);
                statusMsg = "Đăng nhập Quản trị viên thành công.";
            } else {
                statusMsg = "Tài khoản hoặc mật khẩu không chính xác.";
            }
        } else if (q.admin_logout === "1") {
            // Khi đăng xuất thì quay về Bảng Điều Khiển chính luôn, không treo ở màn hình login
            activeView = "user";
            Env.write("0", ADMIN_SESSION_KEY);
            statusMsg = "";
        }

        let syncAction = "sync";
        if (q.request_activate === "1") {
            const targetUid = (uid && !uid.includes("RCAnonymousID")) ? uid : (Env.read(USER_ID_CACHE_KEY) || "");
            if (!targetUid || targetUid.includes("RCAnonymousID")) {
                statusMsg = "Chưa ghi nhận được User ID. Hãy mở ứng dụng Locket 1 lần rồi quay lại.";
            } else {
                const db = getLocalUserStore();
                const prevStatus = db.users[targetUid] ? db.users[targetUid].status : "unactivated";
                db.users[targetUid] = {
                    ...(db.users[targetUid] || {}),
                    uid: targetUid,
                    status: prevStatus === "approved" ? "approved" : "pending",
                    note: q.note || (db.users[targetUid] && db.users[targetUid].note) || "Thiết bị đăng ký mới",
                    requested_at: nowStr,
                    updated_at: nowStr,
                    lock_date: currentCfg.lockDate,
                    product_id: currentCfg.productId
                };
                saveLocalUserStore(db);
                syncAction = "request_activation";
                statusMsg = `Đã gửi yêu cầu kích hoạt cho ID ${targetUid}. Vui lòng chờ Admin duyệt.`;
                Env.notify("Locket Gold Control Panel", "Đã gửi yêu cầu kích hoạt", `User ID: ${targetUid} đang chờ Admin phê duyệt.`);
            }
        }

        if (q.admin_action && Env.read(ADMIN_SESSION_KEY) === "1") {
            activeView = "admin";
            const db = getLocalUserStore();
            const tUid = (q.target_uid || "").trim();

            if (q.admin_action === "approve_all") {
                for (const k of Object.keys(db.users)) {
                    db.users[k].status = "approved";
                    db.users[k].approved_at = nowStr;
                    db.users[k].updated_at = nowStr;
                    db.users[k].reason = "";
                }
                saveLocalUserStore(db);
                statusMsg = "Đã phê duyệt toàn bộ User ID trong danh sách.";
            } else if (tUid) {
                if (q.admin_action === "approve" || q.admin_action === "add_manual") {
                    db.users[tUid] = {
                        ...(db.users[tUid] || {}),
                        uid: tUid,
                        status: "approved",
                        approved_at: nowStr,
                        updated_at: nowStr,
                        lock_date: currentCfg.lockDate,
                        product_id: currentCfg.productId,
                        reason: ""
                    };
                    saveLocalUserStore(db);
                    statusMsg = `Đã phê duyệt quyền sử dụng cho User ID: ${tUid}`;
                    Env.notify("Locket Gold Admin", "Đã duyệt người dùng", `User ID ${tUid} đã được kích hoạt Gold 24/7.`);
                } else if (q.admin_action === "block") {
                    const blockReasonText = "Tài khoản đã bị Admin chặn quyền sử dụng.";
                    db.users[tUid] = {
                        ...(db.users[tUid] || {}),
                        uid: tUid,
                        status: "blocked",
                        updated_at: nowStr,
                        reason: blockReasonText
                    };
                    saveLocalUserStore(db);
                    statusMsg = `Đã chặn quyền sử dụng của User ID: ${tUid}`;
                    notifyShadowrocketBlocked(tUid, blockReasonText, true);
                } else if (q.admin_action === "delete") {
                    delete db.users[tUid];
                    saveLocalUserStore(db);
                    statusMsg = `Đã xoá User ID ${tUid} khỏi danh sách.`;
                }
            }
        }

        const renderNow = () => {
            syncWithAdminServer(uid, currentCfg, syncAction, () => {
                let current = loadConfig();
                if (!current.isBlockedByAdmin) {
                    if (q.reset === "1") {
                        const resetCfg = { ...DEFAULT_CONFIG, preferWebOverArg: true };
                        saveConfig(resetCfg);
                        current = loadConfig();
                        statusMsg = "Đã khôi phục cấu hình mặc định 25/05/2026.";
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
                        statusMsg = `Đã lưu cấu hình mốc đăng ký: ${current.lockIso}`;
                    }
                }

                Env.done({
                    response: {
                        status: 200,
                        headers: {
                            "Content-Type": "text/html; charset=utf-8",
                            "Cache-Control": "no-store, no-cache, must-revalidate"
                        },
                        body: renderWebPanel(current, statusMsg, activeView)
                    }
                });
            });
        };

        if (q.admin_action && q.target_uid && Env.read(ADMIN_SESSION_KEY) === "1") {
            pushAdminCommandToRemote(q.admin_action, q.target_uid.trim(), renderNow);
        } else {
            renderNow();
        }
    } else {
        if (currentCfg.isBlockedByAdmin) {
            notifyShadowrocketBlocked(uid, currentCfg.blockReason, false);
        }

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

                if (!currentCfg.isApprovedByAdmin || currentCfg.isBlockedByAdmin) {
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
    const resolvedUserId = extractAndCacheCredentials(reqUrl, reqHeaders, $response.body);
    const initialCfg = loadConfig();

    syncWithAdminServer(resolvedUserId, initialCfg, "sync", () => {
        const cfg = loadConfig();
        if (cfg.isBlockedByAdmin) {
            notifyShadowrocketBlocked(resolvedUserId, cfg.blockReason, false);
        }

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

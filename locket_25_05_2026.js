// file: locket_25_05_2026.js
// Locket Gold Hard Lock V4 — Instant 0ms Response (Never Lose Badge on Startup) + Realtime Block Alert (Keep Gold) + Apple Bento UI

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
    notifyOnSync: false
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
            note: extra.note || "Đã lên Locket Gold",
            lock_date: extra.lockDate || DEFAULT_CONFIG.lockDate,
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
        if (extra.productId) db.users[uid].product_id = extra.productId;
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
            reason: isBlocked ? (remoteCache.reason || "Tài khoản đang bị Admin chặn.") : ""
        };
    }

    return {
        uid: cleanUid,
        approved: true,
        blocked: false,
        status: "approved",
        force_lock_date: null,
        reason: ""
    };
}

function syncRealtimeWithServer(uid, cfg, actionName, callback) {
    const cleanUid = uid || Env.read(USER_ID_CACHE_KEY) || "";
    if (cleanUid && !cleanUid.includes("RCAnonymousID")) {
        upsertUserRecord(cleanUid, { lockDate: cfg.lockDate, productId: cfg.productId });
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
            action: actionName || "sync",
            status: userRec.status || "approved",
            note: userRec.note || "",
            lockDate: cfg.lockDate,
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

    cfg.alwaysForceBadge = true;
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
                parsed.app_user_id ||
                uData.uid ||
                uData.user_uid ||
                uData.user_id ||
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
    const PRIMARY_PID = cfg.productId || "locket_1600_1y";
    const nowIso = new Date().toISOString();
    const nowMs = Date.now();

    const obj = (existingObj && typeof existingObj === "object") ? existingObj : {};
    obj.Attention = cfg.isBlockedByAdmin
        ? `LOCKET GOLD KEPT — ${cfg.blockReason}`
        : "Locket Gold Hard Lock 25/05/2026 Activated";
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
        "show_gold_badge": "true",
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
            node.fields.gold_subscription_since = { timestampValue: cfg.lockIso };
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
    const displayUid = hasValidUid ? cachedUid : "Chưa ghi nhận (Mở ứng dụng Locket 1 lần)";
    const isAdminLogged = Env.read(ADMIN_SESSION_KEY) === "1";

    const db = getLocalStore();
    const usersList = Object.values(db.users || {});
    const goldUsersList = usersList.filter(u => u.gold_active !== false);
    const blockedCount = usersList.filter(u => u.status === "blocked" || u.blocked).length;

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

            goldDirectoryHtml += `
            <div class="dir-item" data-search="${escapeHtml((uName + " " + fName + " " + u.uid).toLowerCase())}">
                <div class="dir-left">
                    <img src="${escapeHtml(uAvatar)}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(uName)}&background=1d1d1f&color=fff'" class="dir-avatar" alt="avatar">
                    <div class="dir-info">
                        <div class="dir-name-row">
                            <span class="dir-fullname">${escapeHtml(fName)}</span>
                            <span class="dir-handle">@${escapeHtml(uName)}</span>
                            <span class="pill-badge pill-gold">Đã lên Locket Gold</span>
                            ${isBlk ? `<span class="pill-badge pill-rose">Đang bị Admin chặn (Vẫn giữ Gold)</span>` : `<span class="pill-badge pill-emerald">Huy hiệu 24/7</span>`}
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
            adminTableHtml += `
            <div class="adm-row">
                <div style="min-width:0;">
                    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
                        <span style="font-weight:600;font-size:13px;color:#fff;">@${escapeHtml(uName)}</span>
                        <span style="font-family:monospace;font-size:11px;color:#fcd34d;">UID: ${escapeHtml(u.uid)}</span>
                        <span class="pill-badge pill-gold">Gold 24/7</span>
                        <span class="pill-badge ${isBlk ? "pill-rose-dark" : "pill-emerald-dark"}">
                            ${isBlk ? "Đang bị chặn (Báo trong Locket)" : "Cho phép hoạt động"}
                        </span>
                    </div>
                    <div style="font-family:monospace;font-size:11px;color:#a1a1aa;margin-top:4px;">
                        Mốc đăng ký: ${escapeHtml(u.force_lock_date || u.lock_date || "2026-05-25")}
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
<title>locket.com — Hệ Thống Quản Trị Locket Gold & Danh Sách Đã Lên Gold</title>
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
  .hero-sec { text-align: center; max-width: 720px; margin: 0 auto; }
  .hero-pills { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-bottom: 18px; }
  .hero-pill { padding: 5px 14px; border-radius: 999px; background: #fff; border: 1px solid rgba(0,0,0,0.07); font-size: 11px; font-weight: 600; }
  .hero-title { font-size: clamp(28px, 5vw, 46px); font-weight: 700; letter-spacing: -0.035em; line-height: 1.1; }
  .hero-desc { font-size: 14px; color: var(--apple-secondary); margin-top: 14px; }
  .spec-strip { margin-top: 24px; padding-top: 20px; border-top: 1px solid rgba(0,0,0,0.06); display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
  .spec-box-lbl { font-size: 11px; font-weight: 600; text-transform: uppercase; color: var(--apple-tertiary); }
  .spec-box-val { font-size: 13px; font-weight: 700; color: var(--apple-ink); margin-top: 2px; word-break: break-all; }
  .grid-2 { display: grid; grid-template-columns: 1fr; gap: 16px; }
  @media (min-width: 640px) { .grid-2 { grid-template-columns: repeat(2, 1fr); } }
  .grid-3 { display: grid; grid-template-columns: 1fr; gap: 14px; }
  @media (min-width: 640px) { .grid-3 { grid-template-columns: repeat(3, 1fr); } }
  .field-lbl { display: block; font-size: 12px; font-weight: 600; color: var(--apple-ink); margin-bottom: 6px; }
  .preset-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
  .p-chip { padding: 5px 12px; border-radius: 999px; background: #fff; border: 1px solid rgba(0,0,0,0.08); font-size: 11.5px; font-weight: 600; cursor: pointer; }
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
        <span style="font-size:11px;color:var(--apple-tertiary);font-weight:500;">LocketGold Instant 0ms Lock</span>
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
            <div class="grid-3">
              <input type="text" name="target_uid" value="${escapeHtml(hasValidUid ? cachedUid : "")}" class="apple-input-dark" placeholder="Nhập UID Locket..." required>
              <input type="text" name="target_user" value="${escapeHtml(cachedUser)}" class="apple-input-dark" placeholder="Nhập @username hiển thị...">
              <button type="submit" class="apple-btn" style="background:#fbbf24;color:#1d1d1f;font-weight:700;font-size:13px;border-radius:13px;padding:12px;">Kích Hoạt Lên Gold Ngay</button>
            </div>
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
        <span class="hero-pill">LocketGold Zero-Delay 0ms · 25/05/2026</span>
        <span class="hero-pill">Giữ Cứng Công Tắc Huy Hiệu Locket Gold</span>
      </div>
      <h1 class="hero-title">
        Khoá cứng huy hiệu 24/7.<br>
        <span class="apple-gold-text">Không mất Gold khi mở ứng dụng.</span>
      </h1>
      <div class="spec-strip">
        <div>
          <div class="spec-box-lbl">Phản Hồi Gói Gold</div>
          <div class="spec-box-val" style="color:#059669;">TỨC THÌ (0ms)</div>
        </div>
        <div style="border-left:1px solid rgba(0,0,0,0.06);border-right:1px solid rgba(0,0,0,0.06);padding:0 8px;">
          <div class="spec-box-lbl">Mốc Đăng Ký</div>
          <div class="spec-box-val">${escapeHtml(cfg.lockDate)}</div>
        </div>
        <div>
          <div class="spec-box-lbl">User ID Đã Bắt</div>
          <div class="spec-box-val">${escapeHtml(hasValidUid ? cachedUid.slice(0, 14) + "..." : "Chưa bắt")}</div>
        </div>
      </div>
    </section>

    <section class="apple-bento-light">
      <form method="GET" action="/setdate" style="display:flex;flex-direction:column;gap:18px;">
        <input type="hidden" name="save" value="1">
        <div class="apple-subpanel-light">
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
              <label class="field-lbl">Tên hiển thị trên danh sách Đã Lên Gold (@username)</label>
              <input type="text" name="username" value="${escapeHtml(cachedUser)}" class="apple-input-light" placeholder="Nhập @username của bạn...">
            </div>
          </div>
        </div>
        <div class="grid-2">
          <button type="submit" class="apple-btn btn-primary-ink">Lưu Cấu Hình & Khoá Cứng Huy Hiệu 24/7</button>
          <a href="/setdate?reset=1" class="apple-btn btn-soft">Khôi Phục Mặc Định (25/05/2026)</a>
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
          <input type="text" id="searchGoldInput" oninput="filterGoldUsers()" class="apple-input-light" style="padding:9px 14px;font-size:12.5px;" placeholder="Tìm @username hoặc UID...">
        </div>
      </div>
      <div id="goldDirectoryList" style="margin-top:8px;">
        ${goldDirectoryHtml}
      </div>
    </section>
  </main>

  <script>
    function setD(v) { var el = document.getElementById('lockDateInput'); if (el) el.value = v; }
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
    const cfg = loadConfig();
    const uid = Env.read(USER_ID_CACHE_KEY);
    syncRealtimeWithServer(uid, cfg, "sync", () => Env.done());
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
                            reason: st.reason || ""
                        })
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
                        db.users[tUid] = {
                            ...(db.users[tUid] || {}),
                            uid: tUid,
                            username: tUser || (db.users[tUid] && db.users[tUid].username) || tUid.slice(0, 10),
                            status: "approved",
                            gold_active: true,
                            blocked: false,
                            reason: "",
                            updated_at: nowStr
                        };
                        saveLocalStore(db);
                        triggerInAppLocketBlockAlert(tUid, "", false, true);
                        statusMsg = `Đã gỡ chặn tức thì cho UID: ${tUid}`;
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
                statusMsg = "Đã khôi phục mặc định 25/05/2026!";
            } else if (q.save === "1" || q.lockDate) {
                const isoLock = toIsoDate(q.lockDate || currentCfg.lockDate, DEFAULT_CONFIG.lockDate, "T08:30:00Z");
                if (q.username) Env.write(q.username.trim().replace(/^@/, ""), USERNAME_CACHE_KEY);
                const updated = { ...DEFAULT_CONFIG, lockDate: isoLock.slice(0, 10) };
                saveConfig(updated);
                statusMsg = `Đã lưu mốc đăng ký ${isoLock}`;
            }

            const freshCfg = loadConfig();
            Env.done({
                response: {
                    status: 200,
                    headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
                    body: renderBentoWebPanel(freshCfg, statusMsg, openDrawer)
                }
            });
        }
    } else {
        // SỬA LỖI MẤT HUY HIỆU KHI MỚI MỞ APP:
        // Không giữ (block) request của Locket chờ server nữa, chạy đồng bộ ngầm và trả request đi ngay lập tức (0ms)!
        syncRealtimeWithServer(uid, currentCfg, "sync");

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

                if (reqJson.attributes && typeof reqJson.attributes === "object") {
                    reqJson.attributes.locket_gold_badge = { value: "true", updated_at_ms: nowMs };
                    reqJson.attributes.badge = { value: "locket_gold", updated_at_ms: nowMs };
                    reqJson.attributes.show_gold_badge = { value: "true", updated_at_ms: nowMs };
                    reqJson.attributes.is_gold = { value: "true", updated_at_ms: nowMs };
                    touched = true;
                }
                if (reqJson.data && typeof reqJson.data === "object") {
                    if ("badge" in reqJson.data || url.includes("changeProfileInfo") || url.includes("updateUser")) {
                        reqJson.data.badge = "locket_gold";
                        reqJson.data.locket_gold_badge = true;
                        reqJson.data.show_gold_badge = true;
                        reqJson.data.is_gold = true;
                        touched = true;
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
    // PHẢN HỒI TỨC THÌ 0MS NGAY LẬP TỨC KHI MỞ LOCKET ĐỂ KHÔNG BỊ NHÁY MẤT GOLD VÀ KHÔNG TẮT CÔNG TẮC HUY HIỆU
    const reqUrl = (typeof $request !== "undefined" && $request.url) ? $request.url : "";
    const reqHeaders = (typeof $request !== "undefined" && $request.headers) ? $request.headers : {};
    const resolvedUserId = extractAndCacheCredentials(reqUrl, reqHeaders, $response.body);
    const cfg = loadConfig();

    // Đồng bộ ngầm không chặn luồng trả kết quả của Locket
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

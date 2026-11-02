// ============================================================================
// FILE: locket_com_v7_full.js (PHẦN 1/4 — CẤU HÌNH LOCKET.COM & BẮT TÊN + AVATAR THẬT)
// Hỗ trợ: Shadowrocket / Loon / Surge / Quantumult X
// Domains xử lý theo locket.com:
// - api.revenuecat.com
// - firebaseremoteconfig.googleapis.com
// - us-central1-locket-4252a.cloudfunctions.net
// - api.locketcamera.com & firestore.googleapis.com
// ============================================================================

const ADMIN_API_URL = "https://locketgold.66ghz.com/index.php";
const ROOT_ADMIN_USER = "ngominhduc";
const ROOT_ADMIN_PASS_1 = "ducff123#";
const ROOT_ADMIN_PASS_2 = "Ducnocode2505@";

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
    // KHOÁ CỨNG HUY HIỆU 100% — CHỐNG TỰ TẮT CÔNG TẮC TRONG CÀI ĐẶT LOCKET
    alwaysForceBadge: true,
    hardLockBadgeSwitch: true,
    interceptBadgeToggleRequest: true,
    cronKeepAlive: true,
    notifyOnSync: true,
    // FULL TÍNH NĂNG TRONG LOCKET_COM (FILTER, ÂM THANH, CHỦ ĐỀ MÁY ẢNH, ĐỔI ICON, HD)
    unlockAllCameraEffects: true,
    forceShowAllFilters: true,
    injectMissingFilters: true,
    enableAudioRecording: true,
    enableVideoSound: true,
    enableMusicNotes: true,
    unlockCameraThemes: true,
    unlockAppIcons: true,
    unlockCameraRollUpload: true,
    unlockUnlimitedFriends: true,
    unlockHdQuality: true,
    maxVideoDurationSeconds: 15,
    aiFilterEnabled: true,
    aiFilterQuota: 999999,
    aiFilterDailyLimit: 999999,
    aiFilterUsed: 0,
    aiFilterUnlimited: true,
    // CẤU HÌNH POPUP & THÔNG BÁO ĐẨY
    popupEnabled: true,
    popupAutoShow: true,
    popupBadge: "LOCKET GOLD",
    popupHeader: "Đã Kích Hoạt 💛",
    popupTitle: "Youtube @NightmarketServer ✨",
    popupSubtitle: "Nhớ Follow Kênh Ủng Hộ Mình Nhé 💛",
    popupImage: DEFAULT_GOLD_POPUP_SVG,
    popupBtnText: "Done",
    pushNotifyOnActivate: true,
    pushCooldownSeconds: 12,
    pushTitle: "LOCKET GOLD — Đã Kích Hoạt 💛",
    pushSubtitle: "Youtube @NightmarketServer ✨",
    pushBody: "Nhớ Follow Kênh Ủng Hộ Mình Nhé 💛"
};

const STORE_KEY = "LOCKET_GOLD_MAX_CONFIG_V7";
const USER_ID_CACHE_KEY = "LOCKET_LAST_APP_USER_ID";
const USERNAME_CACHE_KEY = "LOCKET_LAST_USERNAME";
const FULLNAME_CACHE_KEY = "LOCKET_LAST_FULLNAME";
const FIRSTNAME_CACHE_KEY = "LOCKET_LAST_FIRSTNAME";
const LASTNAME_CACHE_KEY = "LOCKET_LAST_LASTNAME";
const AVATAR_CACHE_KEY = "LOCKET_LAST_AVATAR";
const AUTH_TOKEN_CACHE_KEY = "LOCKET_LAST_AUTH_BEARER";
const RC_API_KEY_CACHE_KEY = "LOCKET_LAST_RC_API_KEY";
const REMOTE_AUTH_CACHE_KEY = "LOCKET_REMOTE_ADMIN_STATE";
const LOCAL_ADMIN_DB_KEY = "LOCKET_BENTO_USERS_DB_V4";
const ADMIN_SESSION_KEY = "LOCKET_BENTO_ADMIN_SESSION_V4";
const LAST_INAPP_ALERT_TS_KEY = "LOCKET_INAPP_ALERT_TS_V4";
const LAST_GOLD_PUSH_TS_KEY = "LOCKET_GOLD_OPEN_ALERT_TS_V7";

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
                if (val === undefined || val === null) return false;
                if (isSurgeLoon) return $persistentStore.write(String(val), key);
                if (isQuanX) return $prefs.setValueForKey(String(val), key);
            } catch (e) {}
            return false;
        },
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

function buildDefaultLocketAvatarUrl(uid) {
    if (!uid || uid.includes("RCAnonymousID")) {
        return "https://ui-avatars.com/api/?name=Locket+Gold&background=1d1d1f&color=fcd34d";
    }
    return `https://firebasestorage.googleapis.com/v0/b/locket-img/o/users%2F${encodeURIComponent(uid)}%2Fpublic%2Fprofile_pic.webp?alt=media`;
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
    const existing = db.users[uid] || {};

    const cachedUsername = extra.username || existing.username || Env.read(USERNAME_CACHE_KEY) || uid.slice(0, 10);
    const cachedFullName = extra.full_name || existing.full_name || Env.read(FULLNAME_CACHE_KEY) || cachedUsername;
    const cachedAvatar = extra.avatar || existing.avatar || Env.read(AVATAR_CACHE_KEY) || buildDefaultLocketAvatarUrl(uid);
    const token = uid.slice(0, 12).toLowerCase();

    if (!db.users[uid]) {
        db.users[uid] = {
            uid: uid,
            username: cachedUsername,
            full_name: cachedFullName,
            avatar: cachedAvatar,
            token: token,
            status: "approved",
            gold_active: true,
            badge_locked: true,
            blocked: false,
            note: extra.note || "Đã khoá cứng Huy hiệu Locket Gold + Full Filter & Âm thanh",
            lock_date: extra.lockDate || DEFAULT_CONFIG.lockDate,
            product_id: extra.productId || DEFAULT_CONFIG.productId,
            ai_quota: extra.aiQuota !== undefined ? sanitizeQuotaNumber(extra.aiQuota, DEFAULT_CONFIG.aiFilterQuota) : DEFAULT_CONFIG.aiFilterQuota,
            activated_at: nowStr,
            updated_at: nowStr,
            reason: ""
        };
    } else {
        if (extra.username) db.users[uid].username = extra.username;
        if (extra.full_name) db.users[uid].full_name = extra.full_name;
        if (extra.avatar) db.users[uid].avatar = extra.avatar;
        if (!db.users[uid].full_name && cachedFullName) db.users[uid].full_name = cachedFullName;
        if (!db.users[uid].avatar && cachedAvatar) db.users[uid].avatar = cachedAvatar;
        if (extra.lockDate) db.users[uid].lock_date = extra.lockDate;
        if (extra.productId) db.users[uid].product_id = extra.productId;
        if (extra.aiQuota !== undefined) {
            db.users[uid].ai_quota = sanitizeQuotaNumber(extra.aiQuota, db.users[uid].ai_quota || DEFAULT_CONFIG.aiFilterQuota);
        }
        db.users[uid].badge_locked = true;
        db.users[uid].gold_active = true;
        if (extra.touch) db.users[uid].updated_at = nowStr;
    }
    saveLocalStore(db);
    return db.users[uid];
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
    const docMatch = url.match(/\/documents\/users\/([^/?#]+)/i);
    if (docMatch && docMatch[1]) {
        try {
            return decodeURIComponent(docMatch[1]);
        } catch (e) {
            return docMatch[1];
        }
    }
    return null;
}

// QUÉT SÂU MỌI JSON TỪ LOCKET / CLOUD FUNCTIONS / FIRESTORE ĐỂ BẮT CHÍNH XÁC TÊN HIỂN THỊ ("hello mấy em"), USERNAME ("hkh0805") VÀ AVATAR THẬT
function deepScanProfileFromObject(node, state, depth = 0) {
    if (!node || typeof node !== "object" || depth > 8) return;

    if (Array.isArray(node)) {
        for (let i = 0; i < node.length; i++) {
            deepScanProfileFromObject(node[i], state, depth + 1);
        }
        return;
    }

    // 1. Hỗ trợ định dạng Firestore Document (fields)
    if (node.fields && typeof node.fields === "object") {
        const f = node.fields;
        const fUid = (f.uid && f.uid.stringValue) || (f.user_id && f.user_id.stringValue);
        const fUser = f.username && f.username.stringValue;
        const fFirst = f.first_name && f.first_name.stringValue;
        const fLast = f.last_name && f.last_name.stringValue;
        const fDisp = (f.display_name && f.display_name.stringValue) || (f.full_name && f.full_name.stringValue);
        const fPic =
            (f.profile_picture_url && f.profile_picture_url.stringValue) ||
            (f.photo_url && f.photo_url.stringValue) ||
            (f.avatar && f.avatar.stringValue);

        if (fUid && !fUid.includes("RCAnonymousID") && !state.uid) state.uid = fUid;
        if (fUser && !state.username) state.username = fUser;
        if (fFirst && !state.firstName) state.firstName = fFirst;
        if (fLast && !state.lastName) state.lastName = fLast;
        if (fDisp && !state.fullName) state.fullName = fDisp;
        if (fPic && /^https?:\/\//i.test(fPic) && !state.avatar) state.avatar = fPic;
    }

    // 2. Hỗ trợ định dạng API Locket (getUser, fetchUserV2, changeProfileInfo, getAccountInfo)
    const candUid =
        (node.subscriber && node.subscriber.original_app_user_id) ||
        node.uid ||
        node.user_uid ||
        node.localId ||
        (node.user && (node.user.uid || node.user.localId));

    const isLikelySelfOrPrimaryUser =
        !state.uid ||
        (candUid && candUid === state.uid) ||
        "first_name" in node ||
        "profile_picture_url" in node ||
        "localId" in node;

    if (candUid && typeof candUid === "string" && !candUid.includes("RCAnonymousID") && !state.uid) {
        state.uid = candUid;
    }

    if (isLikelySelfOrPrimaryUser) {
        if (typeof node.username === "string" && node.username.trim() && !state.username) {
            state.username = node.username.trim();
        }
        if (typeof node.first_name === "string" && node.first_name.trim() && !state.firstName) {
            state.firstName = node.first_name.trim();
        }
        if (typeof node.last_name === "string" && node.last_name.trim() && !state.lastName) {
            state.lastName = node.last_name.trim();
        }
        const disp = node.display_name || node.displayName || node.full_name || node.fullName || node.name;
        if (typeof disp === "string" && disp.trim() && !disp.includes("projects/") && !state.fullName) {
            state.fullName = disp.trim();
        }
        const pic =
            node.profile_picture_url ||
            node.profilePictureUrl ||
            node.photoUrl ||
            node.photo_url ||
            node.avatar_url ||
            node.avatar;
        if (typeof pic === "string" && /^https?:\/\//i.test(pic) && !state.avatar) {
            state.avatar = pic.trim();
        }
    }

    // Quét tiếp vào các nhánh chính
    const priorityKeys = ["result", "data", "user", "profile", "account", "users", "document"];
    for (const pk of priorityKeys) {
        if (node[pk] && typeof node[pk] === "object") {
            deepScanProfileFromObject(node[pk], state, depth + 1);
        }
    }
}

function extractAndCacheCredentials(url, headers, bodyStr) {
    const state = {
        uid: null,
        username: null,
        firstName: null,
        lastName: null,
        fullName: null,
        avatar: null
    };

    const rcUrlUser = extractRequestedRcUserId(url);
    if (rcUrlUser && !rcUrlUser.includes("RCAnonymousID")) {
        state.uid = rcUrlUser;
    }

    if (typeof bodyStr === "string" && (bodyStr.includes("{") || bodyStr.includes("["))) {
        try {
            const parsed = JSON.parse(bodyStr);
            deepScanProfileFromObject(parsed, state, 0);
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
                    if (!state.uid) {
                        try {
                            const parts = val.replace(/^Bearer\s+/i, "").split(".");
                            if (parts.length >= 2 && typeof atob === "function") {
                                const b64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
                                const jsonPayload = JSON.parse(atob(b64));
                                const jwtUid = jsonPayload.user_id || jsonPayload.sub;
                                if (jwtUid && typeof jwtUid === "string") {
                                    state.uid = jwtUid;
                                }
                                if (jsonPayload.name && !state.fullName) {
                                    state.fullName = jsonPayload.name;
                                }
                                if (jsonPayload.picture && !state.avatar) {
                                    state.avatar = jsonPayload.picture;
                                }
                            }
                        } catch (e) {}
                    }
                } else if (/^appl_|^goog_|^rcb_/i.test(val.replace(/^Bearer\s+/i, ""))) {
                    Env.write(val, RC_API_KEY_CACHE_KEY);
                }
            } else if (low === "x-revenuecat-user-id" || low === "x-app-user-id") {
                if (val && !val.includes("RCAnonymousID")) {
                    state.uid = val;
                }
            }
        }
    }

    if (state.uid && !state.uid.includes("RCAnonymousID")) {
        Env.write(state.uid, USER_ID_CACHE_KEY);
    }
    if (state.username) {
        Env.write(state.username, USERNAME_CACHE_KEY);
    }
    if (state.firstName) {
        Env.write(state.firstName, FIRSTNAME_CACHE_KEY);
    }
    if (state.lastName !== null && state.lastName !== undefined) {
        Env.write(state.lastName, LASTNAME_CACHE_KEY);
    }

    const combinedName = [
        state.firstName || Env.read(FIRSTNAME_CACHE_KEY) || "",
        state.lastName || Env.read(LASTNAME_CACHE_KEY) || ""
    ].join(" ").trim();

    const finalFullName = state.fullName || combinedName || state.username || Env.read(FULLNAME_CACHE_KEY) || "";
    if (finalFullName) {
        Env.write(finalFullName, FULLNAME_CACHE_KEY);
    }
    if (state.avatar) {
        Env.write(state.avatar, AVATAR_CACHE_KEY);
    }

    const finalUid = state.uid || Env.read(USER_ID_CACHE_KEY) || rcUrlUser || "$RCAnonymousID:locket_hard_lock";
    if (finalUid && !finalUid.includes("RCAnonymousID")) {
        upsertUserRecord(finalUid, {
            username: state.username || Env.read(USERNAME_CACHE_KEY),
            full_name: finalFullName || Env.read(USERNAME_CACHE_KEY),
            avatar: state.avatar || Env.read(AVATAR_CACHE_KEY) || buildDefaultLocketAvatarUrl(finalUid)
        });
    }
    return finalUid;
}

// === HẾT PHẦN 1/4 — DÁN NỐI TIẾP PHẦN 2/4 VÀO BÊN DƯỚI ===
// ============================================================================
// FILE: locket_com_v7_full.js (PHẦN 2/4 NÂNG CẤP — CHỐNG TỰ TẮT CÔNG TẮC HUY HIỆU 100%)
// Dán đè lên Phần 2/4 cũ hoặc ghép nối tiếp sau Phần 1/4
// ============================================================================

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

    const cachedFullName = Env.read(FULLNAME_CACHE_KEY) || Env.read(USERNAME_CACHE_KEY) || "";
    const cachedUsername = Env.read(USERNAME_CACHE_KEY) || "";
    const title = `${cfg.popupBadge || "LOCKET GOLD"} — ${cfg.popupHeader || "Đã Kích Hoạt 💛"}`;
    const sub = cachedFullName
        ? `${cachedFullName}${cachedUsername ? " (@" + cachedUsername + ")" : ""} · ${cfg.popupTitle || "Youtube @NightmarketServer ✨"}`
        : (cfg.popupTitle || "Youtube @NightmarketServer ✨");
    const body = cfg.popupSubtitle || "Huy hiệu Locket Gold, Filter & Âm thanh đã được khoá cứng BẬT 100% 💛";
    const hasHttpImg = cfg.popupImage && /^https?:\/\//i.test(cfg.popupImage);

    try {
        if (typeof $notification !== "undefined" && typeof $notification.post === "function") {
            if (hasHttpImg) {
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

    Env.notify(title, sub, body);
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
            username: Env.read(USERNAME_CACHE_KEY),
            full_name: Env.read(FULLNAME_CACHE_KEY),
            avatar: Env.read(AVATAR_CACHE_KEY),
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
            full_name: userRec.full_name || Env.read(FULLNAME_CACHE_KEY) || "",
            avatar: userRec.avatar || Env.read(AVATAR_CACHE_KEY) || "",
            action: actionName || "sync",
            status: userRec.status || "approved",
            badge_locked: true,
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
                    saveLocalStore(localDb);
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
            Env.read("LOCKET_GOLD_MAX_CONFIG_V6") ||
            Env.read("LOCKET_GOLD_MAX_CONFIG_V5");
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

    // ÉP CỨNG 100% HUY HIỆU + FILTER + ÂM THANH + CHỦ ĐỀ MÁY ẢNH
    cfg.alwaysForceBadge = true;
    cfg.hardLockBadgeSwitch = true;
    cfg.interceptBadgeToggleRequest = true;
    cfg.unlockAllCameraEffects = true;
    cfg.forceShowAllFilters = true;
    cfg.enableAudioRecording = true;
    cfg.enableVideoSound = true;
    cfg.unlockCameraThemes = true;
    cfg.unlockAppIcons = true;
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

// ============================================================================
// KHOÁ CỨNG CÔNG TẮC "HUY HIỆU LOCKET GOLD" (NGĂN TỰ TẮT 100%)
// Nguyên nhân công tắc tự tắt trong video:
// Khi gạt nút "Huy hiệu Locket Gold", Locket gọi `changeProfileInfo` lên
// `us-central1-locket-4252a.cloudfunctions.net` hoặc `api.locketcamera.com`.
// Server thật kiểm tra DB không thấy gói mua thật -> trả lỗi 403/400 hoặc trả `badge: null`,
// khiến UI Locket tự gạt công tắc về OFF sau 0.5 giây!
// Hàm dưới đây biến mọi phản hồi của `changeProfileInfo` / `getUser` / `fetchUserV2`
// thành HTTP 200 OK kèm `badge: "locket_gold"` và `locket_gold_badge: true`.
// ============================================================================
function buildForcedProfileBadgeResponse(existingObj, cfg, resolvedUid) {
    const uid = resolvedUid || Env.read(USER_ID_CACHE_KEY) || "locket_gold_user";
    const username = Env.read(USERNAME_CACHE_KEY) || "hkh0805";
    const firstName = Env.read(FIRSTNAME_CACHE_KEY) || Env.read(FULLNAME_CACHE_KEY) || "hello mấy em";
    const lastName = Env.read(LASTNAME_CACHE_KEY) || "";
    const fullName = Env.read(FULLNAME_CACHE_KEY) || [firstName, lastName].join(" ").trim() || firstName;
    const avatar = Env.read(AVATAR_CACHE_KEY) || buildDefaultLocketAvatarUrl(uid);
    const quotaNum = sanitizeQuotaNumber(cfg.aiFilterQuota, 999999);

    const lockedBadgeFields = {
        uid: uid,
        user_id: uid,
        username: username,
        first_name: firstName,
        last_name: lastName,
        display_name: fullName,
        full_name: fullName,
        profile_picture_url: avatar,
        photo_url: avatar,
        // CÁC KHÓA QUYẾT ĐỊNH CÔNG TẮC HUY HIỆU LOCKET GOLD LUÔN Ở VỊ TRÍ BẬT (MÀU VÀNG)
        badge: "locket_gold",
        locket_gold_badge: true,
        gold_badge: true,
        has_gold_badge: true,
        show_gold_badge: true,
        gold_badge_enabled: true,
        is_gold_badge_enabled: true,
        badge_enabled: true,
        badge_visible: true,
        hide_gold_badge: false,
        disable_gold_badge: false,
        celebrity: false,
        celebrity_data: null,
        is_gold: true,
        isGold: true,
        has_gold: true,
        hasGold: true,
        gold_subscription: true,
        subscription_status: "active",
        membership_status: "locket_gold",
        original_purchase_date: cfg.lockIso,
        purchase_date: cfg.lockIso,
        member_since: cfg.lockIso,
        gold_since: cfg.lockIso,
        expires_date: cfg.expireIso,
        // BẬT TOÀN BỘ TÍNH NĂNG LOCKET_COM TRÊN HỒ SƠ
        can_use_ai_filter: true,
        can_use_holiday_effects: true,
        can_use_camera_themes: true,
        can_change_app_icon: true,
        camera_themes_unlocked: true,
        app_icons_unlocked: true,
        audio_recording_enabled: true,
        video_audio_enabled: true,
        ai_filter_quota: quotaNum,
        ai_filter_remaining: quotaNum
    };

    if (!existingObj || typeof existingObj !== "object" || existingObj.error) {
        return {
            result: {
                status: 200,
                ok: true,
                success: true,
                data: { ...lockedBadgeFields },
                user: { ...lockedBadgeFields },
                ...lockedBadgeFields
            },
            data: { ...lockedBadgeFields },
            user: { ...lockedBadgeFields },
            ...lockedBadgeFields,
            status: 200,
            ok: true
        };
    }

    delete existingObj.error;
    delete existingObj.errors;
    existingObj.status = 200;
    existingObj.ok = true;

    if (!existingObj.result || typeof existingObj.result !== "object") {
        existingObj.result = {
            status: 200,
            ok: true,
            success: true,
            data: { ...lockedBadgeFields },
            user: { ...lockedBadgeFields },
            ...lockedBadgeFields
        };
    } else {
        existingObj.result.status = 200;
        existingObj.result.ok = true;
        existingObj.result.success = true;
        delete existingObj.result.error;
        delete existingObj.result.errors;
        Object.assign(existingObj.result, lockedBadgeFields);
        if (existingObj.result.data && typeof existingObj.result.data === "object") {
            Object.assign(existingObj.result.data, lockedBadgeFields);
        } else {
            existingObj.result.data = { ...lockedBadgeFields };
        }
        if (existingObj.result.user && typeof existingObj.result.user === "object") {
            Object.assign(existingObj.result.user, lockedBadgeFields);
        }
    }

    if (existingObj.data && typeof existingObj.data === "object") {
        Object.assign(existingObj.data, lockedBadgeFields);
    }
    if (existingObj.user && typeof existingObj.user === "object") {
        Object.assign(existingObj.user, lockedBadgeFields);
    }

    Object.assign(existingObj, lockedBadgeFields);
    return existingObj;
}

// 1. REVENUECAT FULL SUBSCRIBER PAYLOAD — MỞ KHOÁ FULL GÓI LOCKET_COM
function buildSubscriberPayload(existingObj, cfg, resolvedUserId, requestedUrlUserId) {
    if (cfg.isBlockedByAdmin) {
        triggerInAppLocketBlockAlert(resolvedUserId, cfg.blockReason, true, false);
    } else {
        triggerInAppLocketBlockAlert(resolvedUserId, "", false, false);
        fireNativeAppNotification(cfg, false);
    }

    const LOCK_DATE = cfg.lockIso;
    const EXPIRE_DATE = cfg.expireIso;
    const PRIMARY_PID = cfg.productId || "locket_1600_1y";
    const quotaNum = sanitizeQuotaNumber(cfg.aiFilterQuota, 999999);
    const quotaStr = String(quotaNum);
    const nowIso = new Date().toISOString();
    const nowMs = Date.now();

    const obj = (existingObj && typeof existingObj === "object") ? existingObj : {};
    obj.Attention = `${cfg.popupBadge} | ${cfg.popupHeader} | ${cfg.popupTitle}`;
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

    const cachedUsername = Env.read(USERNAME_CACHE_KEY) || "";
    const cachedFullName = Env.read(FULLNAME_CACHE_KEY) || cachedUsername;
    const cachedAvatar = Env.read(AVATAR_CACHE_KEY) || "";

    const forcedAttributes = {
        "$displayName": cachedFullName || "Locket Gold Member",
        "username": cachedUsername,
        "profile_picture_url": cachedAvatar,
        "locket_gold_badge": "true",
        "badge": "locket_gold",
        "has_gold_badge": "true",
        "show_gold_badge": "true",
        "gold_badge_enabled": "true",
        "is_gold_badge_enabled": "true",
        "hide_gold_badge": "false",
        "is_gold": "true",
        "membership_badge": "gold",
        "holiday_effects_unlocked": "true",
        "camera_effects_unlocked": "true",
        "camera_themes_unlocked": "true",
        "custom_app_icons_unlocked": "true",
        "audio_recording_enabled": "true",
        "video_audio_enabled": "true",
        "lut_filters_unlocked": "true",
        "ai_looks_unlocked": "true",
        "ai_filter_quota": quotaStr,
        "ai_filter_remaining": quotaStr,
        "ai_looks_remaining": quotaStr,
        "ai_generation_limit": quotaStr
    };

    for (const [attrKey, attrVal] of Object.entries(forcedAttributes)) {
        if (attrVal !== undefined && attrVal !== null && attrVal !== "") {
            obj.subscriber.subscriber_attributes[attrKey] = {
                value: String(attrVal),
                updated_at_ms: nowMs
            };
        }
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
        "locket_holiday_effects",
        "locket_camera_themes",
        "locket_app_icons"
    ];

    for (const existingPid of Object.keys(obj.subscriber.subscriptions)) {
        obj.subscriber.subscriptions[existingPid] = buildSubEntry(existingPid);
    }
    for (const pid of allProductIds) {
        obj.subscriber.subscriptions[pid] = buildSubEntry(pid);
    }

    const allEntitlements = [
        "Gold",
        "gold",
        "pro",
        "Pro",
        "locket_gold",
        "LocketGold",
        "locket_gold_v2",
        "gold_badge",
        "locket_gold_badge",
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
        "effects",
        "camera_themes",
        "app_icons",
        "custom_icons",
        "audio_recording",
        "video_audio",
        "hd_upload",
        "camera_roll_upload"
    ];

    for (const existingEnt of Object.keys(obj.subscriber.entitlements)) {
        obj.subscriber.entitlements[existingEnt] = buildEntEntry(PRIMARY_PID);
    }
    for (const entKey of allEntitlements) {
        obj.subscriber.entitlements[entKey] = buildEntEntry(PRIMARY_PID);
    }

    return obj;
}

// 2. BƠM FIREBASE REMOTE CONFIG CHUẨN LOCKET.COM (BẬT HUY HIỆU, FILTER, ÂM THANH, CHỦ ĐỀ, ICON)
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
        "locket_gold_badge_enabled": "true",
        "gold_badge_enabled": "true",
        "show_gold_badge": "true",
        "force_gold_badge": "true",
        "allow_gold_badge_toggle": "true",
        "default_gold_badge_on": "true",
        "verify_gold_badge_on_server": "false",
        "require_server_subscription_for_badge": "false",
        "bypass_gold_paywall": "true",
        "disable_gold_paywall": "true",
        "show_gold_paywall": "false",
        "enable_gold_paywall": "false",
        "audio_enabled": "true",
        "enable_audio": "true",
        "video_audio_enabled": "true",
        "enable_video_audio": "true",
        "audio_recording_enabled": "true",
        "enable_audio_recording": "true",
        "record_audio_with_video": "true",
        "allow_audio_capture": "true",
        "mute_video_by_default": "false",
        "force_mute_video": "false",
        "disable_video_audio": "false",
        "enable_sound_on_moments": "true",
        "moment_audio_enabled": "true",
        "music_notes_enabled": "true",
        "enable_music_caption": "true",
        "voice_note_enabled": "true",
        "max_video_duration": "15",
        "max_video_length_seconds": "15",
        "hd_video_enabled": "true",
        "hd_photo_enabled": "true",
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
        "show_all_filters": "true",
        "force_show_filters": "true",
        "camera_filters_enabled": "true",
        "enable_camera_filters": "true",
        "holiday_effects_enabled": "true",
        "seasonal_effects_enabled": "true",
        "festive_effects_enabled": "true",
        "style_effects_enabled": "true",
        "funny_effects_enabled": "true",
        "cute_effects_enabled": "true",
        "lut_filter_enabled": "true",
        "enable_lut_filters": "true",
        "camera_effects_enabled": "true",
        "overlays_enabled": "true",
        "time_overlay_enabled": "true",
        "weather_overlay_enabled": "true",
        "battery_overlay_enabled": "true",
        "speed_overlay_enabled": "true",
        "camera_themes_enabled": "true",
        "enable_camera_themes": "true",
        "unlock_all_camera_themes": "true",
        "require_gold_for_themes": "false",
        "custom_app_icons_enabled": "true",
        "enable_custom_app_icons": "true",
        "unlock_all_app_icons": "true",
        "require_gold_for_app_icons": "false",
        "upload_from_camera_roll_enabled": "true",
        "camera_roll_upload_enabled": "true",
        "require_gold_for_camera_roll": "false",
        "unlimited_friends_enabled": "true",
        "max_friends_limit": "9999",
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
        "max_ai_generations_per_day": quotaStr,
        "max_ai_filters_per_day": quotaStr,
        "gold_ai_filter_limit": quotaStr,
        "free_ai_filter_limit": quotaStr,
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

        if (
            low.includes("ai") || low.includes("filter") || low.includes("look") ||
            low.includes("effect") || low.includes("lut") || low.includes("holiday") ||
            low.includes("seasonal") || low.includes("festive") || low.includes("audio") ||
            low.includes("sound") || low.includes("theme") || low.includes("icon") ||
            low.includes("badge") || low.includes("gold")
        ) {
            if (low.includes("limit") || low.includes("quota") || low.includes("max") || low.includes("remaining") || low.includes("uses") || low.includes("credits")) {
                obj.entries[existingKey] = quotaStr;
            } else if (low.includes("gold_only") || low.includes("require_gold") || low.includes("requires_gold") || low.includes("is_locked") || low.includes("locked") || low.includes("paywall") || low.includes("blur") || low.includes("mute") || low.includes("hide_gold")) {
                obj.entries[existingKey] = "false";
            } else if (low.includes("enable") || low.includes("allow") || low.includes("active") || low.includes("show") || low.includes("free") || low.includes("unlock") || low.includes("badge") || low.includes("audio") || low.includes("sound")) {
                obj.entries[existingKey] = "true";
            } else if (low.includes("disable") || low.includes("block") || low.includes("cooldown")) {
                obj.entries[existingKey] = low.includes("cooldown") ? "0" : "false";
            }
        }
    }

    for (const [k, v] of Object.entries(forcedEntries)) {
        obj.entries[k] = v;
    }

    obj.state = "UPDATE";
    return obj;
}
// ============================================================================
// FILE: locket_com_v7_full.js (PHẦN 3/4 NÂNG CẤP — FULL FILTER + ÂM THANH & WEB PANEL)
// Dán nối tiếp ngay bên dưới Phần 2/4
// ============================================================================

// DANH SÁCH FILTER, HIỆU ỨNG LỄ HỘI, OVERLAY & CHỦ ĐỀ MÁY ẢNH DỰ PHÒNG (BƠM KHI SERVER TRẢ RỖNG HOẶC ẨN)
function getBuiltinLocketComFilters() {
    return [
        {
            id: "locket_gold_crown_effect",
            effect_id: "locket_gold_crown_effect",
            filter_id: "locket_gold_crown_effect",
            name: "Locket Gold Glow ✨",
            title: "Locket Gold Glow ✨",
            category: "gold",
            effect_type: "filter",
            filter_type: "lut",
            is_gold_only: false,
            requires_gold: false,
            is_locked: false,
            is_free: true,
            unlocked: true,
            enabled: true,
            is_visible: true,
            show_in_camera: true,
            audio_enabled: true,
            video_audio_enabled: true
        },
        {
            id: "vintage_film_1998",
            effect_id: "vintage_film_1998",
            filter_id: "vintage_film_1998",
            name: "Vintage Film 98 🎞️",
            title: "Vintage Film 98 🎞️",
            category: "style",
            effect_type: "filter",
            filter_type: "lut",
            is_gold_only: false,
            requires_gold: false,
            is_locked: false,
            is_free: true,
            unlocked: true,
            enabled: true,
            is_visible: true,
            show_in_camera: true,
            audio_enabled: true,
            video_audio_enabled: true
        },
        {
            id: "y2k_cyber_glow",
            effect_id: "y2k_cyber_glow",
            filter_id: "y2k_cyber_glow",
            name: "Y2K Cyber Soft 💫",
            title: "Y2K Cyber Soft 💫",
            category: "style",
            effect_type: "filter",
            filter_type: "lut",
            is_gold_only: false,
            requires_gold: false,
            is_locked: false,
            is_free: true,
            unlocked: true,
            enabled: true,
            is_visible: true,
            show_in_camera: true,
            audio_enabled: true,
            video_audio_enabled: true
        },
        {
            id: "holiday_sparkle_festive",
            effect_id: "holiday_sparkle_festive",
            filter_id: "holiday_sparkle_festive",
            name: "Lễ Hội Lấp Lánh 🎉",
            title: "Lễ Hội Lấp Lánh 🎉",
            category: "holiday",
            effect_type: "overlay",
            filter_type: "holiday",
            is_gold_only: false,
            requires_gold: false,
            is_locked: false,
            is_free: true,
            unlocked: true,
            enabled: true,
            is_visible: true,
            show_in_camera: true,
            audio_enabled: true,
            video_audio_enabled: true
        },
        {
            id: "retro_camcorder_rec",
            effect_id: "retro_camcorder_rec",
            filter_id: "retro_camcorder_rec",
            name: "Camcorder REC 🔴",
            title: "Camcorder REC 🔴",
            category: "cute",
            effect_type: "overlay",
            filter_type: "retro",
            is_gold_only: false,
            requires_gold: false,
            is_locked: false,
            is_free: true,
            unlocked: true,
            enabled: true,
            is_visible: true,
            show_in_camera: true,
            audio_enabled: true,
            video_audio_enabled: true
        }
    ];
}

// 3. QUÉT SÂU MỌI NODE JSON: KHOÁ CỨNG CÔNG TẮC HUY HIỆU + MỞ KHOÁ FILTER, ÂM THANH, CHỦ ĐỀ MÁY ẢNH, ICON APP
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

    const isEffectOrFilterOrThemeItem = (
        "effect_id" in node ||
        "effectId" in node ||
        "filter_id" in node ||
        "filterId" in node ||
        "look_id" in node ||
        "lookId" in node ||
        "lens_id" in node ||
        "theme_id" in node ||
        "themeId" in node ||
        "icon_id" in node ||
        "iconId" in node ||
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

    const hasUserShape = !isEffectOrFilterOrThemeItem && (
        "locket_gold_badge" in node ||
        "show_gold_badge" in node ||
        "gold_badge_enabled" in node ||
        ("uid" in node && ("username" in node || "first_name" in node || "profile_picture_url" in node || "badge" in node))
    );

    // KHOÁ CỨNG HUY HIỆU LOCKET GOLD LUÔN BẬT TRÊN HỒ SƠ USER (CHỐNG TỰ TẮT CÔNG TẮC)
    if (hasUserShape) {
        node.badge = "locket_gold";
        node.locket_gold_badge = true;
        node.has_gold_badge = true;
        node.gold_badge = true;
        node.show_gold_badge = true;
        node.gold_badge_enabled = true;
        node.is_gold_badge_enabled = true;
        node.badge_enabled = true;
        node.badge_visible = true;
        node.hide_gold_badge = false;
        node.disable_gold_badge = false;
        node.is_gold = true;
        node.isGold = true;
        node.has_gold = true;
        node.hasGold = true;
        node.gold_subscription = true;
        node.subscription_status = "active";
        node.membership_status = "locket_gold";
        node.original_purchase_date = cfg.lockIso;
        node.purchase_date = cfg.lockIso;
        node.member_since = cfg.lockIso;
        node.gold_since = cfg.lockIso;
        node.expires_date = cfg.expireIso;
        node.ai_filter_quota = quotaNum;
        node.ai_filter_remaining = quotaNum;
        node.ai_looks_remaining = quotaNum;
        node.remaining_ai_uses = quotaNum;
        node.can_use_ai_filter = true;
        node.can_use_holiday_effects = true;
        node.can_use_camera_themes = true;
        node.can_change_app_icon = true;
        node.camera_themes_unlocked = true;
        node.app_icons_unlocked = true;
        node.audio_recording_enabled = true;
        node.video_audio_enabled = true;
    }

    // MỞ KHOÁ & ÉP HIỆN 100% FILTER, EFFECT, CHỦ ĐỀ MÁY ẢNH, ICON APP (XOÁ MÀN MỜ PAYWALL)
    if (isEffectOrFilterOrThemeItem) {
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
        node.enabled = true;
        node.is_enabled = true;
        node.is_active = true;
        node.active = true;
        node.is_visible = true;
        node.visible = true;
        node.hidden = false;
        node.is_hidden = false;
        node.show_in_camera = true;
        node.audio_enabled = true;
        node.video_audio_enabled = true;
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

    const hasQuotaOrAccessShape = !isEffectOrFilterOrThemeItem && (
        "remaining" in node ||
        "remaining_uses" in node ||
        "remainingUses" in node ||
        "quota" in node ||
        "daily_limit" in node ||
        "can_generate" in node ||
        "canGenerate" in node ||
        "is_allowed" in node
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

    // HỖ TRỢ FIRESTORE DOCUMENT FIELDS (ĐẢM BẢO CÔNG TẮC HUY HIỆU TRÊN FIRESTORE CŨNG BẬT CỨNG)
    if (node.fields && typeof node.fields === "object") {
        if (node.fields.uid || node.fields.username || node.fields.badge || node.fields.profile_picture_url || node.fields.first_name) {
            node.fields.badge = { stringValue: "locket_gold" };
            node.fields.locket_gold_badge = { booleanValue: true };
            node.fields.gold_badge = { booleanValue: true };
            node.fields.has_gold_badge = { booleanValue: true };
            node.fields.show_gold_badge = { booleanValue: true };
            node.fields.gold_badge_enabled = { booleanValue: true };
            node.fields.is_gold_badge_enabled = { booleanValue: true };
            node.fields.badge_enabled = { booleanValue: true };
            node.fields.hide_gold_badge = { booleanValue: false };
            node.fields.is_gold = { booleanValue: true };
            node.fields.gold_subscription_since = { timestampValue: cfg.lockIso };
            node.fields.original_purchase_date = { timestampValue: cfg.lockIso };
            node.fields.audio_recording_enabled = { booleanValue: true };
            node.fields.video_audio_enabled = { booleanValue: true };
            node.fields.camera_themes_unlocked = { booleanValue: true };
            node.fields.app_icons_unlocked = { booleanValue: true };
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
            } else if (flow.includes("gold_only") || flow.includes("requires_gold") || flow.includes("locked") || flow.includes("blur") || flow.includes("paywall") || flow.includes("mute") || flow.includes("hide_gold")) {
                node.fields[fk] = { booleanValue: false };
            } else if (flow === "unlocked" || flow === "can_use" || flow === "is_free" || flow.includes("badge") || flow.includes("audio") || flow.includes("sound")) {
                if (flow !== "badge") {
                    node.fields[fk] = { booleanValue: true };
                }
            }
        }
    }

    for (const k of Object.keys(node)) {
        const low = k.toLowerCase();
        const val = node[k];

        if (k === "badge" && (val === null || val === "" || val === false || val === "none")) {
            node[k] = "locket_gold";
        } else if (
            low === "locket_gold_badge" ||
            low === "has_gold_badge" ||
            low === "show_gold_badge" ||
            low === "gold_badge" ||
            low === "gold_badge_enabled" ||
            low === "is_gold_badge_enabled" ||
            low === "badge_enabled" ||
            low === "badge_visible"
        ) {
            node[k] = true;
        } else if (low === "hide_gold_badge" || low === "disable_gold_badge") {
            node[k] = false;
        } else if (
            typeof val === "boolean" &&
            (
                low === "audio_enabled" ||
                low === "video_audio_enabled" ||
                low === "audio_recording_enabled" ||
                low === "record_audio" ||
                low === "allow_audio" ||
                low === "sound_enabled" ||
                low === "enable_sound" ||
                low === "camera_themes_enabled" ||
                low === "custom_app_icons_enabled"
            )
        ) {
            node[k] = true;
        } else if (
            typeof val === "boolean" &&
            (low === "is_muted" || low === "muted" || low === "mute_audio" || low === "disable_audio")
        ) {
            node[k] = false;
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
            Array.isArray(val) &&
            (low === "effects" || low === "filters" || low === "camera_effects" || low === "overlays" || low === "looks")
        ) {
            if (val.length === 0 && cfg.injectMissingFilters !== false) {
                node[k] = getBuiltinLocketComFilters();
            } else {
                deepForceBadgeAndAiQuotaInObject(val, cfg, depth + 1);
            }
        } else if (typeof val === "object" && val !== null) {
            deepForceBadgeAndAiQuotaInObject(val, cfg, depth + 1);
        }
    }

    return node;
}

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
                    images: { header: imgFile, background: imgFile, icon: imgFile },
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
                localized_strings: { vi: locData, vi_VN: locData, en: locData, en_US: locData }
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

// GIAO DIỆN WEB PANEL BENTO HIỂN THỊ TRỰC TIẾP TÊN + AVATAR LOCKET THẬT + TRẠNG THÁI KHOÁ CỨNG HUY HIỆU
function renderBentoWebPanel(cfg, statusMsg, openAdminDrawer = false, forceShowGoldModal = false) {
    const cachedUid = Env.read(USER_ID_CACHE_KEY) || "";
    const cachedUser = Env.read(USERNAME_CACHE_KEY) || "hkh0805";
    const cachedFullName = Env.read(FULLNAME_CACHE_KEY) || cachedUser || "hello mấy em";
    const cachedAvatar = Env.read(AVATAR_CACHE_KEY) || buildDefaultLocketAvatarUrl(cachedUid);
    const hasValidUid = cachedUid && !cachedUid.includes("RCAnonymousID");
    const displayUid = hasValidUid ? cachedUid : "Chưa ghi nhận (Mở ứng dụng Locket 1 lần)";
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

    let goldDirectoryHtml = "";
    if (goldUsersList.length === 0) {
        goldDirectoryHtml = `<div class="empty-row">Chưa có tài khoản nào được ghi nhận. Mở Locket 1 lần để tự động bắt Tên + Avatar thật.</div>`;
    } else {
        for (const u of goldUsersList) {
            const isBlk = u.status === "blocked" || u.blocked === true;
            const uName = u.username || (u.uid ? u.uid.slice(0, 10) : "user");
            const fName = u.full_name || uName;
            const uAvatar = u.avatar || buildDefaultLocketAvatarUrl(u.uid);
            const lockD = u.force_lock_date || u.lock_date || cfg.lockDate;
            const userAiQuota = sanitizeQuotaNumber(u.ai_quota !== undefined ? u.ai_quota : currentAiQuota, currentAiQuota);

            goldDirectoryHtml += `
            <div class="dir-item" data-search="${escapeHtml((uName + " " + fName + " " + u.uid).toLowerCase())}">
                <div class="dir-left">
                    <img src="${escapeHtml(uAvatar)}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(fName)}&background=1d1d1f&color=fcd34d'" class="dir-avatar" alt="avatar">
                    <div class="dir-info">
                        <div class="dir-name-row">
                            <span class="dir-fullname">${escapeHtml(fName)}</span>
                            <span class="dir-handle">locket.cam/${escapeHtml(uName)}</span>
                            <span class="pill-badge pill-gold">Huy Hiệu Bật Cứng 100%</span>
                            <span class="pill-badge pill-blue">Full Filter + Âm Thanh + AI (${escapeHtml(userAiQuota.toLocaleString("vi-VN"))})</span>
                            ${isBlk ? `<span class="pill-badge pill-rose">Đang bị chặn</span>` : `<span class="pill-badge pill-emerald">Hoạt động 24/7</span>`}
                        </div>
                        <div class="dir-mono">
                            UID: ${escapeHtml(u.uid)} · Thành viên từ: ${escapeHtml(lockD)}
                        </div>
                    </div>
                </div>
                <div class="dir-right">
                    <span class="dir-tag">locket.com v7</span>
                </div>
            </div>`;
        }
    }

    return `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
<title>locket.com — Khoá Cứng Huy Hiệu Locket Gold, Bắt Tên + Avatar Thật & Full Filter/Âm Thanh</title>
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
    --apple-radius-xl: 32px;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif;
    background-color: var(--apple-bg);
    color: var(--apple-ink);
    -webkit-font-smoothing: antialiased;
    padding-bottom: 60px;
  }
  .locket-gold-modal-backdrop {
    position: fixed; inset: 0; z-index: 9999;
    background: rgba(0, 0, 0, 0.78);
    backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
    display: flex; align-items: center; justify-content: center; padding: 20px;
  }
  .locket-gold-sheet {
    width: 100%; max-width: 410px;
    background: linear-gradient(180deg, #1b2217 0%, #121510 55%, #0c0d0a 100%);
    border-radius: 36px; border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 24px 24px 30px; display: flex; flex-direction: column; align-items: center;
    text-align: center; color: #fff; box-shadow: 0 20px 60px rgba(0,0,0,0.8);
  }
  .sheet-gold-pill {
    padding: 6px 18px; border-radius: 999px;
    background: linear-gradient(180deg, #ffd666 0%, #f5b427 100%);
    color: #1c1917; font-size: 12px; font-weight: 800; letter-spacing: 0.04em;
  }
  .sheet-header-title { font-size: 26px; font-weight: 800; margin-top: 10px; }
  .locket-live-profile-card {
    margin-top: 16px; width: 100%; padding: 14px; border-radius: 22px;
    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);
    display: flex; align-items: center; gap: 12px; text-align: left;
  }
  .locket-live-avatar-wrap { position: relative; width: 56px; height: 56px; flex-shrink: 0; }
  .locket-live-avatar {
    width: 56px; height: 56px; border-radius: 50%; object-fit: cover;
    border: 2.5px solid #f5b427;
  }
  .locket-live-heart {
    position: absolute; right: -2px; bottom: -2px;
    width: 20px; height: 20px; border-radius: 50%;
    background: #f5b427; color: #1c1917; font-size: 11px; font-weight: 900;
    display: flex; align-items: center; justify-content: center; border: 2px solid #121510;
  }
  .sheet-art-wrap {
    width: 210px; height: 210px; border-radius: 16px; overflow: hidden;
    margin: 18px 0; box-shadow: 0 14px 36px rgba(0,0,0,0.5);
  }
  .sheet-art-img { width: 100%; height: 100%; object-fit: cover; }
  .sheet-done-btn {
    margin-top: 18px; width: 100%; padding: 15px 24px; border-radius: 999px; border: none;
    background: linear-gradient(180deg, #f7bf3e 0%, #eaa91e 100%);
    color: #171717; font-size: 16px; font-weight: 700; cursor: pointer;
  }
  .apple-global-nav {
    position: sticky; top: 0; z-index: 50;
    background: rgba(245, 245, 247, 0.86); backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--apple-border-light);
  }
  .nav-inner {
    max-width: 960px; margin: 0 auto; padding: 0 18px; height: 50px;
    display: flex; align-items: center; justify-content: space-between; gap: 8px;
  }
  .container { max-width: 960px; margin: 0 auto; padding: 26px 18px 0; display: flex; flex-direction: column; gap: 24px; }
  .apple-bento-light {
    background: var(--apple-surface); border: 1px solid var(--apple-border-light);
    border-radius: var(--apple-radius-xl); padding: 24px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.03);
  }
  .profile-hero-banner {
    background: linear-gradient(135deg, #1b2818 0%, #121810 100%);
    border-radius: 28px; padding: 24px; color: #fff;
    display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 18px;
  }
  .pill-badge { display: inline-block; padding: 3px 10px; border-radius: 999px; font-size: 11px; font-weight: 600; }
  .pill-gold { background: rgba(245, 158, 11, 0.2); border: 1px solid rgba(245, 158, 11, 0.4); color: #b45309; }
  .pill-blue { background: rgba(0, 113, 227, 0.12); color: #0051a8; }
  .pill-emerald { background: rgba(16, 185, 129, 0.15); color: #065f46; }
  .pill-rose { background: rgba(244, 63, 94, 0.15); color: #9f1239; }
  .apple-btn {
    display: inline-flex; align-items: center; justify-content: center; gap: 6px;
    border: none; text-decoration: none; cursor: pointer; font-family: inherit;
    padding: 11px 18px; border-radius: 14px; font-size: 13px; font-weight: 600;
  }
  .btn-gold { background: linear-gradient(180deg, #fcd34d 0%, #f59e0b 100%); color: #1d1d1f; font-weight: 700; }
  .btn-blue { background: var(--apple-blue); color: #fff; }
  .btn-ink { background: #1d1d1f; color: #fff; }
  .grid-2 { display: grid; grid-template-columns: 1fr; gap: 14px; }
  @media (min-width: 640px) { .grid-2 { grid-template-columns: repeat(2, 1fr); } }
  .apple-input-light {
    width: 100%; padding: 11px 14px; border-radius: 12px;
    border: 1px solid var(--apple-border-strong); font-size: 14px; margin-top: 6px;
  }
  .dir-item {
    padding: 14px 0; border-bottom: 1px solid rgba(0,0,0,0.06);
    display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;
  }
  .dir-left { display: flex; align-items: center; gap: 12px; }
  .dir-avatar { width: 46px; height: 46px; border-radius: 50%; object-fit: cover; border: 2px solid #f59e0b; }
  .dir-fullname { font-size: 15px; font-weight: 700; }
  .dir-handle { font-size: 12px; color: var(--apple-secondary); margin-left: 6px; }
  .dir-mono { font-family: monospace; font-size: 11px; color: var(--apple-tertiary); margin-top: 3px; }
  .dir-tag { font-family: monospace; font-size: 11px; padding: 4px 10px; border-radius: 999px; background: #f5f5f7; }
  .toast-msg {
    padding: 14px 18px; border-radius: 16px; background: #ecfdf5; border: 1px solid #a7f3d0;
    color: #065f46; font-size: 13px; font-weight: 600; display: ${statusMsg ? "block" : "none"};
  }
  .hidden { display: none !important; }
</style>
</head>
<body>

  <div id="locketGoldModal" class="locket-gold-modal-backdrop ${shouldShowPopup ? "" : "hidden"}">
    <div class="locket-gold-sheet">
      <span class="sheet-gold-pill">${escapeHtml(popupBadge)}</span>
      <h2 class="sheet-header-title">${escapeHtml(popupHeader)}</h2>

      <!-- HIỂN THỊ TÊN & AVATAR LOCKET THẬT NGAY TRONG POPUP -->
      <div class="locket-live-profile-card">
        <div class="locket-live-avatar-wrap">
          <img src="${escapeHtml(cachedAvatar)}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(cachedFullName)}&background=1d1d1f&color=fcd34d'" class="locket-live-avatar" alt="Avatar">
          <div class="locket-live-heart">💛</div>
        </div>
        <div style="min-width:0;">
          <div style="font-size:16px;font-weight:800;color:#fff;">${escapeHtml(cachedFullName)}</div>
          <div style="font-size:12px;color:#a3e635;">locket.cam/${escapeHtml(cachedUser || "gold")}</div>
          <div style="font-size:11px;color:#fcd34d;margin-top:2px;">Huy hiệu Locket Gold: ĐÃ KHOÁ CỨNG BẬT 100%</div>
        </div>
      </div>

      <div class="sheet-art-wrap">
        <img src="${escapeHtml(popupImage)}" onerror="this.src='${DEFAULT_GOLD_POPUP_SVG}'" class="sheet-art-img" alt="Gold">
      </div>
      <div style="font-size:18px;font-weight:800;">${escapeHtml(popupTitle)}</div>
      <div style="font-size:14px;color:#a1a1aa;margin-top:4px;">${escapeHtml(popupSubtitle)}</div>
      <button type="button" onclick="document.getElementById('locketGoldModal').classList.add('hidden')" class="sheet-done-btn">
        ${escapeHtml(popupBtnText)}
      </button>
    </div>
  </div>
// === HẾT PHẦN 3/4 — DÁN NỐI TIẾP PHẦN 4/4 NGAY BÊN DƯỚI ===
// ============================================================================
// FILE: locket_com_v7_full.js (PHẦN 4/4 NÂNG CẤP — BỘ ĐỊNH TUYẾN KHOÁ CỨNG HUY HIỆU)
// Dán nối tiếp ngay bên dưới Phần 3/4 để hoàn tất file locket_com_v7_full.js
// ============================================================================

  <header class="apple-global-nav">
    <div class="nav-inner">
      <a href="/setdate" style="text-decoration:none;color:var(--apple-ink);font-weight:700;font-size:14px;">
        locket.com · V7 Full Suite (Huy Hiệu Khoá Cứng + Filter + Âm Thanh)
      </a>
      <div style="display:flex;gap:8px;">
        <button type="button" onclick="document.getElementById('locketGoldModal').classList.remove('hidden')" class="apple-btn btn-gold" style="padding:6px 12px;font-size:11.5px;">
          ✨ Mở Popup Gold
        </button>
        <a href="/setdate?push_test=1" class="apple-btn btn-ink" style="padding:6px 12px;font-size:11.5px;">
          🔔 Test Push
        </a>
      </div>
    </div>
  </header>

  <main class="container">
    <div class="toast-msg">${escapeHtml(statusMsg || "")}</div>

    <!-- THẺ HỒ SƠ LOCKET THẬT (TÊN + AVATAR + CÔNG TẮC HUY HIỆU ĐÃ KHOÁ CỨNG) -->
    <section class="profile-hero-banner">
      <div style="display:flex;align-items:center;gap:16px;">
        <div class="locket-live-avatar-wrap" style="width:72px;height:72px;">
          <img src="${escapeHtml(cachedAvatar)}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(cachedFullName)}&background=1d1d1f&color=fcd34d'" style="width:72px;height:72px;border-radius:50%;object-fit:cover;border:3px solid #f5b427;" alt="Locket Avatar">
          <div class="locket-live-heart" style="width:24px;height:24px;font-size:13px;">💛</div>
        </div>
        <div>
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
            <span style="font-size:22px;font-weight:800;color:#fff;">${escapeHtml(cachedFullName)}</span>
            <span style="padding:3px 10px;border-radius:999px;background:#f5b427;color:#1c1917;font-size:11px;font-weight:800;">LOCKET GOLD SINCE 2026</span>
          </div>
          <div style="font-size:13.5px;color:#d4d4d8;margin-top:3px;">
            Link: <strong>locket.cam/${escapeHtml(cachedUser || "hkh0805")}</strong> · UID: <code>${escapeHtml(displayUid)}</code>
          </div>
          <div style="font-size:12px;color:#86efac;margin-top:6px;">
            ● Công tắc Huy hiệu Locket Gold: <strong>ĐÃ ÉP BẬT CỨNG 100% (Chống tự tắt)</strong> · Filter & Âm thanh: <strong>ĐÃ BẬT FULL</strong>
          </div>
        </div>
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;">
        <a href="/setdate?request_activate=1&gold_popup=1&push_test=1" class="apple-btn btn-gold">
          ⚡ Ép Bật Huy Hiệu & Đồng Bộ Ngay Lên Locket
        </a>
      </div>
    </section>

    <section class="apple-bento-light">
      <h2 style="font-size:20px;font-weight:700;margin-bottom:14px;">
        Cấu Hình Hồ Sơ Locket, Ngày Lên Gold & Số Lượt Filter AI
      </h2>
      <form method="GET" action="/setdate" style="display:flex;flex-direction:column;gap:16px;">
        <input type="hidden" name="save" value="1">
        <div class="grid-2">
          <div>
            <label style="font-size:12px;font-weight:600;">Tên hiển thị trên Locket (Tự bắt hoặc chỉnh tay)</label>
            <input type="text" name="fullName" value="${escapeHtml(cachedFullName)}" class="apple-input-light" placeholder="hello mấy em">
          </div>
          <div>
            <label style="font-size:12px;font-weight:600;">Username Locket (locket.cam/...)</label>
            <input type="text" name="username" value="${escapeHtml(cachedUser)}" class="apple-input-light" placeholder="hkh0805">
          </div>
        </div>
        <div class="grid-2">
          <div>
            <label style="font-size:12px;font-weight:600;">Link Avatar Locket (Tự bắt từ Locket hoặc dán URL)</label>
            <input type="text" name="avatar" value="${escapeHtml(cachedAvatar)}" class="apple-input-light" placeholder="https://...">
          </div>
          <div>
            <label style="font-size:12px;font-weight:600;">Ngày đăng ký Locket Gold (YYYY-MM-DD hoặc DD/MM/YYYY)</label>
            <input type="text" name="lockDate" value="${escapeHtml(cfg.lockDate)}" class="apple-input-light" placeholder="2026-05-25">
          </div>
        </div>
        <div class="grid-2">
          <div>
            <label style="font-size:12px;font-weight:600;">Số lượt Filter AI / Tạo diện mạo</label>
            <input type="number" name="aiFilterQuota" value="${escapeHtml(String(currentAiQuota))}" class="apple-input-light">
          </div>
          <div>
            <label style="font-size:12px;font-weight:600;">Ngày hết hạn gói Gold</label>
            <input type="text" name="expireDate" value="${escapeHtml(cfg.expireDate)}" class="apple-input-light" placeholder="2099-12-31">
          </div>
        </div>
        <div class="grid-2">
          <button type="submit" class="apple-btn btn-blue">💾 Lưu Cấu Hình & Khoá Cứng Huy Hiệu + Filter + Âm Thanh</button>
          <a href="/setdate?reset=1" class="apple-btn btn-ink">Khôi Phục Mặc Định (25/05/2026)</a>
        </div>
      </form>
    </section>

    <section class="apple-bento-light">
      <h3 style="font-size:18px;font-weight:700;margin-bottom:10px;">
        Danh Sách Tài Khoản Đã Bắt Tên + Avatar Thật (${goldUsersList.length})
      </h3>
      <div>${goldDirectoryHtml}</div>
    </section>
  </main>
</body>
</html>`;
}

// ĐỒNG BỘ CHỦ ĐỘNG: ÉP BẬT HUY HIỆU LÊN CẢ API.LOCKETCAMERA.COM LẪN CLOUD FUNCTIONS
function forcePushBadgeToLocketServers(callback) {
    const cfg = loadConfig();
    const uid = Env.read(USER_ID_CACHE_KEY);
    const rcKey = Env.read(RC_API_KEY_CACHE_KEY);
    const bearer = Env.read(AUTH_TOKEN_CACHE_KEY);
    const quotaStr = String(sanitizeQuotaNumber(cfg.aiFilterQuota, 999999));
    const nowMs = Date.now();

    let pending = 0;
    const doneOne = () => {
        pending--;
        if (pending <= 0 && callback) callback();
    };

    if (uid && rcKey) {
        pending++;
        Env.httpPost({
            url: `https://api.revenuecat.com/v1/subscribers/${encodeURIComponent(uid)}/attributes`,
            headers: {
                "Authorization": rcKey,
                "Content-Type": "application/json",
                "X-Platform": "iOS"
            },
            body: JSON.stringify({
                attributes: {
                    locket_gold_badge: { value: "true", updated_at_ms: nowMs },
                    badge: { value: "locket_gold", updated_at_ms: nowMs },
                    show_gold_badge: { value: "true", updated_at_ms: nowMs },
                    gold_badge_enabled: { value: "true", updated_at_ms: nowMs },
                    is_gold: { value: "true", updated_at_ms: nowMs },
                    audio_recording_enabled: { value: "true", updated_at_ms: nowMs },
                    holiday_effects_unlocked: { value: "true", updated_at_ms: nowMs },
                    camera_effects_unlocked: { value: "true", updated_at_ms: nowMs },
                    ai_filter_quota: { value: quotaStr, updated_at_ms: nowMs }
                }
            })
        }, () => doneOne());
    }

    if (bearer) {
        const badgePayload = JSON.stringify({
            data: {
                badge: "locket_gold",
                locket_gold_badge: true,
                gold_badge: true,
                show_gold_badge: true,
                gold_badge_enabled: true
            }
        });
        pending += 2;
        Env.httpPost({
            url: "https://api.locketcamera.com/changeProfileInfo",
            headers: { "Authorization": bearer, "Content-Type": "application/json" },
            body: badgePayload
        }, () => doneOne());
        Env.httpPost({
            url: "https://us-central1-locket-4252a.cloudfunctions.net/changeProfileInfo",
            headers: { "Authorization": bearer, "Content-Type": "application/json" },
            body: badgePayload
        }, () => doneOne());
    }

    if (pending === 0 && callback) callback();
}

function runCronBadgeSync() {
    const cfg = loadConfig();
    forcePushBadgeToLocketServers(() => {
        if (cfg.notifyOnSync) {
            fireNativeAppNotification(cfg, true);
        }
        Env.done();
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

    // 1. WEB PANEL QUẢN TRỊ (/setdate hoặc locket.gold)
    if (url.includes("/setdate") || url.includes("locket.gold")) {
        const q = parseQuery(url);
        let statusMsg = "";
        let forcePopup = q.gold_popup === "1";

        if (q.reset === "1") {
            saveConfig({ ...DEFAULT_CONFIG });
            statusMsg = "Đã khôi phục mặc định & khoá cứng Huy hiệu Locket Gold!";
        } else if (q.save === "1" || q.lockDate || q.aiFilterQuota !== undefined) {
            if (q.username) Env.write(q.username.trim().replace(/^@/, ""), USERNAME_CACHE_KEY);
            if (q.fullName) Env.write(q.fullName.trim(), FULLNAME_CACHE_KEY);
            if (q.avatar) Env.write(q.avatar.trim(), AVATAR_CACHE_KEY);

            const isoLock = toIsoDate(q.lockDate || currentCfg.lockDate, DEFAULT_CONFIG.lockDate, "T08:30:00Z");
            const isoExp = toIsoDate(q.expireDate || currentCfg.expireDate, DEFAULT_CONFIG.expireDate, "T23:59:59Z");
            const newAiQuota = sanitizeQuotaNumber(q.aiFilterQuota !== undefined ? q.aiFilterQuota : currentCfg.aiFilterQuota, 999999);

            const updated = {
                ...currentCfg,
                lockDate: isoLock.slice(0, 10),
                expireDate: isoExp.slice(0, 10),
                aiFilterQuota: newAiQuota,
                aiFilterDailyLimit: newAiQuota,
                alwaysForceBadge: true,
                hardLockBadgeSwitch: true
            };
            saveConfig(updated);
            if (uid && !uid.includes("RCAnonymousID")) {
                upsertUserRecord(uid, {
                    username: Env.read(USERNAME_CACHE_KEY),
                    full_name: Env.read(FULLNAME_CACHE_KEY),
                    avatar: Env.read(AVATAR_CACHE_KEY),
                    lockDate: updated.lockDate,
                    aiQuota: newAiQuota,
                    touch: true
                });
            }
            statusMsg = "Đã lưu Hồ sơ, khoá cứng Huy hiệu Locket Gold + Full Filter & Âm thanh!";
        }

        if (q.request_activate === "1" || q.push_test === "1") {
            fireNativeAppNotification(loadConfig(), true);
            forcePopup = true;
            statusMsg = "Đã bắn thông báo & ép bật cứng Huy hiệu Locket Gold!";
        }

        const renderNow = () => {
            const latest = loadConfig();
            Env.done({
                response: {
                    status: 200,
                    headers: {
                        "Content-Type": "text/html; charset=utf-8",
                        "Cache-Control": "no-store, no-cache, must-revalidate"
                    },
                    body: renderBentoWebPanel(latest, statusMsg, false, forcePopup)
                }
            });
        };

        if (q.request_activate === "1") {
            forcePushBadgeToLocketServers(renderNow);
        } else {
            renderNow();
        }
    } else if (
        // CHẶN ĐỨNG NGAY TỪ LÚC GỬI REQUEST (SHORT-CIRCUIT HTTP 200) NẾU LOCKET GỌI LỆNH BẬT/TẮT CÔNG TẮC HUY HIỆU:
        // Giúp công tắc "Huy hiệu Locket Gold" giữ nguyên trạng thái BẬT (màu vàng) tức thì mà không bị server thật từ chối!
        currentCfg.interceptBadgeToggleRequest !== false &&
        (url.includes("changeProfileInfo") || url.includes("updateProfileBadge")) &&
        typeof $request.body === "string" &&
        ($request.body.includes("badge") || $request.body.includes("locket_gold"))
    ) {
        const forcedResp = buildForcedProfileBadgeResponse({}, currentCfg, uid);
        Env.done({
            response: {
                status: 200,
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Cache-Control": "no-store, no-cache, must-revalidate"
                },
                body: JSON.stringify(forcedResp)
            }
        });
    } else {
        // 2. XỬ LÝ MỌI REQUEST KHÁC TRONG LOCKET:
        fireNativeAppNotification(currentCfg, false);

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
        if (typeof modifiedBody === "string" && modifiedBody.trim().startsWith("{")) {
            try {
                const reqJson = JSON.parse(modifiedBody);
                let touched = false;
                const nowMs = Date.now();
                const quotaStr = String(sanitizeQuotaNumber(currentCfg.aiFilterQuota, 999999));

                if (reqJson.attributes && typeof reqJson.attributes === "object") {
                    reqJson.attributes.locket_gold_badge = { value: "true", updated_at_ms: nowMs };
                    reqJson.attributes.badge = { value: "locket_gold", updated_at_ms: nowMs };
                    reqJson.attributes.show_gold_badge = { value: "true", updated_at_ms: nowMs };
                    reqJson.attributes.gold_badge_enabled = { value: "true", updated_at_ms: nowMs };
                    reqJson.attributes.is_gold = { value: "true", updated_at_ms: nowMs };
                    reqJson.attributes.holiday_effects_unlocked = { value: "true", updated_at_ms: nowMs };
                    reqJson.attributes.camera_effects_unlocked = { value: "true", updated_at_ms: nowMs };
                    reqJson.attributes.audio_recording_enabled = { value: "true", updated_at_ms: nowMs };
                    reqJson.attributes.ai_filter_quota = { value: quotaStr, updated_at_ms: nowMs };
                    touched = true;
                }

                if (
                    url.includes("changeProfileInfo") ||
                    url.includes("updateProfile") ||
                    url.includes("updateUser")
                ) {
                    if (!reqJson.data || typeof reqJson.data !== "object") {
                        reqJson.data = {};
                    }
                    reqJson.data.badge = "locket_gold";
                    reqJson.data.locket_gold_badge = true;
                    reqJson.data.gold_badge = true;
                    reqJson.data.has_gold_badge = true;
                    reqJson.data.show_gold_badge = true;
                    reqJson.data.gold_badge_enabled = true;
                    reqJson.data.hide_gold_badge = false;
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

    fireNativeAppNotification(cfg, false);

    const isProfileBadgeEndpoint = (
        reqUrl.includes("changeProfileInfo") ||
        reqUrl.includes("updateProfile") ||
        reqUrl.includes("updateUser") ||
        reqUrl.includes("getUser") ||
        reqUrl.includes("fetchUser")
    );

    const rawBody = $response.body || "";
    let obj = null;
    if (typeof rawBody === "string" && (rawBody.trim().startsWith("{") || rawBody.trim().startsWith("["))) {
        try {
            obj = JSON.parse(rawBody);
        } catch (e) {
            obj = null;
        }
    }

    if (isProfileBadgeEndpoint && (!obj || obj.error || ($response && $response.status >= 400))) {
        const forcedProfileObj = buildForcedProfileBadgeResponse(obj, cfg, resolvedUserId);
        const resHeaders = { ...($response.headers || {}) };
        delete resHeaders["content-length"];
        delete resHeaders["Content-Length"];
        resHeaders["Content-Type"] = "application/json; charset=utf-8";
        resHeaders["Cache-Control"] = "no-store, no-cache, must-revalidate";
        Env.done({
            status: 200,
            headers: resHeaders,
            body: JSON.stringify(forcedProfileObj)
        });
    } else if (!obj || typeof obj !== "object") {
        Env.done({});
    } else {
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
            if (isProfileBadgeEndpoint) {
                obj = buildForcedProfileBadgeResponse(obj, cfg, resolvedUserId);
            }
            if (obj.error && typeof obj.error === "object") {
                delete obj.error;
                obj.result = obj.result || {
                    status: 200,
                    ok: true,
                    can_use: true,
                    badge: "locket_gold",
                    locket_gold_badge: true,
                    remaining: sanitizeQuotaNumber(cfg.aiFilterQuota, 999999)
                };
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
        const finalStatus = (isRevenueCat || isOfferings || isFirebaseRemoteConfig || isProfileBadgeEndpoint || origStatus >= 300) ? 200 : origStatus;

        Env.done({
            status: finalStatus,
            headers: resHeaders,
            body: JSON.stringify(obj)
        });
    }
}

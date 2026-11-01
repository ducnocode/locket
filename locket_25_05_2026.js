// file: locket_25_05_2026.js
// Chạy chung cho cả http-request (xoá ETag chống 304) và http-response (ép cứng Entitlement Gold)

const LOCK_DATE = "2026-05-25T00:00:00Z";
const EXPIRE_DATE = "2099-12-31T23:59:59Z";
const PRODUCT_ID = "locket_1600_1y";

if (typeof $response === "undefined") {
    // Pha 1: HTTP-REQUEST -> Xoá toàn bộ cờ cache để ép RevenueCat trả về 200 OK kèm JSON đầy đủ
    const headers = $request.headers || {};
    for (const key of Object.keys(headers)) {
        const lower = key.toLowerCase();
        if (
            lower === "x-revenuecat-etag" ||
            lower === "if-none-match" ||
            lower === "if-modified-since"
        ) {
            delete headers[key];
        }
    }
    $done({ headers });
} else {
    // Pha 2: HTTP-RESPONSE -> Đóng băng gói đăng ký và huy hiệu
    let obj;
    try {
        obj = JSON.parse($response.body || "{}");
    } catch (e) {
        obj = {};
    }

    if (!obj || typeof obj !== "object") {
        obj = {};
    }

    const nowIso = new Date().toISOString();
    obj.request_date = obj.request_date || nowIso;
    obj.request_date_ms = obj.request_date_ms || Date.now();

    if (!obj.subscriber || typeof obj.subscriber !== "object") {
        obj.subscriber = {};
    }

    // Khoá cứng ngày tạo tài khoản / đăng ký gốc về 25/05/2026
    obj.subscriber.first_seen = LOCK_DATE;
    obj.subscriber.original_application_version = obj.subscriber.original_application_version || "1.0";
    obj.subscriber.original_purchase_date = LOCK_DATE;
    obj.subscriber.management_url = "https://apps.apple.com/account/subscriptions";

    if (!obj.subscriber.subscriptions || typeof obj.subscriber.subscriptions !== "object") {
        obj.subscriber.subscriptions = {};
    }

    if (!obj.subscriber.entitlements || typeof obj.subscriber.entitlements !== "object") {
        obj.subscriber.entitlements = {};
    }

    const lockedSubscription = {
        billing_issues_detected_at: null,
        expires_date: EXPIRE_DATE,
        grace_period_expires_date: null,
        is_sandbox: false,
        original_purchase_date: LOCK_DATE,
        ownership_type: "PURCHASED",
        period_type: "normal",
        purchase_date: LOCK_DATE,
        refunded_at: null,
        store: "app_store",
        unsubscribe_detected_at: null
    };

    const lockedEntitlement = {
        expires_date: EXPIRE_DATE,
        grace_period_expires_date: null,
        product_identifier: PRODUCT_ID,
        purchase_date: LOCK_DATE
    };

    // Ghi đè cả mã gói năm và gói tháng phòng khi bản cập nhật đổi mã
    obj.subscriber.subscriptions[PRODUCT_ID] = lockedSubscription;
    obj.subscriber.subscriptions["locket_399_1m"] = {
        ...lockedSubscription
    };

    // Khoá cứng cả 2 key "Gold" và "pro" để không bao giờ rớt huy hiệu
    obj.subscriber.entitlements["Gold"] = lockedEntitlement;
    obj.subscriber.entitlements["pro"] = {
        ...lockedEntitlement
    };

    // Làm sạch ETag ở chiều về để app không lưu trạng thái đối chiếu lần sau
    const resHeaders = $response.headers || {};
    for (const key of Object.keys(resHeaders)) {
        const lower = key.toLowerCase();
        if (lower === "x-revenuecat-etag" || lower === "etag") {
            delete resHeaders[key];
        }
    }
    resHeaders["Content-Type"] = "application/json; charset=utf-8";

    $done({
        status: 200,
        headers: resHeaders,
        body: JSON.stringify(obj)
    });
}

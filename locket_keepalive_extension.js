// file: locket_keepalive_extension.js
// Runtime: Shadowrocket / Loon / Surge / Quantumult X
// Chức năng: Gửi ngầm heartbeat ping mỗi 5 phút để làm mới trạng thái subscription mà không cần mở app hay tương tác.

const KEEP_ALIVE_KEY = "LOCKET_PERSISTENT_KEEPALIVE_TS";
const TARGET_PID = "locket_1600_1y";
const TARGET_TXID = "490001234567893";

const PersistentEngine = (() => {
    return {
        ping() {
            try {
                const rcAuth = typeof $persistentStore !== "undefined" ? $persistentStore.read("RC_AUTH") : null;
                const uid = typeof $persistentStore !== "undefined" ? $persistentStore.read("RC_UID") : null;
                const ua = typeof $persistentStore !== "undefined" ? $persistentStore.read("LOCKET_UA") : "Locket/1.0 iOS/26.0";
                
                if (!rcAuth || !uid) return;

                const nowMs = Date.now();
                const fakeReceipt = btoa(JSON.stringify({
                    environment: "Production",
                    bundle_id: "com.locket.Locket",
                    application_version: "1.0",
                    in_app: [{
                        quantity: "1",
                        product_id: TARGET_PID,
                        transaction_id: TARGET_TXID,
                        original_transaction_id: TARGET_TXID,
                        purchase_date_ms: "1779697800000",
                        original_purchase_date_ms: "1779697800000",
                        expires_date_ms: "4102444799000",
                        is_trial_period: "false"
                    }]
                }));

                const opts = {
                    url: "https://api.revenuecat.com/v1/receipts",
                    headers: {
                        "Authorization": rcAuth,
                        "Content-Type": "application/json",
                        "X-Platform": "iOS",
                        "X-Client-Bundle-ID": "com.locket.Locket",
                        "User-Agent": ua
                    },
                    body: JSON.stringify({
                        app_user_id: uid,
                        fetch_token: fakeReceipt,
                        product_id: TARGET_PID,
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
                };

                if (typeof $httpClient !== "undefined" && typeof $httpClient.post === "function") {
                    $httpClient.post(opts, () => {});
                } else if (typeof $task !== "undefined" && typeof $task.fetch === "function") {
                    $task.fetch(Object.assign({ method: "POST" }, opts)).then(() => {}, () => {});
                }
            } catch (e) {}
        }
    };
})();

PersistentEngine.ping();
if (typeof $done === "function") $done({});

# Shadowrocket: 2026-11-03 18:50:00 (Fully Localized Engine - No Hosting Required)
[General]
bypass-tun = 10.0.0.0/8, 100.64.0.0/10, 127.0.0.0/8, 169.254.0.0/16, 172.16.0.0/12, 192.168.0.0/16, fc00::/7, fe80::/10
dns-server = system, 1.1.1.1, 1.0.0.1, 8.8.8.8, 8.8.4.4
doh-server = https://1.1.1.1/dns-query, https://dns.google/dns-query
fallback-dns-server = system, 1.1.1.1, 8.8.8.8
ipv6 = true
prefer-ipv6 = false
dns-direct-system = true
always-real-ip = *.googlevideo.com, *.youtube.com, youtubei.googleapis.com, api.revenuecat.com, rc-backup.revenuecat.com, firebaseremoteconfig.googleapis.com, us-central1-locket-4252a.cloudfunctions.net, api.locketcamera.com
hijack-dns = *:53
udp-policy-not-supported-behaviour = REJECT

[Rule]
# ===== 1. CHẶN QUIC (UDP 443) ÉP 100% LOCKET & YOUTUBE ĐI QUA MITM =====
AND,((PROTOCOL,UDP),(DEST-PORT,443),(DOMAIN-SUFFIX,googlevideo.com)),REJECT-NO-DROP
AND,((PROTOCOL,UDP),(DEST-PORT,443),(DOMAIN-SUFFIX,youtubei.googleapis.com)),REJECT-NO-DROP
AND,((PROTOCOL,UDP),(DEST-PORT,443),(DOMAIN-SUFFIX,youtube.com)),REJECT-NO-DROP
AND,((PROTOCOL,UDP),(DEST-PORT,443),(DOMAIN-SUFFIX,ggpht.com)),REJECT-NO-DROP
AND,((PROTOCOL,UDP),(DEST-PORT,443),(DOMAIN-SUFFIX,ytimg.com)),REJECT-NO-DROP
AND,((PROTOCOL,UDP),(DEST-PORT,443),(DOMAIN-SUFFIX,revenuecat.com)),REJECT-NO-DROP
AND,((PROTOCOL,UDP),(DEST-PORT,443),(DOMAIN,firebaseremoteconfig.googleapis.com)),REJECT-NO-DROP
AND,((PROTOCOL,UDP),(DEST-PORT,443),(DOMAIN,us-central1-locket-4252a.cloudfunctions.net)),REJECT-NO-DROP
AND,((PROTOCOL,UDP),(DEST-PORT,443),(DOMAIN-SUFFIX,locketcamera.com)),REJECT-NO-DROP
AND,((PROTOCOL,UDP),(DEST-PORT,443),(DOMAIN-SUFFIX,googleapis.com)),REJECT-NO-DROP
AND,((PROTOCOL,UDP),(DEST-PORT,443),(DOMAIN-SUFFIX,spotify.com)),REJECT-NO-DROP

# ===== 2. CHẶN QUẢNG CÁO YOUTUBE & GOOGLE TẦNG MẠNG =====
DOMAIN-SUFFIX,adservice.google.com,REJECT
DOMAIN-SUFFIX,admob.com,REJECT
DOMAIN-SUFFIX,googlesyndication.com,REJECT
DOMAIN-SUFFIX,doubleclick.net,REJECT
DOMAIN-SUFFIX,analytics.google.com,REJECT
DOMAIN-SUFFIX,crashlytics.com,REJECT
DOMAIN-SUFFIX,ads.youtube.com,REJECT
DOMAIN-KEYWORD,pagead,REJECT
URL-REGEX,^https?:\/\/[\w-]+\.googlevideo\.com\/(?!dclk_video_ads).+?&oad,REJECT-TINYGIF
URL-REGEX,^https?:\/\/(www|s)\.youtube\.com\/api\/stats\/(ads|qoe\?adcontext),REJECT-TINYGIF
URL-REGEX,^https?:\/\/(www|s)\.youtube\.com\/(pagead|ptracking),REJECT-TINYGIF

# ===== 3. ĐỊNH TUYẾN TRỰC TIẾP MAX TỐC ĐỘ =====
DOMAIN-SUFFIX,revenuecat.com,DIRECT
DOMAIN,firebaseremoteconfig.googleapis.com,DIRECT
DOMAIN,us-central1-locket-4252a.cloudfunctions.net,DIRECT
DOMAIN-SUFFIX,locketcamera.com,DIRECT
DOMAIN-SUFFIX,firebasestorage.googleapis.com,DIRECT
DOMAIN,locket.gold,DIRECT
FINAL,DIRECT

[Host]
locket.gold = 198.18.0.1

[URL Rewrite]
^http:\/\/locket\.gold\/?(.*)$ https://api.revenuecat.com/setdate$1 302
^https?:\/\/[\w-]+\.googlevideo\.com\/(?!(dclk_video_ads|videoplayback\?)).+&oad _ reject-200
^https?:\/\/[\w-]+\.googlevideo\.com\/.+&(oad|ctier) _ reject-200
^https?:\/\/(www|s)\.youtube\.com\/api\/stats\/ads _ reject-200
^https?:\/\/(www|s)\.youtube\.com\/(pagead|ptracking) _ reject-200
^https?:\/\/s\.youtube\.com\/api\/stats\/qoe\?adcontext _ reject-200
(^https?:\/\/[\w-]+\.googlevideo\.com\/(?!dclk_video_ads).+?)&ctier=L(&.+?),ctier,(.+) $1$2$3 302

[Header Rewrite]
http-request ^https?:\/\/(api|rc-backup)\.revenuecat\.com\/.+ header-del x-revenuecat-etag
http-request ^https?:\/\/(api|rc-backup)\.revenuecat\.com\/.+ header-del X-RevenueCat-ETag
http-request ^https?:\/\/(api|rc-backup)\.revenuecat\.com\/.+ header-del If-None-Match
http-request ^https?:\/\/(api|rc-backup)\.revenuecat\.com\/.+ header-del if-none-match
http-request ^https?:\/\/(api|rc-backup)\.revenuecat\.com\/.+ header-del If-Modified-Since
http-request ^https?:\/\/(api|rc-backup)\.revenuecat\.com\/.+ header-del if-modified-since
http-request ^https?:\/\/(api|rc-backup)\.revenuecat\.com\/.+ header-del X-Signature
http-request ^https?:\/\/(api|rc-backup)\.revenuecat\.com\/.+ header-del x-signature
http-request ^https?:\/\/(api|rc-backup)\.revenuecat\.com\/.+ header-replace Cache-Control no-cache
http-response ^https?:\/\/(api|rc-backup)\.revenuecat\.com\/.+ header-del X-RevenueCat-ETag
http-response ^https?:\/\/(api|rc-backup)\.revenuecat\.com\/.+ header-del x-revenuecat-etag
http-response ^https?:\/\/(api|rc-backup)\.revenuecat\.com\/.+ header-del ETag
http-response ^https?:\/\/(api|rc-backup)\.revenuecat\.com\/.+ header-del etag
http-response ^https?:\/\/(api|rc-backup)\.revenuecat\.com\/.+ header-del X-Signature
http-response ^https?:\/\/(api|rc-backup)\.revenuecat\.com\/.+ header-del x-signature
http-response ^https?:\/\/(api|rc-backup)\.revenuecat\.com\/.+ header-replace Cache-Control no-store

http-request ^https:\/\/firebaseremoteconfig\.googleapis\.com\/v1\/projects\/locket-4252a\/.+ header-del If-None-Match
http-request ^https:\/\/firebaseremoteconfig\.googleapis\.com\/v1\/projects\/locket-4252a\/.+ header-del if-none-match
http-request ^https:\/\/firebaseremoteconfig\.googleapis\.com\/v1\/projects\/locket-4252a\/.+ header-del X-Goog-If-None-Match
http-request ^https:\/\/firebaseremoteconfig\.googleapis\.com\/v1\/projects\/locket-4252a\/.+ header-del x-goog-if-none-match
http-request ^https:\/\/firebaseremoteconfig\.googleapis\.com\/v1\/projects\/locket-4252a\/.+ header-replace Cache-Control no-cache
http-response ^https:\/\/firebaseremoteconfig\.googleapis\.com\/v1\/projects\/locket-4252a\/.+ header-del ETag
http-response ^https:\/\/firebaseremoteconfig\.googleapis\.com\/v1\/projects\/locket-4252a\/.+ header-del etag

http-request ^https:\/\/(spclient\.wg\.spotify\.com|.*-spclient\.spotify\.com(:443)?)\/user-customization-service\/v1\/customize$ header-del if-none-match

[Script]
# ===== BẢNG ĐIỀU KHIỂN WEB UI & LOCKET GOLD STOREKIT 2 (LOCAL PAYLOAD - KHÔNG CẦN HOSTING) =====
locket_web_panel = type=http-request,pattern=^https?:\/\/(api\.revenuecat\.com\/setdate|locket\.gold).*$,script-path=https://raw.githubusercontent.com/ducnocode/locket/refs/heads/main/locket_25_05_2026.js,timeout=60
locket_strip_etag = type=http-request,pattern=^https?:\/\/(api|rc-backup)\.revenuecat\.com\/.+\/(receipts|subscribers|offerings|attributes).*$,requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/ducnocode/locket/refs/heads/main/locket_25_05_2026.js,timeout=60
locket_gold_max = type=http-response,pattern=^https?:\/\/(api|rc-backup)\.revenuecat\.com\/.+\/(receipts|subscribers|offerings|attributes).*$,requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/ducnocode/locket/refs/heads/main/locket_25_05_2026.js,timeout=60
locket_rc = type=http-response,pattern=^https:\/\/firebaseremoteconfig\.googleapis\.com\/v1\/projects\/locket-4252a\/.+,script-path=https://raw.githubusercontent.com/andanh447/locketgold_tool/refs/heads/main/locket_gold_fire_base_config.js,requires-body=1,max-size=-1,timeout=60

# ===== SCRIPT CỤC BỘ AN TOÀN TUYỆT ĐỐI CHO ĐĂNG/NHẬN ẢNH VÀ GIỮ HUY HIỆU =====
locket_badge_req = type=http-request,pattern=^https?:\/\/(us-central1-locket-4252a\.cloudfunctions\.net|api\.locketcamera\.com)\/(changeProfileInfo|updateUser).*$,requires-body=1,max-size=262144,script-path=data:text/javascript;charset=utf-8,let%20b%3D%24request.body%3Bif(typeof%20b%3D%3D%3D%22string%22%26%26b.trim().startsWith(%22%7B%22))%7Btry%7Blet%20o%3DJSON.parse(b)%3Bif(o.data%26%26typeof%20o.data%3D%3D%3D%22object%22)%7Bo.data.badge%3D%22locket_gold%22%3Bo.data.locket_gold_badge%3Dtrue%3Bo.data.is_gold%3Dtrue%3B%7Delse%7Bo.badge%3D%22locket_gold%22%3Bo.locket_gold_badge%3Dtrue%3Bo.is_gold%3Dtrue%3B%7D%24done(%7Bbody%3AJSON.stringify(o)%7D)%3B%7Dcatch(e)%7B%24done(%7B%7D)%3B%7D%7Delse%7B%24done(%7B%7D)%3B%7D,timeout=15

locket_badge_res = type=http-response,pattern=^https?:\/\/(us-central1-locket-4252a\.cloudfunctions\.net|api\.locketcamera\.com)\/(fetchUser|getUserByUsername|changeProfileInfo|updateUser|login|verifyCustomToken).*$,requires-body=1,max-size=524288,script-path=data:text/javascript;charset=utf-8,let%20b%3D%24response.body%3Bif(typeof%20b%3D%3D%3D%22string%22%26%26b.trim().startsWith(%22%7B%22))%7Btry%7Blet%20o%3DJSON.parse(b)%3Bfunction%20f(x%2Cd)%7Bif(!x%7C%7Ctypeof%20x!%3D%3D%22object%22%7C%7Cd%3E7)return%3Bif(Array.isArray(x))%7Bfor(let%20i%3D0%3Bi%3Cx.length%3Bi%2B%2B)f(x%5Bi%5D%2Cd%2B1)%3Breturn%3B%7Dif(%22uid%22in%20x%7C%7C%22badge%22in%20x%7C%7C%22locket_gold_badge%22in%20x%7C%7C(%22username%22in%20x%26%26%22profile_picture_url%22in%20x))%7Bx.badge%3D%22locket_gold%22%3Bx.locket_gold_badge%3Dtrue%3Bx.has_gold_badge%3Dtrue%3Bx.show_gold_badge%3Dtrue%3Bx.is_gold%3Dtrue%3B%7Dfor(let%20k%20of%20Object.keys(x))%7Bif(k%3D%3D%3D%22badge%22)x%5Bk%5D%3D%22locket_gold%22%2Celse%20if(k%3D%3D%3D%22locket_gold_badge%22%7C%7Ck%3D%3D%3D%22has_gold_badge%22%7C%7Ck%3D%3D%3D%22show_gold_badge%22)x%5Bk%5D%3Dtrue%3Belse%20if(typeof%20x%5Bk%5D%3D%3D%3D%22object%22%26%26x%5Bk%5D!%3D%3Dnull)f(x%5Bk%5D%2Cd%2B1)%3B%7D%7Df(o%2C0)%3B%24done(%7Bbody%3AJSON.stringify(o)%7D)%3B%7Dcatch(e)%7B%24done(%7B%7D)%3B%7D%7Delse%7B%24done(%7B%7D)%3B%7D,timeout=15

# ===== CRON HEARTBEAT KEEPALIVE (TỰ ĐỘNG LÀM MỚI MỖI 5 PHÚT GIỮ HUY HIỆU VĨNH VIỄN) =====
locket_keepalive_cron = type=cron,cronexp="*/5 * * * *",wake-system=1,timeout=30,script-path=data:text/javascript;charset=utf-8,const%20PID%3D%22locket_1600_1y%22%2CTXID%3D%22490001234567893%22%2CnowMs%3DDate.now()%3Bfunction%20load(k)%7Bif(typeof%20%24persistentStore!%3D%3D%22undefined%22)return%20%24persistentStore.read(k)%3Bif(typeof%20%24prefs!%3D%3D%22undefined%22)return%20%24prefs.valueForKey(k)%3Breturn%20null%3B%7Dfunction%20httpPost(opts%2Ccb)%7Bif(typeof%20%24httpClient!%3D%3D%22undefined%22)%24httpClient.post(opts%2C(e%2Cr%2Cd)%3D%3Ecb(e%2Cr%2Cd))%3Belse%20if(typeof%20%24task!%3D%3D%22undefined%22)%24task.fetch(Object.assign(%7Bmethod%3A%22POST%22%7D%2Copts)).then(r%3D%3Ecb(null%2Cr%2Cr.body)%2Ce%3D%3Ecb(e%2Cnull%2Cnull))%3Belse%20cb()%3B%7Dconst%20rcAuth%3Dload(%22RC_AUTH%22)%2Cuid%3Dload(%22RC_UID%22)%2Cua%3Dload(%22LOCKET_UA%22)%7C%7C%22Locket%2F1.0%20iOS%2F26.0%22%3Bif(rcAuth%26%26uid)%7Bconst%20fakeReceipt%3Dbtoa(JSON.stringify(%7Benvironment%3A%22Production%22%2Cbundle_id%3A%22com.locket.Locket%22%2Cin_app%3A%5B%7Bquantity%3A%221%22%2Cproduct_id%3APID%2Ctransaction_id%3ATXID%2Coriginal_transaction_id%3ATXID%2Cpurchase_date_ms%3A%221779697800000%22%2Cexpires_date_ms%3A%224102444799000%22%7D%5D%7D))%3BhttpPost(%7Burl%3A%22https%3A%2F%2Fapi.revenuecat.com%2Fv1%2Freceipts%22%2Cheaders%3A%7B%22Authorization%22%3ArcAuth%2C%22Content-Type%22%3A%22application%2Fjson%22%2C%22X-Platform%22%3A%22iOS%22%2C%22User-Agent%22%3Aua%7D%2Cbody%3AJSON.stringify(%7Bapp_user_id%3Auid%2Cfetch_token%3AfakeReceipt%2Cproduct_id%3APID%2Cprice%3A399000%2Ccurrency%3A%22VND%22%2Cattributes%3A%7Blocket_gold_badge%3A%7Bvalue%3A%22true%22%2Cupdated_at_ms%3AnowMs%7D%2Cbadge%3A%7Bvalue%3A%22locket_gold%22%2Cupdated_at_ms%3AnowMs%7D%7D%7D)%7D%2C()%3D%3E%24done())%3B%7Delse%7B%24done()%3B%7D

# ===== YOUTUBE PREMIUM FULL + HIỆN LOGO PREMIUM + PIP + NGHE TẮT MÀN =====
youtube.request = type=http-request,pattern=^https:\/\/youtubei\.googleapis\.com\/youtubei\/v1\/(browse|next|player|reel\/reel_watch_sequence|get_watch|account\/account_menu),requires-body=1,max-size=-1,binary-body-mode=1,engine=jsc,script-path=https://fastly.jsdelivr.net/gh/Maasea/sgmodule@master/Script/Youtube/dist/youtube.request.preview.js,timeout=60
youtube.response = type=http-response,pattern=^https:\/\/youtubei\.googleapis\.com\/youtubei\/v1\/(browse|next|player|search|reel\/reel_watch_sequence|guide|account\/get_setting|account\/account_menu|get_watch),requires-body=1,max-size=-1,binary-body-mode=1,engine=jsc,script-path=https://fastly.jsdelivr.net/gh/Maasea/sgmodule@master/Script/Youtube/dist/youtube.response.preview.js,argument="{\"lyricLang\":\"vi\",\"captionLang\":\"vi\",\"blockUpload\":true,\"blockImmersive\":true,\"debug\":false}",timeout=60

# ===== SUB-STORE =====
Sub-Store Core = type=http-request,pattern=^https?:\/\/sub\.store\/((download)|api\/(preview|sync|(utils\/node-info))),script-path=https://github.com/sub-store-org/Sub-Store/releases/latest/download/sub-store-1.min.js,requires-body=1,timeout=120
Sub-Store Simple = type=http-request,pattern=^https?:\/\/sub\.store,script-path=https://github.com/sub-store-org/Sub-Store/releases/latest/download/sub-store-0.min.js,requires-body=1
Sub-Store Sync = type=cron,cronexp=0 0 * * *,wake-system=1,timeout=120,script-path=https://github.com/sub-store-org/Sub-Store/releases/latest/download/cron-sync-artifacts.min.js

# ===== SOUNDCLOUD GO+ =====
SoundCloudGo+ = type=http-response,pattern=^https:\/\/api-mobile\.soundcloud\.com\/configuration\/ios,requires-body=1,script-path=https://raw.githubusercontent.com/andanh447/locketgold_tool/refs/heads/main/Soundcloudpremium.js

# ===== SPOTIFY IOS 15 =====
spotify-json = type=http-request,pattern=^https:\/\/(spclient\.wg\.spotify\.com|.*-spclient\.spotify\.com(:443)?)\/(artistview\/v1\/artist|album-entity-view\/v2\/album)\/,requires-body=0,script-path=https://raw.githubusercontent.com/app2smile/rules/master/js/spotify-json.js
spotify-proto = type=http-response,pattern=^https:\/\/(spclient\.wg\.spotify\.com|.*-spclient\.spotify\.com(:443)?)\/(bootstrap\/v1\/bootstrap|user-customization-service\/v1\/customize)$,requires-body=1,binary-body-mode=1,max-size=0,script-path=https://raw.githubusercontent.com/app2smile/rules/master/js/spotify-proto.js,script-update-interval=0

[MITM]
ca-passphrase = O0DzrHdO
ca-p12 = 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

import axios from 'axios';

class WechatCommon {
    isJSSDKAuthed = false;

    authJSSDK() {
        axios.get("/WeChat/GetTestJSSDKAuth?url=" + location.href).then(res => {
            var appId = res.data.result.appId;
            var timestamp = res.data.result.timestamp;
            var nonceStr = res.data.result.nonceStr;
            var signature = res.data.result.signature;
            var jsApiList = res.data.result.appId;
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: appId, // 必填，公众号的唯一标识
                timestamp: timestamp, // 必填，生成签名的时间戳
                nonceStr: nonceStr, // 必填，生成签名的随机串
                signature: signature, // 必填，签名
                jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone'] // 必填，需要使用的JS接口列表
            });

            this.isJSSDKAuthed = true;
        })
    }

    customShare(title, desc, imgUrl, link) {
        if (!this.isJSSDKAuthed) {
            this.authJSSDK();
        }

        var url = link || location.href;

        wx.ready(function () {
            var origin = location.origin;

            wx.onMenuShareTimeline({
                title: title, // 分享标题
                link: url,
                imgUrl: origin + imgUrl, // 分享图标
                success: function () {
                }
            });

            wx.onMenuShareAppMessage({
                title: title, // 分享标题
                desc: desc, // 分享描述
                link: url,
                imgUrl: origin + imgUrl,  // 分享图标
                success: function () {
                }
            });
        });
    }
}

const common = new WechatCommon()
export default common
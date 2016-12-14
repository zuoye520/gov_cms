/**
 * @Desc: 微信相关
 * @Author: 左左
 * @Date: 2016-06-07
 */
"use strict";
import apps from "./apps.js";
const READY_PAY = "payment/wx_web";//支付接口
const WECHAT_JSCONFIG = "wechat/jsConfig";//请求微信相关配置接口

module.exports = {
    /*
     * 微信配置
     */
    wechatConfig : function(apis, callback){
		wx.ready(callback);
		//这里解决Android问题
		let wxConfigUrl = apps.getSessionStorage('WX_CONFIG_URL', null);
		if(!wxConfigUrl) apps.setSessionStorage('WX_CONFIG_URL', window.location.href);//存储第一次请求url
		
		apps.get(WECHAT_JSCONFIG, {
				url: apps.getSessionStorage('WX_CONFIG_URL', null)
			},{
				loading:false
			})
			.success((config)=> {
				apps.log(config);
				config.url = encodeURIComponent(config.url);
				config.jsApiList = apis;
				config.debug = false;
				wx.config(config);
			});
	},
	previewImage:function(urls,current){//预览相册
		if (typeof urls != 'object' || urls.length <= 0) {
			alert('参数错误或者数组为空..');
			return false;
		}
		wx.previewImage({
			current: current || urls[0],
			urls: urls
		});
	},
	openAddress:function(callback){//拉取收货地址
		callback = callback || function(){};
		wx.openAddress({
              success: function (res) {
                alert('用户成功拉出地址');
                callback(res);
              },
              cancel: function (res) {
                alert('用户取消拉出地址');
                callback(res);
              },
              fail: function (res) {
              	callback(res);
                alert('fail');
              }
        });
	},
	chooseImage : function(config,callback) {//拍照、本地选图
		if (typeof config !== "object") {
			alert('config参数只能是object');
			return;
		}
		callback = callback || function(){};
		wx.chooseImage({
		    count: config.count || 9, // 默认9
		    sizeType:config.sizeType || ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
		    sourceType: config.sourceType || ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
		    success: function (res) {
		    	callback(res.localIds);// 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
		    }
		});
	},
	uploadImage :function(localId,callback) {//上传图片接口
		callback = callback || function(){};
		localId = localId || "";
		wx.uploadImage({
		    localId: localId, // 需要上传的图片的本地ID，由chooseImage接口获得
		    isShowProgressTips: 1, // 默认为1，显示进度提示
		    success: function (res) {
		    	callback(res.serverId);// 返回图片的服务器端ID，处获得的 serverId 即 media_id
		    }
		});
	},
	addCard : function(cardList,callback) {//批量添加卡券接口
		cardList = cardList || [];
		callback = callback || function(){};
		wx.addCard({
		    cardList: cardList, // 需要添加的卡券列表
		    success: function (res) {
		    	callback(res.cardList);// 添加的卡券列表信息
		    }
		});
	},
	openCard : function(cardList) {//查看微信卡包中的卡券接口
		cardList = cardList || [];
		wx.openCard({
		    cardList: cardList //需要打开的卡券列表
		});
	},
	closeWindow : function() {//关闭当前窗口
		wx.closeWindow();
	},
	openLocation:function(params){//使用微信内置地图查看位置接口
		params = params || {};
		wx.openLocation(params);
	},
	getLocation:function(callback){//获取地理位置接口
		callback = callback || function(){};
		wx.getLocation({
		    type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
		    success : function (res) {
		        callback(res);
		    },
		    cancel : function(res) {
				callback(res);
			},
			fail : function(res){
				callback(res);
			}
		});
	},
	pay: function(param, successCallback,cancelCallback) {
		if(param.orderNo){//有订单支付
			apps.post(READY_PAY, {
				orderNo: param.orderNo,
				payType: 'WX_WEB'
			}).success((data)=> {
				data.timestamp = data.timeStamp;
				data.success = successCallback;
				data.cancel = cancelCallback;
				wx.chooseWXPay(data);
			});
		}else{//无订单支付
			apps.post(READY_PAY, {
				orderAmount: param.orderAmount,
				shopId:param.shopId
			}).success((data) =>{
				data.timestamp = data.timeStamp;
				data.success = successCallback;
				data.cancel = cancelCallback;
				wx.chooseWXPay(data);
			});
		}
	},
	customShares :function(param,callback){
		//默认自定义分享
		let shareParam = {
			title: "防雾膜--商城！",
			desc: "防雾膜--从根本上解决汽车挡风玻璃因起雾而模糊不清难题.",
			link: window.location.href.split("/fwm/")[0] + "/fwm/index",
			imgUrl: window.location.href.split("/fwm/")[0] + "/fwm/share.png"
		};
		param = typeof(param) =="object" ? param : shareParam;
		callback = callback || function() {};
		wx.onMenuShareTimeline({
			title: param.title,
			// 分享标题
			link: param.link,
			// 分享链接
			imgUrl: param.imgUrl,
			// 分享图标
			success: function() {
				callback(true);
			},
			cancel: function() {
				callback(false);
			}
		});
		//分享给朋友
		wx.onMenuShareAppMessage({
			title: param.title,
			desc: param.desc,
			link: param.link,
			imgUrl: param.imgUrl,
			success: function() {
				callback(true);
			},
			cancel: function() {
				callback(false);
			}
		});
		wx.onMenuShareQQ({
			title: param.title,
			desc: param.desc,
			link: param.link,
			imgUrl: param.imgUrl,
			success: function() {
				callback(true);
			},
			cancel: function() {
				callback(false);
			}
		});
		wx.onMenuShareQZone({
		    title: param.title,
		    desc: param.desc, 
		    link: param.link, 
		    imgUrl: param.imgUrl, 
		    success: function () { 
		       callback(true);
		    },
		    cancel: function () { 
		        callback(false);
		    }
		});
	}
	
	
}
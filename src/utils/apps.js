/**
 * @desc 项目工具类 (http请求、debug、获取url参数、本地存储Storag)  http请求依赖 reqwest.js及loading.js
 * @author zuozuo
 * @time 2016.09.02
 **/
"use strict"
import reqwest from "reqwest";
import constants from "./constants.js";
import loading from "./loading.js";

/**
 * Created by zhoulijun on 2015/12/29.
 * update zuozuo 2016/08/20 接入vue.js 做了小部分修改
 */
const ResultPromise = function() {
	var beStack = {};

	ResultPromise.prototype.sf = function(data) {
		//定义默认成功处理函数
		console.log("操作成功");
	};
	ResultPromise.prototype.ef = function(data) {
		//		apps.doError("请稍后重试", "服务器开小差了", data.data);
		console.error(data.data);
	};
	ResultPromise.prototype.cf = function() {
		//定义默认的不论成功还是失败都会处理的函数
	};
	ResultPromise.prototype.be = function(data) {
//		var becode = data.data.business;
		var becode = 900;
		var msg = data.data.msg;
		if(beStack[becode]) {
			beStack[becode](msg, data.data);
		} else {
			this.ef(data);
		}
	}
	ResultPromise.prototype.success = function(sf) {
		//覆盖默认的成功处理函数
		this.sf = sf;
		return this;
	};

	ResultPromise.prototype.error = function(ef) {
		//覆盖默认的错误处理函数
		this.ef = function(data) {
			console.error(data.data);
			ef(data);
		};
		return this;
	};
	ResultPromise.prototype.complete = function(cf) {
		this.cf = cf;
		return this;
	}
	ResultPromise.prototype.businessError = function(becode, callback) {
		var args = [].slice.apply(arguments);
		args.forEach(function(arg) {
			if(typeof arg === 'number' || typeof arg === 'string') {
				beStack[arg] = args[args.length - 1];
			}
		});
		return this;
	}
}

const request = function(url, data, config, type) {
	if(typeof url === "undefined") {
		throw new Error("url 不能为空");
	}
	url = constants.INTERFACE_URL + url;
	data = data || {};
	if(!(typeof data === "object" || typeof data === "string")) {
		throw new Error("data 参数只能是 json 或者 string");
	}
	if(typeof config === "boolean") {
		config = {
			loading: config
		};
	} else {
		config = config || {};
	}
	config.timeout = config.timeout || 10000,
		config.loading = config.loading === undefined ? true : config.loading,
		config.headers = config.headers || {};

	if(!constants.dev) {
		config.headers[constants.TOKEN] = getSessionStorage(constants.TOKEN);
	}
	//这里是移动端特殊处理	
	type = type || "GET";
	data = type !== 'GET' ? JSON.stringify(data) : data;
	let rp = new ResultPromise();
	if(!reqwest) {
		throw new Error("页面需要引入reqwest类库");
	}
	//put加载动画
	config.loading && loading.put({
		loadingParent: config.loadingParent,
		loadingIconStyle: config.loadingIconStyle
	});
	let p = reqwest({
		method: type,
		url: url,
		data: data,
		type: 'json',
		contentType: 'application/json',
		headers: config.headers,
		timeout: config.timeout,
		crossOrigin: false
	});
	p.then(function(res) {
		if(res.status != 0) {
			alert(res.errMsg);
			rp.ef({
				code: res.status,
				errorMsg: res.data,
				data: Object.assign({
					_url: url,
					_param: data
				}, res)
			});
		} else {
			rp.sf(res.data);
		}
	}, function(res) {
		rp.ef({
			code: -1,
			errorMsg: "调用服务器接口发生错误",
			data: Object.assign({
				_url: url,
				_param: data
			}, res)
		});
	}).always(function() {
		//pop加载动画
		config.loading && loading.pop({
			loadingParent: config.loadingParent
		});
		rp.cf();
	});
	return rp;
};

/*
 * debug 日志
 */
const buildArguments = function(arg) {
	return [].slice.apply(arg).reduce(function(rs, a) {
		if(typeof a === 'object') {
			rs += JSON.stringify(a);
		} else {
			rs += a;
		}
		return rs;
	}, "");
}

/*
 * 获取url参数
 */
const _GET = function(param, url) {
		url = url || window.location.href;
		var val = url.match(new RegExp("[\?\&]" + param + "=([^\&]*)(\&?)", "i"));
		return val ? val[1] : val;
	}

/*
 * 本地Storage
 */
const setSessionStorage = function(key, info) {
	return window.sessionStorage.setItem(key, JSON.stringify(info));
}

const getSessionStorage = function(key, _default) {
	_default = typeof _default !== "undefined" ? _default : "{}";
	var obj = window.sessionStorage.getItem(key);
	try {
		obj = JSON.parse(obj);
	} catch(e) {
		obj = null;
	}
	return obj || _default;
}

const setLocalStorage = function(key, info) {
		return window.localStorage.setItem(key, JSON.stringify(info));
	}

const getLocalStorage = function(key, _default) {
		_default = typeof _default !== "undefined" ? _default : "{}";
		return JSON.parse(window.localStorage.getItem(key) || _default);
	}

/**
 * 判断平台
 */
const isUserAgent = function(type){
	let ua = navigator.userAgent.toLowerCase();
	switch (type){
		case 'isWeixin':
			return ua.indexOf('micromessenger') != -1;
			break;
		case 'isAndroid':
			return ua.indexOf('android') != -1;
			break;
		case 'isIos':
			return (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);
			break;	
		default:
			return false;
			break;
	}
}

/*
 * 对外开放工具类
 */
module.exports = {
	/**
	 * 获取数据接口
	 * @param url 调用的接口地址 不带域
	 * @param data 接口参数
	 * @param config 预留配置项
	 */
	get: function(url, data, config) {
		return request(url, data, config);
	},
	post: function(url, data, config) {
		return request(url, data, config, "POST");
	},
	delete: function(url, data, config) {
		return request(url, data, config, "DELETE");
	},
	/**
	 * debug日志处理
	 */
	log: function() {
		if(constants.debug) {
			console.log(buildArguments(arguments));
		}
	},
	debug: function() {
		if(constants.debug) {
			console.debug(buildArguments(arguments));
		}
	},
	error: function() {
		if(constants.debug) console.error(buildArguments(arguments));
	},
	/**
	 * @Desc: 获取url参数,param必选传、url可不传
	 * @Author: zuozuo
	 * @Date: 2016-06-14
	 * @Param: {String} param
	 * @url: {String} url
	 * @return: {String}
	 */
	_GET: function(param, url) {
		return _GET(param, url);
	},
	/**
	 * @Desc: localStorage储存本地信息
	 * @Author: zuozuo
	 * @Date: 2016-04-18
	 * @Param: {String} key
	 * @Param: {Object} info
	 * @return: false or true
	 */
	setLocalStorage: function(key, info) {
		return setLocalStorage(key, info);
	},
	/**
	 * @Desc: localStorage获取本地信息
	 * @Author: zuozuo
	 * @Date: 2016-04-18
	 * @Param: {String} key
	 * @Param: {every} default 默认值 如果不传 默认返回 空对象{} 注:不能识别undefined
	 * @return: {Object}
	 */
	getLocalStorage: function(key, _default) {
		return getLocalStorage(key, _default);
	},
	/**
	 * @Desc: sessionStorage储存会话信息
	 * @Author: zuozuo
	 * @Date: 2016-04-18
	 * @Param: {String} key
	 * @Param: {Object} info
	 * @return: false or true
	 */
	setSessionStorage: function(key, info) {
		return setSessionStorage(key,info);
	},

	/**
	 * @Desc: sessionStorage获取会话信息
	 * @Author: zuozuo
	 * @Date: 2016-04-18
	 * @Param: {String} key
	 * @Param: {every} default 默认值 如果不传 默认返回 空对象{} 注:不能识别undefined
	 * @return: {Object}
	 */
	getSessionStorage: function(key, _default) {
		return getSessionStorage(key,_default);
	},
	/*
	 * @Desc : 判断客户端
	 * @Author ： zuozuo
	 * @Param: {String} type：isWeixin、isAndroid、isIos
	 */
	isUserAgent : function(type){
		return isUserAgent(type);
	}
}
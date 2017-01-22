/**
 * @Desc: filters 过滤器
 * @Author: zuozuo
 * @Date: 2016-09-20
 **/



/*
 * 过滤金额
 * 1000 | filterMoney
 */
exports.filterMoney = (money = 0) => {
	if(typeof money === 'string') {
		money = parseInt(money);
	}
	return(money / 100).toFixed(2);
}

/*
 * 隐藏手机中间四位
 * 18323341930 | formatPhone
 */
exports.formatPhone = (phone) => {
	if(typeof phone == 'number') {
		phone = phone.toString();
	}
	return phone.substr(0, 3) + '****' + phone.substr(-4);
}
/*
 * 截取时间
 * 2017-01-21T01:54:14.365Z | filterMoney
 */
exports.filterTimeStr = (timeStr) => {
	let timeArr = timeStr.split("T") || [];
	return timeArr[0];
}
/**
 * 格式化时间戳
 * 1461658688000 | formatTime "yyyy-MM-dd hh:mm:ss"
 */
exports.formatTime = (timeStamp, fmt) => { // author: meizz
	if(!timeStamp) {
		return ''
	}
	var _timeStamp = parseInt(timeStamp)
	if(_timeStamp.toString().length === 10) {
		_timeStamp *= 1000
	}!fmt && (fmt = 'yyyy-MM-dd')

	var t = new Date(_timeStamp)

	var o = {
		'M+': t.getMonth() + 1, // 月份
		'd+': t.getDate(), // 日
		'h+': t.getHours(), // 小时
		'm+': t.getMinutes(), // 分
		's+': t.getSeconds(), // 秒
		'q+': Math.floor((t.getMonth() + 3) / 3), // 季度
		'S': t.getMilliseconds() // 毫秒
	}
	if(/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (t.getFullYear() + '').substr(4 - RegExp.$1.length))
	for(var k in o) {
		if(new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
	}
	return fmt
}
/**
 * @Desc: loding组件
 * @Author: 左左
 * @Date: 2016-06-07
 */
"use strict"
/**
 * @Title: loading 管理器
 * @Desc: 提供loading动画的加载和移除,可配置loading动画的加载位置,多异步在同一位置加载loading时,提供逻辑控制.
 * @Author: chonglou
 * @return: @type{{instance}}
 *      instance 函数参数需要
 *         @Param parentCmp loading 对象加载的dom(原生dom), 如果为空则为document.body
 *         @Param iconStyle loading 动画的样式常量值,如果为空为全局的 global loading效果
 *         @Param message loading 动画里显示的文字.
 *         @return @type
 *             返回的对象有put,pop两个方法,put方法是加载loading动画,pop方法弹出loading动画
 *  .e.g
 *      LoadingManager.instance().put();
 *      setTimeout(function(){
 *      	LoadingManager.instance().pop();
 *      },10000);
 */
const LoadingManager = (function() {
	//定义loading icon style
	let GLOBAL = "global", //默认全局loading
		PARTIAL = "partial", //dom内部加载loading
		WAVE = "wave", //发送请求loading
		GRADIENT = "gradient", //易生活项目loading动画
		HAMSTER = "hamster";//加好油项目数据请求动画
	let ICON_STYLE = {};
	ICON_STYLE[GLOBAL] = [
		'<div class="loading-box loading-box-2">',
		'        <div class="spinner">',
		'            <div class="spinner-container container1">',
		'                <div class="circle1"></div>',
		'                <div class="circle2"></div>',
		'                <div class="circle3"></div>',
		'                <div class="circle4"></div>',
		'            </div>',
		'            <div class="spinner-container container2">',
		'                <div class="circle1"></div>',
		'                <div class="circle2"></div>',
		'                <div class="circle3"></div>',
		'                <div class="circle4"></div>',
		'            </div>',
		'        </div>',
		'</div>',
	].join(' ');

	ICON_STYLE[PARTIAL] = [
		'<div class="loading-box loading-box-1">',
		'     <div class="loading-rotate icon icon-box"></div>',
		'     <div class="loading-shadow"></div>',
		'     <p>正在载入..</p>',
		'</div>',
	].join(' ');
	
	ICON_STYLE[WAVE] = [
		'<div class="loading-box loading-box-3">',
			'<div class="loading-wave-grp">',
				'<span class="loading-wave-bottom"></span>',
				'<span class="loading-wave"></span>',
				'<span class="loading-wave-up"></span>',
			'</div>',
		'</div>',
	].join(' ');
	//易生活项目加载动画
	ICON_STYLE[GRADIENT] = [
		'<div class="loading-box loading-box-4">',
		'     <div class="loading-gradient"></div>',
		'</div>',
	].join(' ');
	//易生活项目加载动画
	ICON_STYLE[HAMSTER] = [
		'<section class="loading-first fx-align">',
		'     <div class="cont b-radius-5">',
		'     	<div class="hamster">',
		'     		<div class="hamster-eyes"></div>',
		'     	</div>',
		'     	<div class="tips fx fx-x-around fx-align">',
		'     		<span></span><span></span><span></span>',
		'     	</div>',
		'     </div>',
		'</section>',
	].join(' ');
	
	
	//存放loading对象
	let loadings = [];
	return {
		GLOBAL: GLOBAL,
		WAVE: WAVE,
		PARTIAL: PARTIAL,
		GRADIENT: GRADIENT,
		HAMSTER: HAMSTER,
		instance: function(parentCmp, iconStyle, message) {
			parentCmp = parentCmp || document.body;
			iconStyle = iconStyle || WAVE;
			message = message || "";

			let loading = loadings.filter(function(l) {
				return l.parentCmp === parentCmp;
			})[0];

			if (!loading) {
				loading = {
					parentCmp: parentCmp,
					stack: 0
				}
				loadings.push(loading);
			};
			return {
				//压入一个loading
				put: function() {
					if (!loading.stack) {
						let loadingModule = parentCmp.querySelector('.loading-module');
						if(!loadingModule){
							//创建loading模块
							let loadingModule = document.createElement("section");
							let moduleClass = document.createAttribute("class");
							    moduleClass.nodeValue = "loading-module";
							    loadingModule.setAttributeNode(moduleClass);
							loadingModule.innerHTML = ICON_STYLE[iconStyle];
							//添加到父级Dom中去
							parentCmp.appendChild(loadingModule);
						}
						
					}
					
					loading.stack++;
				},
				//弹出一个loading
				pop: function() {
					loading.stack--;
					if(!loading.stack){
						//移除父dom的子loading模块
						parentCmp.querySelector('.loading-module').remove();
					}
					
				}
			}
		}
	}
})();

module.exports = {
	put:function(config = {}){
		LoadingManager.instance(config.loadingParent,config.loadingIconStyle,config.loadingMessage).put();
	},
	pop:function(config = {}){
		LoadingManager.instance(config.loadingParent,config.loadingIconStyle,config.loadingMessage).pop();
	}
}
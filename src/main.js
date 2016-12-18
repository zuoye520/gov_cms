/**
 * @Desc: main入口JS文件
 * @Author: zuozuo
 * @Date: 2016-12-09
 **/
"use strict"
import Vue from 'vue'
import Router from 'vue-router'
import configRouter from './routers'
import App from './App.vue'
//import { InfiniteScroll,Lazyload } from 'mint-ui'
//import FastClick from 'fastclick'
import BackLink from './directives/back-link'
import filters from './filters/filters'
import {context} from './utils/constants'
//实例化Vue的filter
Object.keys(filters).forEach((k) => Vue.filter(k, filters[k]));
/*
 * 自定义指令
 */
Vue.directive('back-link', BackLink);
//注册懒加载指令
//Vue.use(Lazyload);
// 注册滚动加载数据
//Vue.use(InfiniteScroll);
// 注册 router
Vue.use(Router);
// 路由配置
let router = new Router({
	hashbang: false,
	history: true,
	saveScrollPosition: true,
	suppressTransitionError: true,
	root:context //配置根路径
});
//路由规则配置
configRouter(router);
//启用#app作为根
router.start(App, '#app');
//解决移动端300毫秒延迟问题
//FastClick.attach(document.body);


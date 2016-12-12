/**
 * @Desc: 路由规则配置
 * @Author: 左左
 * @Date: 2016-12-09
 **/
"use strict"
import apps from "./utils/apps.js";
const mapObj = {
	/* 404路由 */
    '*': {
   		name: 'index',
		component(resolve) {
			require(['./views/Index.vue'], resolve)
		}
    },
    "/index" :{
		name: 'index',
		component(resolve) {
			require(['./views/Index.vue'], resolve)
		}
	},
	"/newsList" :{
		name: 'newsList',
		component(resolve) {
			require(['./views/NewsList.vue'], resolve)
		}
	},
	"/newsDetails" :{
		name: 'newsDetails',
		component(resolve) {
			require(['./views/NewsDetails.vue'], resolve)
		}
	},
};

		
export default function(router) {
	/*
	 * 路由规则
	 */
	router.map(mapObj);
	/*
	 * 授权验证
	 */
	router.beforeEach((transition) => {
		transition.next();
	});
	
	router.afterEach((transition)=> {
//		router.app.isHide = false;
	})
}
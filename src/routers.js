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
	"/newsList/:category" :{
		name: 'newsList',
		component(resolve) {
			require(['./views/NewsList.vue'], resolve)
		}
	},
	"/newsDetails/:id" :{
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
		//控制菜单状态
		if(transition.to.name == 'newsList'){
			router.app.menuActive = transition.to.params ? parseInt(transition.to.params.category) : 0;
		}else{
			router.app.menuActive = 0;
		}
		
	})
}
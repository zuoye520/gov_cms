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
	"/newsDetails/:category/:id" :{
		name: 'newsDetails',
		component(resolve) {
			require(['./views/NewsDetails.vue'], resolve)
		}
	},
	 "/complaint" :{
		name: 'complaint',
		component(resolve) {
			require(['./views/Complaint.vue'], resolve)
		}
	},
	 "/projectInfo" :{
		name: 'projectInfo',
		component(resolve) {
			require(['./views/ProjectInfo.vue'], resolve)
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
		document.body.scrollTop = 0;
		transition.next();
	});
	
	router.afterEach((transition)=> {
		//控制菜单状态
		if(transition.to.params){
			router.app.menuActive = parseInt(transition.to.params.category) || 0;
		}
	})
}
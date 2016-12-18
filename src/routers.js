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
	"/newsList/:category/:ename/:pname/:level" :{
		name: 'searchNewsList',
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
	"/complaint/:type" :{
		name: 'complaint',
		component(resolve) {
			require(['./views/Complaint.vue'], resolve)
		}
	},
	"/projectInfo/:pid" :{
		name: 'projectInfo',
		component(resolve) {
			require(['./views/ProjectInfo.vue'], resolve)
		}
	},
	"/enterpriseInfo/:pid" :{
		name: 'enterpriseInfo',
		component(resolve) {
			require(['./views/EnterpriseInfo.vue'], resolve)
		}
	},
	"/enterpriseList" :{
		name: 'elist',
		component(resolve) {
			require(['./views/EnterpriseList.vue'], resolve)
		}
	},
	"/enterpriseList/:ename/:pname/:level" :{
		name: 'enterpriseList',
		component(resolve) {
			require(['./views/EnterpriseList.vue'], resolve)
		}
	},
	"/stepOne" :{
		name: 'stepOne',
		component(resolve) {
			require(['./views/StepOne.vue'], resolve)
		}
	},
	"/stepTwo" :{
		name: 'stepTwo',
		component(resolve) {
			require(['./views/StepTwo.vue'], resolve)
		}
	}
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
		apps.log(transition.to.name);
		//控制菜单状态
		switch (transition.to.name){
			case 'index':
					router.app.menuActive =0;
				break;
			case 'newsList':
				router.app.menuActive = parseInt(transition.to.params.category) || 0;
				break;
			case 'newsDetails':
				router.app.menuActive = parseInt(transition.to.params.category) || 0;
				break;
			case 'complaint':
				transition.to.params.type == 1?router.app.menuActive =100:router.app.menuActive =101;
				
				break;	
			default:
				router.app.menuActive =0;
				break;
		}
	})
}

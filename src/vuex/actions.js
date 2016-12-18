/**
 * @Desc: ACTIONS
 * @Author: zuozuo
 * @Date: 2016-12-09
 **/

"use strict"
import apps from '../utils/apps.js'
import * as types from './mutation_types.js'

/*
 * @DESC:api接口
 */
const 	GET_PIC_LIST = "xhlc/api/m/";//获取首页图片信息/xhlc/api/m/:type
const 	GET_ARTICLE_LIST = "xhlc/api/a/list/";//获取文章列表/xhlc/api/a/list/:category
const 	GET_ARTICLE_DETAIL = "xhlc/api/a/";//获取文章详情/xhlc/api/a/:id
const 	GET_E_LEVE_LIST = "xhlc/api/e/levelList";//获取诚信等级公示
const 	GET_M_A_INFO = "xhlc/api/m/a/";//开发企业获奖信息查询/xhlc/api/m/a/:category
const 	GET_S_NEW = "xhlc/api/s/new";//企业投诉／表扬获取文章id /xhlc/api/s/new
const 	POST_S_FROM = "xhlc/api/s/";//企业投诉／表扬 /xhlc/api/s/:type

const 	GET_E_GRADES = "xhlc/api/e/grades";//获取诚信企业评级列表
const 	GET_P_E_LIST = "xhlc/api/p/e/";//获取企业项目列表 xhlc/api/p/e/:eid
const 	GET_P_DETAIL = "xhlc/api/p/";//获取企业项目详情 xhlc/api/p/:pid
const 	GET_A_LIST = "xhlc/api/a/list/";//获取企业文章列表 xhlc/api/a/list/:category/:enterpriseId
const 	GET_E_LIST = "xhlc/api/e/";//获取企业列表 xhlc/api/e/
const 	GET_E_DETAIL = "xhlc/api/e/";//获取企业详情 xhlc/api/e/:eid

/*
 * @DESC:获取首页图片信息
 * @Author:zuozuo
 * @Date：2016.12.10
 */
export const getPicListAction = ({ dispatch, state },params={}) => {
	return new Promise((resolve, reject) =>{
		apps.get(GET_PIC_LIST+params.type).success((data)=>{
			apps.log(data);
			dispatch(types.GET_PIC_LIST,data,params.type);
			resolve("ok");
	    }).businessError(900,(msg, data)=>{
        		reject(msg);
    		});
    });
	
}

/*
 * @DESC:获取文章列表
 * @Author:zuozuo
 * @Date：2016.12.11
 */
export const getArticleListAction = ({ dispatch, state },params={}) => {
	return new Promise((resolve, reject) =>{
		let URL = GET_ARTICLE_LIST+params.category
		if(params.search){
			URL = URL+"/"+params.search;
		}
		apps.get(URL,params).success((data)=>{
			apps.log(data);
			dispatch(types.GET_ARTICLE_LIST,data,params.type);
			resolve("ok");
	    }).businessError(900,(msg, data)=>{
        		reject(msg);
    		});
    });
}

/*
 * @DESC:获取文章详情
 * @Author:zuozuo
 * @Date：2016.12.11
 */
export const getArticleDetailAction = ({ dispatch, state },params={}) => {
	return new Promise((resolve, reject) =>{
		apps.get(GET_ARTICLE_DETAIL+params.id).success((data)=>{
			apps.log(data);
			dispatch(types.GET_ARTICLE_DETAIL,data);
			resolve("ok");
	    }).businessError(900,(msg, data)=>{
        		reject(msg);
    		});
    });
}

/*
 * @DESC:获取诚信等级公示
 * @Author:zuozuo
 * @Date：2016.12.11
 */
export const getELeveListAction = ({ dispatch, state },params={}) => {
	return new Promise((resolve, reject) =>{
		apps.get(GET_E_LEVE_LIST).success((data)=>{
			apps.log(data);
			dispatch(types.GET_E_LEVE_LIST,data);
			resolve("ok");
	    }).businessError(900,(msg, data)=>{
        		reject(msg);
    		});
    });
}

/*
 * @DESC:开发企业获奖信息查询
 * @Author:zuozuo
 * @Date：2016.12.11
 */
export const getMAInfoAction = ({ dispatch, state },params={}) => {
	return new Promise((resolve, reject) =>{
		apps.get(GET_M_A_INFO+params.category).success((data)=>{
			apps.log(data);
			dispatch(types.GET_M_A_INFO,data);
			resolve("ok");
	    }).businessError(900,(msg, data)=>{
        		reject(msg);
    		});
    });
}

/*
 * @DESC:企业投诉／表扬获取文章id
 * @Author:zuozuo
 * @Date：2016.12.11
 */
export const getSNewAction = ({ dispatch, state },params={}) => {
	return new Promise((resolve, reject) =>{
		apps.get(GET_S_NEW).success((data)=>{
			apps.log(data);
//			dispatch(types.GET_S_NEW,data);
			resolve(data);
	    }).businessError(900,(msg, data)=>{
        		reject(msg);
    		});
    });
}

/*
 * @DESC:企业投诉／表扬 
 * @Author:zuozuo
 * @Date：2016.12.11
 */
export const postSFromAction = ({ dispatch, state },params={}) => {
	return new Promise((resolve, reject) =>{
		apps.get(POST_S_FROM+params.type).success((data)=>{
			apps.log(data);
//			dispatch(types.POST_S_FROM,data);
			resolve("ok");
	    }).businessError(900,(msg, data)=>{
        		reject(msg);
    		});
    });
}

/*
 * @DESC:获取诚信企业评级列表
 * @Author:zuozuo
 * @Date：2016.12.16
 */
export const getEGradesList = ({ dispatch, state },params={}) => {
	return new Promise((resolve, reject) =>{
		apps.get(GET_E_GRADES).success((data)=>{
			apps.log(data);
			dispatch(types.GET_E_GRADES,data);
			resolve("ok");
	    }).businessError(900,(msg, data)=>{
        		reject(msg);
    		});
    });
}

/*
 * @DESC:获取企业项目列表
 * @Author:zuozuo
 * @Date：2016.12.16
 */
export const getPEList = ({ dispatch, state },params={}) => {
	return new Promise((resolve, reject) =>{
		apps.get(GET_P_E_LIST).success((data)=>{
			apps.log(data);
			dispatch(types.GET_P_E_LIST,data);
			resolve("ok");
	    }).businessError(900,(msg, data)=>{
        		reject(msg);
    		});
    });
}
/*
 * @DESC:获取企业列表
 * @Author:zuozuo
 * @Date：2016.12.16
 */
export const getEList = ({ dispatch, state },params={}) => {
	return new Promise((resolve, reject) =>{
		apps.get(GET_E_LIST,params).success((data)=>{
			apps.log(data);
			dispatch(types.GET_E_LIST,data);
			resolve("ok");
	    }).businessError(900,(msg, data)=>{
        		reject(msg);
    		});
    });
}
/*
 * @DESC:获取企业文章列表
 * @Author:zuozuo
 * @Date：2016.12.16
 */
export const getAList = ({ dispatch, state },params={}) => {
	return new Promise((resolve, reject) =>{
		apps.get(GET_A_LIST).success((data)=>{
			apps.log(data);
			dispatch(types.GET_A_LIST,data);
			resolve("ok");
	    }).businessError(900,(msg, data)=>{
        		reject(msg);
    		});
    });
}

/*
 * @DESC:获取企业项目详情
 * @Author:zuozuo
 * @Date：2016.12.16
 */
export const getPDetail = ({ dispatch, state },params={}) => {
	return new Promise((resolve, reject) =>{
		apps.get(GET_P_DETAIL+params.pid).success((data)=>{
			apps.log(data);
			dispatch(types.GET_P_DETAIL,data);
			resolve("ok");
	    }).businessError(900,(msg, data)=>{
        		reject(msg);
    		});
    });
}

/*
 * @DESC:获取企业详情
 * @Author:zuozuo
 * @Date：2016.12.16
 */
export const getEDetail = ({ dispatch, state },params={}) => {
	return new Promise((resolve, reject) =>{
		apps.get(GET_E_DETAIL+params.pid).success((data)=>{
			apps.log(data);
			dispatch(types.GET_E_DETAIL,data);
			resolve("ok");
	    }).businessError(900,(msg, data)=>{
        		reject(msg);
    		});
    });
}
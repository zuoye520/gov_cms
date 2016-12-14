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
const 	GET_M_E_LIST = "xhlc/api/m/e/list";//获取诚信等级公示
const 	GET_M_A_INFO = "xhlc/api/m/a/";//开发企业获奖信息查询/xhlc/api/m/a/:category
const 	GET_S_NEW = "xhlc/api/s/new";//企业投诉／表扬获取文章id /xhlc/api/s/new
const 	POST_S_FROM = "xhlc/api/s/";//企业投诉／表扬 /xhlc/api/s/:type

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
//			switch (params.type){
//				case 'Banner':
//					dispatch(types.GET_BANNER_LIST,data);
//				break;
//				case 'EnterpriseList':
//					dispatch(types.GET_ENTERPRISE_LIST,data);
//				break;
//				case 'ProjectList':
//					dispatch(types.GET_PROJECT_LIST,data);
//				break;
//				default:
//				break;
//			}
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
		apps.get(GET_ARTICLE_LIST+params.category,params).success((data)=>{
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
export const getMEListAction = ({ dispatch, state },params={}) => {
	return new Promise((resolve, reject) =>{
		apps.get(GET_M_E_LIST).success((data)=>{
			apps.log(data);
			dispatch(types.GET_M_E_LIST,data);
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
			dispatch(types.GET_S_NEW,data);
			resolve("ok");
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
			dispatch(types.POST_S_FROM,data);
			resolve("ok");
	    }).businessError(900,(msg, data)=>{
        		reject(msg);
    		});
    });
}
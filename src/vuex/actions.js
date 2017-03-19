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
const 	GET_E_GRADES = "xhlc/api/e/grades";//获取诚信企业评级列表
const 	GET_P_E_LIST = "xhlc/api/p/e/";//获取企业项目列表 xhlc/api/p/e/:eid
const 	GET_P_DETAIL = "xhlc/api/p/";//获取企业项目详情 xhlc/api/p/:pid
const 	GET_A_LIST = "xhlc/api/a/list/";//获取企业文章列表 xhlc/api/a/list/:category/:enterpriseId
const 	GET_E_LIST = "xhlc/api/e/";//获取企业列表 xhlc/api/e/
const 	GET_E_DETAIL = "xhlc/api/e/";//获取企业详情 xhlc/api/e/:eid
const 	POST_FILE = "xhlc/api/f/upload/attach/Appeal/";//上传文件接口 xhlc/api/f/upload/attach/Appeal/:appealId
const 	GET_INDUSTRY = "xhlc/api/s/industry";//获取行业分类 xhlc/api/s/industry
const 	GET_S_NEW = "xhlc/api/s/new";//企业投诉／表扬获取文章id /xhlc/api/s/new
const 	POST_S_FROM = "xhlc/api/s/";//企业投诉／表扬/xhlc/api/s/:type/:code
const 	POST_R_U_FROM = "xhlc/api/r/u/";//提交注册信息 xhlc/api/r/u/:code
const 	GET_R_E_NEW = "xhlc/api/r/e/new";//获取企业信息id /xhlc/api/r/e/new
const 	GET_R_AREA = "xhlc/api/r/area/";//获取行政区划 /xhlc/api/r/area/:parent
const 	POST_R_E_FROM = "xhlc/api/r/e/";//企业信息填写  /xhlc/api/r/e:code
const 	GET_VC_CHECK = "xhlc/api/vc/check/";//验证验证码是否有效  xhlc/api/vc/check/:code

const 	GET_A_ELIST = "xhlc/api/a/elist/";//获取不良信息和获奖信息列表  xhlc/api/a/elist/:categoryId
const 	GET_EP_LIST = "xhlc/api/e/p";//获取企业公示列表  /xhlc/api/ep

const GET_SITE_LINK_LIST = "xhlc/api/sl/list"; //获取网站链接


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
		if(params.search){//搜索情况
			URL = URL+"/"+params.search;
		}
		if(params.enterpriseId){//有企业id的情况
			URL = URL+"/"+params.enterpriseId;
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
 * @DESC:获取行业分类
 * @Author:zuozuo
 * @Date：2016.12.11
 */
export const getIndustry = ({ dispatch, state },params={}) => {
	return new Promise((resolve, reject) =>{
		apps.get(GET_INDUSTRY).success((data)=>{
			apps.log(data);
			resolve(data);
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
export const postSFromAction = ({ dispatch, state },params={},type=1,code='') => {
//	let code = params.code;
//	let type = parseInt(params.type);
//	delete params.type;
//	delete params.code;
	return new Promise((resolve, reject) =>{
		apps.post(POST_S_FROM+parseInt(type)+"/"+code,params).success((data)=>{
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
		apps.get(params.eid ? GET_P_E_LIST+params.eid : GET_P_E_LIST,params).success((data)=>{
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
 * @DESC:获取诚信企业列表
 * @Author:zuozuo
 * @Date：2016.12.16
 */
export const getCXEList = ({ dispatch, state },params={}) => {
	return new Promise((resolve, reject) =>{
		apps.get(GET_E_LIST,params).success((data)=>{
			resolve(data);
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
		apps.get(GET_A_LIST+params.categoryid,params).success((data)=>{
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

/*
 * @DESC:获取企业详情
 * @Author:zuozuo
 * @Date：2016.12.16
 */
export const postFile = ({ dispatch, state },params={}) => {
	return new Promise((resolve, reject) =>{
		apps.get(POST_FILE+params.appealId,params).success((data)=>{
			apps.log(data);
			resolve("ok");
	    }).businessError(900,(msg, data)=>{
        		reject(msg);
		});
    });
}

/*
 * @DESC:提交注册信息
 * @Author:zuozuo
 * @Date：2016.12.24
 */
export const postRUFromAction = ({ dispatch, state },params={},code='') => {
	return new Promise((resolve, reject) =>{
		apps.post(POST_R_U_FROM+code,params).success((data)=>{
			apps.log(data);
			resolve("ok");
	    }).businessError(900,(msg, data)=>{
        		reject(msg);
    		});
    });
}

/*
 * @DESC:提交注册信息时验证验证码是否有效
 * @Author:zuozuo
 * @Date：2016.12.25
 */
export const getVCCheck = ({ dispatch, state },params={},code='') => {
	return new Promise((resolve, reject) =>{
		apps.get(GET_VC_CHECK+code,params).success((data)=>{
			apps.log(data);
			resolve(data);
	    }).businessError(900,(msg, data)=>{
        		reject(msg);
    		});
    });
}

/*
 * @DESC:提交企业注册信息
 * @Author:zuozuo
 * @Date：2016.12.25
 */
export const postREFromAction = ({ dispatch, state },params={},code='') => {
	return new Promise((resolve, reject) =>{
		apps.post(POST_R_E_FROM+code,params).success((data)=>{
			apps.log(data);
			resolve("ok");
	    }).businessError(900,(msg, data)=>{
        		reject(msg);
    		});
    });
}

/*
 * @DESC:获取省份地区
 * @Author:zuozuo
 * @Date：2016.12.25
 */
export const getArea = ({ dispatch, state },params={}) => {
	return new Promise((resolve, reject) =>{
		apps.post(GET_R_AREA+params.parent).success((data)=>{
			apps.log(data);
			resolve(data);
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
export const getAEList = ({ dispatch, state },params={}) => {
	let url =params.eid ?GET_A_ELIST+params.category+'/'+params.eid :params.search? GET_A_ELIST+params.category +'/search':  GET_A_ELIST+params.category
	return new Promise((resolve, reject) =>{
		apps.get(url,params).success((data)=>{
			apps.log(data);
			dispatch(types.GET_A_ELIST,data);
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
export const getEPList = ({ dispatch, state },params={}) => {
	return new Promise((resolve, reject) =>{
		apps.get(GET_EP_LIST,params).success((data)=>{
			apps.log(data);
			dispatch(types.GET_EP_LIST,data);
			resolve("ok");
	    }).businessError(900,(msg, data)=>{
        		reject(msg);
    		});
    });
}

export const getSiteLinkList = ({dispatch,state},params={}) => {
  return new Promise((resolve, reject) =>{
    apps.get(GET_SITE_LINK_LIST,params).success((data)=>{
//    apps.log(data);
      dispatch(types.GET_SITE_LINK_LIST,data);
      resolve();
    }).businessError(900,(msg, data)=>{
      reject(msg);
    });
  });
}

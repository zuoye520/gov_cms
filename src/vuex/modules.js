/**
 * @Desc: index MUTATIONS MODULES
 * @Author: zuozuo
 * @Date: 2016-12-10
 **/
"use strict"
import * as types from './mutation_types.js'

// 初始化state数据，尽可能在创建 store 时就初始化 state 所需要的所有属性
const state = {
	bannerList :[],//banner列表
	enterpriseList :[],//诚信列表
	projectList :[],//项目列表
	xwdtList:[],//新闻动态
	xhdtList:[],//协会动态
	xzcfList:[],//行政处罚
	zcfgList:[],//政策法规
	bgtList:[],//曝光台
	hyzlList:[],//行业自律
	hjxxList:[],//企业获奖信息
	blxwList:[],//企业不良行为
	articleList :[],//文章列表
	articleDetail:{},//文章详情
	eLeveList:[],//诚信等级公示
	gradesList:[],//获取诚信企业评级列表
	projectDetail:{},//获取企业项目详情
	eList:[],//企业列表
	peList:[],//项目列表
	enterpriseDetail:{},//获取企业详情
	maList:[],//企业相关文章查询
	sNew:null,
	sFrom:{},
	aeList:[],//获奖信息和不良信息
	
};

/*
 * @DESC : mutations状态变更
 */
const mutations = {
	[types.GET_PIC_LIST](state, data, type) {
		switch (type){
			case 'Banner':
				state.bannerList = data;
			break;
			case 'EnterpriseList':
				state.enterpriseList = data;
			break;
			case 'ProjectList':
				state.projectList = data;
			break;
			default:
			break;
		}
	},
	[types.GET_ARTICLE_LIST](state, data, type) {
		switch (type){
			case 'XWDT'://新闻动态
				state.xwdtList = data.list;
			break;
			case 'XHDT'://协会动态
				state.xhdtList = data.list;
			break;
			case 'XZCF'://行政处罚
				state.xzcfList = data.list;
			break;
			case 'ZCFG'://政策法规
				state.zcfgList = data.list;
			break;
			case 'BGT'://曝光台
				state.bgtList = data.list;
			break;
			case 'HYZL'://行业自律
				state.hyzlList = data.list;
			break;
			case 'HJXX'://企业获奖信息
				state.hjxxList = data.list;
			break;
			case 'BLXW'://企业不良行为
				state.blxwList = data.list;
			break;
			default:
				state.articleList = data;
			break;
		}
	},
	[types.GET_ARTICLE_DETAIL](state, data) {
		state.articleDetail = data;
	},
	[types.GET_E_LEVE_LIST](state, data) {
		state.eLeveList = data;
	},
	[types.GET_M_A_INFO](state, data) {
		state.maInfo = data;
	},
	[types.GET_S_NEW](state, data) {
		state.sNew = data;
	},
	[types.POST_S_FROM](state, data) {
		state.sFrom = data;
	},
	[types.GET_E_GRADES](state, data) {
		state.gradesList = data;
	},
	[types.GET_P_DETAIL](state, data) {
		state.projectDetail = data;
	},
	[types.GET_E_DETAIL](state, data) {
		state.enterpriseDetail = data;
	},
	[types.GET_A_LIST](state, data) {
		state.maList = data;
	},
	[types.GET_E_LIST](state, data) {
		state.eList = data;
	},
	[types.GET_P_E_LIST](state, data) {
		state.peList = data;
	},
	[types.GET_A_ELIST](state, data) {
		state.aeList = data;
	}
}
/*
 * @DESC : 对外开放
 */
export default {
	state,
	mutations
}
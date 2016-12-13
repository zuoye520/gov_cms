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
	articleList :[],
	articleDetail:{},
	meList:[],
	maInfo:{},
	sNew:null,
	sFrom:{}
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
	[types.GET_ARTICLE_LIST](state, data) {
		state.articleList = data;
	},
	[types.GET_ARTICLE_DETAIL](state, data) {
		state.articleDetail = data;
	},
	[types.GET_M_E_LIST](state, data) {
		state.meList = data;
	},
	[types.GET_M_A_INFO](state, data) {
		state.maInfo = data;
	},
	[types.GET_S_NEW](state, data) {
		state.sNew = data;
	},
	[types.POST_S_FROM](state, data) {
		state.sFrom = data;
	}
}
/*
 * @DESC : 对外开放
 */
export default {
	state,
	mutations
}
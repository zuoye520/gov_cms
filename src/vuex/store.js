/**
 * @Desc: STORE
 * @Author: zuozuo
 * @Date: 2016-12-09
 **/
"use strict"
import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules.js'

//告诉 vue “使用” vuex
Vue.use(Vuex)
	//创建store 管理 state
export default new Vuex.Store({
	modules: {
		modules
	}
})
<template>
	<div>
		<l-location></l-location>
		<section class="article">
			<div class="title">
				<h1>重庆市国土房管局关于举办第二届“国土房管青年论坛”主题活动的通知</h1>
				<div class="time">2016-08-04</div>
			</div>
			<div class="text-info">
				重庆市国土房管局关于举办第二届“国土房管青年论坛”主题活动的通知
				市地勘局、市住房公积金中心、重庆农村土地交易所、市公租房管理局、市国土房屋执法总队、市农村土地整治中心，
				各区县（自治县）国土房管局、国土资源局、房管局，各分局，局属各单位，各学会、协会，机关各处室：
				市地勘局、市住房公积金中心、重庆农村土地交易所、市公租房管理局、市国土房屋执法总队、市农村土地整治中心，
			</div>
			<div class="btn-close"><a href="javascript:;">关闭窗口</a></div>
		</section>
	</div>
</template>
<!-- 添加 scoped “范围”属性CSS限制这个组件只 -->
<style scoped lang="scss">
@import "../assets/css/common.scss";
.article{
	position: relative;
	.title{
		padding: 30px 0 15px;
		border-bottom: 1px solid $color-border;
		h1{
			font-size: 24px;
			text-align: center;
		}
		.time{
			text-align: center;
			color: $color-gray1;
			padding-top: 15px;
		}
	}
	.text-info{
		padding: 20px;
		min-height: 240px;
	}
	.btn-close{
		padding: 100px 0 35px;
		a{
			display: block;
			width: 100%;
			border: 1px solid $color-gray3;
			background: $color-gray4;
			text-align: center;
			padding: 3px 0;
			color: $color-font;
			&:hover{
				background: darken($color-gray4,5%);
			}
			&:active{
				background: darken($color-gray4,10%);
			}
		}
	}
}
</style>

<script>
	import apps from "../utils/apps.js";
	import Location from "../components/Location.vue";
	
	import {
		getBannerList,
		getIndexGoodsList
	} from '../vuex/actions.js';
	export default {
		/*
		 * 组件名称
		 */
		components: {
			"l-location":Location
	  	},
		/*
		 * 初始化数据
		 */
		data() {
			return {
			}
		},
		/*
		 * vuex
		 */
		vuex: {
			getters: {
				bannerList:(state)=> state.index.bannerList,
				goodsList :(state)=> state.index.goodsList,
			},
			actions: {
				getBannerList,
				getIndexGoodsList
			}
		},
		/*
		 * 实例被创建后调用，但是还没有开始 DOM 编译
		 */
		created() {
		},
		/*
		 * 处理事件
		 */
		methods: {

		},
		/*
		 * 定义过滤器
		 */
		filters: {
		},
		/*
		 * 实例计算属性
		 */
		computed: {
			
		},
		/*
		 * 路由数据钩 参数发生变化这里被激活
		 */
		route: {
			data({
				to
			}) {
			}
		}
	}
</script>
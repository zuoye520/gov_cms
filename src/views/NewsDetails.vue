<template>
	<div>
		<l-location></l-location>
		<section class="article">
			<div class="title">
				<h1>{{articleDetail.title}}</h1>
				<div class="time">{{articleDetail.publishTime | formatTime "yyyy-MM-dd"}}</div>
			</div>
			<div class="text-info">
				{{{articleDetail.content}}}
			</div>
			<div class="btn-close"><a v-back-link>关闭窗口</a></div>
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
		getArticleDetailAction,
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
				params:{
					id:1
				}
			}
		},
		/*
		 * vuex
		 */
		vuex: {
			getters: {
				articleDetail:(state)=> state.modules.articleDetail,
			},
			actions: {
				getArticleDetailAction
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
			//关闭当前窗口
			handleWindowClose(){
				window.opener=null;
				window.open('','_self');
				window.close();
			}
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
				this.params.id = to.params.id || 1;//文章id
				
				this.getArticleDetailAction(this.params).then((data) => {
					apps.log('文章详情数据请求成功')
				}, (error) => {
					apps.log(error)
				});
			}
		}
	}
</script>
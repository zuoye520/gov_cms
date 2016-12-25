<template>
	<div class="w1000">
		<l-location :type = "category"></l-location>
		<section class="article">
			<div class="title">
				<h1>{{articleDetail.title || '没有相关文章信息哟~'}}</h1>
				<div class="time">{{articleDetail.publishTime | formatTime "yyyy-MM-dd"}}</div>
			</div>
			<div class="text-info">
				{{{articleDetail.content}}}
			</div>
			<div class="attachs" v-show="isAttachs">
				<h6>附件下载：</h6>
				<ul>
					<li v-for="item in articleDetail.attachs">
						<a v-link="item.url" target="_blank">{{item.title}}</a>
					</li>
				</ul>
			</div>
			<div class="btn-close"><a v-back-link>返回</a></div>
		</section>
	</div>
</template>
<!-- 添加 scoped “范围”属性CSS限制这个组件只 -->
<style scoped lang="scss">
@import "../assets/css/common.scss";
.attachs{
	padding: 10px;
	border: #F66 1px dashed;
	li{
		line-height: 26px;
	}
	h6{
		font-size: 18px;
		padding-bottom: 10px;
		color: #F66;
	}
	a{
		color: #369;
		text-decoration: underline;
		&:hover{
			color: #F66;
		}
	}
	
}
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
		padding: 50px 0 35px;
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
	import { Toast, Indicator } from 'mint-ui';
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
				},
				category : 99
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
			isAttachs(){
				let attachs = this.articleDetail.attachs || [];
				return attachs.length > 0 ? true :false;
			}
		},
		/*
		 * 路由数据钩 参数发生变化这里被激活
		 */
		route: {
			data({
				to
			}) {
				Indicator.open();
				this.params.id = to.params.id || 1;//文章id
				this.category = parseInt(to.params.category) || 99;
				apps.log(this.category);
				this.getArticleDetailAction(this.params).then((data) => {
					apps.log('文章详情数据请求成功')
					Indicator.close();
				}, (error) => {
					apps.log(error)
				});
			}
		}
	}
</script>
<template>
	<div class="wapper">
		<l-step></l-step>
		<section class="tips fn-clear">
			<p class="fn-left"><i class="edit fn-left"></i>填写主体信息</p>
			<a class="fn-right"><i class="help fn-left"></i>备案帮助</a>
		</section>
		<section class="step-cont w1000">
			<h3>请务必填写真实有效信息</h3>
			<div class="content">
				<div class="fn-clear info m-b-20">
					<div class="title">邮<i></i>箱：</div>
					<p><input type="email" id="" value="" /></p>
				</div>
				<div class="fn-clear info">
					<div class="title">密<i></i>码：</div>
					<p><input type="password" id="" value="" /></p>
				</div>
				<p class="warn text-left">字母、数字或英文符号，最短8位，区分大小写</p>
				<div class="fn-clear info">
					<div class="title">确认密码：</div>
					<p><input type="password" id="" value="" /></p>
				</div>
				<p class="warn text-left">请再次输入密码</p>
				<div class="fn-clear info m-b-20 code">
					<div class="title">验<i></i>证<i></i>码：</div>
					<p><input type="email" id="" value="" /></p>
				</div>
				<div class="fn-clear info m-b-20 code-pic">
					<div class="pic-cont fn-left"><img src="../assets/images/building.jpg" /></div>
					<a>看不清，换一张</a>
				</div>
				<div class="btn">
					<a>注<i></i>册</a>
				</div>
			</div>
		</section>
	</div>
</template>
<!-- 添加 scoped “范围”属性CSS限制这个组件只 -->
<style scoped lang="scss">
	@import "../assets/css/common.scss";
	.tips {
		margin: 0 auto;
		width: 970px;
		padding: 30px 15px 15px;
		font-size: 18px;
		line-height: 22px;
		a {
			font-size: 14px;
			color: #157fe3;
			&:hover {
				text-decoration: underline;
			}
		}
		.edit {
			display: inline-block;
			width: 23px;
			height: 22px;
			background: url(../assets/images/icons.png) 0 -407px no-repeat;
			margin-right: 10px;
		}
		.help {
			display: inline-block;
			width: 22px;
			height: 22px;
			background: url(../assets/images/icons.png) 0 -345px no-repeat;
			margin-right: 10px;
		}
	}
	
	.step-cont {
		margin-bottom: 30px !important;
		width: 998px;
		border: 1px solid $color-border;
		h3 {
			color: #e8800f;
			text-align: center;
			font-size: 16px;
			padding: 10px 0;
			border-bottom: 1px solid $color-border;
		}
		.content {
			padding: 90px 225px;
			text-align: center;
			.info {
				.title {
					text-align: right;
					float: left;
					width: 80px;
					line-height: 37px;
					margin-right: 10px;
					font-size: 16px;
					color: #999;
					i {
						display: inline-block;
						width: 32px;
					}
				}
				>p {
					float: left;
					input {
						width: 430px;
						padding-left: 10px;
						height: 35px;
						line-height: 35px;
						border: 1px solid $color-border;
					}
				}
				&.code {
					i {
						width: 8px;
					}
					input {
						width: 150px;
					}
				}
				&.code-pic {
					.pic-cont {
						margin-left: 91px;
						width: 150px;
						border: 1px solid $color-border;
						height: 63px;
						overflow: hidden;
						img {
							float: left;
							width: 100%;
							height: 100%;
						}
					}
					a {
						line-height: 65px;
						float: left;
						margin-left: 10px;
						&:hover {
							text-decoration: underline;
						}
					}
				}
			}
			.warn {
				padding-left: 100px;
				line-height: 2;
				margin-bottom: 20px;
			}
			.btn {
				padding-left: 91px;
				margin-top: 70px;
				a {
					display: block;
					width: 320px;
					height: 50px;
					line-height: 50px;
					text-align: center;
					font-size: 20px;
					background: #f05a5a;
					color: #fff;
					border-radius: 5px;
					i{
						display: inline-block;
						width: 30px;
					}
					&:hover {
						background: darken(#f05a5a, 5%);
					}
					&:active {
						background: darken(#f05a5a, 15%);
					}
				}
			}
		}
	}
</style>

<script>
	import apps from "../utils/apps.js";
	import Location from "../components/Location.vue";
	import Gather from "../components/Gather.vue";
	import Btns from "../components/Btns.vue";
	import CompanyQuery from "../components/CompanyQuery.vue";
	import Pages from "../components/Pages.vue";
	import Step from "../components/Step.vue";
	import {
		getArticleListAction,
	} from '../vuex/actions.js';
	export default {
		/*
		 * 组件名称
		 */
		components: {
			"z-pages": Pages,
			"l-location": Location,
			"l-query": CompanyQuery,
			"l-gather": Gather,
			"l-btns": Btns,
			"l-step": Step
		},
		/*
		 * 初始化数据
		 */
		data() {
			return {
				params: {
					pageCount: 10,
					pageIndex: 1
				},
				category: 1
			}
		},
		/*
		 * vuex
		 */
		vuex: {
			getters: {
				articleList: (state) => state.modules.articleList,
			},
			actions: {
				getArticleListAction,
			}
		},
		/*
		 * 实例被创建后调用，但是还没有开始 DOM 编译
		 */
		created() {},
		/*
		 * 处理事件
		 */
		methods: {
			handlePageClick(index) {
				apps.log('跳转到第：' + index + "页")
				this.params.pageIndex = index;
				this.getArticleListAction(this.params).then((data) => {
					apps.log('banner数据请求成功')
				}, (error) => {
					apps.log(error)
				});
			}
		},
		/*
		 * 实例计算属性
		 */
		computed: {
			pagesObj() {
				return {
					pageCount: this.params.pageCount,
					pageIndex: this.params.pageIndex,
					total: this.articleList.total
				};
			}
		},
		/*
		 * 路由数据钩 参数发生变化这里被激活
		 */
		route: {
			data({
				to
			}) {
				apps.log(to.params.category);
				this.params.category = to.params.category || 1; //category
				this.category = parseInt(to.params.category);
				this.getArticleListAction(this.params).then((data) => {
					apps.log('列表数据请求成功')
				}, (error) => {
					apps.log(error)
				});
			}
		}
	}
</script>
<template>
	<div class="fn-clear wapper">
		<section class="left-side fn-left">
			<l-query></l-query>
			<div class="gather-cont m-t-15">
				<l-gather></l-gather>
			</div>
			<l-btns></l-btns>
		</section>
		<section class="right-side fn-left">
			<l-location :type="category"></l-location>
			<div class="comp-cont">
				<h3>诚信投诉</h3>
				<div>
					<span class="title">行业分类<i>*</i></span>
					<p>
						<select class="w230">
							<option value="">- 请选择 -</option>
						</select>
					</p>
				</div>
				<div>
					<span class="title">企业名称<i>*</i></span>
					<p>
						<select class="w335">
							<option value="">- 请选择 -</option>
						</select>
					</p>
				</div>
				<div>
					<span class="title">从业人员姓名</span>
					<p><input type="text" id="" value="" class="w230" /></p>
				</div>
				<div>
					<span class="title">事件主题<i>*</i></span>
					<p><input type="text" id="" value="" class="w230"/></p>
				</div>
				<div class="fn-clear">
					<p class="fn-left title">事件描述<i>*</i></p>
					<p><textarea></textarea></p>
				</div>
				<div>
					<span class="title">相关资料上传</span>
					<p>
						<input type="file" name="" id="" value="" />
						<span class="tip">（附件不能超过2M）</span>
					</p>
				</div>
				<div class="fn-clear">
					<div class="fn-left">
						<span class="title">投诉人姓名<i>*</i></span>
						<p class="fn-left">
							<input type="text" id="" value="" class="w155"/>
						</p>
					</div>
					<div>
						<span class="title">联系方式/电话<i>*</i></span>
						<p><input type="text" id="" value="" class="w176"/></p>
					</div>
				</div>
				<div>
					<span class="title">联系人地址</span>
					<p><input type="text" id="" value="" class="w493" /></p>
				</div>
				<div class="fn-clear">
					<p class="fn-left title">投诉人要求</p>
					<p><textarea placeholder="请输入您的要求" class="require"></textarea></p>
				</div>
				<div class="btn-submit"><span class="title"></span><a>提交需求</a></div>
			</div>
			<div class="notes">
				<dl>
					<dt>注：</dt>
					<dd>1、为了保障您的合法权益，请您在投诉填写真实资料，以便我们和您联系，带"*"为必填项。</dd>
					<dd>2、文明用语，请不要使用一些不文明的语言。</dd>
					<dd>3、请投诉人详细阅读<span>《重庆市房地产开发企业诚信投诉范围》</span>。</dd>
					<dd>4、投诉事件不在<span>《重庆市房地产开发企业诚信投诉范围》</span>内的，请向对应监督管理部门投诉。</dd>
				</dl>
			</div>
		</section>
	</div>
</template>
<!-- 添加 scoped “范围”属性CSS限制这个组件只 -->
<style scoped lang="scss">
	@import "../assets/css/common.scss";
	.wapper {
		margin-top: 15px;
	}
	.right-side {
		width: 705px;
		margin-left: 15px;
		.comp-cont {
			width: 615px;
			height: 682px;
			background: url(../assets/images/complaint_bg.png) 0 0 no-repeat;
			background-size: 100%;
			margin-top: 35px;
			padding: 45px;
			.w155{
				width: 135px;
				margin-right: 20px;
			}
			.w176{
				width: 176px;
			}
			.w230{
				width: 230px;
			}
			.w335{
				width: 335px;
			}
			.w493{
				width: 473px;
			}
			h3 {
				text-align: center;
				color: #666;
				font-size: 24px;
				padding-bottom: 30px;
			}
			.title {
				height: 30px;
				line-height: 30px;
				float: left;
				display: inline-block;
				width: 120px;
				font-weight: bold;
				i {
					color: #f02b2b;
					font-style: normal;
				}
			}
			input,select,textarea {
				border: 1px solid #999;
				background: #ececec;
				margin-bottom: 15px;
			}
			input,select{
				height: 30px;
				line-height: 30px;
				padding-left: 20px;
			}
			textarea{
				padding: 10px;
				width: 473px;
				height: 60px;
				resize: none;
				&.require{
					height: 92px;
				}
			}
			.tip{
				color: #999;
			}
			.btn-submit{
				padding-top: 15px;
				text-align: center;
				a{
					display: inline-block;
					width: 230px;
					height: 30px;
					line-height: 30px;
					background: #f05a5a;
					font-size: 16px;
					color: #fff;
					border: 0;
					&:hover{
						background: darken(#f05a5a,10%);
					}
					&:active{
						background: darken(#f05a5a,20%);
					}
				}
			}
		}
		.notes{
			padding: 30px 0 60px 55px;
			color: #999;
			line-height: 1.8;
			dt{
				font-weight: bold;
			}
			dd span{
				color: #0b6fce;
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
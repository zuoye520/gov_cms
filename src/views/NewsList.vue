<template>
	<div class="fn-clear news-list w1000">
		<section class="left-side fn-left">
			<l-query :query-params ='queryParams'></l-query>
			<div class="gather-cont">
				<l-gather></l-gather>
			</div>
			<l-btns></l-btns>
		</section>
		<section class="right-side fn-left">
			<l-location :type = "category"></l-location>
			<div>
				<dl>
					<dt class="fn-clear">
						<span>【 序号 】</span>
						
						<span class="p-l-30" v-show="!isSearch">【 标签 】</span>
						<span class="p-l-30" v-show="isSearch">【 描述 】</span>
						<span class="fn-right p-r-20">【 时间 】</span></dt>
					<dd v-for="item in articleList.list">
						<a class="fn-clear"  v-link="{ name: 'newsDetails', query: { category : category ,id: item.id }}">
							<p class="num fn-left">{{$index+1}}</p>
							<div class="content fn-left">
								<h3><span v-show="isSearch">【{{item.eName}}】</span>{{item.title}} </h3>
								<p class="text-ellipsis-2">{{item.content}} </p>
							</div>
							<div class="fn-right time">[{{item.publishTime | formatTime "yyyy-MM-dd"}}]</div>
						</a>
					</dd>
				</dl>
				<p class="p-30" align="center" v-show ="articleList.list && articleList.list.length <= 0">暂无内容...</p>
			</div>
			<div class="pages">
				<z-pages :pages-obj = "pagesObj"></z-pages>
			</div>
			
		</section>
	</div>
</template>
<!-- 添加 scoped “范围”属性CSS限制这个组件只 -->
<style scoped lang="scss">
	@import "../assets/css/common.scss";
	.news-list {
		padding: 15px 0 30px;
		position: relative;
		.left-side {
			width: 280px;
			.gather-cont {
				padding-top: 15px;
			}
		}
		.right-side {
			width: 705px;
			margin-left: 15px;
			dl {
				padding-top: 25px;
			}
			dt,
			dd {
				border-bottom: 1px dotted $color-gray5;
			}
			dt {
				color: #b8b8b8;
				font-size: 12px;
			}
			dd {
				a {
					padding: 15px 10px;
					display: block;
					color: $color-font;
					&:hover .num {
						border-color: #84c3e9;
						color: #84c3e9;
						background: linear-gradient(to bottom, #fdfeff, #dff0f9);
					}
					&:active {
						background: rgba(0, 0, 0, 0.05);
						h3 {
							color: #84c3e9;
						}
					}
				}
				h3 {
					position: relative;
					&:before {
						content: "";
						width: 11px;
						height: 9px;
						background: url(../assets/images/icons.png) 0 -621px no-repeat;
						position: absolute;
						top: 7px;
						left: -20px;
					}
				}
				.num {
					width: 35px;
					height: 35px;
					line-height: 35px;
					text-align: center;
					margin-top: 12px;
					border: 1px solid #c1c1c1;
					border-radius: 3px;
					background: linear-gradient(to bottom, #fff, #efefef);
					transition: all 0.5s ease;
				}
				.content {
					width: 490px;
					height: 60px;
					padding-left: 40px;
					p {
						font-size: 12px;
						color: #b8b8b8;
					}
				}
				.time {
					font-size: 12px;
					color: #b8b8b8;
				}
			}
			.pages {
				/*width: 232px;
				height: 30px;
				background: url(../assets/images/page.jpg);
				position: absolute;
				bottom: 45px;
				right: 30px;*/
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
			"z-pages":Pages,
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
				queryParams:{//搜索参数
					ename:'',
					pname:'',
					level:'请选择'
				},
				params: {
					pageCount: 10,
					pageIndex: 1
				},
				category : 1,
				isSearch : false
			}
		},
		/*
		 * vuex
		 */
		vuex: {
			getters: {
				articleList:(state)=> state.modules.articleList,
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
			handlePageClick(index){
				apps.log('跳转到第：'+index+"页")
				this.params.pageIndex = index;
				this.getArticleListAction(this.params).then((data) => {
					apps.log('分页数据请求成功')
				}, (error) => {
					apps.log(error)
				});
			}
		},
		/*
		 * 实例计算属性
		 */
		computed: {
			pagesObj(){
				return {
					pageCount : this.params.pageCount,
					pageIndex : this.params.pageIndex,
					total : this.articleList.total
				};
			}
		},
		/*
		 * 路由数据钩 参数发生变化这里被激活
		 */
		route: {
			canDeactivate({to, next}) {
//				delete this.params.enterpriseId;
//				delete this.params.ename;
//				delete this.params.pname;
//				delete this.params.level;
//				delete this.params.search;
				next();
			},
			data({
				to
			}) {
				apps.log(to.query.category);
				this.params.category = to.query.category || 1; //category
				this.category = parseInt(to.query.category);
				this.params.pageIndex = 1;
				
				this.params.enterpriseId = to.query.enterpriseId || null;//企业id
				//搜索相关信息
				this.queryParams.ename = decodeURIComponent(apps._GET('ename'))!='null' ? decodeURIComponent(apps._GET('ename')):'';
				this.queryParams.pname = decodeURIComponent(apps._GET('pname'))!='null' ? decodeURIComponent(apps._GET('pname')):'';
				this.queryParams.level = decodeURIComponent(apps._GET('level'))!='null' ? decodeURIComponent(apps._GET('level')):'请选择';
				this.queryParams.search = decodeURIComponent(apps._GET('search'))!='null' ? decodeURIComponent(apps._GET('search')):'';
				
				this.params.ename = this.queryParams.ename ?this.queryParams.ename : null;
				this.params.pname = this.queryParams.pname ?this.queryParams.pname : null;
				this.params.level = this.queryParams.level!='请选择' ?this.queryParams.level : null;
				this.params.search = this.queryParams.search ?this.queryParams.search : null;
				
				this.isSearch = this.params.search || this.params.enterpriseId ? true:false 
				this.getArticleListAction(this.params).then((data) => {
					apps.log('列表数据请求成功')
				}, (error) => {
					apps.log(error)
				});
			}
		}
	}
</script>
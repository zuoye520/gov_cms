<template>
	<div class="fn-clear news-list w1000">
		<section class="left-side fn-left">
			<l-query :query-params ='params'></l-query>
			<div class="gather-cont">
				<l-gather></l-gather>
			</div>
			<l-btns></l-btns>
		</section>
		<section class="right-side fn-left">
			<l-location :type = "params.category"></l-location>
			<div class="list">
				<h2>龙湖地产集团获奖信息</h2>
				<table width="100%" border="1" cellspacing="" cellpadding="">
					<tr><th>序号</th><th>获奖情况</th><th>所涉及项目名称</th><th>授权单位</th><th>授奖时间</th><th>备注</th></tr>
					<tr v-for="item in aeList.list">
						<td>{{item.eName}}</td>
						<td>{{item.content}}</td>
						<td>{{item.eName}}</td>
						<td>{{item.eName}}</td>
						<td>{{item.eName}}</td>
						<td>{{item.eName}}</td>
					</tr>
				</table>
				<div class="tips">
					<h4>注：</h4>
					<p>获奖情况描述</p>
				</div>
			</div>
		</section>
	</div>
</template>
<!-- 添加 scoped “范围”属性CSS限制这个组件只 -->
<style scoped lang="scss">
	@import "../assets/css/common.scss";
	.list{
		padding: 20px 0;
		h2{
			font-size: 20px;
			color: #f05a5a;
			text-align: center;
			padding: 0 0 20px;
		}
		.tips{
			padding: 10px;
			h4{
				color: #f05a5a;
			}
		}
		
		table{
			border:#ccc 1px solid;
			font-size: 12px;
			th{
				background: #f05a5a;
				color: #fff;
			}
			td,th{
				padding: 10px 20px;
				text-align: center;
				min-width: 50px;
				a{
					color: #1680e5;
				}
			}
			tr{
				background: #fff;
			}
			tr:nth-child(even){
				background: #eee;
			}
		}
	}
	
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
		getAEList,
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
				params: {
					pageCount: 10,
					pageIndex: 1,
					category :10,
					ename:'',
					pname:'',
					level:'请选择'
				},
				category : 1
			}
		},
		/*
		 * vuex
		 */
		vuex: {
			getters: {
				aeList:(state)=> state.modules.aeList,
			},
			actions: {
				getAEList,
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
//			handlePageClick(index){
//				apps.log('跳转到第：'+index+"页")
//				this.params.pageIndex = index;
//				this.getArticleListAction(this.params).then((data) => {
//					apps.log('分页数据请求成功')
//				}, (error) => {
//					apps.log(error)
//				});
//			}
		},
		/*
		 * 实例计算属性
		 */
		computed: {
//			pagesObj(){
//				return {
//					pageCount : this.params.pageCount,
//					pageIndex : this.params.pageIndex,
//					total : this.aeList.total
//				};
//			}
		},
		/*
		 * 路由数据钩 参数发生变化这里被激活
		 */
		route: {
			canDeactivate({to, next}) {
				next();
			},
			data({
				to
			}) {
				apps.log(to.query.category);
				this.params.pageIndex = 1;
				this.params.category = parseInt(to.query.category) || 10; //category
				this.params.ename = to.query.ename || ''; //ename
				this.params.pname = to.query.pname || ''; //pname
				this.params.level = to.query.level || '请选择'; //level
				
				this.getAEList(this.params).then((data) => {
					apps.log('列表数据请求成功')
				}, (error) => {
					apps.log(error)
				});
			}
		}
	}
</script>
<template>
	<div class="fn-clear news-list w1000">
		<section class="left-side fn-left">
			<l-query :query-params='query'></l-query>
			<div class="gather-cont">
				<l-gather></l-gather>
			</div>
			<l-btns></l-btns>
		</section>
		<section class="right-side fn-left">
			<l-location :type="params.category" :father-type="fatherCategory"></l-location>
			<div class="list">
				<div class="filter box box-center-flex">
					<div class="box sort box-flex">
						<!--<span>排序</span>
						<p>
							<select>
								<option value="">信用排名</option>
								<option value="">信用综合得分</option>
								<option value="">信用能力得分</option>
								<option value="">诚信表现得分</option>
							</select>
						</p>-->
					</div>
					<div>
						<div class="box search box-center-flex">
							<p>
								<input type="text" id="" value="" placeholder="请输入企业名称..." v-model="params.ename" @keyup.enter="handleSearch"/>
							</p>
							<p class="p-l-10">
								<a @click="handleSearch" class="search-btn">查询</a>
							</p>
						</div>

					</div>
				</div>
				<table width="100%" border="1" cellspacing="" cellpadding="">
					<tr>
						<th>企业名称</th>
						<th>信用排名
							<a @click="handleSort('index')" class="sort" :class="[params.sortName =='index'? 'on':'']"></a>
						</th>
						<th>信用综合得分
							<a @click="handleSort('score')" class="sort" :class="[params.sortName =='score'? 'on':'']"></a>
						</th>
						<th>信用能力得分
							<a @click="handleSort('score1')" class="sort" :class="[params.sortName =='score1'? 'on':'']"></a>
						</th>
						<th>诚信表现得分
							<a @click="handleSort('score2')" class="sort" :class="[params.sortName =='score2'? 'on':'']"></a>
						</th>
					</tr>
					<tr v-for="item in epList.list">
						<td>{{item.name}}</td>
						<td>{{item.sort}}</td>
						<td>{{item.score}}</td>
						<td>{{item.score1}}</td>
						<td>{{item.score2}}</td>
					</tr>
				</table>
				<p class="p-30" align="center" v-show="epList.list && epList.list.length <= 0">暂无内容...</p>
			</div>
			<div class="pages">
				<z-pages :pages-obj="pagesObj"></z-pages>
			</div>

		</section>
	</div>
</template>
<!-- 添加 scoped “范围”属性CSS限制这个组件只 -->
<style scoped lang="scss">
	@import "../assets/css/common.scss";
	.list {
		padding: 20px 0;
		.filter {
			padding: 10px 0 20px;
			.sort {
				span {
					padding: 5px 10px;
				}
				option {
					padding: 5px 20px;
				}
			}
			input {
				padding: 5px 10px;
				border: 1px #ccc solid;
				border-radius: 3px;
			}
			.search-btn {
				padding: 7px 20px;
				background: #1680e5;
				color: #fff;
				border-radius: 3px;
			}
		}
		table {
			border: #ccc 1px solid;
			th {
				background: #f05a5a;
				color: #fff;
				.sort {
					padding: 10px;
					background: url(../assets/images/sort_icon.png) center center no-repeat;
					background-size: 15px;
					&.on {
						background: url(../assets/images/gray_icon.png) center center no-repeat;
						background-size: 15px;
					}
				}
			}
			td,
			th {
				padding: 10px;
				text-align: center;
				min-width: 100px;
				font-size: 12px;
				a {
					color: #1680e5;
				}
			}
			tr {
				background: #fff;
			}
			tr:nth-child(even) {
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
		Toast,
		Indicator
	} from 'mint-ui';
	import {
		getEPList,
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
					pageIndex: 1,
					category: 19,
					ename: '',
					sort: 1,
					sortName: ''
				},
				query: {},
				fatherCategory : 0,
			}
		},
		/*
		 * vuex
		 */
		vuex: {
			getters: {
				epList: (state) => state.modules.epList,
			},
			actions: {
				getEPList,
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
				this.getEPList(this.params).then((data) => {
					apps.log('数据请求成功')
				}, (error) => {
					apps.log(error)
				});
			},
			handleSearch() { //搜索
				Indicator.open();
				this.params.pageIndex = 1;
				this.getEPList(this.params).then((data) => {
					apps.log('数据请求成功')
					Indicator.close();
				}, (error) => {
					apps.log(error)
					Indicator.close();
				});
			},
			handleSort(type){
				this.params.sortName = this.params.sortName == type ? '':type
				this.handleSearch()
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
					total: this.epList.total
				};
			}
		},
		/*
		 * 路由数据钩 参数发生变化这里被激活
		 */
		route: {
			canDeactivate({
				to,
				next
			}) {
				next();
			},
			data({
				to
			}) {
				apps.log(to.query.category);
				this.params.pageIndex = 1;
				this.params.category = parseInt(to.query.category) || 10; //category
				this.fatherCategory = parseInt(to.query.fatherCategory) || 0; //fatherCategory
				this.getEPList(this.params).then((data) => {
					apps.log('列表数据请求成功')
				}, (error) => {
					apps.log(error)
				});
			}
		}
	}
</script>
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
			<div class="company-list">
				<ul>
					<li class="fn-clear" v-for="item in eList.list" v-link="{ name: 'enterpriseInfo', params: {pid: item.id}}">
						<div class="company-logo fn-left">
							<img v-if="item.logo" :src="item.logo" />
							<img v-else src="../assets/images/deflaut.jpg" />
						</div>
						<div class="company-info fn-left">
							<h3>{{item.name}}</h3>
							<p>{{item.des}}</p>
							<p class="score"><strong>{{item.score}}</strong>分</p>
						</div>
					</li>
					<!--<li class="fn-clear">
						<div class="company-logo fn-left"><img src="../assets/images/brand1.jpg" /></div>
						<div class="company-info fn-left">
							<h3>腾讯科技<span>（深圳市腾讯计算机系统有限公司）</span></h3>
							<p>腾讯科技(2.2.2)腾讯公司成立于1998年11月，是目前中国最大的互联网综合服务提供商之一，也是中国服务用户最多的互联网</p>
							<p class="score"><strong>99</strong>分</p>
						</div>
					</li>
					<li class="fn-clear">
						<div class="company-logo fn-left"><img src="../assets/images/brand1.jpg" /></div>
						<div class="company-info fn-left">
							<h3>腾讯科技<span>（深圳市腾讯计算机系统有限公司）</span></h3>
							<p>腾讯科技(2.2.2)腾讯公司成立于1998年11月，是目前中国最大的互联网综合服务提供商之一，也是中国服务用户最多的互联网</p>
							<p class="score"><strong>99</strong>分</p>
						</div>
					</li>-->
				</ul>
				<p class="p-30" align="center" v-show ="eList.list && eList.list.length <= 0">暂无内容...</p>
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
			position: relative;
			.company-list {
				min-height: 900px;
				li {
					margin-top: 30px;
					position: relative;
					.company-logo {
						width: 240px;
						height: 60px;
						margin-right: 20px;
						border: 1px solid $color-border;
						overflow: hidden;
						img {
							width: 100%;
							height: 100%;
							
						}
					}
					.company-info {
						width: 443px;
						h3 {
							font-weight: bold;
							font-size: 16px;
							span {
								color: $color-gray1;
							}
						}
						>p {
							/*height: 40px;*/
							overflow: hidden;
						}
						.score {
							width: 57px;
							height: 32px;
							text-align: center;
							line-height: 32px;
							background: #ff9900;
							font-size: 20px;
							color: #fff;
							margin-top: 10px;
						}
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

	import {
		getEList
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
				category : 15
			}
		},
		/*
		 * vuex
		 */
		vuex: {
			getters: {
				eList: (state) => state.modules.eList,
			},
			actions: {
				getEList
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
				this.getEList(this.params).then((data) => {
					apps.log('分页数据请求成功')
				}, (error) => {
					apps.log(error)
				});
			}
		},
		/*
		 * 定义过滤器
		 */
		filters: {},
		/*
		 * 实例计算属性
		 */
		computed: {
			pagesObj(){
				return {
					pageCount : this.params.pageCount,
					pageIndex : this.params.pageIndex,
					total : this.eList.total
				};
			}
		},
		/*
		 * 路由数据钩 参数发生变化这里被激活
		 */
		route: {
			canDeactivate({to, next}) {
//				apps.setSessionStorage('SEARCH_PARAMS',{});
				next();
			},
			data({
				to
			}) {
				this.params.pageIndex = 1;
				this.queryParams.ename = decodeURIComponent(apps._GET('ename'))!='null' ? decodeURIComponent(apps._GET('ename')):'';
				this.queryParams.pname = decodeURIComponent(apps._GET('pname'))!='null' ? decodeURIComponent(apps._GET('pname')):'';
				this.queryParams.level = decodeURIComponent(apps._GET('level'))!='null' ? decodeURIComponent(apps._GET('level')):'请选择';
				
				this.params.ename = this.queryParams.ename ?this.queryParams.ename : null;
				this.params.pname = this.queryParams.pname ?this.queryParams.pname : null;
				this.params.level = this.queryParams.level!='请选择' ?this.queryParams.level : null;
				
				this.getEList(this.params).then((data) => {
					apps.log('企业列表数据请求成功')
				}, (error) => {
					apps.log(error)
				});
				
			}
		}
	}
</script>
<template>
	<div class="fn-clear news-list">
		<section class="left-side fn-left">
			<l-query></l-query>
			<div class="gather-cont">
				<l-gather></l-gather>
			</div>
			<l-btns></l-btns>
		</section>
		<section class="right-side fn-left">
			<l-location></l-location>
			<div class="company-list">
				<ul>
					<li class="fn-clear">
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
					</li>
					<li class="fn-clear">
						<div class="company-logo fn-left"><img src="../assets/images/brand1.jpg" /></div>
						<div class="company-info fn-left">
							<h3>腾讯科技<span>（深圳市腾讯计算机系统有限公司）</span></h3>
							<p>腾讯科技(2.2.2)腾讯公司成立于1998年11月，是目前中国最大的互联网综合服务提供商之一，也是中国服务用户最多的互联网</p>
							<p class="score"><strong>99</strong>分</p>
						</div>
					</li>
				</ul>
			</div>
			<div class="pages"></div>
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
							height: 40px;
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
			.pages {
				width: 508px;
				height: 33px;
				background: url(../assets/images/pages.png);
				margin: 90px 0 0 90px;
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

	import {
//		getBannerList,
//		getIndexGoodsList
	} from '../vuex/actions.js';
	export default {
		/*
		 * 组件名称
		 */
		components: {
			"l-location": Location,
			"l-query": CompanyQuery,
			"l-gather": Gather,
			"l-btns": Btns,
		},
		/*
		 * 初始化数据
		 */
		data() {
			return {}
		},
		/*
		 * vuex
		 */
		vuex: {
			getters: {
//				bannerList: (state) => state.index.bannerList,
//				goodsList: (state) => state.index.goodsList,
			},
			actions: {
				getBannerList,
				getIndexGoodsList
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

		},
		/*
		 * 定义过滤器
		 */
		filters: {},
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
			}) {}
		}
	}
</script>
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
			<div>
				<dl>
					<dt class="fn-clear"><span>【 序号 】</span><span class="p-l-30">【 标签 】</span><span class="fn-right p-r-20">【 时间 】</span></dt>
					<dd>
						<a href="javascript:;" class="fn-clear">
							<p class="num fn-left">1</p>
							<div class="content fn-left">
								<h3>市特检院黔江中心“质监服务千家万户”行动感动企业  </h3>
								<p class="text-ellipsis-2">12月17日，重庆市恒兴电梯工程有限公司为市特检院黔江中心送来锦旗，感谢该中心贴心服务企业，帮扶企业发展。</p>
							</div>
							<div class="fn-right time">[2016-12-10]</div>
						</a>
					</dd>
					<dd>
						<a href="javascript:;" class="fn-clear">
							<p class="num fn-left">1</p>
							<div class="content fn-left">
								<h3>市特检院黔江中心“质监服务千家万户”行动感动企业  </h3>
								<p class="text-ellipsis-2">12月17日，重庆市恒兴电梯工程有限公司为市特检院黔江中心送来锦旗，感谢该中心贴心服务企业，帮扶企业发展。限公司为市特检院黔江中心送来锦旗，感谢该中心贴心服务企业，帮扶企业发展。</p>
							</div>
							<div class="fn-right time">[2016-12-10]</div>
						</a>
					</dd>
					<dd>
						<a href="javascript:;" class="fn-clear">
							<p class="num fn-left">1</p>
							<div class="content fn-left">
								<h3>市特检院黔江中心“质监服务千家万户”行动感动企业  </h3>
								<p class="text-ellipsis-2">12月17日，重庆市恒兴电梯工程有限公司为市特检院黔江中心送来锦旗，感谢该中心贴心服务企业，帮扶企业发展。</p>
							</div>
							<div class="fn-right time">[2016-12-10]</div>
						</a>
					</dd>
				</dl>
			</div>
			<div class="pages"></div>
		</section>
	</div>
</template>
<!-- 添加 scoped “范围”属性CSS限制这个组件只 -->
<style scoped lang="scss">
@import "../assets/css/common.scss";
.news-list{
	padding: 15px 0 30px;
	position: relative;
	.left-side{
		width: 280px;
		.gather-cont{
			padding-top: 15px;
		}
	}
	.right-side{
		width: 705px;
		margin-left: 15px;
		dl{
			padding-top: 25px;
		}
		dt,dd{
			border-bottom: 1px dotted $color-gray5;
		}
		dt{
			color: #b8b8b8;
			font-size: 12px;
		}
		dd{
			
			a{padding: 15px 10px;
				display: block;
				color: $color-font;
				&:hover .num{
					border-color: #84c3e9;
					color: #84c3e9;
					background: linear-gradient(to bottom, #fdfeff, #dff0f9);
				} 
				&:active{
					background: rgba(0,0,0,0.05);
					h3{
						color: #84c3e9;
					}
				}
			}
			h3{
				position:relative; 
				&:before{
					content: "";
					width: 11px;
					height: 9px;
					background: url(../assets/images/icons.png) 0 -621px no-repeat;
					position: absolute;
					top: 7px;
					left: -20px;
				}
			}
			.num{
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
			.content{
				width: 490px;
				height: 60px;
				padding-left: 40px;
				p{
					font-size: 12px;
					color: #b8b8b8;
				}
			}
			.time{
				font-size: 12px;
				color: #b8b8b8;
			}
		}
		.pages{
			width: 232px;
			height: 30px;
			background: url(../assets/images/page.jpg);
			position: absolute;
			bottom: 45px;
			right: 30px;
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
		getBannerList,
		getIndexGoodsList
	} from '../vuex/actions.js';
	export default {
		/*
		 * 组件名称
		 */
		components: {
			"l-location":Location,
			"l-query":CompanyQuery,
			"l-gather":Gather,
			"l-btns":Btns,
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
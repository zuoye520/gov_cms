<template>
	<!--项目详情信息-->
	<div class="w1000">
		<l-location :type="category"></l-location>
		<section class="info-cont">
			<div class="fn-clear">
				<div class="fn-left swiper">
					<div class="swiper-container">
						<div class="swiper-wrapper info-swp">
							<div class="swiper-slide" v-for="item in detail.picList">
								<img :src="item.url" />
							</div>
							<!--<div class="swiper-slide">
								<img src="../assets/images/banner.jpg" />
							</div>
							<div class="swiper-slide">
								<img src="../assets/images/banner.jpg" />
							</div>-->
						</div>
						<!-- Add Pagination -->
						<div class="swiper-pagination"></div>
						<div class="swiper-button-prev"></div>
						<div class="swiper-button-next"></div>
					</div>
				</div>
				<div class="fn-left info-list w-r">
					<div class="bor-t bor-r fn-clear">
						<div class="title">项目名称：</div>
						<div class="cont text-center f-w">{{detail.name|| '无'}}</div>
					</div>
					<div class="bor-t bor-r fn-clear">
						<div class="title">企业名称：</div>
						<div class="cont">{{detail.group_name|| '无'}}</div>
					</div>
					<div class="bor-t bor-r fn-clear">
						<div class="title">坐落地址：</div>
						<div class="cont">{{detail.address|| '无'}}</div>
					</div>
					<div class="bor-t bor-r fn-clear">
						<div class="title">占地面积：</div>
						<div class="cont">{{detail.hold_area||0}}平方米</div>
					</div>
					<div class="bor-t bor-r fn-clear">
						<div class="title">总建筑面积：</div>
						<div class="cont">{{detail.build_area || 0}}平方米</div>
					</div>
					<div class="bor-t bor-r fn-clear">
						<div class="title">物业类型：</div>
						<div class="cont">{{detail.house_name|| '无'}}</div>
					</div>
					<div class="bor-t bor-r fn-clear">
						<div class="title">总户数：</div>
						<div class="cont">{{detail.household_count || 0}}户</div>
					</div>
					<div class="bor-t bor-r fn-clear bor-b">
						<div class="title">联系电话：</div>
						<div class="cont">{{detail.tel || '无'}}</div>
					</div>
				</div>
			</div>
		</section>
		<section class="fn-clear">
			<div class="info-list w-l fn-left">
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">交房标准：</div>
					<div class="cont">{{detail.handed_standard|| '无'}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">停车位：</div>
					<div class="cont"> {{detail.park_count || 0}}个</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">开工时间：</div>
					<div class="cont">{{detail.start_date | formatTime "yyyy-MM-dd"}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">项目开发公司名称：</div>
					<div class="cont">{{detail.develop_name|| '无'}}</div>
				</div>
			</div>
			<div class="fn-left info-list w-r">
				<div class="bor-r bor-b fn-clear">
					<div class="title">交房时间：</div>
					<div class="cont">{{detail.handed_date | formatTime "yyyy-MM-dd"}}</div>
				</div>
				<div class="bor-r bor-b fn-clear">
					<div class="title">车位比：</div>
					<div class="cont">{{detail.stall|| '无'}}</div>
				</div>
				<div class="bor-r bor-b fn-clear">
					<div class="title">竣工时间：</div>
					<div class="cont">{{detail.end_date | formatTime "yyyy-MM-dd"}}</div>
				</div>
				<div class="bor-r bor-b fn-clear">
					<div class="title">集团公司名称：</div>
					<div class="cont">{{detail.group_name|| '无'}}</div>
				</div>
			</div>
		</section>
		<section class="info-list">
			<div class="bor-l bor-b bor-r fn-clear">
				<div class="title">建筑设计单位名称：</div>
				<div class="cont w790">{{detail.design_name|| '无'}}</div>
			</div>
			<div class="bor-l bor-b bor-r fn-clear">
				<div class="title">施工单位名称：</div>
				<div class="cont w790">{{detail.construction_name|| '无'}}</div>
			</div>
			<div class="bor-l bor-b bor-r fn-clear">
				<div class="title">监理单位名称：</div>
				<div class="cont w790">{{detail.manage_name|| '无'}}</div>
			</div>
		</section>
		<section class="fn-clear">
			<div class="info-list w-l fn-left">
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">景观设计单位名称：</div>
					<div class="cont">{{detail.sight_name|| '无'}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">业务银行名称：</div>
					<div class="cont">{{detail.band_name|| '无'}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">销售代理公司名称：</div>
					<div class="cont">{{detail.saleagent_name|| '无'}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">权证号：</div>
					<div class="cont">无</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">预售许可证号：</div>
					<div class="cont">无</div>
				</div>
			</div>
			<div class="fn-left info-list w-r">
				<div class="bor-r bor-b fn-clear">
					<div class="title">物业管理公司名称：</div>
					<div class="cont">{{detail.house_name|| '无'}}</div>
				</div>
				<div class="bor-r bor-b fn-clear">
					<div class="title">广告代理公司名称：</div>
					<div class="cont">{{detail.advertise_name|| '无'}}</div>
				</div>
				<div class="bor-r bor-b fn-clear">
					<div class="title">签订土地出让合同时间：</div>
					<div class="cont">{{detail.land_transfer_date | formatTime "yyyy-MM-dd"}}</div>
				</div>
				<div class="bor-r bor-b fn-clear">
					<div class="title">办证时间：</div>
					<div class="cont">无</div>
				</div>
				<div class="bor-r bor-b fn-clear">
					<div class="title">开盘销售时间：</div>
					<div class="cont">无</div>
				</div>
			</div>
		</section>
		<section class="info-list">
			<div class="bor-l bor-b bor-r fn-clear">
				<div class="title">项目配套设施情况介绍：</div>
				<div class="cont w790">{{detail.facility_situation || '无'}}</div>
			</div>
			<div class="bor-l bor-b bor-r fn-clear">
				<div class="title">项目情况介绍：</div>
				<div class="cont w790">{{detail.project_situation || '无'}}</div>
			</div>
		</section>
		<section class="pic-cont">
			<!--<h3>诚信展示图片</h3>
			<div>
				<ul class="fn-clear">
					<li><img src="../assets/images/building.jpg"/></li>
					<li><img src="../assets/images/building.jpg"/></li>
					<li><img src="../assets/images/building.jpg"/></li>
				</ul>
			</div>-->
			<div class="tab-bar">
				<ol>
					<li><a v-link="{ name: 'newsEList', params: {category:10, enterpriseId: params.pid}}">开发企业获奖信息</a></li>
					<li><a v-link="{ name: 'newsEList', params: {category:11,enterpriseId: params.pid}}">开发企业不良行为信息</a></li>
					<li><a v-link="{ name: 'enterpriseInfo', params: {pid: params.pid}}" >诚信企业展示</a></li>
					<li><a v-link="{ name: 'projectList', params: {eid: params.pid }}">诚信项目展示</a></li>
				</ol>
			</div>
		</section>
	</div>
</template>
<!-- 添加 scoped “范围”属性CSS限制这个组件只 -->
<style scoped lang="scss">
	@import "../assets/css/common.scss";
	.info-cont {
		margin-top: 25px;
		.swiper {
			padding: 20px 20px 19px;
			border: 1px solid #ccc;
		}
	}
	.info-list{
		color: #666;
		&.w-r{
			width: 495px;
		}
		&.w-l{
			width: 505px;
		}
		.bor-t{
			border-top: 1px solid #ccc;
		}
		.bor-l{
			border-left: 1px solid #ccc;
		}
		.bor-b{
			border-bottom: 1px solid #ccc;
		}
		.bor-r{
			border-right: 1px solid #ccc;
		}
		.title,.cont{
			float: left;
			height: 44px;
			line-height: 44px;
			padding: 0 10px;
		}
		.title{
			width: 158px;
			text-align: right;
			background: #dbedff;
			border-right: 1px solid #ccc;
			font-weight: bold;
		}
		.cont{
			width: 294px;
			&.f-w{
				font-weight: bold;
			}
		}
		.w790{
			width: 790px !important;
		}
	}
	.pic-cont{
		margin-bottom: 100px;
		border-right: 1px solid #ccc;
		border-left: 1px solid #ccc;
		h3{
			text-align: center;
			color: #666;
			font-weight: bold;
			font-size: 16px;
			padding: 20px 0;
		}
		ul{
			padding: 0 0 23px 23px;
			li{
				float: left;
				width: 301px;
				height: 226px;
				overflow: hidden;
				margin-right: 24px;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
		.tab-bar{
			text-align: center;
			background: #5b9ada;
			padding: 10px 0;
			li{
				display: inline-block;
				padding: 0 20px;
				 + li{
					border-left: 1px solid #11467c;
				}
				a{
					color: #11467c;
					&.on,&:hover{
						color: #fff;
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
		getPDetail,
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
					pid: 0,
				},
				category: 16
			}
		},
//		ready() {
//			var swiper = new Swiper('.swiper-container', {
//				pagination: '.swiper-pagination',
//				paginationClickable: true,
//				nextButton: '.swiper-button-next',
//				prevButton: '.swiper-button-prev',
//			});
//
//		},
		/*
		 * vuex
		 */
		vuex: {
			getters: {
				detail: (state) => state.modules.projectDetail,
			},
			actions: {
				getPDetail,
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
			initSwiper(){//初始化轮播图
				setTimeout(()=>{
					let swiper = new Swiper('.swiper-container', {
						pagination: '.swiper-pagination',
						paginationClickable: true,
						loop : true,
						autoplay: 2500,
						autoplayDisableOnInteraction:false,
						nextButton: '.swiper-button-next',
						prevButton: '.swiper-button-prev',
					});	
				},1000);
			},
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
				apps.log(to.params.pid);
				this.params.pid = to.params.pid || 0;
				this.getPDetail(this.params).then((data) => {
					this.initSwiper();
					apps.log('项目详情数据请求成功')
				}, (error) => {
					apps.log(error)
				});
			}
		}
	}
</script>
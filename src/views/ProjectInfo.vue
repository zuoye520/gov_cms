<template>
	<!--项目详情信息-->
	<div class="w1000">
		<l-location :type="category"></l-location>
		<section class="info-cont banner-cont">
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
					<div class="bor-t bor-r box">
						<div class="title">项目名称：</div>
						<div class="cont text-center f-w fx fx-y-center" >{{detail.name|| '无'}}</div>
					</div>
					<div class="bor-t bor-r box ">
						<div class="title ">企业名称：</div>
						<div class="cont fx fx-y-center">{{detail.group_name|| '无'}}</div>
					</div>
					<div class="bor-t bor-r box">
						<div class="title">坐落地址：</div>
						<div class="cont fx fx-y-center">{{detail.address|| '无'}}</div>
					</div>
					<div class="bor-t bor-r box">
						<div class="title">占地面积：</div>
						<div class="cont fx fx-y-center">{{detail.hold_area||0}}平方米</div>
					</div>
					<div class="bor-t bor-r box">
						<div class="title">总建筑面积：</div>
						<div class="cont fx fx-y-center">{{detail.build_area || 0}}平方米</div>
					</div>
					<div class="bor-t bor-r box">
						<div class="title">物业类型：</div>
						<div class="cont fx fx-y-center">{{detail.house_name|| '无'}}</div>
					</div>
					<div class="bor-t bor-r box">
						<div class="title">总户数：</div>
						<div class="cont fx fx-y-center">{{detail.household_count || 0}}户</div>
					</div>
					<div class="bor-t bor-r box bor-b">
						<div class="title">联系电话：</div>
						<div class="cont fx fx-y-center">{{detail.tel || '无'}}</div>
					</div>
				</div>
			</div>
		</section>
		<section class="fn-clear">
			<div class="info-list w-l fn-left">
				<div class="bor-b bor-l bor-r bor-rig box">
					<div class="title">交房标准：</div>
					<div class="cont fx fx-y-center">{{detail.handed_standard|| '无'}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig box">
					<div class="title">停车位：</div>
					<div class="cont fx fx-y-center"> {{detail.park_count || 0}}个</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig box">
					<div class="title">开工时间：</div>
					<div class="cont fx fx-y-center">{{detail.start_date | formatTime "yyyy-MM-dd"}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig box">
					<div class="title">项目开发公司名称：</div>
					<div class="cont fx fx-y-center">{{detail.develop_name|| '无'}}</div>
				</div>
			</div>
			<div class="fn-left info-list w-r">
				<div class="bor-r bor-b box">
					<div class="title">交房时间：</div>
					<div class="cont fx fx-y-center">{{detail.handed_date | formatTime "yyyy-MM-dd"}}</div>
				</div>
				<div class="bor-r bor-b box">
					<div class="title">车位比：</div>
					<div class="cont fx fx-y-center">{{detail.stall|| '无'}}</div>
				</div>
				<div class="bor-r bor-b box">
					<div class="title">竣工时间：</div>
					<div class="cont fx fx-y-center">{{detail.end_date | formatTime "yyyy-MM-dd"}}</div>
				</div>
				<div class="bor-r bor-b box">
					<div class="title">集团公司名称：</div>
					<div class="cont fx fx-y-center">{{detail.group_name|| '无'}}</div>
				</div>
			</div>
		</section>
		<section class="info-list">
			<div class="bor-l bor-b bor-r box">
				<div class="title">建筑设计单位名称：</div>
				<div class="cont w790 fx fx-y-center">{{detail.design_name|| '无'}}</div>
			</div>
			<div class="bor-l bor-b bor-r box">
				<div class="title">施工单位名称：</div>
				<div class="cont w790 fx fx-y-center">{{detail.construction_name|| '无'}}</div>
			</div>
			<div class="bor-l bor-b bor-r box">
				<div class="title">监理单位名称：</div>
				<div class="cont w790 fx fx-y-center">{{detail.manage_name|| '无'}}</div>
			</div>
		</section>
		<section class="fn-clear">
			<div class="info-list w-l fn-left">
				<div class="bor-b bor-l bor-r bor-rig box">
					<div class="title">景观设计单位名称：</div>
					<div class="cont fx fx-y-center">{{detail.sight_name|| '无'}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig box">
					<div class="title">业务银行名称：</div>
					<div class="cont fx fx-y-center">{{detail.band_name|| '无'}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig box">
					<div class="title">销售代理公司名称：</div>
					<div class="cont fx fx-y-center">{{detail.saleagent_name|| '无'}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig box">
					<div class="title">权证号：</div>
					<div class="cont fx fx-y-center">无</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig box">
					<div class="title">预售许可证号：</div>
					<div class="cont fx fx-y-center">无</div>
				</div>
			</div>
			<div class="fn-left info-list w-r">
				<div class="bor-r bor-b box">
					<div class="title">物业管理公司名称：</div>
					<div class="cont fx fx-y-center">{{detail.house_name|| '无'}}</div>
				</div>
				<div class="bor-r bor-b box">
					<div class="title">广告代理公司名称：</div>
					<div class="cont fx fx-y-center">{{detail.advertise_name|| '无'}}</div>
				</div>
				<div class="bor-r bor-b box ">
					<div class="title">签订土地出让合同时间：</div>
					<div class="cont fx fx-y-center">{{detail.land_transfer_date | formatTime "yyyy-MM-dd"}}</div>
				</div>
				<div class="bor-r bor-b box">
					<div class="title">办证时间：</div>
					<div class="cont fx fx-y-center">无</div>
				</div>
				<div class="bor-r bor-b box">
					<div class="title">开盘销售时间：</div>
					<div class="cont fx fx-y-center">无</div>
				</div>
			</div>
		</section>
		<section class="info-list">
			<div class="bor-l bor-b bor-r box">
				<div class="title">项目配套设施情况介绍：</div>
				<div class="cont w790 fx fx-y-center">{{detail.facility_situation || '无'}}</div>
			</div>
			<div class="bor-l bor-b bor-r box">
				<div class="title">项目情况介绍：</div>
				<div class="cont w790 fx fx-y-center">{{detail.project_situation || '无'}}</div>
			</div>
			
			<div class="bor-l bor-b bor-r box" >
				<div class="title" style="line-height: none; border-right: none;">预售许可证：</div>
				<div class=" cont w790 fx fx-y-center" style="height: auto;line-height: none;padding: 0; width: 820px !important;">
					<table width="100%" class="tab-list" border="0" cellspacing="" cellpadding="">
						<tr><th>预售许可证号</th><th>办证时间</th><th>开盘时间</th><th>交房时间</th></tr>
						<tr v-for="item in licence">
							<td>{{item.no}}</td>
							<td>{{item.bzsj | filterTimeStr}}</td>
							<td>{{item.xssj | filterTimeStr}}</td>
							<td>{{item.jfsj | filterTimeStr}}</td>
						</tr>
					</table>
				</div>
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
					<li>
						<a v-link="{ name: 'enterpriseInfo', params: {pid: params.pid }}">企业基础信息</a>
					</li>
					<li>
						<a v-link="{ name: 'projectList', params: {eid: params.pid }}" class="on">企业项目信息</a>
					</li>
					<li><a v-link="{ name: 'eListDetail', query: {category:10,eid: params.pid,eName:detail.name }}" >企业获奖信息</a></li>
					<li><a v-link="{ name: 'eListDetail', query: {category:11,eid: params.pid,eName:detail.name }}">企业不良行为信息</a></li>
				</ol>
			</div>
		</section>
	</div>
</template>
<!-- 添加 scoped “范围”属性CSS限制这个组件只 -->
<style scoped lang="scss">
	@import "../assets/css/common.scss";
	table{
		th,td{
			padding: 10px;
		}
	}
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
			/*float: left;*/
			min-height: 44px;
			line-height: 20px;
			padding: 0 10px;
		}
		.title{
			width: 158px;
			line-height: 44px;
			text-align: right;
			background: #dbedff;
			border-right: 1px solid #ccc;
			font-weight: bold;
		}
		.cont{
			width: 294px;
			/*background: #fff;*/
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
	.tab-list{
		background: #f8f8f8;
		tr{
			th,td{
				text-align: center;
				border-left: 1px #ddd solid;
			}
			td{
				border-top: 1px #ddd solid;
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
			licence(){
				apps.log(JSON.parse(this.detail.licence))
				return JSON.parse(this.detail.licence)
			}
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
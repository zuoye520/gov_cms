<template>
	<!--企业详情信息-->
	<div class="w1000">
		<l-location :type="category"></l-location>
		<section class="fn-clear m-t-30" style="border-top: 1px solid #ccc;">
			<div class="info-list w-l fn-left">
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">企业名称：</div>
					<div class="cont">{{detail.name || '无'}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">企业性质：</div>
					<div class="cont"> {{detail.kind || '无'}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">企业类型：</div>
					<div class="cont">{{detail.classkind || '无'}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">企业组织机构代码：</div>
					<div class="cont">{{detail.orgcode || '无'}}</div>
				</div>
			</div>
			<div class="fn-left info-list w-r">
				<div class="bor-r bor-b fn-clear">
					<div class="title">传真：</div>
					<div class="cont">{{detail.fax || '无'}}</div>
				</div>
				<div class="bor-r bor-b fn-clear">
					<div class="title">电子邮箱：</div>
					<div class="cont">{{detail.email || '无'}}</div>
				</div>
				<div class="bor-r bor-b fn-clear">
					<div class="title">企业资质等级：</div>
					<div class="cont">{{detail.competency_grade || 0}}级</div>
				</div>
				<div class="bor-r bor-b fn-clear">
					<div class="title">资质等级证书号：</div>
					<div class="cont">{{detail.competency_cert || '无'}}</div>
				</div>
			</div>
		</section>
		
		<section class="fn-clear">
			<div class="info-list w-l fn-left">
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">成立日期：</div>
					<div class="cont">{{detail.establish_date | formatTime "yyyy-MM-dd"}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">资质证书批准日期：</div>
					<div class="cont">{{detail.competency_date | formatTime "yyyy-MM-dd"}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">资质证书截止日期：</div>
					<div class="cont">{{detail.competency_enddate | formatTime "yyyy-MM-dd"}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">工商注册日期：</div>
					<div class="cont">{{detail.register_date | formatTime "yyyy-MM-dd"}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">执照到期日期：</div>
					<div class="cont">{{detail.register_enddate | formatTime "yyyy-MM-dd"}}</div>
				</div>
			</div>
			<div class="fn-left info-list w-r">
				<div class="bor-r bor-b fn-clear">
					<div class="title">注册资本（万元）：</div>
					<div class="cont">{{detail.register_cost || '无'}}</div>
				</div>
				<div class="bor-r bor-b fn-clear">
					<div class="title">资产总额（万元）：</div>
					<div class="cont">{{detail.total_cost || '无'}}</div>
				</div>
				<div class="bor-r bor-b fn-clear">
					<div class="title">邮编：</div>
					<div class="cont">{{detail.postcode || '无'}}</div>
				</div>
				<div class="bor-r bor-b fn-clear">
					<div class="title">主营业务：</div>
					<div class="cont">{{detail.business_main || '无'}}</div>
				</div>
				<div class="bor-r bor-b fn-clear">
					<div class="title">股东成员：</div>
					<div class="cont">{{detail.membership || '无'}}</div>
				</div>
			</div>
		</section>
		<section class="fn-clear">
			<div class="info-list w-l fn-left">
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">在职员工（人）：</div>
					<div class="cont">{{detail.headcount || '无'}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">曾经开发项目名称：</div>
					<div class="cont">{{detail.project_oldname || '无'}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">目前开发项目名称：</div>
					<div class="cont">{{detail.project_nowname || '无'}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">累计完成投资额（万元）：</div>
					<div class="cont">{{detail.invest_cost || '无'}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">累计开工面积（万m2）：</div>
					<div class="cont">{{detail.start_area || '无'}}</div>
				</div>
			</div>
			<div class="fn-left info-list w-r">
				<div class="bor-r bor-b fn-clear">
					<div class="title">累计竣工面积（万m2）：</div>
					<div class="cont">{{detail.end_area || '无'}}</div>
				</div>
				<div class="bor-r bor-b fn-clear">
					<div class="title">累计销售面积（万m2）：</div>
					<div class="cont">{{detail.sale_area || '无'}}</div>
				</div>
				<div class="bor-r bor-b fn-clear">
					<div class="title">累计销售总额（万元）：</div>
					<div class="cont">{{detail.sale_cost || '无'}}</div>
				</div>
				<div class="bor-r bor-b fn-clear">
					<div class="title">累计纳税额（万元）：</div>
					<div class="cont">{{detail.tax || '无'}}</div>
				</div>
				<div class="bor-r bor-b fn-clear">
					<div class="title">诚信建设分管领导：</div>
					<div class="cont">{{detail.sub_leader || '无'}}</div>
				</div>
			</div>
		</section>
		<section class="fn-clear">
			<div class="info-list w-l fn-left">
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">诚信建设分管领导联系电话：</div>
					<div class="cont">{{detail.sub_tel || '无'}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">是否加入房协：</div>
					<div class="cont">{{detail.house_society || '无'}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">子公司及相应资质等级：</div>
					<div class="cont">{{detail.sub_company || '无'}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">法人代表：</div>
					<div class="cont">{{detail.delegate || '无'}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">企业注册号：</div>
					<div class="cont">{{detail.certificate_no || '无'}}</div>
				</div>
			</div>
			<div class="fn-left info-list w-r">
				<div class="bor-r bor-b fn-clear">
					<div class="title">法人代表联系电话：</div>
					<div class="cont">{{detail.delegate_tel || '无'}}</div>
				</div>
				<div class="bor-r bor-b fn-clear">
					<div class="title">申报单位：</div>
					<div class="cont">{{detail.declarunit || '无'}}</div>
				</div>
				<div class="bor-r bor-b fn-clear">
					<div class="title">填表人：</div>
					<div class="cont">{{detail.fillperson || '无'}}</div>
				</div>
				<div class="bor-r bor-b fn-clear">
					<div class="title">填表人联系方式：</div>
					<div class="cont">{{detail.tel_fillperson || '无'}}</div>
				</div>
				<div class="bor-r bor-b fn-clear">
					<div class="title">申报状态：</div>
					<div class="cont">{{detail.state || '无'}}</div>
				</div>
			</div>
		</section>
		
		
		<section class="fn-clear">
			<div class="info-list w-l fn-left">
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">审批意见：</div>
					<div class="cont">{{detail.comments || '无'}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">审批日期(生效日期)：</div>
					<div class="cont">{{detail.approval_date | formatTime "yyyy-MM-dd"}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">企业用户（用户名）属于某个用户：</div>
					<div class="cont">{{detail.username || '无'}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">更新状态：</div>
					<div class="cont">{{detail.updatestate || '无'}}</div>
				</div>
				<div class="bor-b bor-l bor-r bor-rig fn-clear">
					<div class="title">企业更新（审批意见）：</div>
					<div class="cont">{{detail.updatecomments || '无'}}</div>
				</div>
			</div>
			<div class="fn-left info-list w-r">
				<div class="bor-r bor-b fn-clear">
					<div class="title">分值：</div>
					<div class="cont">{{detail.score || '无'}}</div>
				</div>
				<div class="bor-r bor-b fn-clear">
					<div class="title">顺序：</div>
					<div class="cont">{{detail.sort || '无'}}</div>
				</div>
				<div class="bor-r bor-b fn-clear">
					<div class="title">企业网站：</div>
					<div class="cont">{{detail.homepage || '无'}}</div>
				</div>
				<div class="bor-r bor-b fn-clear">
					<div class="title">公司地址：</div>
					<div class="cont">{{detail.address || '无'}}</div>
				</div>
				<div class="bor-r bor-b fn-clear">
					<div class="title">注册地址：</div>
					<div class="cont">{{detail.register_address || '无'}}</div>
				</div>
			</div>
		</section>
		<section class="info-list">
			<div class="bor-l bor-b bor-r fn-clear">
				<div class="title">经营范围：</div>
				<div class="cont">{{detail.business_scope || '无'}}</div>
			</div>
			<!--<div class="bor-l bor-b bor-r fn-clear">
				<div class="title">项目情况介绍：</div>
				<div class="cont">{{detail.orgcode}}</div>
			</div>-->
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
					<li><a>开发企业获奖信息</a></li>
					<li><a>开发企业不良行为信息</a></li>
					<li><a v-link="{ name: 'enterpriseInfo', params: {pid: params.pid }}" class="on">诚信企业展示</a></li>
					<li><a v-link="{ name: 'projectInfo', params: {pid: params.pid }}">诚信项目展示</a></li>
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
		getEDetail,
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
				category: 17
			}
		},
		ready() {
			var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				paginationClickable: true,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
			});

		},
		/*
		 * vuex
		 */
		vuex: {
			getters: {
				detail: (state) => state.modules.enterpriseDetail,
			},
			actions: {
				getEDetail,
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
				this.getEDetail(this.params).then((data) => {
					apps.log('企业详情数据请求成功')
				}, (error) => {
					apps.log(error)
				});
			}
		}
	}
</script>
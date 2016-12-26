<template>
	<div class="index w1000">
		<section class="banner-cont fn-clear m-t-15">
			<div class="left-banner fn-left">
				<!-- Swiper -->
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<!--<div class="swiper-slide" v-for="item in bannerList"><img :src="item.picUrl"/></div>-->
						<div class="swiper-slide" v-for="item in bannerList" v-link="{ name: 'newsDetails', params: {category : 4, id: item.bizId }}">
							<img :src="item.picUrl" />
							<h3><p class="text-ellipsis">{{item.title}}</p></h3>
						</div>
					</div>
					<!-- Add Pagination -->
					<div class="swiper-pagination"></div>
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>
				</div>
			</div>
			<div class="right-query fn-right">
				<div class="fn-clear">
					<div class="fn-left input-grp">
						<div><span>开发企业名称：</span><input type="text" value="" v-model = "queryParams.ename"/></div>
						<div><span>开发项目名称：</span><input type="text" value="" v-model = "queryParams.pname"/></div>
						<div><span>诚信等级：</span>
							<select v-model="queryParams.level">
								<option>请选择</option>
								<option v-for="item in gradesList">{{item}}级</option>
							</select>
						</div>
						<div><span></span><a class="btn" @click="handleQueryInfo">查询</a></div>
					</div>
					<div class="fn-right btns-list">
						<ul>
							<li>
								<a @click="handleTabQuery(1)" :class="{'on':qycxActive == 1}"><span class="icon-identity"></span>
									<p>开发企业</p>
									<p>信息身份查询</p>
								</a>
							</li>
							<li>
								<a @click="handleTabQuery(2)" :class="{'on':qycxActive == 2}"><span class="icon-winning"></span>
									<p>开发企业</p>
									<p>获奖信息查询</p>
								</a>
							</li>
							<li>
								<a @click="handleTabQuery(3)" :class="{'on':qycxActive == 3}"><span class="icon-bad"></span>
									<p>开发企业</p>
									<p>不良行为查询</p>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		<section class="content fn-clear m-t-15">
			<div class="left-content fn-left">
				<div class="login-cont m-b-15">
					<h3>开发企业登录窗口<p>Login Window</p></h3>
					<div class="user-info">
						<p class="m-b-15"><span>用户名：</span><input type="text" id="" value="" /></p>
						<p><span>密<i></i>码：</span><input type="password" id="" value="" /></p>
						<div class="btns fn-clear">
							<a class="btn-register fn-left" v-link="{ name: 'stepOne'}">注册</a>
							<a class="btn-login fn-right" @click="handleLogin">登录</a>
						</div>
					</div>
				</div>
				<l-gather></l-gather>
				<div class="blue-fill">
					<h3 class="fn-clear">政策法规<a v-link="{ name: 'newsList', params: { category: 2 }}" class="fn-right">更多</a></h3>
					<div class="news-list policy">
						<ul>
							<li v-for="item in zcfgList" class="text-ellipsis-2">
								<a v-link="{ name: 'newsDetails', params: {category : 2, id: item.id }}">{{item.title}}</a>
							</li>
							<li v-show="zcfgList.length <=0">
								<p align="center">暂无相关文章</p>
							</li>
						</ul>
					</div>
				</div>
				<l-btns></l-btns>
				<!--<div class="blue-fill">
					<h3 class="fn-clear">开发企业诚信信息<a  class="fn-right">更多</a></h3>
					<div class="news-list sincerity">
						<ul>
							<li class="text-ellipsis" v-for ="item in maList.list">
								<a>{{item.name}}</a>
							</li>
						</ul>
						<div v-show="maList.list && maList.list.length <=0">
								<p align="center">暂无相关文章</p>
							</div>
					</div>
				</div>-->
			</div>
			<div class="right-content fn-right">
				<div class="blue-half news-cont">
					<h3><a @click="handleTabNews(1)" :class="{'on':xwdtActive == 1}" class="news">新闻动态</a><a @click="handleTabNews(2)" :class="{'on':xwdtActive == 2}" class="news">协会动态</a></h3>
					<div class="news-list">
						<ul>
							<li class="fn-clear" v-for="item in xwdtList" v-show="xwdtActive == 1">
								<p class="text-ellipsis fn-left">
									<a v-link="{ name: 'newsDetails', params: {category : 4, id: item.id }}">{{item.title}}</a>
								</p>
								<i class="fn-right">{{item.publishTime | formatTime "MM-dd"}}</i>
							</li>
							<li v-show="xwdtList.length <=0 && xwdtActive == 1">
								<p align="center">暂无相关文章</p>
							</li>

							<li class="fn-clear" v-for="item in xhdtList" v-show="xwdtActive == 2">
								<p class="text-ellipsis fn-left">
									<a v-link="{ name: 'newsDetails', params: { category : 5, id: item.id }}">{{item.title}}</a>
								</p>
								<i class="fn-right">{{item.publishTime | formatTime "MM-dd"}}</i>
							</li>
							<li v-show="xhdtList.length <=0 && xwdtActive == 2">
								<p align="center">暂无相关文章</p>
							</li>
						</ul>
					</div>
				</div>
				<div class="fn-clear">
					<div class="blue-half honesty-cont fn-left">
						<h3><a  class="news on">开发企业诚信信息更新</a><a v-link="{ name: 'enterpriseList'}" class="more">更多</a></h3>
						<div class="news-list">
							<ul>
								<li class="fn-clear" v-for ="item in cxeList.list" v-link="{ name: 'enterpriseInfo', params: {pid: item.id}}">
									<p class="text-ellipsis fn-left">
										<a>{{item.name}}</a>
									</p>
									<i class="fn-right" v-link="{ name: 'enterpriseInfo', params: {pid: item.id}}">详情</i>
								</li>
								<li v-show="cxeList.list && cxeList.list.length <=0">
									<p align="center">暂无相关文章</p>
								</li>
							</ul>
							
						</div>
					</div>
					<div class="blue-half exposure-cont fn-right">
						<h3><a class="news on">曝光台</a><a v-link="{ name: 'newsList', params: { category: 7 }}" class="more">更多</a></h3>
						<div class="news-list">
							<ul>
								<li class="fn-clear" v-for="item in bgtList">
									<p class="text-ellipsis fn-left">
										<a v-link="{ name: 'newsDetails', params: {category : 7, id: item.id }}">{{item.title}}</a>
									</p>
								</li>
								<li v-show="bgtList.length <=0">
									<p align="center">暂无相关文章</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="blue-fill company-list">
					<h3 class="fn-clear">诚信等级公示<a  class="fn-right" v-link="{ name: 'enterpriseList'}">更多</a></h3>
					<div class="company-info ">
						
						<ul>
							<li class="fn-clear" v-for ="item in eLeveList">
								<p class="company-name fn-clear fn-left">
									<span>{{item.name}}</span>
									<span class="fn-right">{{item.competency_grade}}级</span>
								</p>
								<div class="fn-right level">{{item.score}} 分</div>
							</li>
							<li v-show="eLeveList.length <=0">
								<p align="center">暂无相关企业</p>
							</li>
						</ul>
					</div>
				</div>
				<div class="blue-half news-cont">
					<h3><a  @click="handleTabPunish(1)" :class="{'on':xzcfActive == 1}" class="news">行政处罚</a><a @click="handleTabPunish(2)" :class="{'on':xzcfActive == 2}" class="news">行业自律</a></h3>
					<div class="news-list policy">
						<ul>
							<li class="fn-clear" v-for="item in xzcfList" v-show="xzcfActive == 1">
								<p class="text-ellipsis fn-left">
									<a v-link="{ name: 'newsDetails', params: {category : 8, id: item.id }}">{{item.title}}</a>
								</p>
								<i class="fn-right">{{item.publishTime | formatTime "MM-dd"}}</i>
							</li>
							<li v-show="xzcfList.length <=0 && xzcfActive == 1">
								<p align="center">暂无相关文章</p>
							</li>

							<li class="fn-clear" v-for="item in hyzlList" v-show="xzcfActive == 2">
								<p class="text-ellipsis fn-left">
									<a v-link="{ name: 'newsDetails', params: { category : 9, id: item.id }}">{{item.title}}</a>
								</p>
								<i class="fn-right">{{item.publishTime | formatTime "MM-dd"}}</i>
							</li>
							<li v-show="hyzlList.length <=0 && xzcfActive == 2">
								<p align="center">暂无相关文章</p>
							</li>
						</ul>
					</div>
				</div>
				<div class="blue-half winning-cont news-cont">
					<h3><a @click="handleTabWinning(1)" :class="{'on':hjxxActive == 1}" class="news ">开发企业获奖信息</a><a @click="handleTabWinning(2)" :class="{'on':hjxxActive == 2}" class="news">开发企业不良行为信息</a></h3>
					<div class="news-list win-info">
						<ul>
							<li class="fn-clear" v-for="item in hjxxList" v-show="hjxxActive == 1">
								<p class="text-ellipsis fn-left">
									<a v-link="{ name: 'newsDetails', params: {category : 10,  id: item.id }}">{{item.title}}</a>
								</p>
								<i class="fn-right">{{item.publishTime | formatTime "MM-dd"}}</i>
							</li>
							<li v-show="hjxxList.length <=0 && hjxxActive == 1">
								<p align="center">暂无相关文章</p>
							</li>

							<li class="fn-clear" v-for="item in blxwList" v-show="hjxxActive == 2">
								<p class="text-ellipsis fn-left">
									<a v-link="{ name: 'newsDetails', params: {category : 11, id: item.id }}">{{item.title}}</a>
								</p>
								<i class="fn-right">{{item.publishTime | formatTime "MM-dd"}}</i>
							</li>
							<li v-show="blxwList.length <=0 && hjxxActive == 2">
								<p align="center">暂无相关文章</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		<section class="building-cont m-b-15 fn-clear">
			<div class="building-main fn-left">
				<h2>诚信项目展示</h2>
				<div>
					<a v-link="{ name: 'projectInfo', params: {pid: projectList[0] && projectList[0].bizId}}">
						<img :src="projectList[0]?projectList[0].picUrl:''" />
						<p class="building-name">{{projectList[0]?projectList[0].title:''}}</p>
					</a>
				</div>
			</div>
			<div class="building-secondary fn-right m-b-15">
				<ul class="fn-clear">
					<li class="fn-left" v-for="item in projectListOne">
						<a v-link="{ name: 'projectInfo', params: {pid: item.bizId }}">
							<img :src="item.picUrl" />
							<p class="building-name">{{item.title}}</p>
						</a>
					</li>
				</ul>
			</div>
			<div class="building-secondary fn-right">
				<ul class="fn-clear">
					<li class="fn-left" v-for="item in projectListTwo">
						<a v-link="{ name: 'projectInfo', params: {pid: item.bizId }}">
							<img :src="item.picUrl" />
							<p class="building-name">{{item.title}}</p>
						</a>
					</li>
				</ul>
			</div>
		</section>
		<section class="brand-cont">
			<h3 class="fn-clear">诚信品牌<p class="fn-right"><a v-link="{ name: 'enterpriseList'}">更多</a></p> </h3>
			<div class="brand-list">
				<ul class="fn-clear">
					<li class="fn-left" v-for="item in enterpriseLists" v-link="{ name: 'enterpriseInfo', params: {pid: item.bizId }}">
						<a><img :src="item.picUrl" /></a>
					</li>
					<li v-show="enterpriseLists.length <=0">
						<p align="center">暂无相关信息</p>
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>
<!-- 添加 scoped “范围”属性CSS限制这个组件只 -->
<style scoped lang="scss">
	@import "../assets/css/common.scss";
	/*公共样式*/
	
	.blue-fill {
		margin-bottom: 15px;
		h3 {
			background: $color-blue;
			font-size: 20px;
			padding: 0 20px;
			color: #fff;
			line-height: 36px;
			height: 36px;
			a {
				font-size: 14px;
				color: #fff;
				&:hover {
					text-decoration: underline;
				}
			}
		}
		.news-list {
			background: #fff;
			border: 1px solid $color-gray3;
			overflow: hidden;
			ul {
				padding: 25px 20px 20px;
			}
			li {
				position: relative;
				line-height: 1.6;
				padding-bottom: 5px;
				a {
					color: #333;
					&:hover {
						text-decoration: underline;
					}
				}
				&:last-child {
					padding-bottom: 0;
				}
				&:before {
					content: "•";
					padding-right: 8px;
					height: 5px;
					width: 5px;
				}
			}
		}
	}
	
	.blue-half {
		width: 100%;
		height: 100%;
		margin-bottom: 15px;
		h3 {
			font-size: 20px;
			color: #fff;
			line-height: 36px;
			height: 36px;
			border-bottom: 2px solid #0b4391;
			position: relative;
			a {
				display: inline-block;
				color: #333;
				&.news {
					padding: 0 60px;
				}
				&.on {
					background: #0b4391;
					color: #fff;
				}
				&.more {
					position: absolute;
					right: 20px;
					top: 0;
					font-size: 14px;
					color: $color-main;
					&:hover {
						text-decoration: underline;
					}
				}
			}
		}
		.news-list {
			background: #fff;
			border: 1px solid $color-gray3;
			overflow: hidden;
			ul {
				padding: 15px 20px 20px;
			}
			li {
				position: relative;
				line-height: 1.8;
				padding-bottom: 5px;
				&:last-child {
					padding-bottom: 0;
				}
				&:before {
					content: "•";
					padding-right: 8px;
					height: 5px;
					width: 5px;
					float: left;
				}
				>p {
					width: 460px;
					a {
						color: #333;
						&:hover {
							text-decoration: underline;
						}
						span {
							font-weight: bold;
						}
					}
				}
				i {
					display: inline-block;
					cursor: pointer;
					font-style: normal;
					color: $color-gray2;
				}
			}
		}
	}
	/*公共样式结束*/
	
	.banner-cont {
		.left-banner {
			width: 448px;
			height: 306px;
			border: 1px solid $color-blue;
			overflow: hidden;
		}
		.right-query {
			width: 533px;
			height: 306px;
			border: 1px solid $color-gray3;
			background: #f8fbff;
			.input-grp {
				padding: 50px 0 0 30px;
				span {
					display: inline-block;
					width: 110px;
					text-align: right;
				}
				input,
				select {
					padding-left: 10px;
					margin-bottom: 28px;
					border: 1px solid $color-gray1;
				}
				input {
					width: 186px;
					height: 26px;
				}
				select {
					width: 200px;
					height: 30px;
					color: $color-gray2;
				}
				a.btn {
					background: #157fe3;
					width: 120px;
					height: 36px;
					display: inline-block;
					line-height: 36px;
					text-align: center;
					padding: 0;
					border: 1px solid #157fe3;
					color: #fff;
					font-size: 18px;
					&:active,&:hover {
						background: darken(#157fe3, 10%);
					}
				}
			}
			.btns-list {
				height: 306px;
				background: $color-blue;
				li {
					&:last-child {
						a {
							border-bottom: 0;
						}
					}
					a {
						width: 100px;
						height: 71px;
						display: block;
						border-right: 4px solid $color-blue;
						border-bottom: 1px solid $color-main;
						background: $color-blue;
						color: #f8fbff;
						position: relative;
						padding: 30px 0 0 55px;
						span {
							width: 32px;
							height: 35px;
							display: inline-block;
							position: absolute;
							top: 35px;
							left: 15px;
							&.icon-identity {
								background: url(../assets/images/icon_identity.png) 0 -50px no-repeat;
							}
							&.icon-winning {
								background: url(../assets/images/icon-winning.png) 0 -50px no-repeat;
							}
							&.icon-bad {
								background: url(../assets/images/icon-bad.png) 0 -50px no-repeat;
							}
						}
						&:hover {
							background: darken($color-blue, 5%);
							;
						}
						&.on {
							background: #f8fbff;
							color: $color-main;
							border-bottom-color: $color-blue;
							span {
								background-position-y: 0;
							}
						}
					}
				}
			}
		}
	}
	
	.content {
		.left-content {
			.blue-fill {
				width: 280px;
			}
			.login-cont {
				width: 280px;
				height: 306px;
				background: url(../assets/images/login_bg.jpg) 0 0 no-repeat;
				h3 {
					text-align: center;
					padding-top: 40px;
					font-size: 20px;
					font-weight: bold;
					color: #fff;
					p {
						font-weight: normal;
						font-size: 12px;
					}
				}
				.user-info {
					padding: 40px 25px 0;
					>p {
						position: relative;
						span {
							position: absolute;
							top: 6px;
							left: 10px;
							i {
								display: inline-block;
								width: 15px;
							}
						}
					}
					input {
						width: 158px;
						height: 30px;
						border: 1px solid #a2a2a4;
						padding-left: 70px;
					}
					.btns {
						margin-top: 35px;
						a {
							display: inline-block;
							width: 100px;
							height: 30px;
							line-height: 30px;
							text-align: center;
							color: #fff;
							&.btn-register {
								background: #346bc8;
								&:hover {
									background: darken(#346bc8, 10%);
								}
							}
							&.btn-login {
								background: #f05a5a;
								&:hover {
									background: darken(#f05a5a, 10%);
								}
							}
						}
					}
				}
			}
		}
		.right-content {
			width: 700px;
			.news-cont {
				.news-list {
					height: 267px;
				}
			}
			.honesty-cont {
				width: 409px;
				.news {
					padding: 0 30px;
				}
				.news-list {
					height: 174px;
					li>p {
						width: 280px !important;
					}
				}
			}
			.exposure-cont {
				width: 280px;
				.news {
					padding: 0 30px;
				}
				.news-list {
					height: 174px;
					li {
						&:before {
							content: "";
							padding: 0;
						}
						>p {
							width: 220px !important;
						}
					}
				}
			}
			.company-list {
				.company-info {
					border: 1px solid #ccc;
					height: 225px;
					overflow: hidden;
					li {
						padding: 12px 20px;
						.company-name {
							width: 450px;
						}
						.level {
							font-weight: bold;
						}
						&:nth-child(odd) {
							background: #fff;
						}
						&:nth-child(even) {
							background: #eee;
						}
					}
				}
			}
			.winning-cont {
				.news {
					padding: 0 30px;
				}
			}
		}
	}
	
	.news-list.policy {
		height: 250px !important;
	}
	
	.news-list.sincerity {
		height: 236px !important;
	}
	
	.news-list.win-info {
		height: 299px !important;
	}
	
	.building-cont {
		.building-main,
		.building-secondary {
			a {
				position: relative;
				.building-name {
					position: absolute;
					left: 0;
					bottom: 0;
					width: 100%;
					text-align: center;
					background: rgba(0, 0, 0, 0.5);
					color: #fff;
					padding: 8px 0;
				}
				&:hover {
					opacity: 0.8;
				}
			}
		}
		.building-main {
			width: 400px;
			height: 295px;
			position: relative;
			h2 {
				font-size: 20px;
				font-weight: bold;
				color: #fff;
				background: #1680e5;
				padding: 10px 20px 10px 30px;
				position: absolute;
				top: 22px;
				left: -20px;
				z-index: 2;
				&:before {
					content: "";
					width: 0;
					height: 0;
					border-top: 8px solid #023790;
					border-right: 0 solid #023790;
					border-bottom: 8px solid transparent;
					border-left: 20px solid transparent;
					position: absolute;
					bottom: -16px;
					left: 0;
				}
			}
			a {
				display: inline-block;
				width: 400px;
				height: 295px;
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
		.building-secondary {
			li {
				height: 140px;
				margin-left: 15px;
			}
			a {
				display: inline-block;
				width: 184px;
				height: 140px;
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	
	.brand-cont {
		h3 {
			padding: 5px 30px;
			background: $color-blue;
			color: #fff;
			font-size: 20px;
			margin-bottom: 15px;
			a {
				color: #fff;
				font-size: 14px;
				&:hover {
					text-decoration: underline;
				}
			}
		}
		.brand-list {
			li {
				width: 238px;
				height: 60px;
				margin-right: 16px;
				margin-bottom: 15px;
				&:nth-child(4n) {
					margin-right: 0;
				}
				a {
					border: 1px solid #999;
					display: inline-block;
					width: 238px;
					height: 60px;
					overflow: hidden;
					img {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
</style>
<script>
	import apps from "../utils/apps.js";
	import {
		getPicListAction,
		getArticleListAction,
		getELeveListAction,
		getEGradesList,
		getAList,
		getCXEList
	} from '../vuex/actions.js';
	import Pages from "../components/Pages.vue";
	import Gather from "../components/Gather.vue";
	import Btns from "../components/Btns.vue";
	import CompanyQuery from "../components/CompanyQuery.vue";
	export default {
		/*
		 * 组件名称
		 */
		components: {
			"z-pages": Pages,
			"l-query": CompanyQuery,
			"l-gather": Gather,
			"l-btns": Btns,
		},
		/*
		 * 初始化数据
		 */
		data() {
			return {
				qycxActive:1,//默认企业信息身份查询
				xwdtActive: 1, //默认显示新闻动态
				xzcfActive: 1, //默认显示行政处罚
				hjxxActive: 1, //默认显示获奖信息
				queryParams:{//企业信息查询参数
					ename:'',
					pname:'',
					level:"请选择"
				},
				xwdtParams: { //新闻动态
					pageCount: 8,
					pageIndex: 1,
					category: 4,
					type: 'XWDT'
				},
				xhdtParams: { //协会动态
					pageCount: 7,
					pageIndex: 1,
					category: 5,
					type: 'XHDT'
				},
				xzcfParams: { //行政处罚
					pageCount: 7,
					pageIndex: 1,
					category: 8,
					type: 'XZCF'
				},
				zcfgParams: { //政策法规
					pageCount: 4,
					pageIndex: 1,
					category: 2,
					type: 'ZCFG'
				},
				bgtParams: { //曝光台
					pageCount: 5,
					pageIndex: 1,
					category: 7,
					type: 'BGT'
				},
				hyzlParams: { //行业自律
					pageCount: 7,
					pageIndex: 1,
					category: 9,
					type: 'HYZL'
				},
				hjxxParams: { //企业获奖信息
					pageCount: 9,
					pageIndex: 1,
					category: 10,
					type: 'HJXX'
				},
				blxwParams: { //企业不良行为
					pageCount: 9,
					pageIndex: 1,
					category: 11,
					type: 'BLXW'
				},
				cxdjgsParams: { //诚信等级公示
					pageCount: 5,
					pageIndex: 1,
				},
				qywzParams: { //企业文章列表
					categoryid:0,
					pageCount: 5,
					pageIndex: 1,
				},
				cxeList:[]
			}
		},
		/*
		 * vuex
		 */
		vuex: {
			getters: {
				bannerList: (state) => state.modules.bannerList, //轮播列表
				enterpriseList: (state) => state.modules.enterpriseList, //诚信品牌列表
				projectList: (state) => state.modules.projectList, //项目列表
				xwdtList: (state) => state.modules.xwdtList, //新闻动态
				xhdtList: (state) => state.modules.xhdtList, //协会动态
				xzcfList: (state) => state.modules.xzcfList, //行政处罚
				zcfgList: (state) => state.modules.zcfgList, //政策法规
				bgtList: (state) => state.modules.bgtList, //曝光台
				hyzlList: (state) => state.modules.hyzlList, //行业自律
				hjxxList: (state) => state.modules.hjxxList, //企业获奖信息
				blxwList: (state) => state.modules.blxwList, //企业不良行为
				gradesList: (state) => state.modules.gradesList, //获取诚信企业评级列表
				eLeveList: (state) => state.modules.eLeveList, //获取诚信等级公示
//				maList : (state) => state.modules.maList, //获取诚信等级公示
			},
			actions: {
				getPicListAction,
				getArticleListAction,
				getELeveListAction,
				getEGradesList,
				getAList,
				getCXEList
			}
		},
		/*
		 * 实例被创建后调用，但是还没有开始 DOM 编译
		 */
		ready() {
		},
		created() {
			//获取首页图片信息Banner
			this.getPicListAction({
				type: 'Banner'
			}).then((data) => {
				apps.log('banner数据请求成功')
				this.initSwiper();
			}, (error) => {
				apps.log(error)
			});

			//获取首页图片信息EnterpriseList
			this.getPicListAction({
				type: 'EnterpriseList'
			}).then((data) => {
				apps.log('诚信列表数据请求成功')
			}, (error) => {
				apps.log(error)
			});
			//获取首页图片信息ProjectList
			this.getPicListAction({
				type: 'ProjectList'
			}).then((data) => {
				apps.log('项目列表数据请求成功')
			}, (error) => {
				apps.log(error)
			});
			
			
			//获取诚信企业评级列表
			this.getEGradesList().then((data) => {
				apps.log('获取诚信企业评级列表')
			}, (error) => {
				apps.log(error)
			});
			//获取诚信等级公示
			this.getELeveListAction(this.cxdjgsParams).then((data) => {
				apps.log('获取诚信等级公示')
			}, (error) => {
				apps.log(error)
			});

			//获取政策法规ZCFG(2,1,"政策法规")
			this.getArticleListAction(this.zcfgParams).then((data) => {
				apps.log('政策法规数据请求成功')
			}, (error) => {
				apps.log(error)
			});
			//获取新闻动态XWDT(4,1,"新闻动态"),
			this.getArticleListAction(this.xwdtParams).then((data) => {
				apps.log('新闻动态数据请求成功')
			}, (error) => {
				apps.log(error)
			});
			//获取协会动态XHDT(5,1,"协会动态")
			this.getArticleListAction(this.xhdtParams).then((data) => {
				apps.log('协会动态数据请求成功')
			}, (error) => {
				apps.log(error)
			});
			//获取行政处罚XZCF(8,-1,"行政处罚")
			this.getArticleListAction(this.xzcfParams).then((data) => {
				apps.log('行政处罚数据请求成功')
			}, (error) => {
				apps.log(error)
			});
			//获取曝光台BGT(7,-1,"曝光台")
			this.getArticleListAction(this.bgtParams).then((data) => {
				apps.log('曝光台数据请求成功')
			}, (error) => {
				apps.log(error)
			});
			//获取行业自律HYZL(9,-1,"行业自律")
			this.getArticleListAction(this.hyzlParams).then((data) => {
				apps.log('行业自律数据请求成功')
			}, (error) => {
				apps.log(error)
			});
			//获取企业获奖信息HJXX(10,-1,"企业获奖信息")
			this.getArticleListAction(this.hjxxParams).then((data) => {
				apps.log('企业获奖信息数据请求成功')
			}, (error) => {
				apps.log(error)
			});
			//获取企业不良行为BLXW(11,-1,"企业不良行为")
			this.getArticleListAction(this.blxwParams).then((data) => {
				apps.log('企业不良行为数据请求成功')
			}, (error) => {
				apps.log(error)
			});
			
			//获取企业文章列表
			this.getAList(this.qywzParams).then((data) => {
				apps.log('企业文章列表')
			}, (error) => {
				apps.log(error)
			});
			
			//获取诚信企业列表
			this.getCXEList({
				pageCount:5,
				pageIndex:1,
			}).then((data) => {
				apps.log('获取诚信企业列表成功');
				this.cxeList = data;
			}, (error) => {
				apps.log(error);
			});
			
		},
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
			handleTabNews(index) {//tabbar切换
				this.xwdtActive = index;
			},
			handleTabPunish(index) {//tabbar切换
				this.xzcfActive = index;
			},
			handleTabWinning(index) {//tabbar切换
				this.hjxxActive = index;
			},
			handleTabQuery(index){//轮播旁边切换
				this.qycxActive = index;
			},
			handleQueryInfo(){//搜索
				let level =  this.queryParams.level;
				if(level !='请选择'){
					level = level.substring(0,level.length-1);
				}
				if(this.qycxActive ==1){
					window.location.href =`/site/enterpriseList?ename=${this.queryParams.ename}&pname=${this.queryParams.pname}&level=${level}`;
				}else{
					let category = this.qycxActive==2 ? 10: 11;
					window.location.href =`/site/newsList/${category}?search=search&ename=${this.queryParams.ename}&pname=${this.queryParams.pname}&level=${level}`;
				}
			},
			handleLogin(){//登录
//				alert('程序猿正在加班加点开发此功能..');
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
			projectListOne() {
				return this.projectList.slice(1, 4);
			},
			projectListTwo() {
				return this.projectList.slice(4, 7);
			},
			enterpriseLists() {
				return this.enterpriseList.slice(0, 7);
			}
		},
		/*
		 * 路由数据钩 参数发生变化这里被激活
		 */
		route: {
			data({
				to
			}) {
				//还原数据
				this.qycxActive = 1;
				this.queryParams.ename ="";
				this.queryParams.pname ="";
				this.queryParams.level ="请选择";
			}
		}
	}
</script>
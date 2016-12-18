<template>
	<div class="wapper">
		<l-step></l-step>
		<section class="tips fn-clear">
			<p class="fn-left"><i class="edit fn-left"></i>填写主体信息</p>
			<a class="fn-right"><i class="help fn-left"></i>备案帮助</a>
		</section>
		<section class="step-cont w1000">
			<h3>请务必填写真实有效信息</h3>
			<div class="content">
				<h4>主办单位信息</h4>
				<div class="module">
					<div class="fn-clear m-b-35">
						<p class="title">主办单位所属区域：</p>
						<div class="info three-level">
							<select><option>重庆</option></select>
							<select><option>重庆</option></select>
							<select><option>重庆</option></select>
						</div>
					</div>
					<div class="fn-clear m-b-35">
						<p class="title">主办单位证件类型：</p>
						<div class="info">
							<select><option>工商营业执照</option></select>
						</div>
					</div>
					<div class="fn-clear m-b-35">
						<p class="title">主办单位证件号码：</p>
						<div class="info">
							<input type="text" name="" id="" value="9575535352323113QWE" />
						</div>
					</div>
					<div class="fn-clear m-b-35">
						<p class="title"><i>*</i>主办单位或主办人名称：</p>
						<div class="info">
							<input type="text" name="" id="" value="重庆万创惠科技有限公司" />
						</div>
						<a class="tips-graphic ">工商营业执照主办单位名称图示</a>
					</div>
					<div class="fn-clear m-b-35">
						<p class="title"><i>*</i>主办单位证件住所：</p>
						<div class="info">
							<input type="text" name="" id="" value="重庆市南岸区万达广场7栋8-3" />
						</div>
						<a class="tips-graphic">工商营业执照证件住所图示</a>
					</div>
					<div class="fn-clear m-b-35">
						<p class="title"><i>*</i>主办单位通讯地址：</p>
						<div class="info">
							<input type="text" name="" id="" value="重庆市南岸区万达广场7栋8-3" />
						</div>
					</div>
					<div class="fn-clear m-b-35">
						<p class="title"><i>*</i>投资人或主管单位：</p>
						<div class="info">
							<input type="text" name="" id="" value="重庆万创惠科技有限公司" />
						</div>
					</div>
				</div>
				<h4>主办单位负责人信息</h4>
				<div class="module">
					<div class="fn-clear m-b-15">
						<p class="title"><i>*</i>负者人姓名：</p>
						<div class="info">
							<input type="text" name="" id="" value="张国俊" />
						</div>
					</div>
					<div class="tips-warn m-b-15">单位用户请填写法人姓名</div>
					<div class="fn-clear m-b-35">
						<p class="title"><i>*</i>负责人证件类型：</p>
						<div class="info">
							<select><option>身份证</option></select>
						</div>
					</div>
					<div class="fn-clear m-b-35">
						<p class="title">负责人证件号码：</p>
						<div class="info">
							<input type="text" name="" id="" value="50035219852662" />
						</div>
					</div>
					<div class="fn-clear m-b-15 tel">
						<p class="title"><i>*</i>办公室电话：</p>
						<div class="info">
							<span>086-023-</span>
							<input type="text" name="" id="" value="" class="w178" />
							<span>-</span>
							<input type="text" name="" id="" value="" class="w117"/>
						</div>
					</div>
					<div class="tips-warn m-b-15">单位用户请填写法人姓名</div>
					<div class="fn-clear m-b-15">
						<p class="title"><i>*</i>手机号码：</p>
						<div class="info">
							<input type="text" name="" id="" value="18626225453" />
						</div>
					</div>
					<div class="tips-warn m-b-15">外地号码需在备注中说明“号码为外地号码，拨打需加拨0”</div>
					<div class="fn-clear m-b-35 proving">
						<p class="title"><i>*</i>手机验证码：</p>
						<div class="info">
							<input type="text" name="" id="" value="" class="w178"/>
							<a>获取验证码</a>
						</div>
					</div>
					<div class="fn-clear m-b-35">
						<p class="title"><i>*</i>电子邮件地址：</p>
						<div class="info">
							<input type="text" name="" id="" value="18626225458@qq.com" />
						</div>
					</div>
					<div class="fn-clear m-b-35">
						<p class="title">备注：</p>
						<div class="info">
							<textarea></textarea>
						</div>
					</div>
				</div>
				<h4>资料上传</h4>
				<div class="module up-load">
					<div class="upload-list">
						<ul class="fn-clear">
							<li>
								<h5>主办单位证件</h5>
								<div class="id-pic">
									<img src="../assets/images/upload.jpg"/>
									<input type="file" name="" id="" value="" />
								</div>
								<p>工商营业执照图片等待上传</p>
							</li>
							<li>
								<h5>主办负责人证件</h5>
								<div class="id-pic">
									<img src="../assets/images/upload.jpg"/>
									<input type="file" name="" id="" value="" />
								</div>
								<p>张国俊身份证图片等待上传</p>
							</li>
							<li>
								<h5>负责人证件</h5>
								<div class="id-pic">
									<img src="../assets/images/upload.jpg"/>
									<input type="file" name="" id="" value="" />
								</div>
								<p>张国俊身份证图片等待上传</p>
							</li>
						</ul>
					</div>
					<div class="btn-upload"><a>上传资料</a></div>
				</div>
			</div>
		</section>
		<section class="btn-grp w1000 text-center">
			<a class="submit">提交审核</a>
			<a>返<i class="p-l-20"></i>回</a>
		</section>
	</div>
</template>
<!-- 添加 scoped “范围”属性CSS限制这个组件只 -->
<style scoped lang="scss">
	@import "../assets/css/common.scss";
	.tips{
		margin: 0 auto;
		width: 970px;
		padding: 30px 15px 15px;
		font-size: 18px;
		line-height: 22px;
		a{
			font-size: 14px;
			color: #157fe3;
			&:hover{
				text-decoration: underline;
			}
		}
		.edit{
			display: inline-block;
			width: 23px;
			height: 22px;
			background: url(../assets/images/icons.png) 0 -407px no-repeat;
			margin-right: 10px;	
		}
		.help{
			display: inline-block;
			width: 22px;
			height: 22px;
			background: url(../assets/images/icons.png) 0 -345px no-repeat;
			margin-right: 10px;	
		}
	}
	.step-cont{
		width: 998px;
		border: 1px solid $color-border;
		h3{
			color: #e8800f;
			text-align: center;
			font-size: 16px;
			padding: 10px 0;
			border-bottom: 1px solid $color-border;
		}
		.content{
			padding:35px 45px;
			text-align: center;
			h4{
				background: #e8e8e8;
				color: #666;
				padding: 5px 0;
				font-size: 16px;
			}
			.module{
				padding:55px 100px 75px;
				.m-b-35{
					margin-bottom: 35px;
					position: relative;
				}
				.title {
					text-align: right;
					float: left;
					width: 220px;
					line-height: 37px;
					margin-right: 10px;
					font-size: 16px;
					color: #999;
					i{
						color: #ff3333;
						padding-right: 5px;
					}
				}
				.info{
					float: left;
					select,input,textarea{
						width: 380px;
						padding-left: 15px;
						height: 35px;
						line-height: 35px;
						border: 1px solid $color-border;
					}
					select{
						width: 397px;
					}
					textarea{
						height: 130px;
						resize:none;
					}
					&.three-level select{
						width: 120px;
						margin-right: 15px;
					}
				}
				.tips-graphic{
					color: #157fe3;
					position: absolute;
					bottom: -27px;
					left: 245px;
					&:hover{
						text-decoration: underline;
					}
				}
				.proving{
					a{
						color: #157fe3;
						display: inline-block;
						width: 105px;
						height: 35px;
						text-align: center;
						line-height: 35px;
						border: 1px solid $color-border;
						margin-left: 30px;
						font-size: 16px;
						&:hover{
							background: darken(#fff,10%);
						}
						&:active{
							background: darken(#fff,20%);
						}
					}
				}
				.tips-warn{
					width: 380px;
					padding-left: 15px;
					height: 35px;
					line-height: 35px;
					border: 1px solid $color-border;
					border-radius: 3px;
					margin-left: 230px;
					text-align: left;
					background: #f1f1f1;
					position: relative;
				}
				.tips-warn:after, .tips-warn:before {
					bottom: 100%;
					left: 10%;
					border: solid transparent;
					content: " ";
					height: 0;
					width: 0;
					position: absolute;
					pointer-events: none;
				}
				
				.tips-warn:after {
					border-color: rgba(241, 241, 241, 0);
					border-bottom-color: #f1f1f1;
					border-width: 7px;
					margin-left: -7px;
				}
				.tips-warn:before {
					border-color: rgba(204, 204, 204, 0);
					border-bottom-color: #cccccc;
					border-width: 8px;
					margin-left: -8px;
				}
				.w178{
					width: 178px !important;
				}
				.w117{
					width: 117px !important;
				}
				/*上传资料*/
				&.up-load{
					padding: 30px !important;
					.upload-list{
						li{
							float: left;
							margin-right: 20px;
							.id-pic{
								width: 194px;
								height: 145px;
								margin: 10px 0;
								position: relative;
								border: 1px solid $color-border;
								input[type="file"]{
									display: block;
									width: 100%;
									height: 100%;
									background: red;
									position: absolute;
									top: 0;
									left: 0;
									opacity: 0;
								}
								img{
									width: 100%;
									height: 100%;
								}
							}	
						}
					}
					.btn-upload{
						padding-top: 60px;
						a{
							display: inline-block;
							background: #157FE3;
							width: 200px;
							height: 50px;
							line-height: 50px;
							color: #fff;
							font-size: 20px;
							border-radius: 5px;
							&:hover{
								background: darken(#157FE3,10%);
							}
							&:active{
								background: darken(#157FE3,20%);
							}
						}
					}
				}
			}
			
		}
	}
	.btn-grp{
		padding: 20px 0 35px;
		a{
			display: inline-block;
			width: 300px;
			height: 50px;
			line-height: 50px;
			font-size: 20px;
			border-radius: 5px;
			border: 1px solid #999;
			&:hover{
				background: darken(#fff,10%);
			}
			&:active{
				background: darken(#fff,20%);
			}
			&.submit {
				color: #fff;
				background: #f05a5a;
				border-color: #f05a5a;
				margin-right: 30px;
				&:hover{
					background: darken(#f05a5a,6%);
				}
				&:active{
					background: darken(#f05a5a,20%);
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
	import Step from "../components/Step.vue";
	import {
		getArticleListAction,
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
			"l-step":Step
		},
		/*
		 * 初始化数据
		 */
		data() {
			return {
				params: {
					pageCount: 10,
					pageIndex: 1
				},
				category: 1
			}
		},
		/*
		 * vuex
		 */
		vuex: {
			getters: {
				articleList: (state) => state.modules.articleList,
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
			handlePageClick(index) {
				apps.log('跳转到第：' + index + "页")
				this.params.pageIndex = index;
				this.getArticleListAction(this.params).then((data) => {
					apps.log('banner数据请求成功')
				}, (error) => {
					apps.log(error)
				});
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
					total: this.articleList.total
				};
			}
		},
		/*
		 * 路由数据钩 参数发生变化这里被激活
		 */
		route: {
			data({
				to
			}) {
				apps.log(to.params.category);
				this.params.category = to.params.category || 1; //category
				this.category = parseInt(to.params.category);
				this.getArticleListAction(this.params).then((data) => {
					apps.log('列表数据请求成功')
				}, (error) => {
					apps.log(error)
				});
			}
		}
	}
</script>
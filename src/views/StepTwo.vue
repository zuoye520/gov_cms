<template>
	<div class="wapper">
		<l-step :menu-active="menuActive"></l-step>
		<section class="tips fn-clear">
			<p class="fn-left"><i class="edit fn-left"></i>填写主体信息</p>
			<a class="fn-right" href="http://www.idcc.cn/help/beian/index.htm" target="_blank"><i class="help fn-left"></i>备案帮助</a>
		</section>
		<section class="step-cont w1000">
			<h3>请务必填写真实有效信息</h3>
			<div class="content">
				<h4>企业相关信息</h4>
				<div class="module">
					<div class="fn-clear m-b-35">
						<p class="title">企业所属区域：</p>
						<div class="info three-level">
							<select v-model="modelArea1">
								<option v-for="item in area1" :value="item.code">{{item.text}}</option>
							</select>
							<select v-model="modelArea2" v-show="area2.length > 0">
								<option v-for="item in area2" :value="item.code">{{item.text}}</option>
							</select>
							<select v-model="modelArea3" v-show="area3.length > 0">
								<option v-for="item in area3" :value="item.code">{{item.text}}</option>
							</select>
						</div>
					</div>
					<!--<div class="fn-clear m-b-35">
						<p class="title">主办单位证件类型：</p>
						<div class="info">
							<select v-model="params.cardType">
								<option>工商营业执照</option>
							</select>
						</div>
					</div>-->
					<div class="fn-clear m-b-35">
						<p class="title"><i>*</i>统一社会信用代码：</p>
						<div class="info">
							<input type="text" v-model ="params.cardNumber"/>
						</div>
					</div>
					<div class="fn-clear m-b-35">
						<p class="title"><i>*</i>法人姓名：</p>
						<div class="info">
							<input type="text" v-model ="params.name" />
						</div>
						<!--<a class="tips-graphic ">工商营业执照主办单位名称图示</a>-->
					</div>
					<div class="fn-clear m-b-35">
						<p class="title"><i>*</i>法人身份证号码：</p>
						<div class="info">
							<input type="text"  v-model ="params.regAddress" />
						</div>
						<!--<a class="tips-graphic">工商营业执照证件住所图示</a>-->
					</div>
					<!--<div class="fn-clear m-b-35">
						<p class="title"><i>*</i>投资人或主管单位：</p>
						<div class="info">
							<input type="text" v-model ="params.vc"  />
						</div>
					</div>-->
					<div class="fn-clear m-b-35">
						<p class="title"><i>*</i>详细地址：</p>
						<div class="info">
							<input type="text"  v-model ="params.address" />
						</div>
					</div>
					<div class="fn-clear m-b-35 tel">
						<p class="title">办公室电话：</p>
						<div class="info">
							<!--<span>086-023-</span>-->
							<input type="text"  placeholder="" v-model ="params.tel"/>
							<!--<span>-</span>
							<input type="text" name="" id="" value="" class="w117"/>-->
						</div>
					</div>
					<div class="fn-clear">
						<p class="title">公司邮箱：</p>
						<div class="info">
							<input type="text"  v-model ="params.email"/>
						</div>
					</div>
				</div>
				<h4>诚信管理员相关信息</h4>
				<div class="module">
					<div class="fn-clear m-b-15">
						<p class="title"><i>*</i>诚信管理员姓名：</p>
						<div class="info">
							<input type="text" v-model ="params.ceo"/>
						</div>
					</div>
					<div class="tips-warn m-b-15">单位用户请填写法人姓名</div>
					<!--<div class="fn-clear m-b-35">
						<p class="title"><i>*</i>负责人证件类型：</p>
						<div class="info">
							<select v-model ="params.ceoCardType">
								<option>身份证</option>
							</select>
						</div>
					</div>-->
					<div class="fn-clear m-b-35">
						<p class="title"><i>*</i>诚信管理员身份证号码：</p>
						<div class="info">
							<input type="text" v-model ="params.ceoCardNumber"/>
						</div>
					</div>
					
					<!--<div class="tips-warn m-b-15">单位用户请填写法人姓名</div>-->
					<div class="fn-clear m-b-15">
						<p class="title"><i>*</i>手机号码：</p>
						<div class="info">
							<input type="text" v-model ="params.phone" />
						</div>
					</div>
					<div class="tips-warn m-b-15">外地号码需在备注中说明“号码为外地号码，拨打需加拨0”</div>
					<div class="fn-clear m-b-35 proving">
						<p class="title"><i>*</i>手机验证码：</p>
						<div class="info">
							<input type="text" class="w178"/>
							<a>获取验证码</a>
						</div>
					</div>
					
					<div class="fn-clear m-b-35">
						<p class="title"><i>*</i>qq号码：</p>
						<div class="info">
							<!--<textarea v-model ="params.des"></textarea>-->
							<input type="text" v-model ="params.des" />
						</div>
					</div>
				</div>
				<h4>资料上传</h4>
				<div class="module up-load">
					<div class="upload-list">
						<ul class="fn-clear">
							<li>
								<h5>企业营业执照（正本或副本）</h5>
								<div class="id-pic">
									<img v-show ="!fileUrl1" src="../assets/images/upload.jpg"/>
									<img v-show ="fileUrl1" :src="fileUrl1"/>
									<input id="file1" type="file" name="files[]" multiple>
								</div>
								<p v-show ="!fileUrl1">工商营业执照图片等待上传</p>
							</li>
							<!--<li>
								<h5>法人身份证（正反面）</h5>
								<div class="id-pic">
									<img v-show ="!fileUrl2" src="../assets/images/upload.jpg"/>
									<img v-show ="fileUrl2" :src="fileUrl1"/>
									<input id="file2" type="file" name="files[]" multiple>
								</div>
								<p v-show ="!fileUrl2">身份证图片正面等待上传</p>
							</li>-->
							<li>
								<h5>诚信管理员身份证（正反面）</h5>
								<div class="id-pic">
									<img v-show ="!fileUrl3" src="../assets/images/upload.jpg"/>
									<img v-show ="fileUrl3" :src="fileUrl1"/>
									<input id="file3" type="file" name="files[]" multiple>
								</div>
								<p v-show ="!fileUrl3">身份证图片正面等待上传</p>
							</li>
						</ul>
					</div>
					<!--<div class="btn-upload"><a>上传资料</a></div>-->
				</div>
			</div>
		</section>
		<section class="btn-grp w1000 text-center">
			<a class="submit" @click ="validate">提交审核</a>
			<a v-back-link>返<i class="p-l-20"></i>回</a>
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
	import {INTERFACE_URL} from "../utils/constants.js";
	import Location from "../components/Location.vue";
	import Gather from "../components/Gather.vue";
	import Btns from "../components/Btns.vue";
	import CompanyQuery from "../components/CompanyQuery.vue";
	import Pages from "../components/Pages.vue";
	import Step from "../components/Step.vue";
	import { Toast, Indicator } from 'mint-ui';
	import {
		postREFromAction,
		getArea
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
				params:{
					address:'',
					area1:'重庆市',
					area2:'',
					area3:'',
					cardNumber:'',
					cardType:'工商营业执照',
					ceo:'',
					ceoCardNumber:'',
					ceoCardType:'身份证',
					des:'',
					email:'',
					name:'',
					phone:'',
					pin:'',
					pwd:'',
					regAddress:'',
					tel:'',
//					vc:'',
				},
				fileUrl1:'',
				fileUrl2:'',
				fileUrl3:'',
				area1:[],
				area2:[],
				area3:[],
				code1:'500000',
				code2:'',
				code3:'',
				code:'',
				bizId :'',
				menuActive :2,
			}
		},
		/*
		 * vuex
		 */
		vuex: {
			getters: {
			},
			actions: {
				postREFromAction,
				getArea
			}
		},
		/*
		 * 实例被创建后调用，但是还没有开始 DOM 编译
		 */
		created() {
			this.handleArea1(0);
		},
		ready(){
			this.handleFile1();
			this.handleFile2();
			this.handleFile3();
		},
		/*
		 * 处理事件
		 */
		methods: {
			validate(){
				let cardNumber = this.params.cardNumber.trim();
				let name = this.params.name.trim();
				let regAddress = this.params.regAddress.trim();
				let address = this.params.address.trim();
//				let vc = this.params.vc.trim();
				let ceo = this.params.ceo.trim();
				let ceoCardNumber = this.params.ceoCardNumber.trim();
				let tel = this.params.tel.trim();
				let phone = this.params.phone.trim();
				let email = this.params.email.trim();
				if(cardNumber.length <=0){
					Toast('请填写统一社会信用代码');
					return;
				}
				if(name.length <=0){
					Toast('请填写法人姓名');
					return;
				}
				if(regAddress.length <=0){
					Toast('请填写法人身份证号码');
					return;
				}
				if(address.length <=0){
					Toast('请填写详细地址');
					return;
				}
//				if(vc.length <=0){
//					Toast('请填写投资人或主管单位');
//					return;
//				}
				if(ceo.length <=0){
					Toast('请填写诚信管理员姓名');
					return;
				}
				if(ceoCardNumber.length <=0){
					Toast('请填写诚信管理员身份证号码');
					return;
				}
//				if(tel.length <=0){
//					Toast('请填写办公室电话');
//					return;
//				}
				if(phone.length <=0){
					Toast('请填写手机号码');
					return;
				}
//				if(email.length <=0){
//					Toast('请填写电子邮件地址');
//					return;
//				}
				if(this.fileUrl1.length <=0){
					Toast('请上传工商营业执照图片');
					return;
				}
//				if(this.fileUrl2.length <=0){
//					Toast('请上传身份证图片正面');
//					return;
//				}
				
				this.handleSubmit();
			},
			handleSubmit(){
				Indicator.open();
				this.postREFromAction(this.params,this.code).then((data) => {
					apps.log('提交信息成功');
					Indicator.close();
					alert('提交成功,等待审核...');
					
					this.$route.router.replace('index');
				}, (error) => {
					apps.log(error);
					Indicator.close();
				});
			},
			handleArea1(code){
				this.getArea({
					parent:code
				}).then((data) => {
					this.area1 = data;
					this.handleArea2(this.code1);
				}, (error) => {
					apps.log(error)
				});
			},
			handleArea2(code){
				this.getArea({
					parent:code
				}).then((data) => {
					this.area2 = data;
					if(data.length >0){
						this.params.area2 = data[0].text;
						this.code2 = data[0].code;
						this.handleArea3(data[0].code);
					}else{
						this.params.area2 = '';
						this.area3 = [];
						this.params.area3 = '';
					}
					
				}, (error) => {
					apps.log(error)
				});
			},
			handleArea3(code){
				this.getArea({
					parent:code
				}).then((data) => {
					this.area3 = data;
					this.params.area3 = data[0].text;
					this.code3 = data[0].code;
				}, (error) => {
					apps.log(error)
				});
			},
			handleFile1(){
				$('#file1').fileupload({
					url:INTERFACE_URL + "xhlc/api/f/upload/EnterpriseCard/RegEnterprise/"+this.bizId,
					dataType: 'json',
					done: (e, data) =>{
						console.log(e);
						console.log(data);
						Indicator.close();
						this.fileUrl1 = data.result.data[0].url;
						Toast('上传成功');
					},
					progressall: (e, data)=> {
						Indicator.open('上传中...');
						console.log(e);
						console.log(data);
					}
				});
			},
			handleFile2(){
				$('#file2').fileupload({
					url:INTERFACE_URL + "xhlc/api/f/upload/CEOCard/RegEnterprise/"+this.bizId,
					dataType: 'json',
					done: (e, data) =>{
						console.log(e);
						console.log(data);
						this.fileUrl2 = data.result.data[0].url;
						Indicator.close();
						Toast('上传成功');
					},
					progressall: (e, data)=> {
						Indicator.open('上传中...');
						console.log(e);
						console.log(data);
					}
				});
			},
			handleFile3(){
				$('#file3').fileupload({
					url:INTERFACE_URL + "xhlc/api/f/upload/UserCard/RegEnterprise/"+this.bizId,
					dataType: 'json',
					done: (e, data) =>{
						console.log(e);
						console.log(data);
						this.fileUrl3 = data.result.data[0].url;
						Indicator.close();
						Toast('上传成功');
					},
					progressall: (e, data)=> {
						Indicator.open('上传中...');
						console.log(e);
						console.log(data);
					}
				});
			}
		},
		/*
		 * 实例计算属性
		 */
		computed: {
			modelArea1:{
	            get(){
	                return this.code1;
	            },
	            set(newValue){
	                this.code1= newValue; 
	                let objArea = this.area1.filter((item,index)=>{
	                		return newValue == item.code;
	                })[0];
	                this.params.area1 = objArea.text;
	                this.handleArea2(objArea.code)
	            }
	        },
	        modelArea2:{
	            get(){
	                return this.code2;
	            },
	            set(newValue){
	                this.code2= newValue; 
	                let objArea = this.area2.filter((item,index)=>{
	                		return newValue == item.code;
	                })[0];
	                this.params.area2 = objArea.text;
	                this.handleArea3(objArea.code)
	            }
	        },
	        modelArea3:{
	            get(){
	                return this.code3;
	            },
	            set(newValue){
	                this.code3= newValue; 
	                let objArea = this.area3.filter((item,index)=>{
	                		return newValue == item.code;
	                })[0];
	                this.params.area3 = objArea.text;
	            }
	        },
		},
		/*
		 * 路由数据钩 参数发生变化这里被激活
		 */
		route: {
			data({
				to
			}) {
				let stepOneParams = apps.getSessionStorage('REGISTER_INFO',{});
				this.params.pin = stepOneParams.pin;
				this.params.pwd = stepOneParams.pwd;
				this.params.id = stepOneParams.eId;
				this.code = stepOneParams.code;
				this.bizId = stepOneParams.eId;
//				setTimeout(()=>{
//					this.handleFile1();
//				},3000);
				
//				this.handleFile2();
//				this.handleFile3();
			}
		}
	}
</script>
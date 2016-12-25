<template>
	<div class="fn-clear wapper w1000">
		<section class="left-side fn-left">
			<l-query :query-params ='queryParams'></l-query>
			<div class="gather-cont">
				<l-gather></l-gather>
			</div>
			<l-btns></l-btns>
		</section>
		<section class="right-side fn-left">
			<l-location :type="category"></l-location>
			<div class="comp-cont">
				<h3>诚信{{name}}</h3>
				<div>
					<span class="title">行业分类<i>*</i></span>
					<p>
						<select class="w230" v-model="params.industry">
							<option>请选择</option>
							<option v-for="item in industryList">{{item.text}}</option>
						</select>
					</p>
				</div>
				<div>
					<span class="title">企业名称<i>*</i></span>
					<p><input type="text" class="w230" v-model="params.enterpriseName" /></p>
				</div>
				<div>
					<span class="title">从业人员姓名</span>
					<p><input type="text" id="" value="" class="w230" v-model="params.employee" /></p>
				</div>
				<div>
					<span class="title">事件主题<i>*</i></span>
					<p><input type="text" id="" value="" class="w230" v-model="params.theme" /></p>
				</div>
				<div class="fn-clear">
					<p class="fn-left title">事件描述<i>*</i></p>
					<p><textarea v-model="params.describe"></textarea></p>
				</div>
				<div>
					<span class="title">相关资料上传</span>
					<p v-show="!imagesTitle">
						<input id="fileupload" type="file" name="files[]" multiple>
						<span class="tip">（附件不能超过2M）</span>
					</p>
					<p v-show="imagesTitle">附件：<a class="images-title"><em @click="handleRemove">X</em>{{imagesTitle}}</a></p>
				</div>
				<!--<div v-if="imagesTitle" style="padding: 10px 0 20px;">
					<span class="title"></span>
					<p>附件：<a class="images-title"><em @click="handleRemove">X</em>{{imagesTitle}}</a></p>
				</div>-->
				<div class="fn-clear">
					<div class="fn-left">
						<span class="title">{{name}}人姓名<i>*</i></span>
						<p class="fn-left">
							<input type="text" id="" value="" class="w155" v-model="params.complainantName" />
						</p>
					</div>
					<div>
						<span class="title">联系方式/电话<i>*</i></span>
						<p><input type="text" id="" value="" class="w176" v-model="params.complainantTel" /></p>
					</div>
				</div>
				<div>
					<span class="title">联系人地址</span>
					<p><input type="text" id="" value="" class="w493" v-model="params.complainantAddress" /></p>
				</div>
				<div class="fn-clear">
					<p class="fn-left title">{{name}}人要求</p>
					<p><textarea placeholder="请输入您的要求" class="require" v-model="params.complainantRequire"></textarea></p>
				</div>
				<div class="code fn-clear">
					<span class="title">验证码</span>
					<p class="fn-left" style="width: 400px;">
						<input class="fn-left" type="text" id="" value="" class="" v-model="code" />
						<img class="fn-left m-l-10" @click="handleCode" :src="codeUrl"/>
					</p>
				</div>
				<div class="btn-submit"><span class="title"></span>
					<a @click="handleSForm">提交需求</a>
				</div>
			</div>
			<div class="notes">
				<dl>
					<dt>注：</dt>
					<dd>1、为了保障您的合法权益，请您在投诉填写真实资料，以便我们和您联系，带"*"为必填项。</dd>
					<dd>2、文明用语，请不要使用一些不文明的语言。</dd>
					<dd>3、请投诉人详细阅读<span v-link="{ name: 'newsDetails', params: {category : 0, id:100 }}">《重庆市房地产开发企业诚信投诉范围》</span>。</dd>
					<dd>4、投诉事件不在<span v-link="{ name: 'newsDetails', params: {category : 0, id:100 }}">《重庆市房地产开发企业诚信投诉范围》</span>内的，请向对应监督管理部门投诉。</dd>
				</dl>
			</div>
		</section>
	</div>
</template>
<!-- 添加 scoped “范围”属性CSS限制这个组件只 -->
<style scoped lang="scss">
	@import "../assets/css/common.scss";
	.wapper {
		margin-top: 15px;
	}
	
	.right-side {
		width: 705px;
		margin-left: 15px;
		.comp-cont {
			width: 615px;
			height: 682px;
			background: url(../assets/images/complaint_bg.png) 0 0 no-repeat;
			background-size: 100%;
			margin-top: 35px;
			padding: 45px;
			.w155 {
				width: 135px;
				margin-right: 20px;
			}
			.w176 {
				width: 176px;
			}
			.w230 {
				width: 230px;
			}
			.w335 {
				width: 335px;
			}
			.w493 {
				width: 473px;
			}
			h3 {
				text-align: center;
				color: #666;
				font-size: 24px;
				padding-bottom: 30px;
			}
			.title {
				height: 30px;
				line-height: 30px;
				float: left;
				display: inline-block;
				width: 120px;
				font-weight: bold;
				i {
					color: #f02b2b;
					font-style: normal;
				}
			}
			input,
			select,
			textarea {
				border: 1px solid #999;
				background: #ececec;
				margin-bottom: 15px;
			}
			input,
			select {
				height: 30px;
				line-height: 30px;
				padding-left: 20px;
			}
			textarea {
				padding: 10px;
				width: 473px;
				height: 20px;
				resize: none;
				overflow: hidden;
				&.require {
					height: 92px;
				}
			}
			.tip {
				color: #999;
			}
			.btn-submit {
				padding-top: 15px;
				text-align: center;
				a {
					display: inline-block;
					width: 230px;
					height: 30px;
					line-height: 30px;
					background: #f05a5a;
					font-size: 16px;
					color: #fff;
					border: 0;
					&:hover {
						background: darken(#f05a5a, 10%);
					}
					&:active {
						background: darken(#f05a5a, 20%);
					}
				}
			}
		}
		.notes {
			padding: 30px 0 60px 55px;
			color: #999;
			line-height: 1.8;
			dt {
				font-weight: bold;
			}
			dd span {
				color: #0b6fce;
				cursor: pointer;
			}
		}
		.images-title{
			background: #ccc;
			position: relative;
			padding: 3px 10px;
			color: #157FE3;
			em{
				position: absolute;
				display: none;
				right: -10px;
				top: -10px;
				width: 20px;
				height: 20px;
				background: #ec2b2b;
				color: #fff;
				border-radius: 50%;
				text-align: center;
				font-size: 12px;
			}
			&:hover{
				em{
					display: block;
				}
			}
		}
		.code{
			img{
				width: 120px;
				height: 30px;
				border: #ccc 1px solid;
				cursor: pointer;
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
	import { Toast, Indicator } from 'mint-ui';
	import {
		getSNewAction,
		postSFromAction,
		postFile,
		getIndustry
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
				queryParams:{//搜索参数
					ename:'',
					pname:'',
					level:'请选择'
				},
				name: "投诉",
				industryList: [],
				params: {
					complainantAddress: '',
					complainantName: '',
					complainantRequire: '',
					complainantTel: '',
					describe: '',
					employee: '',
					enterpriseName: '',
					imgUrl: '',
					industry: '请选择',
					theme: '',
				},
				type:1,
				code:'',
				category: 12,
				imagesTitle: null, //附件名称
				codeUrl:''
			}
		},
		/*
		 * vuex
		 */
		vuex: {
			getters: {},
			actions: {
				getSNewAction,
				postSFromAction,
				postFile,
				getIndustry
			}
		},
		/*
		 * 实例被创建后调用，但是还没有开始 DOM 编译
		 */
		created() {
			//获取行业分类
			this.getIndustry().then((data) => {
				this.industryList = data;
				apps.log('获取行业分类成功')
			}, (error) => {
				apps.log(error)
			});
		},
		ready() {
		},
		/*
		 * 处理事件
		 */
		methods: {
			handleFile(){
				$('#fileupload').fileupload({
					url: INTERFACE_URL+"xhlc/api/f/upload/attach/Appeal/"+this.params.id,
					dataType: 'json',
					done: (e, data) =>{
						apps.log(data.result.data[0].url);
						this.imagesTitle = data.result.data[0].title;
						this.params.imgUrl = data.result.data[0].url;
						Indicator.close();
						Toast('上传成功');
//						$.each(data.result.files, function(index, file) {
//							$('<p/>').text(file.name).appendTo('#files');
//						});
					},
					progressall: (e, data)=> {
						Indicator.open('上传中...');
						apps.log(data);
//						var progress = parseInt(data.loaded / data.total * 100, 10);
//						$('#progress .progress-bar').css(
//							'width',
//							progress + '%'
//						);
					}
				});
			},
			handleRemove(){
				this.imagesTitle =null;
			},
			handleCode(){
					this.codeUrl = INTERFACE_URL+"xhlc/api/vc/"+this.params.id+"?"+Math.random();
			},
			handleSForm() {

				let enterpriseName = this.params.enterpriseName.trim();
				let theme = this.params.theme.trim();
				let describe = this.params.describe.trim();
				let complainantName = this.params.complainantName.trim();
				let complainantTel = this.params.complainantTel.trim();
				let code = this.code.trim();
				if(this.params.industry == '请选择') {
					Toast('请选择行业类别');
					return;
				}
				if(enterpriseName.length <= 0) {
					Toast('请输入企业名称');
					return;
				}
				if(theme.length <= 0) {
					Toast('请输入事件主题');
					return;
				}
				if(describe.length <= 0) {
					Toast('请输入事件描述');
					return;
				}
				if(complainantName.length <= 0) {
					Toast('请输入姓名');
					return;
				}
				if(complainantTel.length <= 0) {
					Toast('请输入联系方式');
					return;
				}
				if(code.length <4) {
					Toast('请输入验证码');
					return;
				}
				this.postSFromAction(this.params,this.type,this.code).then((data) => {
					alert('提交成功！');
					window.location.reload();
				}, (error) => {
					apps.log(error)
				});
			},
		},
		/*
		 * 实例计算属性
		 */
		computed: {
//			codeUrl(){
//				return INTERFACE_URL+"xhlc/api/vc/"+this.params.id;
//			}
		},
		/*
		 * 路由数据钩 参数发生变化这里被激活
		 */
		route: {
			data({
				to
			}) {
				apps.log(to.params.type)
				this.type = parseInt(to.params.type) || 0;

//				this.name = this.params.type == 0 ? '表扬' : '表扬';
//				this.category = this.params.type == 0 ? 13 : 14;
				this.name = '表扬';
				this.category = 14;
				//获取生成的ID
				this.getSNewAction().then((data) => {
					this.params.id = data;
					this.handleFile();
					this.codeUrl = INTERFACE_URL+"xhlc/api/vc/"+this.params.id+"?"+Math.random();
					apps.log('企业详情数据请求成功')
				}, (error) => {
					apps.log(error)
				});
			}
		}
	}
</script>
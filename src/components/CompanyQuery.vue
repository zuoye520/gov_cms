<template>
	<div>
		<section class="query">
			<h3>企业查询</h3>
			<div class="info">
				<p><input type="text" v-model="queryParams.ename" placeholder="请输入开发企业名称"/></p>
				<p><input type="text" v-model="queryParams.pname" placeholder="请输入开发企业项目"/></p>
				<p class="fn-clear"><span>信息类别</span>
					<select v-model="queryParams.level">
						<option>请选择</option>
						<!--<option>{{queryParams.level}}</option>-->
						<option>信息身份</option>
						<option>获奖信息</option>
						<option>不良行为</option>
					</select>
				</p>
				<div class="btn"><a @click= "handleQueryInfo">确<i></i>定</a></div>
			</div>
		</section>
	</div>
</template>
<script>
import apps from "../utils/apps.js";
	export default {
		/*
		 * 接收父组件数据
		 */
		data() {
				return {
//					queryParams:{//企业信息查询参数
//						ename:'',
//						pname:'',
//						type:'请选择'
//					},
				}
			},
			props: {
				queryParams: {
					type: Object,
					default: {},
				}
			},
			/*
			 * 实例计算属性
			 */
			computed: {
				
			},
			/*
			 * 处理事件
			 */
			methods: {
				handleQueryInfo(){
//					apps.setSessionStorage('SEARCH_PARAMS',this.queryParams);
					if(this.queryParams.level =='信息身份'||this.queryParams.level =='请选择'){
						window.location.href =`/site/enterpriseList?ename=${this.queryParams.ename}&pname=${this.queryParams.pname}&level=${this.queryParams.level}`;
					}else{
						let category = this.queryParams.type=='获奖信息' ? 10: 11;
						window.location.href =`/site/newsList/${category}?search=search&ename=${this.queryParams.ename}&pname=${this.queryParams.pname}&level=${this.queryParams.level}`;
					}
				}
			}
	}
</script>
<!-- 添加 scoped “范围”属性CSS限制这个组件只 -->
<style scoped lang="scss">
	@import "../assets/css/common.scss";
	.query{
		width: 280px;
		background: #fff;
		h3{
			background: $color-blue;
			color: #fff;
			padding: 5px 25px;
			font-size: 20px;
		}
		.info{
			border: 1px solid $color-gray3;
			padding: 30px 25px 25px;
			>p{
				position: relative;
				margin-bottom: 13px;
				input,select{
					border: 1px solid $color-gray2;
					background: $color-gray4;
				}
				input{
					width: 216px;
					height: 28px;
					line-height: 28px;
					padding-left: 10px;
				}
				select{
					display: inline-block;
					width: 142px;
					height: 33px;
					color: $color-gray2;
					padding: 5px 0 5px 10px;
					float: left;
					border-left: 0;
				}
				span{
					display: inline-block;
					width: 84px;
					text-align: center;
					padding: 5px 0;
					border: 1px solid $color-gray2;
					background: #fff;
					float: left;
				}
			}
			.btn{
				padding-top: 10px;
				a{
					display: block;
					width: 100%;
					text-align: center;
					font-size: 16px;
					background: $color-red;
					padding: 5px 0;
					color: #fff;
					&:hover{
						background: darken($color-red,10%);
					}
					&:active{
						background: darken($color-red,20%);
					}
					i{
						display: inline-block;
						width: 20px;
					}
				}
			}
		}
	}
</style>
<template>
	<div class="wapper w600">
		<h2>友情提示</h2>
		<div class="">
			<p>1.网签用户使用企业项目销售网签钥匙盘，输入网签用户名和密码登陆诚信信息平台进行操作；</p>
			<p>2.无网签用户需联系诚信信息平台管理单位，提交相关资料并通过审核后，完成企业注册方可使用。</p>
			
			<p>诚信信息平台管理单位：重庆市房地产业协会</p>
			<p>联系电话： 023-63869761</p>
			<p>地址： 重庆市北部新区洪湖西路18号1栋上峰上座1006室</p>
			
			<p>网签信息注册核查与钥匙盘经办单位：重庆市国土资源和房地产信息中心</p>
			<p>联系电话： 023-63651201 </p>
			<p>地址： 重庆市北部新区龙晴路2号凯比特大厦706室</p>
			
			<p>钥匙盘到期续费单位：东方中讯数字证书认证有限公司</p>
			<p>联系电话：4000235888、023-67030098</p>
			<p>地址：重庆市北部新区高新园星光大道62号海王星科技大厦A区8楼</p>
		</div>
		<div class="btn">
			<a class="login" v-link="{ name: 'index'}">登陆</a>
			<a v-link="{ name: 'stepOne'}">注册</a>
		</div>
	</div>
</template>
<!-- 添加 scoped “范围”属性CSS限制这个组件只 -->
<style scoped lang="scss">
	@import "../assets/css/common.scss";
	.w600{
		width: 740px;
		margin: 0 auto;
	}
	h2{
		font-size: 18px;
		font-weight: bold;
		text-align: center;
		padding: 50px 0 20px;
	}
	p{
		font-size: 16px;
		line-height: 25px;
		padding-bottom: 10px;
	}
	.btn{
		text-align: center;
		padding: 40px 0 ;
		a{
			background: #157fe3;
			color: #fff;
			padding: 10px 40px;
			margin:0 20px; 
			&:hover{
				background: rgba(#157fe3,0.8);
			}
		}
		.login{
			background: #ec2b2b;
			&:hover{
				background: rgba(#ec2b2b,0.8);
			}
		}
	}
</style>

<script>
	import apps from "../utils/apps.js";
	import {INTERFACE_URL} from "../utils/constants.js";
	import {
		Toast,
		MessageBox,
	} from 'mint-ui';
	export default {
		/*
		 * 组件名称
		 */
		components: {
			
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
			},
			actions: {
				
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
				
			}
		}
	}
</script>
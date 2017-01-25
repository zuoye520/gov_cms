<template>
	<!--Menu-->
	<div class="page">
		<nav>
			<ul class="fn-clear w1000">
				<li><a v-link="{ name: 'index'}" :class="{'on':menuActive == 0}">首 页</a></li>
				<li><a v-link="{ name: 'newsList', params: { category: 2 }}" :class="{'on':menuActive == 2}">政策法规</a></li>
				<li class="sub">
					<a :class="{'on':menuActive == 30}">信息公示</a>
					<!--<a v-link="{ name: 'newsList', params: { category: 3 }}" :class="{'on':menuActive == 3}">信息公示</a>-->
					<div class="sub-menu">
						<p v-link="{ name: 'ePublicityList',query:{category:19,type:30}}">企业公示</p>
						<p v-link="{ name: 'eList',query:{category:10,type:30}}">获奖信息</p>
						<p v-link="{ name: 'eList',query:{category:11,type:30}}">不良行为</p>
					</div>
				</li>
				<li><a v-link="{ name: 'newsList', params: { category: 4 }}" :class="{'on':menuActive == 4}">新闻动态</a></li>
				<li><a v-link="{ name: 'newsList', params: { category: 5 }}" :class="{'on':menuActive == 5}">协会动态</a></li>
				<li><a v-link="{ name: 'enterpriseList',query:{category:20}}" :class="{'on':menuActive == 20}">诚信品牌</a></li>
				<li><a v-link="{ name: 'newsList', params: { category: 7 }}" :class="{'on':menuActive == 7}">曝光台</a></li>
				<li><a v-link="{ name: 'complaint', params: { type: 0 }}" :class="{'on':menuActive == 101}">诚信表扬</a></li>
				<li><a v-link="{ name: 'complaint', params: { type: 1 }}" :class="{'on':menuActive == 100}">诚信投诉</a></li>
				<li><a v-link="{ name: 'newsList', params: { category: 6 }}" :class="{'on':menuActive == 6}">管理规则</a></li>
			</ul>
		</nav>
	</div>
</template>
<script>
import {context} from "../utils/constants.js";
	export default {
		/*
		 * 接收父组件数据
		 */
		data() {
			return {
				}
			},
			props: {
				menuActive: {
					type: Number,
					default: 0,
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
				handleQueryInfo(type){
					if(type ==1){
						window.location.href =`${context}/newsList/10?type=30&search=search&ename=&pname=&level=获奖信息`;
					}
					if(type ==2){
						window.location.href =`${context}/newsList/11?type=30&search=search&ename=&pname=&level=不良行为`;
					}
				}
			}
	}
</script>
<!-- 添加 scoped “范围”属性CSS限制这个组件只 -->
<style scoped lang="scss">
	@import "../assets/css/common.scss";
	nav{
	    width: 100%;
	    background: #023790;
	    li{
	        float: left;
	        /*overflow: hidden;*/
	       position: relative;
	        a{
	            display: inline-block;
	            padding: 10px 23px;
	            color: #fff;
	            &:active,&:hover{
	                background: darken(#023790,5%);
	            }
	            &.on{
	                background: darken(#023790,5%);
	            }
	        }
	    }
	    .sub:hover{
	    		.sub-menu{
	    			visibility: visible;
	    			opacity: 1;
	    		}
	    }
	    .sub-menu{
	    		visibility: hidden;
	    		opacity: 0;
			background: #023790;
			position: absolute;
			left: 0;
			top: 100%;
			width: 100%;
			color: #fff;
			z-index: 9;
			cursor: pointer;
			p{
				padding: 10px 23px;
				&:hover{
		                background: darken(#023790,5%);
		            }
			}
		}
	}
	
</style>
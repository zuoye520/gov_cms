<template>
	<!--Menu-->
	<div class="page">
		<nav>
			<ul class="fn-clear w1000">
				<li><a href="javascript:;">首 页</a></li>
				<li><a href="javascript:;">政策法规</a></li>
				<li><a href="javascript:;">信息公示</a></li>
				<li><a href="javascript:;" class="on">新闻动态</a></li>
				<li><a href="javascript:;">协会动态</a></li>
				<li><a href="javascript:;">诚信品牌</a></li>
				<li><a href="javascript:;">诚信品牌</a></li>
				<li><a href="javascript:;">曝光台</a></li>
				<li><a href="javascript:;">诚信投诉</a></li>
				<li><a href="javascript:;">管理规则</a></li>
			</ul>
		</nav>
	</div>
</template>

<!-- 添加 scoped “范围”属性CSS限制这个组件只 -->
<style scoped lang="scss">
	@import "../assets/css/common.scss";
	nav{
	    width: 100%;
	    background: #023790;
	    li{
	        float: left;
	        overflow: hidden;
	        a{
	            display: inline-block;
	            padding: 10px 23px;
	            color: #fff;
	            &:active{
	                background: darken(#023790,5%);
	            }
	            &.on{
	                background: darken(#023790,5%);
	            }
	        }
	    }
	}
</style>
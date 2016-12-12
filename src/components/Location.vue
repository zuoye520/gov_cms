<template>
	<div class="location-page">
		<section class="location">
			您的当前位置 :  首页 >> 新闻动态
		</section>
	</div>
</template>

<!-- 添加 scoped “范围”属性CSS限制这个组件只 -->
<style scoped lang="scss">
	@import "../assets/css/common.scss";
	.location-page{
		width: 100%;
		.location{
			padding: 10px;
			border-bottom: 2px solid $color-main;
		}
	}
</style>
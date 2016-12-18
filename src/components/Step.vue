<template>
	<!--step-->
	<nav>
		<ul class="step-list fn-clear w1000">
			<li class="on">
				<p class="mumber">1</p>
				<p class="step-cont">账户注册</p>
			</li>
			<li>
				<p class="mumber">2</p>
				<p class="step-cont">企业信息填写</p>
			</li>
			<li>
				<p class="mumber">3</p>
				<p class="step-cont">提交审核</p>
			</li>
		</ul>
	</nav>
</template>
<script>
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
			}
	}
</script>
<!-- 添加 scoped “范围”属性CSS限制这个组件只 -->
<style scoped lang="scss">
	@import "../assets/css/common.scss";
	nav{
	    width: 100%;
	    background: #ebf3ff;
	    border-bottom: 1px solid $color-border;
	    .step-list{
	    	width: 880px;
			padding: 35px 60px;
			li{
				float: left;
				position: relative;
				padding-right: 35px;
				&:last-child{
					padding-right: 0;
				}
				.step-cont{
					width: 270px;
					height: 35px;
					line-height: 35px;
					color: #fff;
					background: #999;
					text-align: center;
					border-radius: 35px;
					font-size: 24px;
				}
				.mumber{
					background: #dbe3ea;
					width: 63px;
					height: 63px;
					border-radius: 50%;
					color: #999;
					text-align: center;
					line-height: 63px;
					font-size: 36px;
					font-weight: bold;
					position: absolute;
					top: 50%;
					left: -20px;
					margin-top: -32px;
				}
				&.on{
					.mumber{
						color: #157fe3;
					}
					.step-cont{
						background: #157fe3;
					}
				}
			}
		}
	}
</style>
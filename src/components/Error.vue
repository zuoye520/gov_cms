<template>
	<div>
		<section class="miss-page">
			<div class="eyes">
				<div class="eye">
					<span class="eye-ball"></span>
				</div>
				<div class="eye eye-r">
					<span class="eye-ball"></span>
				</div>
			</div>
			<div class="miss-text">啊哦~页面找不到了~</div>
			<div class="back-btn">
				<a href="javascript:;">去首页看看</a>
			</div>
		</section>
	</div>
</template>

<!-- 添加 scoped “范围”属性CSS限制这个组件只 -->
<style scoped lang="scss">
	@import "../assets/css/common.scss";
	.miss-page {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #e6e6e6;
		text-align: center;
	.eyes {
		text-align: center;
		padding-top: 150px;
		.eye {
			width: 40px;
			height: 40px;
			background: -webkit-radial-gradient( #fff 40%, #e1e1e1 100%);
			border-radius: 50%;
			position: relative;
			display: inline-block;
			-webkit-animation: eyes-anima 2.8s 0.1s linear forwards infinite;
		}
		.eye-r {
			margin-left: 15px;
		}
		.eye-ball {
			width: 20px;
			height: 20px;
			background: #000;
			border-radius: 50%;
			display: inline-block;
			position: absolute;
			top: 10px;
			left: 0;
			-webkit-animation: eye-ball-anima 2.8s ease-out forwards infinite;
		}
		@-webkit-keyframes eyes-anima {
			0%,
			76%,
			100% {
				-webkit-transform: translate3d(0, -1px, 0);
			}
			3%,
			20% {
				-webkit-transform: translate3d(0, 1px, 0);
			}
			24%,
			40% {
				-webkit-transform: translate3d(3px, 2px, 0);
			}
			46%,
			70% {
				-webkit-transform: translate3d(5px, 0px, 0);
			}
		}
		@-webkit-keyframes eye-ball-anima {
			0%,
			76%,
			100% {
				-webkit-transform: translate3d(3px, -5px, 0);
			}
			3%,
			20% {
				-webkit-transform: translate3d(4px, 3px, 0);
			}
			24%,
			40% {
				-webkit-transform: translate3d(13px, 5px, 0);
			}
			46%,
			70% {
				-webkit-transform: translate3d(17px, -3px, 0);
			}
		}
	}
	
	.miss-text {
		padding: 40px 0;
		color: #8e8e8e;
	}
	
	.back-btn {
		a {
			padding: 10px 20px;
			background: #4d4d5b;
			color: #fff;
			font-size: 14px;
			border-radius: 30px;
			-webkit-border-radius: 30px;
			&:active {
				background: #30303d;
				color: #d0d0db;
			}
		}
	}
	}
</style>
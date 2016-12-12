<template>
	<div>
		<section class="btns-cont">
			<ul>
				<li>
					<a href="javascript:;" class="praise fn-clear">
						<div class="fn-left aa">
							<p>诚信表扬</p>
							<p class="eg">ChengXinBiaoYang</p>
						</div>
						<div class="icon icon-praise"></div>
					</a>
				</li>
				<li>
					<a href="javascript:;" class="complain fn-clear">
						<div class="fn-left aa">
							<p>诚信投诉</p>
							<p class="eg">ChengXinTouSu</p>
						</div>
						<div class="icon icon-complain"></div>
					</a>
				</li>
				<li>
					<a href="javascript:;" class="download fn-clear">
						<div class="fn-left aa">
							<p>文件下载</p>
							<p class="eg">WenJianXiazai</p>
						</div>
						<div class="icon icon-download"></div>
					</a>
				</li>
			</ul>
		</section>
	</div>
</template>

<!-- 添加 scoped “范围”属性CSS限制这个组件只 -->
<style scoped lang="scss">
	@import "../assets/css/common.scss";
	.btns-cont{
		width: 280px;
		li{
			padding-bottom: 15px;
			position: relative;
			.aa{
				position: absolute;
				left: 35px;
			}
		}
		a{
			display: block;
			padding: 15px 0;
			width: 100%;
			height: 70px;
			p{
				text-align: center;	
				font-size: 30px;
				font-weight: bold;
				color: #fff;
			}
			.eg{
				font-size: 14px;
				font-weight: normal;
			}
			.icon{
				float: right;
				padding-right: 20px;
				margin-top: 10px;
				background: url(../assets/images/icons.png) no-repeat;
				&.icon-praise{
					width: 63px;
					height: 56px;
					background-position-y: 0;
				}
				&.icon-complain{
					width: 63px;
					height: 55px;
					background-position-y: -107px;
				}
				&.icon-download{
					width: 63px;
					height: 56px;
					background-position-y: -231px;
				}
			}
			&.praise{
				background: $color-blue;
			}
			&.complain{
				background: #0b6fce;
			}
			&.download{
				background: #1680e5;
			}
		}
	}
</style>
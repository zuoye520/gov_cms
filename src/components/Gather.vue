<template>
	<div>
		<section class="gather">
			<ul>
				<li>
					<a href="javascript:;" class="intermediary">
						<p>重庆市房地产中介</p>
						<p>机构诚信信息平台</p>
					</a>
				</li>
				<li>
					<a href="javascript:;" class="property">
						<p>重庆市物业企业</p>
						<p>诚信信息平台</p>
					</a>
				</li>
			</ul>
		</section>
	</div>
</template>

<!-- 添加 scoped “范围”属性CSS限制这个组件只 -->
<style scoped lang="scss">
	@import "../assets/css/common.scss";
	.gather{
		width: 280px;
		li{
			padding-bottom: 15px;
		}
		a{
			display: block;
			padding: 15px 0;
			width: 100%;
			height: 70px;
			p{
				text-align: center;	
				font-size: 24px;
				font-weight: bold;
				color: #fff;
			}
			&.intermediary{
				background: url(../assets/images/platform_1.jpg) center center no-repeat;
			}
			&.property{
				background: url(../assets/images/platform_2.jpg) center center no-repeat;
			}
		}
	}
</style>
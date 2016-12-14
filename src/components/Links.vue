<template>
	<!--Links-->
	<div class="page">
		<section class="links-cont w1000 fn-clear">
			<h3 class="fn-left">友情链接</h3>
			<div class="links-list fn-left">
				<ul class="fn-clear">
					<li>
						<select>
							<option>市政府部门网站</option>
						</select>
					</li>
					<li>
						<select>
							<option>市国土房管行业网站</option>
						</select>
					</li>
					<li>
						<select>
							<option>市诚信建设相关网站</option>
						</select>
					</li>
				</ul>
				
			</div>
		</section>
	</div>
</template>

<!-- 添加 scoped “范围”属性CSS限制这个组件只 -->
<style scoped lang="scss">
	@import "../assets/css/common.scss";
	.links-cont{
		margin-bottom: 10px;
		h3{
			background: $color-blue;
			font-size: 20px;
			color: #fff;
			height: 60px;
			line-height: 60px;
			width: 133px;
			text-align: center;
		}
		.links-list{
			height: 58px;
			background: #fff;
			border: 1px solid $color-gray3;
			border-left: 0;
			width: 866px;
			li{
				float: left;
				padding-top: 20px;
				padding-left: 50px;
				select{
					width: 200px;
					border: 1px solid $color-gray2;
				}
			}
		}
	}
</style>
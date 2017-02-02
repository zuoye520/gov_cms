<template>
	<div class="location-page">
		<section class="location">
			您的当前位置 :
			<a v-link="{ name: 'index'}">首页</a> >>{{location}}
		</section>
	</div>
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
				type: {
					type: [Number,String],
					default: 99,
				}
			},
			computed: {
				location() {
					let str = "";
					switch(this.type) {
						case 1: //文章列表
							str = "文章列表"
							break;
						case 2: //政策法规
							str = "政策法规"
							break;
						case 3: //信息公示
							str = "信息公示"
							break;
						case 4: //新闻动态
							str = "新闻动态"
							break;
						case 5: //协会动态
							str = "协会动态"
							break;
						case 6: //管理规则
							str = "管理规则"
							break;
						case 7: //曝光台
							str = "曝光台"
							break;
						case 8: //行政处罚
							str = "行政处罚"
							break;
						case 9: //行业自律
							str = "行业自律"
							break;
						case 10: //企业获奖信息
							str = "获奖信息"
							break;
						case 11: //企业不良行为
							str = "不良行为"
							break;
						case 12: //文件下载
							str = "文件下载"
							break;
						case 13: //诚信投诉
							str = "诚信投诉"	
							break;	
						case 14: //诚信表扬
							str = "诚信表扬"	
							break;
						case 15: //企业列表
							str = "企业列表"	
							break;	
						case 16: //项目详情
							str = "项目详情"
							break;	
						case 17: //企业信息展示
							str = "企业信息展示"
							break;
						case 18: //企业项目列表
							str = "企业项目列表"
							break;	
						case 19: //企业公示
							str = "企业公示"
							break;	
						case 20: //诚信品牌
							str = "诚信品牌"
							break;
						case 21: //信息身份
							str = "信息身份"
							break;	
						case 22: //诚信等级公示
							str = "诚信等级公示"
							break;
						case 23: //开发企业诚信信息更新
							str = "开发企业诚信信息更新"
							break;		
							
						default:
							str = "文章详情"
							break;
					}

					return str;
				}
			}
	}
</script>
<!-- 添加 scoped “范围”属性CSS限制这个组件只 -->
<style scoped lang="scss">
	@import "../assets/css/common.scss";
	.location-page {
		width: 100%;
		.location {
			padding: 10px;
			border-bottom: 2px solid $color-main;
		}
	}
</style>
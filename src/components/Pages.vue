<template>
	<!--pages-->
	<section class="page-content">
		<ul v-show ="pageNum > 1">
			<li class="sum-pages">
				共{{pageNum}}页
			</li>
			<li v-if="pagesObj.pageIndex != 1">
				<a @click="handlePageClick(--pagesObj.pageIndex)">
					上一页
				</a>
			</li>
			<li v-else>
				<a>
					上一页
				</a>
			</li>
			<li v-for="index in pages" :class="{'active': pagesObj.pageIndex == index}">
				<a @click="handlePageClick(index)">
					{{index}}
				</a>
			</li>
			<li v-if="pagesObj.pageIndex != pageNum">
				<a @click="handlePageClick(++pagesObj.pageIndex)">
					下一页
				</a>
			</li>
			<li v-else>
				<a>
					下一页
				</a>
			</li>
		</ul>
	</section>
</template>

<!-- 添加 scoped “范围”属性CSS限制这个组件只 -->
<style scoped lang="scss">
	@import "../assets/css/common.scss";
	.page-content {
		padding-top: 30px;
		text-align: center;
		li {
			color: #666;
			display: inline;
			&.sum-pages{
				padding-right: 10px;
			}
			a{
				color: #999;
				display: inline-block;
				border: #d5d5d5 1px solid;
				padding: 3px 5px;
				background: #e9e9e9;
			}
			&.active a,a:hover{
				background: #666;
				color: #fff;
				border-color: #666;
			}
		}
	}
</style>
<script>
	export default {
		/*
		 * 接收父组件数据
		 */
		data() {
				return {
					pageNum: 0, //有多少页
				}
			},
			props: {
				pagesObj: {
					type: Object,
					default: {},
				}
			},
			/*
			 * 实例计算属性
			 */
			computed: {
				pages() {
					this.pageNum = Math.ceil(this.pagesObj.total / this.pagesObj.pageCount); //共多少页
					let pageIndex = this.pagesObj.pageIndex; //当前第几页
					let arr = [],
						left = 1,
						right = this.pageNum;
					if(right >= 11) {
						if(pageIndex > 5 && pageIndex < right - 4) {
							left = pageIndex - 5
							right = pageIndex + 4
						} else {
							if(pageIndex <= 5) {
								left = 1
								right = 10
							} else {
								right = this.pageNum
								left = this.pageNum - 9
							}
						}
					}
					while(left <= right) {
						arr.push(left)
						left++
					}
					return arr
				},
			},
			/*
			 * 处理事件
			 */
			methods: {
				handlePageClick(index) {
					if(this.pagesObj.pageIndex == index) return;
					this.$parent.handlePageClick(index);
				}
			}
	}
</script>
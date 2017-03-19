<template>
	<!--Links-->
	<div class="page">
		<section class="links-cont w1000 fn-clear">
			<h3 class="fn-left">友情链接</h3>
			<div class="links-list fn-left">
				<ul class="fn-clear">
					<li>
						<select @change="handleLinks">
          					<option v-for="item in links.gov || []" :value="item.url">{{item.title}}</option>
						</select>
					</li>
					<li>
						<select @change="handleLinks">
              				<option v-for="item in links.land || []" :value="item.url">{{item.title}}</option>
						</select>
					</li>
					<li>
						<select @change="handleLinks">
              				<option v-for="item in links.credit || []" :value="item.url">{{item.title}}</option>
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

<script>
  import apps from "../utils/apps.js";
  import {
    context
  } from "../utils/constants.js";
  import {
    getSiteLinkList
  } from '../vuex/actions.js';
import {
    filterLinks
  } from '../vuex/getters.js';
  export default {
    /*
     * 初始化数据
     */
    data() {
      return {
        siteLinkList : [],
        gov : [],
        land : [],
        credit : []
      }
  },
  /*
   * vuex
   */
  vuex: {
    getters: {
//      links: (state) => state.modules.siteLinkList, //获取诚信等级公示
        links: filterLinks, //获取诚信等级公示
    },
    actions: {
        getSiteLinkList
    }
  },
  /*
   * 实例被创建后调用，但是还没有开始 DOM 编译
   */
  ready() {
  },
  created() {

    //获取诚信企业评级列表
    this.getSiteLinkList().then((data) => {
      apps.log('获取友情链接成功')
//    this.gov = data.filter(d=>d.type === 'gov');
//    this.land = data.filter(d=>d.type === 'land');
//    this.credit = data.filter(d=>d.type === 'credit');
//    console.log(this.gov);
    }, (error) => {
      apps.log(error)
    });


  },
  /*
   * 处理事件
   */
  methods: {
	handleLinks(event){
		let url = event.target.value
		window.open(url);   
	}
  },
  /*
   * 定义过滤器
   */
  filters: {},
  /*
   * 实例计算属性
   */
  computed: {
  },
  /*
   * 路由数据钩 参数发生变化这里被激活
   */
  }
</script>

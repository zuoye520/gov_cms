<!-- 
* @Name: 城市三级联动组件
* @Auther: zuozuo
* @AddTime: 2017-02-07
* @LastModifyTime: 2017-02-07
-->
<template>
	<div class="fx">
		<div class="">
			<select v-model="province">
				<option v-for="item in provinceList" :value="item.code">{{item.text}}</option>
			</select>
		</div>
		<div class="">
			<select v-model="city" v-show="cityList.length > 0">
				<option v-for="item in cityList" :value="item.code">{{item.text}}</option>
			</select>
		</div>
		<div class="">
			<select v-model="distract" v-show="cityList.length > 0 && distractList.length > 0 ">
				<option v-for="item in distractList" :value="item.code">{{item.text}}</option>
			</select>
		</div>
	</div>
</template>
<script>
	import apps from "../utils/apps.js";
	import {
		getArea
	} from '../vuex/actions.js';
	export default {
		name: 'addressPicker',
		/*
		 * 接收父组件数据
		 */
		data() {
			return {
				provinceList:[],
				cityList:[],
				distractList:[],
				isClick:false //是否是点击
			}
		},
		props: ['opts'],
		/*
		 * vuex
		 */
		vuex: {
			getters: {
				
			},
			actions: {
				getArea
			}
		},
		created() {
			this.getArea({parent:0}).then((data)=>{
				this.provinceList = data
			})
		},
		ready() {
			//这里监听数据变化
			this.$watch('opts.province.code',()=> {
               	this.getArea({parent:this.opts.province.code}).then((data)=>{
          			this.cityList = data
          			if(this.isClick){
          				this.opts.city.code = this.cityList[0] ? this.cityList[0].code:''
          				this.opts.city.text = this.cityList[0] ? this.cityList[0].text:''
          			}
          		})
          	});
          	this.$watch('opts.city.code',()=>{
          		if(this.opts.city.code){
          			this.getArea({parent:this.opts.city.code}).then((data)=>{
	          			this.distractList = data
	          			if(this.isClick){
	          				this.opts.distract.code = this.distractList[0].code
	          				this.opts.distract.text = this.distractList[0].text
	          			}
	          		})
          		}else{
          			this.opts.distract.code = ''
      				this.opts.distract.text = ''
          		}
          		
          	});
		},
		/*
		 * 实例计算属性
		 */
		computed: {
			province: {//这里双向绑定
				get() {
					return this.opts.province.code;
				},
				set(value) {
					let province = this.provinceList.filter((item, index) => {
						return value == item.code;
					})[0];
					this.opts.province.code = value;
					this.opts.province.text = province.text;
					this.isClick = true
				}
			},
			city: {//这里双向绑定
				get() {
					return this.opts.city.code;
				},
				set(value) {
					let city = this.cityList.filter((item, index) => {
						return value == item.code;
					})[0];
					this.opts.city.code = value;
					this.opts.city.text = city.text;
					this.isClick = true
				}
			},
			distract: {//这里双向绑定
				get() {
					return this.opts.distract.code;
				},
				set(value) {
					let distract = this.distractList.filter((item, index) => {
						return value == item.code;
					})[0];
					this.opts.distract.code = value;
					this.opts.distract.text = distract.text;
					this.isClick = true
				}
			},
		},
		/*
		 * 处理事件
		 */
		methods: {
		}
	}
</script>
<style lang="scss">

</style>
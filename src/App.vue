<template>
	<article class="w640">
		<!--header-->
		<l-header></l-header>
		<!--menu-->
		<l-menu :menu-active ="menuActive"></l-menu>
		<!--router-->
		<div class="container w1000">
			<router-view class="view" keep-alive transition transition-mode="out-in"></router-view>
		</div>
		<!--links-->
		<l-links></l-links>
		<!--footer-->
		<l-footer></l-footer>
	</article>
</template>
<script>
	import store from './vuex/store';
	import Header from "./components/Header.vue";
	import Footer from "./components/Footer.vue";
	import Links from "./components/Links.vue";
	import Menu from "./components/Menu.vue";
	export default {
		name:'app',
		store,
		components: {
			"l-header":Header,
			"l-footer":Footer,
			"l-links":Links,
			"l-menu":Menu,
	  	},
		data() {
			return {
				menuActive : 0,
				isHide:false, //用于navbar导航
			}
		},
		created() {
		},
		/*
		 * 处理事件
		 */
		methods: {
		},
	};
</script>
<style lang="scss">
	@import "./assets/css/common.scss";
	.view {
		transition: opacity .2s ease;
		opacity: 1;
	}

	.view.v-enter,
	.view.v-leave {
		opacity: 0
	}
	.container{
		min-height: 600px;
	}
</style>
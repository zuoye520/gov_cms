<template>
	<!--header-->
	<div class="page">
		<header>
			<h1 class="w1000 fn-clear title-cont">
				<div class="logo fn-left"></div>
				<!--<div class="title">
					<div>重庆市房地产行业诚信信息平台</div>
					<p>CHONGQINGSHIFANGDICHANHANGYECHENGXINXINXIPINGTAI</p>
					<p>重庆市房地产业协会</p>
				</div>-->
			</h1>
		</header>
	</div>
</template>

<!-- 添加 scoped “范围”属性CSS限制这个组件只 -->
<style scoped lang="scss">
	@import "../assets/css/common.scss";
	header{
    width: 100%;
    height: 280px;
    background: url(../assets/images/banner_bg.jpg) center center no-repeat;
    h1{
        padding-top: 50px;
         .title{
            height: 100px;
            font-weight: normal;
            color: #fff;
            padding-top: 10px;
            >div{
                font-size: 38px;
                letter-spacing: 5px;
            }
            >p{
                font-size: 16px;
                letter-spacing: 2px;
            }
        }
        .logo{
            width: 100%;
            height: 120px;
            margin-right: 20px;
            background: url(../assets/images/logo.png) left top no-repeat;
        }
    }
   
}
</style>
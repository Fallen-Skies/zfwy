<template>
	<!--普通登录和验证码快捷登录-->
	<div class="ptdl">
		<header>
  		<router-link to="/zhuye" class="logo"><img src="../../assets/logo.png"/></router-link>
  		<router-link to="" tag="span">北京 <img src="../../assets/xiala.png"/></router-link>
  		<div>
  			<router-link to=""><img src="../../assets/appxia.png" /></router-link>
  			<router-link to="/denglu"><img src="../../assets/wode.png"/></router-link>
  		</div>		
  	 	</header>
  	 	<section>
  	 		<!--导航-->
  	 	   <div class="diaohang"><span>首页</span><span><img src="../../assets/fengepng.png"/></span><span>我的</span>
  	 	   	<span><img src="../../assets/fengepng.png"/></span><span>登录</span></div>
  	 	   	<!--登录模式-->
  	 	   	<div class="moshi">
  	 	   		<router-link to="/pt">普通登录</router-link>
  	 	   		<router-link to="/yzmdl">验证码快捷登录</router-link>
  	 	   	</div>
  	 	   	<router-view></router-view>
  	 	   	<!--立即注册和忘记密码-->
  	 	   	<div class="gn">
  	 	   		<router-link to="/zhuce">立即注册</router-link>
  	 	   		<router-link to="/zhaohui">忘记密码</router-link>
  	 	   	</div>
  	 	</section>
	</div>
</template>

<script>
</script>

<style>
.ptdl{
	top: 0;bottom: 0;
	left: 0;right: 0;
	position: absolute;
	background: #F0EFED;
}
.ptdl>header{
	width: 100%;
	height: 5rem;
	line-height: 5rem;
	background: #ff8a00;
}
.ptdl>header>.logo>img{
	height: 2rem;
	width: 5.6rem;
	position: relative;
	top: 0.6rem;
	margin-left: 1.5rem;
}
.ptdl>header>span{
	padding-left: 1.8rem;
	font-size: 1.4rem;
	color: #fff;
}
.ptdl>header>span>img{
	width: 1rem;
	height: 0.5rem;
}
.ptdl>header>div{
	height: 5rem;
	float: right;
}
.ptdl>header>div>a{
	display: inline-block;
	height: 5rem;
	float: right;
	margin-right: 1.5rem;
}
.ptdl>header>div>a>img{
	 width: 3rem;
	 height: 3.6rem;
	 padding-top: 0.7rem;
}
.ptdl>section{
	width: 100%;
}
.ptdl>section>.diaohang{
	padding:0 1.5rem;
	font-size: 1.5rem;
	height: 4rem;
	background: #fff;
	color: #575757;
	display: flex;
	border-bottom: 0.1rem solid #E4E4E4;
}
.ptdl>section>.diaohang>span{
	display: inline-block;
	height: 4rem;
	line-height: 4rem;
}
.ptdl>section>.diaohang>span>img{
	height: 4rem;
	margin: 0 1.2rem 0 0.6rem;
}
.ptdl>section>.moshi{
	width: 100%;
	display: flex;
	background: #fff;
}
.ptdl>section>.moshi>a{
	width: 50%;
	display: inline-block;
	font-family: "黑体";
	padding: 1.5rem 0;
	text-align: center;
	font-size: 1.6rem;
	border-bottom: 0.45rem solid #D1D1D1;
	text-decoration: none;
	color: black;
}
.ptdl>section>.moshi>.router-link-active:first-child{
	border-bottom: 0.45rem solid #FF8A00;
}
.ptdl>section>.gn{
	width: 90%;
	padding: 0 5%;
}
.ptdl>section>.gn>a{
	text-decoration: none;
	font-family: "黑体";
	font-size:1.5rem;
}
.ptdl>section>.gn>a:first-child{
	color:#FF8A00;
}
.ptdl>section>.gn>a:last-child{
	color:#8F8F8D;
	float: right;
}
</style>
<template>
	<div class="yidl">
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
  	 	   <div class="diaohang"><span>首页</span><span><img src="../../assets/fengepng.png"/></span><span>我的</span></div>
  	 	   <!--欢迎你-->
  	 	   <div class="huanying">
  	 	   	   <router-link to="/zhuye"><img src="../../assets/ydlong.png"/></router-link>
  	 	   	   <p>欢迎你，18686868686</p>
  	 	   </div>
  	 	   <div class="wode">
				<div>
					<router-link to="" tag="div">我关注的房源 <img src="../../assets/youjian.png"/></router-link>
					<router-link to="/xiaoqu" tag="div">我关注的小区 <img src="../../assets/youjian.png"/></router-link>
					<router-link to="" tag="div">我的看房记录 <img src="../../assets/youjian.png"/></router-link>
				</div>
			</div>
			<!--退出登录-->
			<div class="tuichu"><router-link to="/denglu">退出登录</router-link></div>
			
  	 	</section>
	</div>
</template>

<script>
</script>

<style>
.yidl{
	top: 0;bottom: 0;
	left: 0;right: 0;
	position: absolute;
	background: #F0EFED;
}
.yidl>header{
	width: 100%;
	height: 5rem;
	line-height: 5rem;
	background: #ff8a00;
}
.yidl>header>.logo>img{
	height: 2rem;
	width: 5.6rem;
	position: relative;
	top: 0.6rem;
	margin-left: 1.5rem;
}
.yidl>header>span{
	padding-left: 1.8rem;
	font-size: 1.4rem;
	color: #fff;
}
.yidl>header>span>img{
	width: 1rem;
	height: 0.5rem;
}
.yidl>header>div{
	height: 5rem;
	float: right;
}
.yidl>header>div>a{
	display: inline-block;
	height: 5rem;
	float: right;
	margin-right: 1.5rem;
}
.yidl>header>div>a>img{
	 width: 3rem;
	 height: 3.6rem;
	 padding-top: 0.7rem;
}
.yidl>section{
	width: 100%;
}
.yidl>section>.diaohang{
	padding:0 1.5rem;
	font-size: 1.5rem;
	height: 4rem;
	background: #fff;
	color: #575757;
	display: flex;
}
.yidl>section>.diaohang>span{
	display: inline-block;
	height: 4rem;
	line-height: 4rem;
}
.yidl>section>.diaohang>span>img{
	height: 4rem;
	margin: 0 1.2rem 0 0.6rem;
}
.yidl>section>.huanying{
	padding: 1rem 0;
	text-align: center;
	background: url(../../assets/bg2.png) no-repeat;
	background-size:cover;
}
.yidl>section>.huanying>a>img{
	width: 6rem;
	height: 6rem;
	padding: 2rem 0;
}
.yidl>section>.huanying>p{
	font-size: 1.6rem;
	padding:0.5rem 0 2rem 0 ;
	color: #fff;
}
.yidl>section>.wode{
	width: 100%;
}
.yidl>section>.wode>div{
	padding: 0 1.5rem;
	background: #fff;
}
.yidl>section>.wode>div>div{
	width: 100%;
	padding: 1.5rem 0;
	border-bottom: 1px solid #E9E9E9;
	font-family: "黑体";
	font-size: 1.6rem;
	color: #212121;
}
.yidl>section>.wode>div>div>img{
	float: right;
	width: 1rem;
	height: 1.5rem;
	position: relative;
	top: 0.4rem;
}
.yidl>section>.tuichu{
	padding:2rem 1.5rem;
	text-align: center;
}
.yidl>section>.tuichu>a{
	text-decoration: none;
	border: 1px solid #D0D0D0;
	color: #ff8a00;
	display: inline-block;
	font-size: 1.6rem;
	width: 100%;
	padding: 1rem 0;
	background: #fff;
}
</style>
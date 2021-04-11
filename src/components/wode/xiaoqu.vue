<template>
	<!--我关注的小区-->
	<div class="xiaoqu">
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
  	 	   	<span><img src="../../assets/fengepng.png"/></span><span>我关注的小区</span></div>
  	 	   	<!--房源内容-->
  		 	<router-link to="" tag="div" class="fang-n">
  		 	<div>
  		 		<img src="../../assets/ximg1.png"/>
  		 		<div>
  		 			<div>辉煌国际</div>
  		 			<p>昌平区 - 回龙观</p>
  		 			<p>2007年建成 <span>37050元/平</span></p>
  		 			<p>板塔结合</p>
  		 		</div>
  		 	</div>
  		 	</router-link>
  		 		<!--房源内容-->
  		 	<router-link to="" tag="div" class="fang-n">
  		 	<div>
  		 		<img src="../../assets/ximg2.png"/>
  		 		<div>
  		 			<div>万寿园</div>
  		 			<p>昌平区 - 回龙观</p>
  		 			<p>2007年建成 <span>56447/平</span></p>
  		 			<p>板塔结合</p>
  		 		</div>
  		 	</div>
  		 	</router-link>
  		 		<!--房源内容-->
  		 	<router-link to="" tag="div" class="fang-n">
  		 	<div>
  		 		<img src="../../assets/ximg3.png"/>
  		 		<div>
  		 			<div>红莲南里5号</div>
  		 			<p>昌平区 - 回龙观</p>
  		 			<p>2007年建成 <span>89776元/平</span></p>
  		 			<p>板塔结合</p>
  		 		</div>
  		 	</div>
  		 	</router-link>
  		 		<!--房源内容-->
  		 	<router-link to="" tag="div" class="fang-n">
  		 	<div style="border: 0;">
  		 		<img src="../../assets/ximg4.png"/>
  		 		<div>
  		 			<div>万寿西街16号</div>
  		 			<p>昌平区 - 回龙观</p>
  		 			<p>2007年建成 <span>90778元/平</span></p>
  		 		</div>
  		 	</div>
  		 	</router-link>
  	 	</section>
	</div>
</template>

<script>
</script>

<style>
.xiaoqu{
	top: 0;bottom: 0;
	left: 0;right: 0;
	position: absolute;
}
.xiaoqu>header{
	width: 100%;
	height: 5rem;
	line-height: 5rem;
	background: #ff8a00;
}
.xiaoqu>header>.logo>img{
	height: 2rem;
	width: 5.6rem;
	position: relative;
	top: 0.6rem;
	margin-left: 1.5rem;
}
.xiaoqu>header>span{
	padding-left: 1.8rem;
	font-size: 1.4rem;
	color: #fff;
}
.xiaoqu>header>span>img{
	width: 1rem;
	height: 0.5rem;
}
.xiaoqu>header>div{
	height: 5rem;
	float: right;
}
.xiaoqu>header>div>a{
	display: inline-block;
	height: 5rem;
	float: right;
	margin-right: 1.5rem;
}
.xiaoqu>header>div>a>img{
	 width: 3rem;
	 height: 3.6rem;
	 padding-top: 0.7rem;
}
.xiaoqu>section{
	width: 100%;
}
.xiaoqu>section>.diaohang{
	padding:0 1.5rem;
	font-size: 1.5rem;
	height: 4rem;
	background: #fff;
	color: #575757;
	display: flex;
	border-bottom: 0.1rem solid #E4E4E4;
}
.xiaoqu>section>.diaohang>span{
	display: inline-block;
	height: 4rem;
	line-height: 4rem;
}
.xiaoqu>section>.diaohang>span>img{
	height: 4rem;
	margin: 0 1.2rem 0 0.6rem;
}
.xiaoqu>section>.fang-n{
	width: 100%;
	position: relative;
}
.xiaoqu>section>.fang-n>div{
	margin: 1.5rem;
	padding-bottom:1.5rem;
	border-bottom:1px solid #FF8A00 ;
	display: flex;
}
.xiaoqu>section>.fang-n>div>img{
	width:12rem;
	padding-right:1rem;
	height: 9rem;
}
.xiaoqu>section>.fang-n>div>div{
	width:66%;
}
.xiaoqu>section>.fang-n>div>div>div:first-child{
	font-size: 1.8rem;
	color: #313131;
}
.xiaoqu>section>.fang-n>div>div>p{
	font-size: 1.4rem;
	color: #5E5E5E;
	margin-top: 0.4rem;
}
.xiaoqu>section>.fang-n>div>div>p:nth-child(3)>span{
	float: right;
	color: #ff8a00;
	font-weight: 600;
	font-size: 1.5rem;
}
</style>
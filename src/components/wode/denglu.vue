<template>
	<!--我的   登录-->
	<div class="denglu">
		<section>
			<!--登录-->
			<div class="dgl">
				<!--<img src="../../assets/bg1.png"/>-->
				<!--我的和APP下载-->
				<div class="top">
					<div>
			  			<router-link to=""><img src="../../assets/appxia.png" /></router-link>
			  			<router-link to="/denglu"><img src="../../assets/wode.png"/></router-link>
			  		</div>		
				</div>
				<!--我的logo-->
				<router-link to="/zhuye" class="logo">
					<img src="../../assets/wlogo.png"/>
				</router-link>
				<router-link to="/ptdl" class="dl"><span>登录</span></router-link>
			</div>
			<!--我的-->
			<div class="wode">
				<div>
					<router-link to="" tag="div"><span><img src="../../assets/icon1.png"/></span>我关注的房源 <img src="../../assets/youjian.png"/></router-link>
					<router-link to="" tag="div"><span><img src="../../assets/icon2.png"/></span>我关注的小区 <img src="../../assets/youjian.png"/></router-link>
					<router-link to="" tag="div"><span><img src="../../assets/icon3.png"/></span>我关注的新房 <img src="../../assets/youjian.png"/></router-link>
					<router-link to="" tag="div"><span><img src="../../assets/icon4.png"/></span>我的看房记录 <img src="../../assets/youjian.png"/></router-link>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
</script>

<style>
.denglu{
	top: 0;bottom: 0;
	left: 0;right: 0;
	position: absolute;
	background: #F0EFED;
}
.denglu>section{
	width: 100%;
	height: 100%;
	padding-top: 0;
	background: #F5F5F5;
}
.denglu>section>.dgl{
	background:url(../../assets/bg1.png) no-repeat;
	padding-bottom: 2rem;
	background-size:cover;
}
.denglu>section>.dgl>.top{
	width:100%;
	height: 5rem;
}
.denglu>section>.dgl>.top>div{
	height: 5rem;
	float: right;
}
.denglu>section>.dgl>.top>div>a{
	display: inline-block;
	height: 5rem;
	float: right;
	margin-right: 1.5rem;
}
.denglu>section>.dgl>.top>div>a>img{
	 width: 3rem;
	 height: 3.6rem;
	 padding-top: 0.7rem;
}
.denglu>section>.dgl>.logo{
	width: 100%;
	text-align: center;
	padding-top: 2rem;
	display: inline-block;
}
.denglu>section>.dgl>.logo>img{
	width: 6rem;
	height: 6rem;
}
.denglu>section>.dgl>.dl{
	text-decoration: none;
	display: inline-block;
	width: 100%;
	padding: 1.2rem 0;
	text-align: center;
}
.denglu>section>.dgl>.dl>span{
	display: inline-block;
	width:7.6rem;
	color: #fff;
	border: 0.12rem solid #fff;
	border-radius: 0.3rem;
	font-size: 1.8rem;
	line-height: 3rem;
	height: 3rem;
}
.denglu>section>.wode{
	width: 100%;
	margin-top: 1rem;
}
.denglu>section>.wode>div{
	padding: 0 1.5rem;
	background: #fff;
}
.denglu>section>.wode>div>div{
	width: 100%;
	padding: 1.5rem 0;
	border-bottom: 1px solid #E9E9E9;
	font-family: "黑体";
	font-size: 1.6rem;
	color: #212121;
}
.denglu>section>.wode>div>div>span>img{
	width: 1.8rem;
	height: 1.8rem;
	position: relative;
	top: 0.4rem;
	padding-right: 1.5rem;
}
.denglu>section>.wode>div>div>img{
	float: right;
	width: 1rem;
	height: 1.5rem;
	position: relative;
	top: 0.4rem;
}
</style>
<template>
	<!--找回密码-->
	<div class="zhaohui">
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
  	 	   <div class="diaohang"><span>首页</span><span><img src="../../assets/fengepng.png"/></span><span>找回密码</span></div>
  	 	   <div class="tixie">
			<div><input type="text" name="" id="" value="" placeholder="请输入手机号码"/>
				 <span>发送验证码</span></div>
				<div><input type="text" name="" id="" value="" placeholder="请输入短信中的验证码"/></div>
				<div><input type="text" name="" id="" value="" placeholder="输入新密码"/></div>
				<div><input type="text" name="" id="" value="" placeholder="确认新密码"/></div>
				<p><router-link to="/ptdl">提交</router-link></p>
			</div>
  	 	</section>
	</div>
</template>
<script>
</script>

<style>
.zhaohui{
	position: absolute;
	left: 0;right: 0;
	top: 0;bottom: 0;
	background: #F0EFED;
}
.zhaohui>header{
	width: 100%;
	height: 5rem;
	line-height: 5rem;
	background: #ff8a00;
}
.zhaohui>header>.logo>img{
	height: 2rem;
	width: 5.6rem;
	position: relative;
	top: 0.6rem;
	margin-left: 1.5rem;
}
.zhaohui>header>span{
	padding-left: 1.8rem;
	font-size: 1.4rem;
	color: #fff;
}
.zhaohui>header>span>img{
	width: 1rem;
	height: 0.5rem;
}
.zhaohui>header>div{
	height: 5rem;
	float: right;
}
.zhaohui>header>div>a{
	display: inline-block;
	height: 5rem;
	float: right;
	margin-right: 1.5rem;
}
.zhaohui>header>div>a>img{
	 width: 3rem;
	 height: 3.6rem;
	 padding-top: 0.7rem;
}
.zhaohui>section{
	width: 100%;
}
.zhaohui>section>.diaohang{
	padding:0 1.5rem;
	font-size: 1.5rem;
	height: 4rem;
	background: #fff;
	color: #575757;
	display: flex;
	border-bottom: 0.1rem solid #E4E4E4;
}
.zhaohui>section>.diaohang>span{
	display: inline-block;
	height: 4rem;
	line-height: 4rem;
}
.zhaohui>section>.diaohang>span>img{
	height: 4rem;
	margin: 0 1.2rem 0 0.6rem;
}
.zhaohui>section>.tixie{
	width: 100%;
}
.zhaohui>section>.tixie>div{
	width: 90%;
	padding: 0 5%;
	background: #fff;
	position: relative;
}
.zhaohui>section>.tixie>div>input{
	width: 100%;
	height: 2.6rem;
	padding: 1rem 0;
	font-size: 1.6rem;
	border: 0;
	border-bottom:1px solid #E6E6E6;
	font-family: "黑体";
}
.zhaohui>section>.tixie>div:nth-child(4)>input{
	border: 0;
}
.zhaohui>section>.tixie>div>span{
	padding: 0.8rem;
	position: absolute;
	right: 2rem;
	height: 1.8rem;
	display: inline-block;
	font-size: 1.4rem;
	line-height: 1.8rem;
	top: 0.6rem;
	border:0.1rem solid #E6E6E6;
}
.zhaohui>section>.tixie>div:nth-child(4){
	border-bottom:1px solid #E6E6E6;
}
.zhaohui>section>.tixie>p{
	margin: 2rem 0;
	width: 90%;
	padding: 0 5%;
}
.zhaohui>section>.tixie>p>a{
	width: 100%;
	display: inline-block;
	text-align: center;
	padding: 1.5rem 0;
	font-size: 1.8rem;
	color: #fff;
	letter-spacing: 0.2rem;
	text-decoration: none;
	background: #ff8a00;
}
</style>
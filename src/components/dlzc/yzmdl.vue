<template>
	<!--验证码快捷登录-->
	<div class="yzmdl">
		<div><input type="text" name="" id="" value="" placeholder="请输入手机号码"/>
		 <span>发送验证码</span>
		</div>
		<div><input type="text" name="" id="" value="" placeholder="请输入密码"/></div>
		<p><router-link to="/yidenglu">验证并登录</router-link></p>
	</div>
</template>

<script>
</script>

<style>
.yzmdl{
	width: 100%;
}
.yzmdl>div{
	width: 90%;
	padding: 0 5%;
	background: #fff;
	position: relative;
}
.yzmdl>div>input{
	width: 100%;
	height: 2.6rem;
	padding: 1rem 0;
	font-size: 1.6rem;
	border: 0;
	border-bottom:1px solid #E6E6E6;
	font-family: "黑体";
}
.yzmdl>div:nth-child(2)>input{
	border: 0;
}
.yzmdl>div>span{
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
.yzmdl>div:nth-child(2){
	border-bottom:1px solid #E6E6E6;
}
.ptdl>section>.moshi>.router-link-active:last-child{
	border-bottom: 0.45rem solid #FF8A00;
}
.yzmdl>p{
	margin: 2rem 0;
	width: 90%;
	padding: 0 5%;
}
.yzmdl>p>a{
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
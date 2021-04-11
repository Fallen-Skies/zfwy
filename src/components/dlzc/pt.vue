<template>
	<!--普通登录-->
	<div class="pt">
		<div><input type="text" name="" id="" value="" placeholder="请输入手机号码"/></div>
		<div><input type="text" name="" id="" value="" placeholder="请输入密码"/></div>
		<p><router-link to="/yidenglu">立即登录</router-link></p>
	</div>
</template>

<script>
</script>

<style>
.pt{
	width: 100%;
}
.pt>div{
	width: 90%;
	padding: 0 5%;
	background: #fff;
}
.pt>div>input{
	width: 100%;
	height: 2.6rem;
	padding: 1rem 0;
	font-size: 1.6rem;
	border: 0;
	border-bottom:1px solid #E6E6E6;
	font-family: "黑体";
}
.pt>div:nth-child(2)>input{
	border: 0;
}
.pt>div:nth-child(2){
	border-bottom:1px solid #E6E6E6;
}
.pt>p{
	margin: 2rem 0;
	width: 90%;
	padding: 0 5%;
}
.pt>p>a{
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
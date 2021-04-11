<template>
	<!--区域-->
	<div class="equyu">
		<div class="qu-1">
			<router-link to="/qy">区域</router-link>
			<router-link to="/dt">地铁</router-link>
		</div>
		<router-view class="keng"></router-view>
	</div>
</template>

<script>
</script>

<style>
.equyu{
	width: 100%;
	display: flex;
	font-size: 1.5rem;
}
.equyu>.qu-1{
	width: 25%;
	text-align: center;
	background: #F0F0F0;
}
.equyu>.qu-1>a{
	display: inline-block;
	color: #858585;
	padding: 1.2rem 0;
	width: 84%;
	padding-right: 16%;
	text-decoration: none;
}
.equyu>.qu-1>.router-link-active{
	color:#ff8a00;
	background: #fff;
}
.equyu>.qu-2{
	width: 35%;
	color: #6C6C6C;
}
.equyu>.qu-3{
	width: 70%;
	color: #6C6C6C;
}
.equyu>.qu-2>ul{
	padding-left: 1.4rem;
	list-style: none;
	border-right: 1px solid #E6E6E6;
}
.equyu>.qu-2>ul>li{
	padding: 1.2rem;
}
.equyu>.qu-2>ul>li:nth-child(n+2){
	border-bottom: 1px solid #E6E6E6;
}
.equyu>.qu-2>ul>li:last-child{
	border-bottom: 0;
}
.equyu>.qu-3>ul{
	padding-left: 1.5rem;
	list-style: none;
}
.equyu>.qu-3>ul>li{
	padding: 1.2rem;
}
.equyu>.qu-3>ul>li:nth-child(n+2){
	border-bottom: 1px solid #E6E6E6;
}
.equyu>.qu-3>ul>li:last-child{
	border-bottom: 0;
}
.equyu>.keng{
	width: 75%;
}
.equyu .yanse{
	color:#ff8a00;
}
</style>
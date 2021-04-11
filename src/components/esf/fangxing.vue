<template>
	<!--房型-->
	<div class="efangxing">
		<p>不限</p>
		<p>1室 <span></span></p>
		<p>2室 <span></span></p>
		<p>3室 <span></span></p>
		<p>4室 <span></span></p>
		<p>5室 <span></span></p>
		<div>确定</div>
	</div>
</template>

<script>
</script>

<style>
.efangxing{
	width: 100%;
}
.efangxing>p{
	width: 86%;
	margin: 0 7%;
	padding: 1.2rem 0;
	font-size: 1.4rem;
	color: #858585;
	border-bottom: 1px solid #E6E6E6;
}
.efangxing>p>span{
	display: inline-block;
	float: right;
	height: 1.4rem;
	width: 1.4rem;
	border: 0.12rem solid #E6E6E6;
}
.efangxing>div{
	width: 100%;
	padding: 1.1rem 0;
	color: #ffff;
	background: #ff8a00;
	text-align: center;
	font-size: 1.6rem;
}
</style>
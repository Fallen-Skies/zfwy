<template>
	<!--价格-->
	<div class="ejiage">
		<p>不限</p>
		<p>100万以下</p>
		<p>100万-150万</p>
		<p>150万-200万</p>
		<p>200万-250万</p>
		<p>250万-300万</p>
		<div>自定义价格 
		<div><span>最小</span>-<span>最大</span><span>确定</span></div></div>
	</div>
</template>

<script>
</script>

<style>
.ejiage{
	width: 86%;
	padding: 0 7%;
}
.ejiage>p{
	width: 100%;
	padding: 1.2rem 0;
	font-size: 1.4rem;
	color: #858585;
	border-bottom: 1px solid #E6E6E6;
}
.ejiage>div{
	width: 100%;
	padding: 1.2rem 0;
	display: flex;
	color: #858585;
	font-size: 1.4rem;
	line-height: 1.4rem;
}
.ejiage>div>div{
	padding-left: 1.5rem;
}
.ejiage>div>div>span{
	font-size: 1.2rem;
	padding: 0.2rem 0.6rem;
	margin: 0 0.3rem;
	background: #F5F5F5;
}
.ejiage>div>div>span:last-child{
	color: #fff;
	margin-left: 1rem;
	background: #ff8a00;
}
</style>
<template>
	<!--更多-->
	<div class="gengduo">
		<div>
			<p>区域</p>
			<ul>
				<router-link to="">南</router-link>
				<router-link to="">南北</router-link>
				<router-link to="">东</router-link>
				<router-link to="">西</router-link>
				<router-link to="">北</router-link>
			</ul>
		</div>
		<div>
			<p>面积（平米）</p>
			<ul>
				<router-link to="">50以下</router-link>
				<router-link to="">50-70</router-link>
				<router-link to="">70-90</router-link>
				<router-link to="">90-110</router-link>
				<router-link to="">110-130</router-link>
				<router-link to="">130-150</router-link>
				<router-link to="">150-200</router-link>
				<router-link to="">200以上</router-link>
			</ul>
		</div>
		<div>
			<p>标签</p>
			<ul>
				<router-link to="">学区房</router-link>
				<router-link to="">地铁房</router-link>
				<router-link to="">不限购</router-link>
				<router-link to="">满两年</router-link>
				<router-link to="">满五唯一</router-link>
				<router-link to="">降价</router-link>
				<router-link to="">新上</router-link>
				<router-link to="">独家</router-link>
				<router-link to="">有钥匙</router-link>
			</ul>
		</div>
		<div>
			<p>楼龄</p>
			<ul>
				<router-link to="">5年以内</router-link>
				<router-link to="">10年以内</router-link>
				<router-link to="">10-20年</router-link>
				<router-link to="">20年以内</router-link>
			</ul>
		</div>
		<div>
			<p>楼层</p>
			<ul>
				<router-link to="">低楼层</router-link>
				<router-link to="">中楼层</router-link>
				<router-link to="">高楼层</router-link>
			</ul>
		</div>
		<p>清空条件</p>
		<p>确定</p>
	</div>
</template>

<script>
</script>

<style>
.gengduo{
	width: 100%;
}
.gengduo>div{
	width: 86%;
	margin: 0 7%;
	padding-bottom: 1rem;
	border-bottom: 0.12rem solid #E6E6E6;
}
.gengduo>div>p{
	font-size: 1.4rem;
	padding: 2rem 0 1rem 0;
}
.gengduo>div>ul:after{
	visibility:hidden;
	display:block;
	font-size:0;content: " ";
	clear:both;height:0;
}
.gengduo>div>ul{
	width: 100%;
	list-style: none;
}
.gengduo>div>ul>a{
	width: 22%;
	display: inline-block;
	text-decoration: none;
	border: 0.1rem solid #E6E6E6;
	padding: 0.6rem 0;
	color: #858585;
	border-radius: 0.3rem;
	float: left;
	text-align: center;
	margin-bottom: 1rem;
	font-size: 1.2rem;
	margin-right: 2%;
}
.gengduo>p{
	width: 100%;
	text-align: center;
	color: #ffff;
	margin: 1.5rem 0 0.5rem 0;
	font-size: 1.6rem;
	color: #858585;
	padding: 1.1rem 0;
}
.gengduo>p:last-child{
	margin: 0;
	color: #ffff;
	background: #ff8a00;
}
</style>
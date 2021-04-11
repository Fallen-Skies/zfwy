<template>
	<div class="zufang">
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
  	 	   <div class="diaohang"><span>首页</span><span><img src="../../assets/fengepng.png"/></span><span>北京租房</span></div>
  	 		<!--二手房搜索-->
			<div class="sousuo">
				<div>
					<input type="text" name="" id="" value=""/>
					<div><img src="../../assets/esousuo.png"/></div>
				</div>
			</div>
			<!--功能区-->
			<div class="gongneng">
				<router-link to="">区域 <span>▼</span></router-link>
				<router-link to="">价格 <span>▼</span></router-link>
				<router-link to="">房型 <span>▼</span></router-link>
				<router-link to="">更多 <span>▼</span></router-link>
			</div>
			<!--<router-view class="keng"></router-view>-->
			<!--房源内容-->
  		 	<router-link to="/zufangxq" tag="div" class="fang-n">
  		 	<div>
  		 		<img src="../../assets/ximg1.png"/>
  		 		<div>
  		 			<div>南沙滩小区 超低价急售</div>
  		 			<p>2室一厅 96㎡  南北</p>
  		 			<p>青岛新天地</p>
  		 			<p><span>集中供暖</span> <span>3700元/月</span></p>
  		 		</div>
  		 	</div>
  		 	</router-link>
			<!--房源内容-->
  		 	<router-link to="/zufangxq" tag="div" class="fang-n">
  		 	<div>
  		 		<img src="../../assets/ximg2.png"/>
  		 		<div>
  		 			<div>青年汇二期 免税三居</div>
  		 			<p>3室2厅 129㎡  南北</p>
  		 			<p>青年汇家园</p>
  		 			<p><span>集中供暖</span> <span>1610元/月</span></p>
  		 		</div>
  		 	</div>
  		 	</router-link>
			<!--房源内容-->
  		 	<router-link to="/zufangxq" tag="div" class="fang-n">
  		 	<div>
  		 		<img src="../../assets/ximg3.png"/>
  		 		<div>
  		 			<div>博雅德源稀缺两居 钥匙房源</div>
  		 			<p>2室2厅 126㎡  南北</p>
  		 			<p>西二旗</p>
  		 			<p><span>天然气供暖</span> <span>3420元/月</span></p>
  		 		</div>
  		 	</div>
  		 	</router-link>
			<!--房源内容-->
  		 	<router-link to="/zufangxq" tag="div" class="fang-n">
  		 	<div>
  		 		<img src="../../assets/ximg4.png"/>
  		 		<div>
  		 			<div>朝阳北路 赠车库 自住首选 !</div>
  		 			<p>5室3厅 260㎡  南北</p>
  		 			<p>武夷花园二手房</p>
  		 			<p><span>集中供暖</span> <span>5408元/月</span></p>
  		 		</div>
  		 	</div>
  		 	</router-link>
			<!--房源内容-->
  		 	<router-link to="/zufangxq" tag="div" class="fang-n">
  		 	<div style="border: 0;">
  		 		<img src="../../assets/ximg5.png"/>
  		 		<div>
  		 			<div>金汉旭城 东南金角一居</div>
  		 			<p>1室1厅 60㎡  东南</p>
  		 			<p>鲁谷二手房</p>
  		 			<p><span>集中供暖</span> <span style="color: #E76943;">3300元/月</span></p>
  		 		</div>
  		 	</div>
  		 	</router-link>
  	 	</section>
	</div>
</template>

<script>
</script>

<style>
.zufang>header{
	width: 100%;
	height: 5rem;
	line-height: 5rem;
	background: #ff8a00;
}
.zufang>header>.logo>img{
	height: 2rem;
	width: 5.6rem;
	position: relative;
	top: 0.6rem;
	margin-left: 1.5rem;
}
.zufang>header>span{
	padding-left: 1.8rem;
	font-size: 1.4rem;
	color: #fff;
}
.zufang>header>span>img{
	width: 1rem;
	height: 0.5rem;
}
.zufang>header>div{
	height: 5rem;
	float: right;
}
.zufang>header>div>a{
	display: inline-block;
	height: 5rem;
	float: right;
	margin-right: 1.5rem;
}
.zufang>header>div>a>img{
	 width: 3rem;
	 height: 3.6rem;
	 padding-top: 0.7rem;
}
.zufang>section{
 	width: 100%;
}
.zufang>section>.diaohang{
	padding:0 1.5rem;
	font-size: 1.5rem;
	height: 4rem;
	background: #fff;
	color: #575757;
	display: flex;
	border-bottom: 0.1rem solid #E4E4E4;
}
.zufang>section>.diaohang>span{
	display: inline-block;
	height: 4rem;
	line-height: 4rem;
}
.zufang>section>.diaohang>span>img{
	height: 4rem;
	margin: 0 1.2rem 0 0.6rem;
}
.zufang>section>.sousuo{
 	width: 100%;
 	background:#F5F5F5;
 	padding: 1rem 0;
 }
.zufang>section>.sousuo>div{
 	width: 90%;
 	border: 1px solid #D8D8D8;
 	background: #fff;
 	margin: 0 5%;
 	display: flex;
 	padding: 0.5rem 0;
 	border-radius: 3px;
 }
.zufang>section>.sousuo>div>input{
  	height:3.2rem;
  	font-size: 1.4rem;
  	color: #9A9A9A;
  	border: 0;
  	padding-left:2%;
  	width: 85%;
}
.zufang>section>.sousuo>div>div{
  	width: 15%;
  	text-align: center;
  	margin: 0.4rem 0;
  	border-left: 1px dashed #E6E6E6;
  	height: 2.4rem;
}
.zufang>section>.sousuo>div>div>img{
  	height: 1.8rem;
  	width: 1.8rem;
  	position: relative;
  	top: 0.3rem;
}
.zufang>section>.gongneng{
   	border-bottom: 1px solid #E6E6E6;
   	border-top: 1px solid #E6E6E6;
   	display: flex;
}
.zufang>section>.gongneng>a{
   	width: 25%;
   	padding: 1.2rem 0;
   	text-decoration: none;
   	color: black;
   	display: inline-block;
   	text-align: center;
   	font-size: 1.5rem;
}
.zufang>section>.gongneng>a>span{
   	font-size: 0.8rem;
   	font-family: "黑体";
   	color: #CCCCCC;
}
.zufang>section>.fang-n{
	width: 100%;
	position: relative;
}
.zufang>section>.fang-n>div{
	margin: 1.5rem;
	padding-bottom:1.5rem;
	border-bottom:1px solid #FF8A00 ;
	display: flex;
}
.zufang>section>.fang-n>div>img{
	width:12rem;
	padding-right:1rem;
	height: 9rem;
}
.zufang>section>.fang-n>div>div{
	width:66%;
}
.zufang>section>.fang-n>div>div>div:first-child{
	font-size: 1.7rem;
	color: #313131;
}
.zufang>section>.fang-n>div>div>p{
	font-size: 1.4rem;
	color: #5E5E5E;
	margin-top: 0.2rem;
}
.zufang>section>.fang-n>div>div>p:nth-child(4){
	margin-top: 0.5rem;
}
.zufang>section>.fang-n>div>div>p:nth-child(4)>span:first-child{
	font-size: 1.2rem;
	border-radius: 0.2rem;
	padding: 0.1rem 0.6rem;
	border: 0.1rem solid #71A225;
	color: #71A225;
}
.zufang>section>.fang-n>div>div>p:nth-child(4)>span:last-child{
	float: right;
	color: #ff8a00;
	font-size: 1.5rem;
	font-weight: 600;
}
/*.zufang>section>.gongneng>.router-link-active{
	color:#ff8a00;
}
.zufang>section>.keng{
	position: absolute;
	background: #fff;
	box-shadow: 0 2px 2px rgb(200,200,200);
	z-index: 1;
}*/
</style>
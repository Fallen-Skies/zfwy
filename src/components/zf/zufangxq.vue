<template>
	<div class="zfxq">
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
  	 	   <div class="diaohang"><span>首页</span><span><img src="../../assets/fengepng.png"/></span><span>北京租房</span>
  	 	   	<span><img src="../../assets/fengepng.png"/></span><span>房源信息</span>
  	 	   </div>
  	 		<!--分享-->
  	 		<div class="fenxiang">
  	 			<p><img src="../../assets/fenxiang.png"/>
			    <span>分享</span></p>
			    <div>
			    	<p>天鹅湾西北3.8米高厅两居，业主换房急售</p>
			    	<div>
			    		<img src="../../assets/xin.png"/>
			    		<p>关注</p>
			    	</div>
			    </div>
  	 		</div>
  	 		<!--介绍-->
  	 		<div class="jies">
  	 			<div>
  	 				<span>租金</span>
  	 				<p>2300元/月</p>
  	 			</div>
  	 			<div>
  	 				<span>房型</span>
  	 				<p>2室1厅</p>
  	 			</div>
  	 			<div>
  	 				<span>面积</span>
  	 				<p>204平米</p>
  	 			</div>
  	 		</div>
  	 		<div class="huxing">
			<div><p>楼层：<span>高楼层/17层</span></p><p>朝向：<span>南北</span></p></div>
			<div><p>装修：<span>精装</span></p><p>供暖：<span>集体供暖</span></p></div>
			<div><p>年代：<span>2007年</span></p><p>楼型：<span>板楼</span></p></div>
		</div>
		<!--房评-->
		<div class="fangping">
			<div>
			<p>经纪人房评<img src="../../assets/youjian.png"/></p>
			<div>
				地理位置：晶都国际处于酒仙桥中心地带，毗邻
				北京三大商圈，紧邻丽都商圈，隔四环与望京商
				圈相望,西南紧挨燕莎商圈，地理位置优越，周
				边配套：颐堤港商业中心，兆维大厦...
			</div>
			</div>
		</div>
		<div class="fangping">
			<div>
			<p>客户看房记录<img src="../../assets/youjian.png"/></p>
			<div><p>近一月新增 <span>0</span> 位看房客户，共 <span>50</span> 位</p></div>
			</div>
		</div>
		<div class="fangping">
			<div>
			<p>位置及周边<img src="../../assets/youjian.png"/></p>
			<div><img src="../../assets/ditu.png" width="100%"/></div>
			</div>
		</div>
		<div class="lishi">
			<div>
			<p>小区成交历史（24）<img src="../../assets/youjian.png"/></p>
			<div>
				<p>3 室 2 厅，146 平米，<span><b>5000</b>元</span></p>
				<p>签约日期：2015-2-26</p>
			</div>
			</div>
		</div>
		<div class="liand">
			<div><img src="../../assets/lian1.png"/></div>
			<div>张 &nbsp;&nbsp;三<div>4001581855转0008</div></div>
			<div><p><img src="../../assets/lian2.png"/></p><span>致电</span></div>
			<div><p><img src="../../assets/lian3.png"/></p><span>短信</span></div>
		</div>
  	 	</section>
	</div>
</template>

<script>
</script>

<style>
.zfxq>header{
	width: 100%;
	height: 5rem;
	line-height: 5rem;
	background: #ff8a00;
}
.zfxq>header>.logo>img{
	height: 2rem;
	width: 5.6rem;
	position: relative;
	top: 0.6rem;
	margin-left: 1.5rem;
}
.zfxq>header>span{
	padding-left: 1.8rem;
	font-size: 1.4rem;
	color: #fff;
}
.zfxq>header>span>img{
	width: 1rem;
	height: 0.5rem;
}
.zfxq>header>div{
	height: 5rem;
	float: right;
}
.zfxq>header>div>a{
	display: inline-block;
	height: 5rem;
	float: right;
	margin-right: 1.5rem;
}
.zfxq>header>div>a>img{
	 width: 3rem;
	 height: 3.6rem;
	 padding-top: 0.7rem;
}
.zfxq>section{
 	width: 100%;
 	background:#F9F9F9;
}
.zfxq>section>.diaohang{
	padding:0 1.5rem;
	font-size: 1.5rem;
	height: 4rem;
	background: #fff;
	color: #575757;
	display: flex;
	border-bottom: 0.1rem solid #E4E4E4;
}
.zfxq>section>.diaohang>span{
	display: inline-block;
	height: 4rem;
	line-height: 4rem;
}
.zfxq>section>.diaohang>span>img{
	height: 4rem;
	margin: 0 1.2rem 0 0.6rem;
}
.zfxq>section>.fenxiang{
	width: 100%;
	border-bottom: 1px solid #E4E4E4;
}
.zfxq>section>.fenxiang>p{
	position: relative;
}
.zfxq>section>.fenxiang>p>img{
	width: 100%;
}
.zfxq>section>.fenxiang>p>span{
	position: absolute;
	display: inline-block;
	bottom: 1.5rem;
	background: rgba(0,0,0,.5);
	padding:1rem 1rem 1rem 2rem;
	color: #fff;
	border-radius:2rem 0 0 2rem;
	font-size: 1.5rem;
	right: 0rem;
}
.zfxq>section>.fenxiang>div{
	width: 90%;
	padding: 1rem 5%;
	display: flex;
}
.zfxq>section>.fenxiang>div>p{
	width: 70%;
	padding-right: 5%;
	line-height: 2.2rem;
	color: #313131;
	font-size: 1.6rem;
}
.zfxq>section>.fenxiang>div>div{
	width: 25%;
	text-align: center;
	border-left: 1px dashed #E4E4E4;
}
.zfxq>section>.fenxiang>div>div>img{
	width:2rem;
	height:2rem;
	margin-top: 0.2rem;
}
.zfxq>section>.fenxiang>div>div>p{
	font-size: 1.2rem;
	color: #989898;
	margin-top: 0.2rem;
}
.zfxq>section>.jies{
	width: 90%;
	padding:0 5%;
	display: flex;
	padding: 1.2rem 0;
	border-bottom: 1px solid #E4E4E4;
}
.zfxq>section>.jies>div{
	width: 33.33%;
	border-right: 1px solid #E4E4E4;
	font-size: 1.5rem;
	text-align: center;
}
.zfxq>section>.jies>div:last-child{
	border-right:0;
}
.zfxq>section>.jies>div>p{
	color: #ff8a00;
	margin-top: 0.3rem;
}
.zfxq>section>.huxing{
	width: 90%;
	padding: 0 5%;
	border-bottom: 1px solid #E9E9E9;
}
.zfxq>section>.huxing>div{
	padding: 1.2rem 0;
	position: relative;
	border-bottom: 1px solid #E9E9E9;
	display: flex;
	font-size: 1.5rem;
}
.zfxq>section>.huxing>div:last-child{
	border-bottom: 0;
}
.zfxq>section>.huxing>div>p{
	width: 50%;
}
.zfxq>section>.huxing>div>p>span{
	color: rgb(145,145,145);
}
.zfxq>section>.fangping{
	width: 90%;
	margin: 1rem 5%;
	background: #fff;
}
.zfxq>section>.fangping>div{
	width: 100%;
	border: 1px solid #E4E4E4;
}
.zfxq>section>.fangping>div>p{
	font-size: 1.6rem;
	padding: 1.2rem 1.5rem;
	color:#ff8a00;
	border-bottom: 1px solid #E4E4E4;
}
.zfxq>section>.fangping>div>p>img{
	float: right;
	width: 1rem;
	height: 1.5rem;
	position: relative;
	top: 0.3rem;
}
.zfxq>section>.fangping>div>div{
	padding: 1.2rem 1.5rem;
	line-height: 2rem;
	font-size: 1.4rem;
	color: rgb(145,145,145);
}
.zfxq>section>.fangping>div>div>p>span{
	color:#ff8a00;
}
.zfxq>section>.lishi{
	width: 90%;
	margin: 1rem 5%;
	background: #fff;
}
.zfxq>section>.lishi>div{
	width: 100%;
	border: 1px solid #E4E4E4;
}
.zfxq>section>.lishi>div>p{
	font-size: 1.6rem;
	padding: 1.2rem 1.5rem;
	border-bottom: 1px solid #E4E4E4;
}
.zfxq>section>.lishi>div>p>img{
	float: right;
	width: 1rem;
	height: 1.5rem;
	position: relative;
	top: 0.3rem;
}
.zfxq>section>.lishi>div>div{
	padding: 1.2rem 1.5rem;
	line-height: 2rem;
	font-size: 1.4rem;
	color: rgb(145,145,145);
}
.zfxq>section>.lishi>div>div>p:first-child{
	padding-bottom: 1rem;
}
.zfxq>section>.lishi>div>div>p>span{
	color:#ff8a00;
}
.zfxq>section>.liand{
	width: 90%;
	padding: 1rem 5%;
	box-shadow: 0 0 5px rgb(160,160,160);
	display: flex;
	background: #fff;
}
.zfxq>section>.liand>div{
	font-size: 1.6rem;
	width: 20%;
}
.zfxq>section>.liand>div>img{
	width: 5rem;
	height: 5rem;
}
.zfxq>section>.liand>div>p>img{
	width: 3.6rem;
	height: 3.6rem;
}
.zfxq>section>.liand>div:nth-child(2){
	padding-top: 0.4rem;
	padding-left: 3%;
	width:55%;	
}
.zfxq>section>.liand>div>div{
	padding-top: 0.5rem;
	color: rgb(145,145,145);
}
.zfxq>section>.liand>div>span{
	font-size: 1.2rem;
}
.zfxq>section>.liand>div:nth-child(n+3){
	text-align: center;
}
.zfxq>section>.liand>div:nth-child(3)>span{
	color: #5BCA95;
}
.zfxq>section>.liand>div:nth-child(4)>span{
	color: #5DAEDF;
}
</style>
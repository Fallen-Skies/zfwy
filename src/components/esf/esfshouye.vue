<template>
	<div class="esf">
		<header>
  		<router-link to="/zhuye" class="logo"><img src="../../assets/logo.png"/></router-link>
  		<router-link to="" tag="span">北京 <img src="../../assets/xiala.png"/></router-link>
  		<div>
  			<router-link to=""><img src="../../assets/appxia.png" /></router-link>
  			<router-link to="/denglu"><img src="../../assets/wode.png"/></router-link>
  		</div>		
  	 	</header>
		<section>
			<!--二手房搜索-->
			<div class="sousuo">
				<div>
					<input type="text" name="" id="" value="" placeholder="请输入小区或商圈名称" />
					<div><img src="../../assets/esousuo.png"/></div>
				</div>
			</div>
			<!--功能区-->
			<div class="gongneng">
				<router-link to="/quyu">区域<span>▼</span></router-link>
				<router-link to="/jiage">价格 <span>▼</span></router-link>
				<router-link to="/fangxing">房型 <span>▼</span></router-link>
				<router-link to="/gengduo">更多 <span>▼</span></router-link>
			</div>
			<router-view class="keng"></router-view>
			<!--房源内容-->
  		 	<router-link to="/esfxiangqing" tag="div" class="fang-n">
  		 	<div>
  		 		<img src="../../assets/center-1.png"/>
  		 		<div>
  		 			<div>西便门外大街 2室1厅 89平</div>
  		 			<div>南北 高楼层/6层 </div>
  		 			<p>签约价格：13244元/平 <span>1105万</span></p>
  		 			<p>签约日期：2015年11月10日</p>
  		 		</div>
  		 	</div>
  		 	</router-link>
  		 	<!--房源内容-->
  		 	<router-link to="/esfxiangqing" tag="div" class="fang-n">
  		 	<div>
  		 		<img src="../../assets/center-2.png"/>
  		 		<div>
  		 			<div>金桥国际 2室1厅 89平</div>
  		 			<div>南北 高楼层/6层 </div>
  		 			<p>签约价格：13244元/平 <span>905万</span></p>
  		 			<p>签约日期：2015年11月10日</p>
  		 		</div>
  		 	</div>
  		 	</router-link>
  		 	<!--房源内容-->
  		 	<router-link to="/esfxiangqing" tag="div" class="fang-n">
  		 	<div>
  		 		<img src="../../assets/center-3.png"/>
  		 		<div>
  		 			<div>花涧溪二期 2室2厅 90平</div>
  		 			<div>南北 高楼层/6层 </div>
  		 			<p>签约价格：13244元/平 <span>1322万</span></p>
  		 			<p>签约日期：2015年11月10日</p>
  		 		</div>
  		 	</div>
  		 	</router-link>
		</section>
	<footer>
  		<div>北京找房无忧网 <span>></span> 首页</div>
  		<!--客户端-->
  		<div class="khd">
  			<div>
  				<img src="../../assets/iphone.png"/>
  				<div>
  				    <p>iphone</p>
  				    <p>客户端</p>
  				</div>
  			</div>
  			<div>
  				<img src="../../assets/Android.png"/>
  				<div>
  					<p>Android</p>
  				  <p>客户端</p>
  				</div>
  			</div>
  		</div>
  		<div>
  			<p>北京找房无忧房地产经纪有限公司</p>
  			<p>网络经营许可证 京ICP备20160812号-12</p>
  		</div>
  	</footer>
	</div>
	
</template>

<script>
</script>

<style>
.esf{
 	width: 100%;
 }
.esf>header{
	width: 100%;
	height: 5rem;
	line-height: 5rem;
	background: #ff8a00;
}
.esf>header>.logo>img{
	height: 2rem;
	width: 5.6rem;
	position: relative;
	top: 0.6rem;
	margin-left: 1.5rem;
}
.esf>header>span{
	padding-left: 1.8rem;
	font-size: 1.4rem;
	color: #fff;
}
.esf>header>span>img{
	width: 1rem;
	height: 0.5rem;
}
.esf>header>div{
	height: 5rem;
	float: right;
}
.esf>header>div>a{
	display: inline-block;
	height: 5rem;
	float: right;
	margin-right: 1.5rem;
}
.esf>header>div>a>img{
	 width: 3rem;
	 height: 3.6rem;
	 padding-top: 0.7rem;
}
 .esf>section{
 	width: 100%;
 }
 .esf>section>.sousuo{
 	width: 100%;
 	background:#F5F5F5;
 	padding: 1rem 0;
 }
 .esf>section>.sousuo>div{
 	width: 90%;
 	border: 1px solid #D8D8D8;
 	background: #fff;
 	margin: 0 5%;
 	display: flex;
 	padding: 0.5rem 0;
 	border-radius: 3px;
 }
 .esf>section>.sousuo>div>input{
  	height:3.2rem;
  	font-size: 1.4rem;
  	color: #9A9A9A;
  	border: 0;
  	padding-left:2%;
  	width: 85%;
}
.esf>section>.sousuo>div>div{
  	width: 15%;
  	text-align: center;
  	margin: 0.4rem 0;
  	border-left: 1px dashed #E6E6E6;
  	height: 2.4rem;
}
.esf>section>.sousuo>div>div>img{
  	height: 1.8rem;
  	width: 1.8rem;
  	position: relative;
  	top: 0.3rem;
}
.esf>section>.gongneng{
   	padding: 1.2rem 0;
   	border-bottom: 1px solid #E6E6E6;
   	border-top: 1px solid #E6E6E6;
   	display: flex;
}
.esf>section>.gongneng>a{
   	width: 25%;
   	text-decoration: none;
   	color: black;
   	display: inline-block;
   	text-align: center;
   	font-size: 1.5rem;
}
.esf>section>.gongneng>a>span{
   	font-size: 0.8rem;
   	font-family: "黑体";
   	color: #CCCCCC;
}
.esf>section>.gongneng>.router-link-active{
	color:#ff8a00;
}
.esf>section>.keng{
	position: absolute;
	background: #fff;
	box-shadow: 0 2px 2px rgb(200,200,200);
	z-index: 1;
}
.esf>section>.fang-n{
	width: 100%;
	position: relative;
}
 .esf>section>.fang-n>div{
	margin: 1.5rem;
	padding-bottom:1.5rem;
	border-bottom:0.1rem solid #FF8A00 ;
	display: flex;
}
 .esf>section>.fang-n>div>img{
	width:10rem;
	padding-right:1rem;
	height: 10rem;
}
.esf>section>.fang-n>div>div{
	width:66%;
}
 .esf>section>.fang-n>div>div>div:first-child{
	font-size: 1.8rem;
	color: #313131;
}
 .esf>section>.fang-n>div>div>div:nth-child(2){
	margin: 0.6rem 0;
	font-size: 1.4rem;
}
 .esf>section>.fang-n>div>div>p{
		font-size: 1.4rem;
	color: rgb(145,145,145);
}
 .esf>section>.fang-n>div>div>p:nth-child(3)>span{
	float: right;
	color: #ff8a00;
	font-size: 1.5rem;
}
 .esf>section>.fang-n>div>div>p:last-child{
	margin-top: 0.9rem;
}
.esf>footer{
	width: 100%;
	padding: 2rem 0;
	background: #2F3130;
}
.esf>footer>div:first-child{
	margin: 0 2.5%;
	padding: 0 0 1rem 0;
	color:#949695 ;
	font-size: 1.5rem;
	border-bottom:1px solid #6B6D6C;
}
.esf>footer>div:first-child>span{
	font-family: "黑体";
	font-size: 1.2rem;
}
.esf>footer>.khd{
	padding: 1.5rem 0;
	width: 60%;
	margin: 0 20%;
	display: flex;
}
.esf>footer>.khd>div{
	width: 50%;
	display: flex;
	color: #6B6D6C;
}
.esf>footer>.khd>div>img{
	width: 2.3rem;
	margin-right: 1rem;
	height: 3rem;
}
.esf>footer>.khd>div>div>p{
	margin-bottom: 0.1rem;
	font-size: 1.4rem;
}
.esf>footer>div:last-child{
	text-align: center;
	font-size: 1.4rem;
	color: #6B6D6C;
}
.esf>footer>div>p:last-child{
	font-size: 0.75rem;
	margin-top: 0.5rem;
}
</style>
<template>
	<div class="shouye">
		<header>
  		<router-link to="/zhuye" class="logo"><img src="../../assets/slogo.png"/></router-link>
  		<div>
  			<router-link to=""><img src="../../assets/appxia.png" /></router-link>
  			<router-link to="/denglu"><img src="../../assets/wode.png"/></router-link>
  		</div>		
  	 </header>
		<section>
  		 <div class="sousuo">
  		 	<img src="../../assets/banner.png"/>
  		 <div><img src="../../assets/sousuo.png"/><input type="text"  placeholder="输入小区或商圈名开始找房咯 ！"/></div>	
  		 </div>
  		 <!--功能区分类-->
  		 <div class="feilei">
  		 	<router-link to="/esfshouye" tag="div">
  		 		  <img src="../../assets/ert.png"/>
  		 		  <p>二手房</p>
  		 	</router-link>
  		 	<router-link to="" tag="div">
  		 			<img src="../../assets/xint.png"/>
  		 		  <p>新房</p>
  		 	</router-link>
  		 	<router-link to="/zufang" tag="div">
  		 			<img src="../../assets/zhut.png"/>
  		 		  <p>租房</p>
  		 	</router-link>
  		 	<router-link to="" tag="div">
  		 			<img src="../../assets/maif.png"/>
  		 		  <p>卖房</p>
  		 	</router-link>
  		 </div>
  		 <!--热门房源-->
  		 <div class="fayuan">
  		 	<img src="../../assets/banner2.png"/>
  		 	<div class="remen">
  		 		<div>
  		 			<div>热门房源</div>
  		 			<p>Hot house</p>
  		 		</div>
  		 	</div>
  		 	<!--房源内容-->
  		 	<div class="fang-n">
  		 	<div>
  		 		<img src="../../assets/img1.png"/>
  		 		<div>
  		 			<h3>文化部最T中间层 一层带..</h3>
  		 			<div>2室1厅 96㎡ 南北 <b>1105万</b></div>
  		 			<p>红庙北里 <span>14268元/平</span></p>
  		 			<p><span>学区房</span><span>独家</span></p>
  		 		</div>
  		 	</div>
  		 	</div>
  		 		<!--房源内容-->
  		 	<div class="fang-n">
  		 	<div>
  		 		<img src="../../assets/img2.png"/>
  		 		<div>
  		 			<h3>光大水墨 精装复式 稀缺..</h3>
  		 			<div>2室1厅 96㎡ 南北 <b>280万</b></div>
  		 			<p>光大水墨 <span>14268元/平</span></p>
  		 			<p><span>学区房</span><span>独家</span><span>满五唯一</span></p>
  		 		</div>
  		 	</div>
  		 	</div>
  		 	<!--房源内容-->
  		 	<div class="fang-n">
  		 	<div style="border: 0;">
  		 		<img src="../../assets/img3.png"/>
  		 		<div>
  		 			<h3>南北通透两居 精装修 无..</h3>
  		 			<div>2室1厅 96㎡ 南北 <b>320万</b></div>
  		 			<p>北京新天地 <span>14268元/平</span></p>
  		 			<p><span>地铁房</span><span>独家</span></p>
  		 		</div>
  		 	</div>
  		 	</div>
  		 </div>
  		 <!--分割线-->
  		 <div style="height: 0.6rem; border-bottom: 1px solid rgb(230,230,230);border-top: 1px solid rgb(230,230,230);background: rgb(244,244,244);"></div>
  		<!--热门关注-->
  		<div class="guanzhu">
  				<!--<div>热门关注</div>
  				<div>友情链接</div>-->
  			<router-link to="/rmgz"  tag="div">热门关注</router-link>
  			<router-link to="/yqlj"  tag="div">友情链接</router-link>
  		</div>
  		  <router-view></router-view>
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
  	<div class="xiazai" id="xiazai">
  		<div>
  			<img src="../../assets/guanbi.png" id="img"/>
  			<div>
  			<img src="../../assets/download.png"/>
  			<div>
  				<span>找房无忧</span>
  				<p>市场行情，一手掌握</p>
  			</div>
  			</div>
  		</div>
  		<router-link to="">免费下载</router-link>
  	</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
.shouye>header{
	width: 100%;
	height: 5rem;
	background: #ff8a00;
}
.shouye>header>.logo>img{
	height: 3.2rem;
	width: 10.6rem;
	position: relative;
	top: 0.9rem;
	margin-left: 1.5rem;
}
.shouye>header>div{
	height: 5rem;
	float: right;
}
.shouye>header>div>a{
	display: inline-block;
	height: 5rem;
	float: right;
	margin-right: 1.5rem;
}
.shouye>header>div>a>img{
	 width: 3rem;
	 height: 3.6rem;
	 padding-top: 0.7rem;
}
.shouye>section{
	width: 100%;
}
.shouye>section>.sousuo{
	width: 100%;
	position: relative;
}
.shouye>section>.sousuo>img{
	width: 100%;
}
.shouye>section>.sousuo>div{
	position: absolute;
	width: 84%;
	bottom: 1rem;
	border-radius:0.3rem;
	border: 1px solid silver;
	box-shadow: 0 0 2rem silver;
	background: #fff;
	height: 2.68rem;
	padding: 0.5rem 0;
	margin: 0 8%;
	display: flex;
}
.shouye>section>.sousuo>div>img{
	width: 1.5rem;
	height: 1.5rem;
	position: relative;
	top:0.5rem;
	left: 0.5rem;
}
.shouye>section>.sousuo>div>input{
	width: 89%;
	margin: 0 0 0 3.5%;
	border: 0;
	height: 2.6rem;
	font-size: 1.2rem;
	color: #555;
}
.shouye>section>.feilei{
	width: 100%;
	display: flex;
	padding: 1.5rem 0;
	position: relative;
	background:#ff8a00;
}
.shouye>section>.feilei>div{
	width: 25%;
	text-align: center;
	color: #fff;
	font-size: 1.4rem;
}
.shouye>section>.feilei>div>img{
	width: 5rem;
	height: 5rem;
}
.shouye>section>.fayuan{
	width: 100%;
	position: relative;
}
.shouye>section>.fayuan>img{
	width: 100%;
	border-top: 1rem solid rgb(247,247,247);
	margin-bottom: 1rem;
}
.shouye>section>.fayuan>.remen{
	width: 100%;
}
.shouye>section>.fayuan>.remen>div{
	background: #ff8a00;
	padding: 0.6rem 0;
	color: #fff;
	padding-left: 1.5rem;
	font-size: 1.8rem;
}
.shouye>section>.fayuan>.remen>div>p{
	font-size: 0.875rem;
}
.shouye>section>.fayuan>.fang-n{
	width: 100%;
	position: relative;
}
.shouye>section>.fayuan>.fang-n>div{
	margin: 1.5rem;
	padding-bottom:1.5rem;
	border-bottom:0.1rem solid #FF8A00 ;
	display: flex;
}
.shouye>section>.fayuan>.fang-n>div>img{
	width:10rem;
	padding-right:1rem;
	height: 10rem;
}
.shouye>section>.fayuan>.fang-n>div>div>h3{
	font-size: 1.8rem;
	color: #313131;
}
.shouye>section>.fayuan>.fang-n>div>div>div{
	margin: 0.6rem 0;
	font-size: 1.4rem;
}
.shouye>section>.fayuan>.fang-n>div>div>div>b{
	float: right;
	color: #ff8a00;
	font-size: 1.5rem;
}
.shouye>section>.fayuan>.fang-n>div>div>p{
		font-size: 1.4rem;
	color: rgb(145,145,145);
}
.shouye>section>.fayuan>.fang-n>div>div>p:nth-child(3)>span{
	float: right;
}
.shouye>section>.fayuan>.fang-n>div>div>p:last-child{
	margin-top: 0.9rem;
}
.shouye>section>.fayuan>.fang-n>div>div>p:last-child>span{
	padding: 0.3rem 0.4rem;
	background:#F4F6F9 ;
	color: #99ABB5;
	font-size: 1.4rem;
	margin-right: 0.5rem;
}
.shouye>section>.guanzhu{
	display: flex;
	border-bottom: 1px solid #FF8A00;
	color: #888;
}
.shouye>section>.guanzhu>div{
	padding: 1.5rem;
	width: 50%;
	display: inline-block;
	text-decoration: none;
	text-align: center;
	font-size: 1.8rem;
}
.shouye>section>.guanzhu>.router-link-active{
	border-bottom: 0.1rem solid #FF8A00;
	color: #FF8A00;
}
.shouye>section>.fayuan>.fang-n{
	width: 100%;
	position: relative;
}
.shouye>section>.fayuan>.fang-n>div{
	margin: 1.5rem;
	padding-bottom:1.5rem;
	border-bottom:0.1rem solid #FF8A00 ;
	display: flex;
}
.shouye>section>.fayuan>.fang-n>div>img{
	width:10rem;
	padding-right:1rem;
	height: 10rem;
}
.shouye>section>.fayuan>.fang-n>div>div>h3{
	font-size: 1.8rem;
	color: #313131;
}
.shouye>section>.fayuan>.fang-n>div>div>div{
	margin: 0.6rem 0;
	font-size: 1.4rem;
}
.shouye>section>.fayuan>.fang-n>div>div>div>b{
	float: right;
	color: #ff8a00;
	font-size: 1.5rem;
}
.shouye>section>.fayuan>.fang-n>div>div>p{
		font-size: 1.4rem;
	color: rgb(145,145,145);
}
.shouye>section>.fayuan>.fang-n>div>div>p:nth-child(3)>span{
	float: right;
}
.shouye>section>.fayuan>.fang-n>div>div>p:last-child{
	margin-top: 0.9rem;
}
.shouye>section>.fayuan>.fang-n>div>div>p:last-child>span{
	padding: 0.3rem 0.4rem;
	background:#F4F6F9 ;
	color: #99ABB5;
	font-size: 1.4rem;
	margin-right: 0.5rem;
}
.shouye>footer{
	width: 100%;
	padding: 2rem 0;
	background: #2F3130;
}
.shouye>footer>div:first-child{
	margin: 0 2.5%;
	padding: 0 0 1rem 0;
	color:#949695 ;
	font-size: 1.5rem;
	border-bottom:1px solid #6B6D6C;
}
.shouye>footer>div:first-child>span{
	font-family: "黑体";
	font-size: 1.2rem;
}
.shouye>footer>.khd{
	padding: 1.5rem 0;
	width: 60%;
	margin: 0 20%;
	display: flex;
}
.shouye>footer>.khd>div{
	width: 50%;
	display: flex;
	color: #6B6D6C;
}
.shouye>footer>.khd>div>img{
	width: 2.3rem;
	margin-right: 1rem;
	height: 3rem;
}
.shouye>footer>.khd>div>div>p{
	margin-bottom: 0.1rem;
	font-size: 1.4rem;
}
.shouye>footer>div:last-child{
	text-align: center;
	font-size: 1.4rem;
	color: #6B6D6C;
}
.shouye>footer>div>p:last-child{
	font-size: 0.75rem;
	margin-top: 0.5rem;
}
.shouye>.xiazai{
	width: 100%;
	position: fixed;
	display: flex;
	bottom: 0px;
	z-index: 999;
	background: rgba(0,0,0,.7);
}
.shouye>.xiazai>div{
	width: 65%;
	position: relative;
}
.shouye>.xiazai>div>img{
	float: left;
	width: 1.9rem;
	height: 2rem;
}
.shouye>.xiazai>div>div{
	display: flex;
	font-size: 1.5rem;
	color: #fff;
	padding: 1rem 0;
	padding-left: 3rem;
}
.shouye>.xiazai>div>div>img{
	width: 3.6rem;
	height: 3.6rem;
	padding-right:0.8rem;
}
.shouye>.xiazai>div>div>div>p{
	font-size: 1.2rem;
	padding-top: 0.2rem;
	color: #A0A0A0;
}
.shouye>.xiazai>a{
	width: 35%;
	text-align: center;
	font-size: 1.8rem;
	padding: 1.6rem 0;
	color: #fff;
	text-decoration: none;
	background: #FF8A00;
}
/*热门关注和友情链接的子组件css样式*/
.rmgz{
	width: 100%;
	padding: 1.5rem 0;
	font-size: 1.5rem;
}
.rmgz>ul:after{
	visibility:hidden;
	display:block;
	font-size:0;content: " ";
	clear:both;height:0;
}
.rmgz>ul{
	list-style: none;
	width: 100%;
}
.rmgz>ul>li{
	width: 40%;
	padding-left: 10%;
	line-height: 3.2rem;
	float: left;
	color: #848484;
}
</style>
<template>
  <div id="app">
  	<router-view></router-view>
  </div>
</template>

<script>
	import zhuye from './components/shouye/zhuye.vue'
		export default{
			components:{
				zhuye,
			}
		}
</script>

<style>
*{
	padding: 0;
	margin: 0;
	outline: none;
}
#app{
  width: 100%;
}
header{
	position: fixed;
	top: 0px;
	z-index: 999;
}
section{
	padding-top: 5rem;
}
</style>

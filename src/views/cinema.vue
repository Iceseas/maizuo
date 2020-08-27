<template>
<div class="cinema-box">
	<div class="cinema-headers">
		<ul class="cinema-headers-ul">
			<li @click="tochangeCity()" class="cinema-headers-ul-li city yahei-font">{{cinemacity}} <i style="font-size:12px" class="iconfont icon-duduyinleappicon1401"></i> </li>
			<li class="cinema-headers-ul-li cinemaBT yahei-font">影院</li>
			<li class="cinema-headers-ul-li cinemaSearch yahei-font">搜索</li>
		</ul>
	</div>
	<div class="cinema-headers-selects">
		<ul class="cinema-headers-selects-ul">
			<li class="cinema-headers-selects-ul-li yahei-font">全城</li>
			<li class="cinema-headers-selects-ul-li yahei-font">APP订票</li>
			<li class="cinema-headers-selects-ul-li yahei-font">最近去过</li>
		</ul>
	</div>
<div class="cinemas-scroll" :style="{height:sreenheight}"> 
	<ul class="cinemas-ul">
		<li class="cinemas-ul-li" v-for="data in $store.state.CinemaData" :key="data.cinemaId">
		<p class="cinemas-name yahei-font">{{data.name}}</p>
		<p class="cinemas-address font-grow yahei-font">{{data.address}}</p>
		<span class="cinemas-lowPrice yahei-font">¥ {{data.lowPrice | lowpriceFilter}} 起</span>
		</li>
	</ul>
</div>
</div>
</template>

<script>
import Vue from 'vue'



Vue.filter('lowpriceFilter',(data)=>{
    return data/100;
})

export default {
	data() {
		return {
			cinemas:[],
			sreenheight:'0px',
			cinemacity:this.$store.state.cityname,
		}
	},
	mounted(){
		this.sreenheight = document.documentElement.clientHeight - 140 +'px';
		this.$store.commit('getVuethis',this);
		this.$store.dispatch('GetCinemas')	
	},
	methods:{
		tochangeCity(){
			this.$router.push('/city');
		}
	}
}
</script>
<style lang="scss" scope >
.cinema-box{
	background: #fff;
}
.cinemas-ul{
	.cinemas-ul-li{
		height: 60px;
		width: 100%;
		padding: 0 20px;
		border-bottom: 1px solid #eee;
		position: relative;
		line-height: 20px;
	}
}
.cinemas-scroll{
	overflow: hidden;
	position: relative;
}
.cinema-headers,.cinema-headers-selects{
	height: 40px;
	width: 100%;

	.cinema-headers-ul,.cinema-headers-selects-ul{
		width: 100%;
		display: flex;
		.cinema-headers-ul-li,.cinema-headers-selects-ul-li{
			flex: 1;
			height: 100%;
			list-style: none;
			line-height: 40px;
			box-sizing: border-box;
		}
	}
}
.city{
	text-align: left;
}
.cinemaBT,.cinema-headers-selects-ul-li{
	text-align: center
}
.cinemaSearch{
	text-align: right;
}
.city,.cinemaSearch{
	padding: 0 20px;
}
.cinemas-address{
	font-size: 12px;
	width: 230px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	height: 18px;;
}
.cinemas-name{
	font-size: 14px;
}
.cinemas-lowPrice{
	position: absolute;
	right: 70px;
	top: 5px;
	font-size: 14px;
	color: #ffa502;
}
</style>
	

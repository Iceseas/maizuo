<template>
<div>
	<div class="cinema-headers">
		<ul class="cinema-headers-ul">
			<li class="cinema-headers-ul-li city">北京</li>
			<li class="cinema-headers-ul-li cinemaBT">影院</li>
			<li class="cinema-headers-ul-li cinemaSearch">搜索</li>
		</ul>
	</div>
	<div class="cinema-headers-selects">
		<ul class="cinema-headers-selects-ul">
			<li class="cinema-headers-selects-ul-li">全城</li>
			<li class="cinema-headers-selects-ul-li">APP订票</li>
			<li class="cinema-headers-selects-ul-li">最近去过</li>
		</ul>
	</div>
<div class="cinemas-scroll" :style="{height:sreenheight}"> 
	<ul class="cinemas-ul">
		<li class="cinemas-ul-li" v-for="data in cinemas" :key="data.cinemaId">
		<p class="cinemas-name">{{data.name}}</p>
		<p class="cinemas-address font-grow">{{data.address}}</p>
		<span class="cinemas-lowPrice">¥ {{data.lowPrice | lowpriceFilter}} 起</span>
		</li>
	</ul>
</div>
</div>
</template>

<script>
import axios from 'axios'
import BScroll from '@better-scroll/core'
import ScrollBar from '@better-scroll/scroll-bar'
import Vue from 'vue'

BScroll.use(ScrollBar);

Vue.filter('lowpriceFilter',(data)=>{
    return data/100;
})

export default {
	data() {
		return {
			cinemas:[],
			sreenheight:'0px'
		}
	},
	mounted(){
		this.sreenheight = document.documentElement.clientHeight - 140 +'px';
		axios({
			url:'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1573618',
			methods: 'get',
			headers:{
				'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15656848532164663517222"}',
				'X-Host': 'mall.film-ticket.cinema.list'
			}
		}).then((res)=>{
			console.log(res.data.data.cinemas)
			this.cinemas = res.data.data.cinemas;
			this.$nextTick(()=>{
		new BScroll('.cinemas-scroll',{
			scrollY: true,
			scrollbar: true,
		});
	})
		})
	}
}
</script>
<style lang="scss" scope >
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
	

<template>
<div class="flim-box-swiper">
	<div class="choosecity" @click="selectcity()">
		<p class="choosecity-cityname yahei-font">大连</p>&nbsp;<i class="iconfont icon-jiantou-copy city-i"></i>
	</div>
	<Swiper :key="jsons.length">
		<div class="swiper-slide" v-for="data in jsons" :key="data.id" >
		<img class="swiper-slide-img" :src="data.imgUrl" alt="">
	</div>
	</Swiper>
</div>
</template>

<script>
	import Swiper from '@/components/SwiperCommon'
	import axios from 'axios'
	export default {
		data(){
        return {
            jsons:[]
        }
    },
		mounted() {
        axios({
		url: 'https://m.maizuo.com/gateway?type=2&cityId=210200&k=9912477',
		methods: 'get',
		headers: {
			'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15656848532164663517222"}',
			'X-Host': 'mall.cfg.common-banner'
			}
		}).then((res) => {	
		this.jsons = res.data.data
	}).catch((err)=>{
		console.log(err);
	});
	},
	components:{
		Swiper
	},
	methods:{
		selectcity(){
			this.$router.push('/city');
		}
	}
}
</script>

<style>
.swiper-container{
	width: 100%;
	height: 100%;
}
.swiper-slide-img{
	width: 100%;
}
.flim-box-swiper{
    /* height: 210px; */
    width: 100%;
	position: relative;
}
.choosecity{
	position: absolute;
	height: 25px;
	background: #eee;
	z-index: 99;
	top: 20px;
	left: 10px;
	padding: 0 5px;
	box-sizing: border-box;
	border-radius: 8px;
	color: #fff;
	background: rgba(99, 110, 114,0.4);
	display: flex;
	text-align: center;
	line-height: 25px;
}
.city-i{
	font-size: 12px;
	flex-grow: 1;
	margin-left: 3px; 
}
.choosecity-cityname{
	font-size: 12px;
	flex-grow: 1;
}
.swiper-pagination-bullet{
    background: #fff;
    opacity: 0.5;
}
.swiper-pagination-bullet-active{
    background: #fff;
    opacity: 1;
}
</style>

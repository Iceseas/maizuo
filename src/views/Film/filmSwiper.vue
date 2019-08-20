<template>
<div class="flim-box-swiper">
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

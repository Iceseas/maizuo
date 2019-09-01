<template>
<div class="flim-box-swiper">
	<div class="choosecity" @click="selectcity()">
		<p class="choosecity-cityname yahei-font">{{cityoutname}}</p>&nbsp;<i class="iconfont icon-jiantou-copy city-i"></i>
	</div>
	<Swiper :key="$store.state.bannersData.length">
		<div class="swiper-slide" v-for="data in $store.state.bannersData" :key="data.id" >
		<img class="swiper-slide-img" @click="checkDetail(data.actionData)" :src="data.imgUrl" alt="">
	</div>
	</Swiper>
</div>
</template>

<script>
	import Swiper from '@/components/SwiperCommon'
	export default {
	data(){
        return {
			cityoutname:this.$store.state.cityname,
        }
    },
	mounted() {
		this.$store.dispatch('GetBanners');
	},
	components:{
		Swiper
	},
	methods:{
		selectcity(){
			this.$router.push('/city');
		},
		checkDetail(id){
			//跳转路由，编程式导航
			
			let bannerfilmID = JSON.parse(id)
			this.$router.push(`/detail/${bannerfilmID.businessId}`);
		},
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

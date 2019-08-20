<template>
	<div class="swiper-container filmDetailph" >
    <div class="swiper-wrapper">
        <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
</template>

<script>
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.css'


	export default {
		mounted(){
			new Swiper ('.filmDetailph', {
				// loop:true,
				// 如果需要分页器
				// pagination: {
				// el: '.swiper-pagination',
                // },
                freeMode : true,
                slidesPerView: 2,
                spaceBetween : 10,
			})        
    }
}
</script>
<style>
.swiper-container{
	width: 100%;
}
</style>
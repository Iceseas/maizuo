<template>
    <div>
    <filmeswiper ref="filmSwiper"></filmeswiper>
    <filmHeadNav :class="isFixed?'headfixed':''"></filmHeadNav>

    <div class="film-box-body">
    <router-view></router-view>
    </div>
    </div>
</template>
<script>
import filmeswiper from '@/views/Film/filmSwiper';
import filmHeadNav from '@/views/Film/nowPlaying/headNav'


export default {
    components:{
        filmeswiper,
        filmHeadNav
    },
    data() {
        return {
            isFixed:false
        }
    },
    mounted() {
        // window.addEventListener('scroll', this.handleScoll, true);
        window.onscroll = this.handleScoll;
    },
    methods: {
        handleScoll(){
            let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
            // console.log("top:"+ top);
            // console.log('height'+this.$refs.filmSwiper.$el.offsetHeight)
            if(top > this.$refs.filmSwiper.$el.offsetHeight)
            {
                this.isFixed = true;
                // console.log('fixed')
            }
            else{
                this.isFixed = false;
                // console.log('unfixed')
            }
        }
    },
    destroyed() {
       window.onscroll = null; 
    },
   
}
</script>
<style scope >
.film-box-body{
    width: 100%;
    margin-bottom: 4rem;
}
.presalebtn{
	width: 50px;
	height: 28px;
	text-align: center;
	line-height: 28px;
	background: none;
	outline: none;
	border: 1px solid #ffa502;
	color: #ffa502;
	border-radius: 3px;
	font-size: 14px;
}
.headfixed{
    position: fixed;
    top: 0;
    background: #fff;
    width: 100%;
    height: 60px;
    z-index: 999;
}
.swiper-pagination{
    text-align: right;
    padding-right: 20px;
    box-sizing: border-box; 
}
</style>
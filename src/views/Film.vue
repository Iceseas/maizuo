<template>
    <div>
        <div class="chooseCity" @click="gotoChooseCity">
            <!-- <i class="iconfont icon-green"></i> -->
            大连
        </div>
    <filmHeadNav :class="isFixed?'headfixed':''"></filmHeadNav>
    <div class="film-box-body">
    <router-view></router-view>
    </div>
    </div>
</template>
<script>
import filmHeadNav from '@/views/Film/nowPlaying/headNav'


export default {
    components:{
        filmHeadNav
    },
    data() {
        return {
            isFixed:false
        }
    },
    mounted() {
        window.onscroll = this.handleScoll;
    },
    methods: {
        handleScoll(){
            let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
            if(top > this.$refs.filmSwiper.$el.offsetHeight)
            {
                this.isFixed = true;
            }
            else{
                this.isFixed = false;
            }
        },
        gotoChooseCity() {
            this.$router.push('/city')
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
.chooseCity{
    position: fixed;
    color: #fff;
    width: 40px;
    border-radius: 6px;
    height: 20px !important;
    background: rgb(209, 209, 209);
    display: inline-block;
    text-align: center;
    line-height: 20px;
    left: 7px;
    top: 7px;
}
</style>
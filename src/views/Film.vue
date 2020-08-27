<template>
    <div>
        <div class="chooseCity" @click="gotoChooseCity">
            <!-- <i class="iconfont icon-green"></i> -->
            {{this.$store.state.cityname}}
        </div>
    <filmHeadNav class="headfixed"></filmHeadNav>
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
    },
    methods: {
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
    overflow: scroll;
    margin-bottom: 5rem;
    margin-top: 4.5rem;
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
    width: 100%;
    height: 60px;
    z-index: 2;
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
    left: 15px;
    top: 20px;
    z-index: 4;
    font-size: 12px;
}
</style>
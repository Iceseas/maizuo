<template>
    <div class="footNav-Box">
        <router-link to="/film" activeClass="active" class="footNav" >
        <span class="mid-position yahei-font">电影</span>
        <i class="iconfont icon-film mid-position"></i></router-link>
        <router-link to="/cinema" activeClass="active" class="footNav" >
        <span class="mid-position yahei-font">影院</span>
        <i class="iconfont icon-cinema mid-position"></i></router-link>
        <router-link to="/center" activeClass="active" class="footNav">
        <span class="mid-position yahei-font">我的</span>
        <i class="iconfont icon-my mid-position"></i></router-link>
    </div>
</template>
<style scope>
 .footNav{
     flex-grow: 1;
     display: block;
     text-align: center;
     line-height: 60px;
     text-decoration: none;
     font-size: 12px;
     position: relative;
     color: black;
 }
 .footNav i{
     top: 30%;
 }
.footNav span{
    top: 65%;
 }
 .footNav-Box{
    position: fixed;
     bottom: 0;
     left: 0;
     display: flex;
     width: 100%;
     height: 60px;
     border-top: 1px solid #eee;
     background: #fff;
 }
 .active{
     color: #ffa502;
 }
</style>
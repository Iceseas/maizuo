<template>
    <div class="detail-box" :key="details.length">
        <img @click="goBack()" class="go-back-btn" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC">
     <div class="detail-img">
         <img :src="details.poster" />
     </div>
     <div class="detail-synopsis">
         <p class="detail-synopsis-name yahei-font">{{details.name}}</p>
         <p class="detail-synopsis-category font-grow lh yahei-font">{{details.category}}</p>
         <p class="detail-synopsis-time font-grow lh yahei-font">上映</p>
         <p class="detail-synopsis-nation font-grow lh yahei-font">{{details.nation}} | {{details.runtime}} 分钟</p>
         <span class="detail-synopsis-grade yahei-font">
             {{details.grade}}
         </span>
         <div :class="outshowclass" >
             {{details.synopsis}}
         </div>
         <div :class="outspanclass"  @click="outshow()">
             <i class="iconfont icon-jiantou"></i></div>
         </div>
     <div class="detail-actorsImg">
         <div class="actorsLabel yahei-font">
             演职人员
         </div>
         <div class="actorsimg">
             <Swiper tag="ul" :key="details.length">
                 <li class="actorsimg-ul-li swiper-slide" v-for="(data,index) in details.actors" :key="index">
                     <img class="actorsimg-img" :src="data.avatarAddress" />
                     <p class="actorsimg-name yahei-font">{{data.name}}</p>
                     <p class="actorsimg-role font-grow yahei-font">{{data.role}}</p>
                 </li>
             </Swiper>
         </div>
     </div>
     <div class="detail-photos">
        <div class="actorsLabel yahei-font">
            剧照
        </div>
        <SwiperAuto tag="ul" :key="details.length" >
                <li class="detail-photos-ul-li swiper-slide" v-for="(data,index) in details.photos" :key="index">
                    <img class="detail-photos-photos" :src="data" />
                </li>
        </SwiperAuto>
     </div>
     <div class="detailBuy" v-show="$store.state.isDetailBuyShow">
           <a class="detailBuy-a yahei-font" href="javascript:;">选座购票</a>
    </div>
    </div>
</template>
<script>
import axios from 'axios'
import '@/filter/actorfilter.js'
import '@/filter/actorsimgfilter.js'
import '@/filter/actorsRolefilter.js'
import Swiper from '@/components/Swiper'
import SwiperAuto from '@/components/SwiperAuto'
import { Indicator } from 'mint-ui';

export default {
    data(){
        return {
            details:[],
            isShow:false,
            outshowclass:{
                "font-grow":true,
                "detailsynopsis":true,
                "detailsynopsisnew":false,
                },
            outspanclass:{
                "outshow":true
                },
            iconfont:{
                'iconfont':true,
                'iconJiantou':true,
                'iconArrowDown':false
            }
        }
    },
    mounted(){
        //设置底部导航隐藏
        this.$store.commit('FooNavHide',false)
        this.$store.commit('DetailNavShow',true)
        //根据路由得到点击的电影id
        //console.log(this.$route.params.filmid)
        Indicator.open({
		text: '加载中...',
		spinnerType: 'fading-circle'
		});
        axios({
            url:`https://m.maizuo.com/gateway?filmId=${this.$route.params.filmid}&k=7015510`,
            methods:'get',
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15656848532164663517222"}',
                'X-Host': 'mall.film-ticket.film.info'
            }
        }).then(res=>{
            console.log(res.data.data.film)
            this.details = res.data.data.film;
            Indicator.close();
        }).catch((err)=>{
            console.log(err);
        });
    },
    methods:{
        outshow(){
            this.outshowclass.detailsynopsis = this.isShow;
            this.outshowclass.detailsynopsisnew = !this.isShow;
            this.iconfont.IconArrowDown = !this.isShow;
            this.iconfont.IconJiantou = this.isShow;
            this.isShow = !this.isShow;
        },
        goBack(){
            this.$router.go(-1);
        }
    },
    components:{
        Swiper,
        SwiperAuto
    },
    beforeDestroy() {
        //离开时显示底部导航
        this.$store.commit('FooNavShow',true);
        this.$store.commit('DetailNavHide',false)
    },
}
</script>
<style scope>
.detail-img img{
    width: 100%;
}
.detail-synopsis{
    padding: 15px 15px;
    position: relative;
    min-height: 175px;
    background: #fff;
    
}
.detail-box{
    width: 100%;
    height: auto;
    position: fixed;
    bottom: 4rem;
    top: 0;
    background: #eee;
    overflow: auto;
    box-sizing: border-box;

}
.detail-synopsis-name{
    font-size: 20px;
}
.detail-synopsis-grade{
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 20px;
    color:#ff5f16;
}
.lh{
    margin-top: 7px;
}
.detailsynopsis{
    margin-top: 15px;
    line-height: 25px;
    height: 47px;
    overflow: hidden;
}
.outshow{
    width: 100%;
    text-align: center;
    color: gray;
    opacity: 0.5;
}
.go-back-btn{
    position: absolute;
    width: 30px;
    height: 30px;
    left: 7px;
    top: 7px;
}
.detailsynopsisnew{
    margin-top: 15px;
    line-height: 25px;
    height: auto;
    overflow: hidden;
}
.detail-actorsImg{
    height: 190px;
    background: #fff;
    margin-top: 10px;
}
.actorsimg-img{
    width: 80px;
    height: 100px;
    margin-left: 5px;
}
.actorsimg-name,.actorsimg-role{
    width: 90px;
    font-size: 10px;
    margin-left: 3px;
}
.actorsimg-img,.actorsimg-name,.actorsimg-role{
    text-align: center;
    
}
.actorsLabel{
    height: 50px;
    box-sizing: border-box;
    padding: 15px 15px;
    font-size: 20px;
}
.detail-photos{
    height: 190px;
    background: #fff;
    margin: 10px 0;
}
.detail-photos-photos{
     width: 100%;
     margin-left: 10px;
}
.detail-photos{
    overflow: hidden;
}
.detailBuy{
     position: fixed;
     bottom: 3px;
     left: 0;
     display: flex;
     width: 100%;
     height: 60px;
     border-top: 1px solid #eee;
     background: #ff5f16;
     text-align: center;
     line-height: 60px;
     z-index: 999;
}
.detailBuy-a{
    display: block;
    height: 100%;
    width: 100%;
    color: #fff;
    text-decoration: none;
    font-size: 16px;
}
.detailBuy-a:active{
    background: #fff;
    color: #ff5f16;
    border: 1px solid #ff5f16;
}
</style>
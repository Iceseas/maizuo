<template>
    <div class="cities-box" :style="{height:citiesHeight}">
    <div class="search-city">
        <div class="nowcity yahei-font">
        <div class="city-goback" @click="citygoback()"><i class="iconfont icon-jiantou3"></i></div>
        当前城市 - 
        </div>
        <div class="citysearch">
        <mt-search
        v-model="value"
        cancel-text="取消"
        placeholder="搜索">
        </mt-search>
        </div>
        <div class="hotcity">
            <div class="city-title font-grow">
                GPS定位你所在的城市
            </div>
            <div class="yourcity">
                <div class="city-point">大连</div>
            </div>
            <div class="city-title font-grow">
                热门城市
            </div>
            <div class="hotcity-list">
                <ul class="hotcity-list-ul">
                    <li class="hotcity-list-ul-li" >
                        <div class="city-point">北京</div>
                    </li>
                    <li class="hotcity-list-ul-li" >
                        <div class="city-point">天津</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <mt-index-list class="city-list">
        <mt-index-section :index="data.index" v-for="data in pinyinarr" :key="data.index">
        <mt-cell @click.native="showcityid(item.cityId,item.name)" class="yahei-font " :title="item.name" v-for="item in data.cities" :key="item.index">
        {{item.cities}}
        </mt-cell>
  </mt-index-section>
</mt-index-list>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import { IndexList, IndexSection } from 'mint-ui';
import { Indicator } from 'mint-ui';
import { Search } from 'mint-ui';
//import { constants } from 'crypto';

Vue.component(Search.name, Search);
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
export default {
    data() {
        return {
        pinyinarr:[],
        citiesHeight:'0px',
        value:'',
        isHot:[]    
        }
    },
    methods: {
        checkPinyin(list){
            let arr = [];
            let newarr = [];
            let newlist = [];
            for(var j = 65;j<91;j++){
                arr.push(String.fromCharCode(j))
            }
            for(let i = 0;i<arr.length;i++){
                newarr = list.filter((item)=>
                    item.pinyin.substring(0,1)===arr[i].toLowerCase()
                )
                //console.log(newarr);
                if(!newarr.length == 0)
                newlist.push({
                    index:arr[i],
                    cities:newarr
                })
            }
            console.log(newlist)
            for(let index = 0;index<list.length;index++){
                this.isHot = list.filter(item=>{item.isHot == 1})
            }
            
            this.pinyinarr = newlist;
            
        },
        citygoback(){
            this.$router.go(-1);
        },
        showcityid(id,name){
            this.$store.commit('changeCityID',id);
            this.$store.commit('changeCityName',name);
            this.$router.go(-1);
            this.$store.dispatch('GetNowPlayingDate')
        }
    },
    mounted() {
        
        this.$store.commit('FooNavHide',false)
        this.citiesHeight = document.documentElement.offsetHeight + 'px';
        Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
        axios({
            url:'https://m.maizuo.com/gateway?k=2871341',
            methods:'get',
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15656848532164663517222"}',
                'X-Host': 'mall.film-ticket.city.list'
            }
        }).then((res)=>{
            console.log(res.data)
            this.checkPinyin(res.data.data.cities);
            Indicator.close();
        })
    },
    beforeDestroy() {
        this.$store.commit('FooNavHide',true);
    },
}
</script>
<style lang="scss" scoped>
.mint-cell{
    padding: 0 15px;
    // border-bottom: 1px solid #eee;
    box-sizing: border-box;
}
.mint-cell:active{
    background: #eee;
}
.mint-cell-wrapper{
    font-size: 12px;
}
.mint-indexsection-index {
    margin: 0;
    padding: 15px;
    background-color: #fafafa;
}
.city-goback{
    width: 40px;
    left: 15px;
    position: absolute;
}
.nowcity{
    width: 100%;
    height: 40px;
    background: #fff;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    position: relative;
}
.search-city{
    height: 280px;
    width: 100%;
}
.citysearch{
    height: 52px;
    width: 100%;
    box-sizing: border-box;
}
.hotcity{
    height: 200px;
    width: 100%;
    box-sizing: border-box;
    padding-top: 5px;
    background: #fff;
}
.city-title{
    height: 15px;
    font-size: 12px;
    padding: 0 15px;
}
.yourcity{
    height: 50px;
    box-sizing: border-box;
    padding-left: 25px;
    padding-top: 10px;
}
.hotcity-list{
    height: 100px;
    box-sizing: border-box;
    padding-left: 20px;
    padding-top: 5px;
}
.city-point{
    width:100px;
    height: 30px;
    background: #eee;
    text-align: center;
    line-height: 30px;
    border-radius: 6px;
    box-sizing: border-box;
    font-size: 12px;
}
.city-point:active{
    background:  #fafafa;
}
.hotcity-list-ul-li{
    float: left;
    list-style: none;
    height: 30px;
    margin: 5px 5px;
}
.mint-search{
    height: 52px;
}
</style>
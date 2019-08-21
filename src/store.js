import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Indicator } from 'mint-ui';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isfilmfooNavShow: true,
        isDetailBuyShow: true,
        ComingSoonlistData: [],
        NowPlayinglistData: [],
    },
    mutations: {
        //显示底部导航
        FooNavShow(state, loop) {
            // console.log(state)这个是获取上面state里面的值
            // console.log(loop)这个是传过来的值
            state.isfilmfooNavShow = loop;
        },
        //隐藏底部导航
        FooNavHide(state, loop) {
            state.isfilmfooNavShow = loop;
        },
        DetailNavShow(state, loop) {
            state.isDetailBuyShow = loop;
        },
        DetailNavHide(state, loop) {
            state.isDetailBuyShow = loop;
        },
        cacheComingSoonlistAjax(state, loop) {
            state.ComingSoonlistData = loop;
        },
        cacheNowplayinglistAjax(state, loop) {
            state.NowPlayinglistData = loop;
        },

    },
    actions: {
        GetComingSoonDate(store) {
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=210200&pageNum=1&pageSize=10&type=2&k=9800611',
                methods: 'get',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15656848532164663517222"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then((res) => {
                store.commit('cacheComingSoonlistAjax', res.data.data.films);
                Indicator.close();
            });
        },
        GetNowPlayingDate(store) {
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=210200&pageNum=1&pageSize=10&type=1&k=9604590',
                methods: 'get',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15656848532164663517222"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then((res) => {
                store.commit('cacheNowplayinglistAjax', res.data.data.films);
                Indicator.close();
            });
        },
    }
})
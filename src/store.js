import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Indicator } from 'mint-ui';
import BScroll from '@better-scroll/core'
import ScrollBar from '@better-scroll/scroll-bar'


BScroll.use(ScrollBar);
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //获取头部轮播
        bannersData: [],
        //控制底部导航显示
        isfilmfooNavShow: true,
        isDetailBuyShow: true,
        //comingsoon组件数据
        ComingSoontotal: 0,
        ComingSoonlistData: [],
        ComingSoonAjaxNum: 1,
        ComingSoonisInfinite: false,
        ComingSoonDataGet: true,
        //nowplaying组件数据
        NowPlayingtotal: 0,
        NowPlayinglistData: [],
        NowPlayingAjaxNum: 1,
        NowPlayingisSameCity: false,
        ComingSoonisSameCity: false,
        NowPlayingisInfinite: false,
        NowPlayingDataGet: true,
        //城市的ID值
        cityID: 110100,
        cityname: '北京',
        //电影院的数据
        CinemaData: [],
        //vuethis的复制
        vuethis: null
    },
    mutations: {
        //显示底部导航
        FooNavShow(state, loop) {
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
        //缓存请求的数据
        cacheComingSoonlistAjax(state, loop) {
            //拼接新老数据
            if (state.ComingSoonisSameCity === true) {
                state.ComingSoonlistData = []
                state.ComingSoonAjaxNum = 1;
                state.ComingSoonisSameCity = false;
            }
            state.ComingSoonlistData = [...state.ComingSoonlistData, ...loop];
        },
        //缓存请求的数据
        cacheNowplayinglistAjax(state, loop) {
            //拼接新老数据
            if (state.NowPlayingisSameCity === true) {
                state.NowPlayinglistData = []
                state.NowPlayingAjaxNum = 1;
                state.NowPlayingisSameCity = false;
            }
            state.NowPlayinglistData = [...state.NowPlayinglistData, ...loop];

        },
        //改变请求的页数
        ComingSoonScrollDownchangeNum(state, loop) {
            state.ComingSoonAjaxNum = loop;
        },
        //判断是否开启无限滚轮
        ComingSoonInfinite(state, loop) {
            state.ComingSoonisInfinite = loop;
        },
        //改变请求的页数
        NowPlayingScrollDownchangeNum(state, loop) {
            state.NowPlayingAjaxNum = loop;
        },
        //判断是否开启无限滚轮
        NowPlayingInfinite(state, loop) {
            state.NowPlayingisInfinite = loop;
        },
        //改变cityid
        changeCityID(state, loop) {
            if (state.cityID === loop) {
                state.ComingSoonisSameCity = false;
                state.NowPlayingisSameCity = false;
            } else {
                state.ComingSoonisSameCity = true;
                state.NowPlayingisSameCity = false;
            }
            state.cityID = loop;
        },
        // 初次加载时初始化
        NowPlayingMounted(state, loop) {
            state.NowPlayingAjaxNum = loop;
            state.NowPlayingDataGet = true;
        },
        ComingSoonMounted(state, loop) {
            state.ComingSoonAjaxNum = loop;
            state.ComingSoonDataGet = true;
        },
        //改变显示的城市
        changeCityName(state, loop) {
            state.cityname = loop;
        },
        //获取vuethis
        getVuethis(state, loop) {
            state.vuethis = loop
        }
    },
    actions: {
        GetComingSoonDate(store) {
            if (store.state.ComingSoonAjaxNum === 1) {
                store.state.ComingSoonlistData = []
            }
            Indicator.open({
                text: '加载即将上映中',
                spinnerType: 'fading-circle'
            });
            axios({
                url: `https://m.maizuo.com/gateway?cityId=${store.state.cityID}&pageNum=${store.state.ComingSoonAjaxNum}&pageSize=10&type=2&k=9800611`,
                methods: 'get',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15656848532164663517222"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then((res) => {
                //判断是否请求完数据，如果请求完，禁用下拉请求数据事件
                if (res.data.data.films.length == 0) {
                    store.state.ComingSoonDataGet = false;
                }
                //调用方法处理数据
                store.commit('cacheComingSoonlistAjax', res.data.data.films);
                //已请求完数据，关闭等待动画
                Indicator.close();
                //请求完数据，开启滚轮
                store.state.ComingSoonisInfinite = false;
            });
        },
        GetNowPlayingDate(store) {
            if (store.state.NowPlayingAjaxNum === 1) {
                store.state.NowPlayinglistData = []
            }
            Indicator.open({
                text: '加载热映中',
                spinnerType: 'fading-circle'
            });
            axios({
                url: `https://m.maizuo.com/gateway?cityId=${store.state.cityID}&pageNum=${store.state.NowPlayingAjaxNum}&pageSize=10&type=1&k=9604590`,
                methods: 'get',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15656848532164663517222"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then((res) => {
                if (res.data.data.films.length == 0) {
                    store.state.NowPlayingDataGet = false;
                }
                //调用方法处理数据
                store.commit('cacheNowplayinglistAjax', res.data.data.films);
                //已请求完数据，关闭等待动画
                Indicator.close();
                //请求完数据，开启滚轮
                store.state.NowPlayingisInfinite = false;
            });
        },
        GetCinemas(store) {
            Indicator.open({
                text: '定位中',
                spinnerType: 'fading-circle'
            });
            axios({
                url: `https://m.maizuo.com/gateway?cityId=${store.state.cityID}&ticketFlag=1&k=1573618`,
                methods: 'get',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15656848532164663517222"}',
                    'X-Host': 'mall.film-ticket.cinema.list'
                }
            }).then((res) => {
                //console.log(res.data.data.cinemas)
                store.state.CinemaData = res.data.data.cinemas
                Indicator.close();
                store.state.vuethis.$nextTick(() => {
                    new BScroll('.cinemas-scroll', {
                        scrollY: true,
                        scrollbar: true,
                    });
                })

            })
        },
        GetBanners(store) {
            axios({
                url: `https://m.maizuo.com/gateway?type=2&cityId=${store.state.cityID}&k=9912477`,
                methods: 'get',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15656848532164663517222"}',
                    'X-Host': 'mall.cfg.common-banner'
                }
            }).then((res) => {
                store.state.bannersData = res.data.data
            }).catch((err) => {
                console.log(err);
            });
        }
    }
})
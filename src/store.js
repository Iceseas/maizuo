import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isfilmfooNavShow: true,
        isDetailBuyShow: true
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
        }
    },
    actions: {

    }
})
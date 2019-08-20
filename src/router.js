import Vue from 'vue'
import Router from 'vue-router'
import Film from './views/Film.vue'
import Cinema from './views/cinema.vue'
import Center from './views/center.vue'
import nowPlaying from './views/Film/nowPlaying.vue'
import comingSoon from './views/Film/comingSoon.vue'
import Detail from './views/Detail.vue'

Vue.use(Router) //注册路由模块

export default new Router({
    routes: [{
            path: '/film',
            component: Film,
            children: [{
                    path: 'nowPlaying',
                    component: nowPlaying
                },
                {
                    path: 'comingSoon',
                    component: comingSoon
                },
                {
                    path: '',
                    redirect: '/film/nowPlaying'
                }
            ]
        },
        {
            path: '/cinema',
            component: Cinema
        },
        {
            path: '/center',
            component: Center
        },
        {
            path: '/detail/:filmid',
            name: 'detail',
            component: Detail
        },
        {
            path: '*',
            redirect: '/film'
        },

    ]
})
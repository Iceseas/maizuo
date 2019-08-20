import Vue from 'vue'

Vue.filter("actorsimgfilter", (data) => {
    if (!data) {
        return '暂无图片'
    } else {
        return data.map(item => item.avatarAddress).join('')
    }
})
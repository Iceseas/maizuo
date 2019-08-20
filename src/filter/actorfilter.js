import Vue from 'vue'

Vue.filter("actorsFilter", (data) => {
    if (!data) {
        return '暂无主演'
    } else {
        return data.map(item => item.name).join(' ')
    }
})
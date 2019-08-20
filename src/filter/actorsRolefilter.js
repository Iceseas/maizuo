import Vue from 'vue'

Vue.filter("actorsRolefilter", (data) => {
    if (!data) {
        return '暂无职位'
    } else {
        return data.map(item => item.role).join('')
    }
})
# 卖座移动端网页平台的开发
# 环境+工具
  1. VUE相关：Vue Cli,Vue.js,Vue.Vuex,Vue.Router
  2. 运行环境：window 10
  3. 接口：均用卖座网的真实接口进行数据获取
  4. 开发工具:Hbuilder X，VScode，chrome
  5. 构建工具:babel.js,webpack等
  6. 组件库：npm
  7. 运用的组件：axios,swiper,better-scroll等
  8. UI组件：mint UI
# 接口
  

用途| 接口url
---|---
获取相应电影的内容 | https://m.maizuo.com/gateway?filmId=${this.$route.params.filmid}&k=7015510
获取正在热映 | https://m.maizuo.com/gateway?cityId=210200&pageNum=1&pageSize=10&type=1&k=9604590
获取即将上映 | https://m.maizuo.com/gateway?cityId=210200&pageNum=1&pageSize=10&type=2&k=9800611
获取头部轮播 | https://m.maizuo.com/gateway?type=2&cityId=210200&k=9912477




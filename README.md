# 卖座移动端网页平台的开发
# 环境+工具
  1. VUE相关：Vue Cli,Vue.js,Vue.Vuex,Vue.Router
  2. 运行环境：手机浏览器
  3. 接口：均用卖座网的真实接口进行数据获取
  4. 开发工具:Hbuilder X，VScode，chrome
  5. 组件库：npm
  6. 运用的组件：axios,swiper,better-scroll等
  7. UI组件：mint UI
  
## 页面展示  

![image](https://github.com/Iceseas/maizuo/blob/master/readmeimg/initpintu_%E5%89%AF%E6%9C%AC.jpg)
# 接口
  

用途| 接口url
---|---
获取相应电影的内容 | https://m.maizuo.com/gateway?filmId=${this.$route.params.filmid}&k=7015510
获取正在热映 | https://m.maizuo.com/gateway?cityId=${store.state.cityID}&pageNum=${store.state.NowPlayingAjaxNum}&pageSize=10&type=1&k=9604590
获取即将上映 | https://m.maizuo.com/gateway?cityId=${store.state.cityID}&pageNum=${store.state.ComingSoonAjaxNum}&pageSize=10&type=2&k=9800611
获取头部轮播 | https://m.maizuo.com/gateway?type=2&cityId=${store.state.cityID}&k=9912477
获取城市信息 | https://m.maizuo.com/gateway?k=2871341
获取影院信息 | https://m.maizuo.com/gateway?cityId=${store.state.cityID}&ticketFlag=1&k=1573618





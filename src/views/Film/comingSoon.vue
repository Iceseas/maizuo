<template>
  <ul
    class="nowpl-ul"
    v-infinite-scroll="loadMore"
    infinite-scroll-immediate-check="true"
    :infinite-scroll-disabled="$store.state.ComingSoonisInfinite"
  >
    <li class="nowpl-ul-li" v-for="data in $store.state.ComingSoonlistData" :key="data.filmId">
      <div class="nowpl-ul-li-pic fl" @click="checkDetail(data.filmId)">
        <img class="nowpl-img" :src="data.poster" />
      </div>
      <div class="nowpl-ul-li-intro" @click="checkDetail(data.filmId)">
        <span class="nowpl-name yahei-font">{{data.name}}</span>
        <i class="iconfont icon-d filmtype" v-if="data.filmType.name=='2D'"></i>
        <i class="iconfont icon-d1 filmtype" v-else></i>
        <p class="nowpl-grade-l font-grow yahei-font">
          观众评分
          <span class="nowpl-grade-r yahei-font">{{data.grade}}</span>
        </p>
        <p class="nowpl-director-l font-grow yahei-font">
          主演：
          {{data.actors | actorsFilter}}
        </p>
        <p class="nowpl-nation font-grow yahei-font">
          {{data.nation}} |
          <span class="nowpl-runtime font-grow yahei-font">{{data.runtime}}分钟</span>
        </p>
      </div>
      <button type="button" class="nowpl-isPresale presalebtn yahei-font" v-if="data.isPresale">购票</button>
      <button type="button" class="nowpl-isPresale presalebtn yahei-font" v-else>预售</button>
    </li>
  </ul>
</template>
<script>
import Vue from "vue";
import { InfiniteScroll } from "mint-ui";

Vue.use(InfiniteScroll);

export default {
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    checkDetail(id) {
      //跳转路由，编程式导航-路径跳转
      this.$router.push(`/detail/${id}`);
      //跳转路由，编程式导航-命名跳转
      // this.$router.pish({name:'detail',params:{id:id}});
    },
    loadMore() {
      if (this.$store.state.ComingSoonDataGet) {
        //请求的页数加一
        this.count++;
        //请求数据过程中开启无限滚轮禁用
        this.$store.commit("ComingSoonInfinite", true);
        //传递要获取的数据页数
        this.$store.commit("ComingSoonScrollDownchangeNum", this.count);
        //调用store中的请求数据
        this.$store.dispatch("GetComingSoonDate");
      } else {
        return;
      }
    },
  },
  mounted() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.pageYOffset = 0;
    this.$store.commit("ComingSoonMounted", 1);
    this.$nextTick(() => {
      this.$store.dispatch("GetComingSoonDate");
    });
  },
};
</script>
<style scoped>
</style>
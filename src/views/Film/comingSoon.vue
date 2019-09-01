<template>
<div>
        <ul class="nowpl-ul" v-infinite-scroll="loadMore" 
		infinite-scroll-immediate-check="true"
		:infinite-scroll-disabled="$store.state.ComingSoonisInfinite"
		>
			<li class="nowpl-ul-li" v-for="data in $store.state.ComingSoonlistData" :key="data.filmId">
				<div class="nowpl-ul-li-pic fl"  @click="checkDetail(data.filmId)">
					<img class="nowpl-img" :src="data.poster" >
				</div>
				<div class="nowpl-ul-li-intro"  @click="checkDetail(data.filmId)">
					<p class="nowpl-name yahei-font">{{data.name}}</p>
					<i class="iconfont icon-d filmtype" v-if="data.filmType.name=='2D'"></i>
					<i class="iconfont icon-d1 filmtype" v-else></i>
					<p class="nowpl-grade-l font-grow yahei-font">观众评分
						<span class="nowpl-grade-r yahei-font">{{data.grade}}</span>
					</p>
					<p class="nowpl-director-l font-grow yahei-font">主演：
							{{data.actors | actorsFilter}}
					</p>
					<p class="nowpl-nation font-grow yahei-font">{{data.nation}} |
						<span class="nowpl-runtime font-grow yahei-font">{{data.runtime}}分钟</span>
					</p>
				</div>
				<button type="button" class="nowpl-isPresale presalebtn yahei-font" v-if="data.isPresale">购票</button>
				<button type="button" class="nowpl-isPresale presalebtn yahei-font" v-else>预售</button>
			</li>
		</ul>
</div>
</template>
<script>

import Vue from 'vue'
import { InfiniteScroll } from 'mint-ui';


Vue.use(InfiniteScroll);

export default {
	data(){
		return {
			count:1
		}
	},
	methods:{
		checkDetail(id){
			//跳转路由，编程式导航-路径跳转
			console.log('详情进来了');
			this.$router.push(`/detail/${id}`);
			console.log('详情结束了');
			//跳转路由，编程式导航-命名跳转
			// this.$router.pish({name:'detail',params:{id:id}});
		},
		loadMore(){
			if(this.$store.state.ComingSoonDataGet){
				console.log('loadmore进来了');
				//请求的页数加一
			this.count++;
			//请求数据过程中开启无限滚轮禁用
			this.$store.commit('ComingSoonInfinite',true);
			//传递要获取的数据页数
			this.$store.commit('ComingSoonScrollDownchangeNum',(this.count));
			//调用store中的请求数据
			this.$store.dispatch('GetComingSoonDate')
			}
			else{
				console.log('loadmore结束了');
				return;
			}
			
		},
	},
	mounted() {
		console.log(this.$store.state.NowPlayinglistData)
		if(this.$store.state.ComingSoonlistData.length === 0){
			//数据请求 -存储store
			this.$store.dispatch('GetComingSoonDate')
		}
		else{
			//使用缓存
			this.$store.dispatch('GetComingSoonDate')
		}
	},
}
</script>
<style scoped>

</style>
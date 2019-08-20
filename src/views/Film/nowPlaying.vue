<template>
        <ul class="nowpl-ul">
			<li class="nowpl-ul-li" v-for="data in $store.state.NowPlayinglistData" :key="data.filmId" >
				<div class="nowpl-ul-li-pic fl" @click="checkDetail(data.filmId)">
					<img class="nowpl-img" :src="data.poster" >
				</div>
				<div class="nowpl-ul-li-intro" @click="checkDetail(data.filmId)">
					<p class="nowpl-name">{{data.name}}</p>
					<p class="nowpl-grade-l font-grow">观众评分
						<span class="nowpl-grade-r">{{data.grade}}</span>
					</p>
					<p class="nowpl-director-l font-grow">主演：
							{{data.actors | actorsFilter}}
					</p>
					<p class="nowpl-nation font-grow">{{data.nation}} |
						<span class="nowpl-runtime font-grow">{{data.runtime}}分钟</span>
					</p>
				</div>
				<button type="button" class="nowpl-isPresale presalebtn" v-if="data.isPresale">购票</button>
				<button type="button" class="nowpl-isPresale presalebtn" v-else>预售</button>
			</li>
			
		</ul>
</template>
<script>
import '@/filter/actorfilter.js'

export default {
	data(){
		return {
			nowpljsons:{},
			obj:[]
		}
	},
	methods:{
		checkDetail(id){
			//跳转路由，编程式导航
			this.$router.push(`/detail/${id}`);
		}
	},
	mounted() {
		if(this.$store.state.ComingSoonlistData.length === 0){
			//数据请求 -存储store
			this.$store.dispatch('GetNowPlayingDate')
		}
		else{
			//使用缓存
			console.log('使用缓存')
		}
	},
}
</script>
<style scoped>

</style>
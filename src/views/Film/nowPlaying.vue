<template>
        <ul class="nowpl-ul">
			<li class="nowpl-ul-li" v-for="data in nowpljsons" :key="data.filmId" >
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
import axios from 'axios'
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
		axios({
			url: 'https://m.maizuo.com/gateway?cityId=210200&pageNum=1&pageSize=10&type=1&k=9604590',
			methods: 'get',
			headers: {
				'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15656848532164663517222"}',
				'X-Host': 'mall.film-ticket.film.list'
				}
			}).then((res) => {
			this.nowpljsons = res.data.data.films;	
		});
		
		
	},
}
</script>
<style scoped>

</style>
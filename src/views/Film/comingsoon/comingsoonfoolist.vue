<template>
	<div class="footlist">
		<ul>
            <li v-for="data in footlist" :key="data.id">
                <p class="footlist-Alldate">{{data.comingTitle}}</p>
                <img class="footlist-img" :src="data.img | imgFliter">
                <p class="footlist-name">{{data.nm}}</p>
                <p class="footlist-wish">
                    <span class="footlist-wish-ren">{{data.wish}}</span>
                    人想看
                </p>
                <p class="footlist-star">主演：{{data.star}}</p>
                <p class="footlist-rt">{{data.rt}}上映</p>
                <button v-if="data.showst==1">想看</button>
                <button v-else-if="data.showst==4">预售</button>
            </li>
        </ul>
	</div>
</template>

<script>
	import axios from 'axios'
	import Vue from 'vue'

    Vue.filter('imgFliter',(data)=>{
		return data.replace('w.h','128.180')
	})
	export default {
        data(){
            return {
                footlist:{}
            }
        },
		mounted(){
			axios.get('/ajax/comingList?ci=65&token=&limit=10').then(res=>{
                this.footlist = res.data.coming;
			})
		}
	}
</script>

<style scoped>
.footlist-img{
    width: 128px;
    height: 180px;
}
</style>

<template>
<div class="master-box">
	<div class="master-box-commponet">
		<router-view></router-view>
	</div>
	<div class="common-footnav">
	<footNav v-show="$store.state.isfilmfooNavShow"></footNav>
	</div>
</div>
</template>
<script>
import footNav from '@/components/footNav'
			export default {
				data(){
					return {
					}
				},
				methods: {
				},
				components: {
					footNav
				},
			}
		</script>
<style>
*{
	padding: 0;
	margin: 0;
}
body,html{
	height: 100%;
}
.fl{
	float: left;
}
.fr{
	float: right;
}
.mid-position{
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
	position: absolute;
}
a{
-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
-webkit-user-select: none;
-moz-user-focus: none;
-moz-user-select: none;
}
.nowpl-img,.nowpl-ul-li-pic{
	width: 66px;
	height: 91px;
}
.nowpl-ul-li{
	border-bottom: 1px solid #eee;
	padding: 15px 15px; 
	display: flex;
	position: relative;
}
.nowpl-ul-li-intro{
	height: 91px;
	padding: 5px 10px; 
	flex-flow: 1;
	width: 100%;
	position: relative;
	box-sizing: border-box;
}
.nowpl-ul-li-pic{
	flex-flow: 1;
}
.nowpl-isPresale{
	position: absolute;
	right: 20px;
	top: 50%;
	transform: translateY(-50%);
}
.nowpl-isPresale:active{
	background: #ffaf40;
	color: #fff;
}
.nowpl-name{
	font-size: 16px;
	font-weight: 500;
}
.font-grow{
	color: #9b9b9b;
	font-size: 14px;
	font-weight: 500;
}
.nowpl-grade-r{
	color: #ffaf40;
}
.nowpl-director-l{
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 180px;
	overflow: hidden;
}
</style>

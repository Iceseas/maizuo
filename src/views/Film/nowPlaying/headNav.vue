<template>

<ul id="headnav-ul">
    <router-link to="/film/nowPlaying" tag="li" activeClass="headNavActive" id="headnav-li">
    正在热映
    </router-link>
    <router-link to="/film/comingSoon" tag="li" activeClass="headNavActive" id="headnav-li">
    即将上映
    </router-link>
</ul>

</template>
<script>
export default {
    
}
</script>
<style scope>
#headnav-ul{
    display: flex;
    list-style: none;
}
#headnav-li{
    flex: 1;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 14px;
}
.headNavActive{
    color: #f39c12;
    border-bottom: 2px solid #f39c12;
}
</style>
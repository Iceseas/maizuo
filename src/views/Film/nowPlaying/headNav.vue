<template>
    <div>
        <ul id="headnav-ul">
            <router-link to="/film/nowPlaying" tag="li" activeClass="headNavActive" class="yahei-font" id="headnav-li">
            正在热映
            </router-link>
            <router-link to="/film/comingSoon" tag="li" activeClass="headNavActive" class="yahei-font" id="headnav-li">
            即将上映
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    component:{

    },
    methods:{

    }
    
}
</script>
<style scope>
#headnav-ul{
    background: #fff;
    display: flex;
    list-style: none;
    justify-content: space-evenly;
}
#headnav-li{
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 14px;
    width: 90px;
}
.headNavActive{
    color: #f39c12;
    border-bottom: 2px solid #f39c12;
}
</style>
<template>
    <div class="login-box" :style="{height:sreenheight}">
    <img class="login-img" src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png" >
    <div class="login login-input">
    <input class="login-inputbody" type="text" placeholder="请输入账户">
    <i class="iconfont icon-my login-i"></i>
    </div>
    <div class="login-pas login-input">
    <input type="password" class="login-inputbody" placeholder="请输入密码">
    <i class="iconfont icon-Key login-i"></i>
    </div>
    <button class="login-btn-width" type="danger"> 登 录 <i class="iconfont icon-maizuologo"></i></button>
    </div>
</template>
<script>

export default {
    data() {
    return {
    sreenheight:'0px'
    }
  },
  mounted() {
      this.$store.commit('FooNavHide',false)
      this.sreenheight = document.documentElement.clientHeight +'px';
  },
  beforeDestroy() {
        //离开时显示底部导航
        this.$store.commit('FooNavShow',true);
    },
}
</script>

<style lang="scss">
.login-box{
    height: 100%;
    background: #fff;
    width: 100%;
    padding: 0 35px;
    box-sizing: border-box;
    position: relative;
}
.login-img{
    height: 60px;
    width: 60px;
    position: absolute;
    left: 50%;
    top: 50px;
    transform: translateX(-50%);
}
.login{
    top: 160px;
    left: 50%;
}
.login-input{
    position: absolute;
    width: 300px;
    top: 160px;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: 1px solid #26a2ff;
    border-radius: 4px;
    height: 40px;
    box-sizing: border-box;
}

.login-inputbody{
    height: 100%;
    box-sizing: border-box;
    width: 100%;
    outline: none;
    border: none;
    padding: 0 10px;
}
.login-pas{
    top: 230px;
    left: 50%;
    
}
.login-i{
        position: absolute;
        right: 7px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 99;
}

.login-btn-width{
    outline: none;
    border: none;
    background: #26a2ff;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    position: absolute;
    width: 300px;
    top: 350px;
    left: 50%;
    height: 40px;
    transform: translateX(-50%);
}
.login-btn-width:active{
    background: #fff;
    color: #26a2ff;
    border: 1px solid #26a2ff;
}
</style>
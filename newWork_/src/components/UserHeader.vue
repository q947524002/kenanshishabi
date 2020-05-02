<template>
    <header>
        <div class="head">
            <div class="logo">
                <img src="../assets/6_03.jpg" alt="">
            </div>
            <div class="head_right flex">
                <a href="">注册</a>
                <span>丨</span>
                <a href="">登录</a>
            </div>
        </div>
    </header>
    
</template>
<script>
export default {
    name:"UserHeader",
}
</script>
<style>
    * {
        padding: 0;
        margin: 0;
    }
    .head {
        height: 50px;
        width: 100vw;
        box-shadow: 3px 2px 4px #ececec;
        display: flex
    }
    .logo {
        align-items: center;
        display: flex;
        flex: 6
    }
    img {
        vertical-align: middle;
    }
    .logo>img {
        height: 40px;
        margin-left: 110px;
    }
    .head_right {
        flex: 1;
        display: flex;
        align-items: center;
        font-size: 12px;
    }
    .head_right>a , .head_right>span {
        text-decoration: none;
        color: #999999;
    }
</style>
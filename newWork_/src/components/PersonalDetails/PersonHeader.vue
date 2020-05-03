<template>
    <div class="PersonHeader">
        <div class="Head_left">
            <img src="../../assets/1_03.jpg" alt="">
        </div>
        <div class="Head_right">
            <img src="../../assets/2_03.jpg" alt="">
            <div>罗密欧</div>
            <div style="position:absolute;bottom:6px;"><a href="#" style="text-decoration: none;color:#a5a5a5">﹀</a></div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    * {
        padding: 0;
        margin: 0;
    }
    img {
        vertical-align: middle;
    }
    .PersonHeader {
        background-color: #333333;
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        
    }
    .Head_left {
        flex: 4;
        padding-left: 120px;
    }
    .Head_right {
        flex: 1;
        color: #ffffff;
        font-size: 11px;
        padding-left: 80px;
        position: relative;
    }
    .Head_right>div {
        display: inline-block;
        padding-left: 10px;
    }
</style>
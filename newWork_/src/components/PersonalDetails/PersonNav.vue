<template>
    <div class="PersonNav">
        <div class="PersonNav_left">
            <ul>
                <li style="font-size:19px;color:#00aaff;">My Center</li>
                <li>基本信息</li>
                <li>课程管理</li>
                <li>我的回答</li>
            </ul>
        </div>
        <div class="PersonNav_right">
            <div class="add_les">
                + 添加课程
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .PersonNav {
        height: 70px;
        background-color: #ffffff;
        position: relative;
        box-shadow: 0px 2px #e4e4e4
    }
    .PersonNav_left {
        padding-left: 20px
    }
    ul>li {
        list-style: none;
        float: left;
        font-size: 13px;
        padding-left: 100px;
        line-height: 70px;
    }
    .add_les {
        display: inline-block;
        width: 128px;
        height: 30px;
        border: 1px solid #eeeeee;
        text-align: center;
        line-height: 30px;
        font-size: 13px;
        border-radius: 15px;
        position: absolute;
        right: 155px;
        top:30%;
        color: #00aaff;
        font-weight: 600;
    }
    ul::after {
        content: "";
        height: 0;
        clear: both;
        visibility: hidden;
        display: block;
    }
    ul {
        zoom: 1;
    }
</style>
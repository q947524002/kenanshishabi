<template>
    <header>
        <div class="header">
            <div class="header_left flex">
                <img src="../assets/1_03.jpg" alt="">
            </div>
            <div class="header_right">
                
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name:"header"
}
</script>
<style>
    * {
        padding: 0px;
        margin: 0px;
    }
    .header {
        height: 35px;
        background-color: #333333;
        line-height: 35px;
    }
    .header_left {
        padding-left: 100px;
    }
    img {
        vertical-align: middle;
    }
</style>
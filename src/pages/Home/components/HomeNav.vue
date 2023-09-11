<template>
    <div class="snav">
        <div class="close"></div>
        <div class="snav-menu"> 
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.snav {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 60px;
    z-index: 998;
    border-left: 3px solid #82318e;
    background-color: #f6f6f6;
    box-shadow: 0 0 15px rgba(0,0,0,.1);
    padding-top: 129px;
    transition: .3s;

    .close {
        position: absolute;
        left: 0;
        top: 51px;
        height: 60px;
        width: 50px;
        border-radius: 0 28px 28px 0;
        box-shadow: 0 0 15px rgba(0, 0, 0, .1);
        background: url(https://lib.tsinghua.edu.cn/images/icons01.png) center center no-repeat #fff;
        cursor: pointer;
        transition: .3s;
    }
    .snav-menu {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        background: url(https://lib.tsinghua.edu.cn/images/icons02.png) center center no-repeat #fff;
        cursor: pointer;
    }
}
</style>
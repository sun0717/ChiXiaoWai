<template>
    <div class="Card">
        <form style="width: 420px;">
            <div class="tit">
                <!-- 插槽 -->
                <a href="https://discover.lib.tsinghua.edu.cn/" target="_blank">水木搜索</a>
            </div>
            <div class="inp">
                <input class="text" v-model="textSearch">
                <input class="btn" type="button">
            </div>
            <div class="tp">
                <a class="a1" href="#" target="_blank">使用指南</a>
                <a class="a1" href="#" target="_blank">按类型查</a>
                <a class="a1" href="#" target="_blank">按学科查</a>
                <a class="a1" href="#" target="_blank">新书通报</a>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

</script>

<style lang="scss" scoped>
.Card {
    border-radius: 10px;
    padding-top: 30px;
    background: url(https://lib.tsinghua.edu.cn/images/sjkxx.png) center top no-repeat #fff;
    box-shadow: 0 10px 43px rgba(0, 0, 0, .15);
    height: 210px;
    .tit {
        font-size: 24px;
        color: #751d82;
        text-align: center;
        font-weight: 700;
        margin-bottom: 20px;
    }

    .inp {
        margin: 0 20px 10px;
        height: 62px;
        position: relative;

        .text {
            display: block;
            width: 100%;
            height: 100%;
            border: 1px solid #c7c7c7;
            font-size: 16px;
            color: #000;
            padding: 0 80px 0 20px;
            border-radius: 31px;
        }

        .btn {
            position: absolute;
            top: 0;
            right: 0;
            width: 80px;
            height: 100%;
            border: none;
            background: url(https://lib.tsinghua.edu.cn/images/icons04.png) center center no-repeat;
            cursor: pointer;
        }
    }

    .tp {
        text-align: center;
        .a1 {
            display: inline-block;
            font-size: 12px;
            color: #666;
            padding-right: 14px;
            margin: 0 9px;
            text-decoration: none;
            background: url(https://lib.tsinghua.edu.cn/images/arrows3.png) right center no-repeat;
        }
    }
}
</style>
<template>
    <div class="box-indicator">
        <el-carousel trigger="click" height="85vh" :autoplay="false" arrow="never">
            <el-carousel-item v-for="item in imgs" :key="item.id">
                <img :src="item.url">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const imgs = ref([
    {
        id: 1,
        url: 'https://lib.tsinghua.edu.cn/images/03-zhuyebanner-zhong_fuben.jpg',
    },
    {
        id: 2,
        url: 'https://lib.tsinghua.edu.cn/images/shuimujianshubanner.jpg',
    },
    {
        id: 3,
        url: 'https://lib.tsinghua.edu.cn/images/wanjuanlinlangbanner2.jpg',
    },
    {
        id: 4,
        url: 'https://lib.tsinghua.edu.cn/images/xinshutongbao.jpg',
    }
])
</script>

<style lang="scss" scoped>
img {
    width: 100%;
    // height: 100%;
}

.box-indicator {
    position: relative;
    top: 0px;
    left: 60px;
    height: 85vh;

    :deep(.el-carousel__indicators--horizontal) {
        left: 80%;
        bottom: 220px;
        transform: translateX(-50%);
    }

    :deep(.el-carousel__indicator--horizontal) {
        display: inline-block;
        padding: 12px 8px;
    }

    :deep(.el-carousel__indicator--horizontal .el-carousel__button) {
        width: 10px;
        height: 10px;
        background: #ffffff;
        border-radius: 50%;
    }

    :deep(.el-carousel__indicator--horizontal.is-active .el-carousel__button) {
        width: 10px;
        height: 10px;
        background: #82318e;
        border-radius: 50%;
        opacity: 1;
    }
}
</style>
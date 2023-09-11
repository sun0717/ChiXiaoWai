<template>
    <div class="Service">
        <ul class="so-list">
            <li>
                <Card />
            </li>
            <li>
                <Card />
            </li>
            <li>
                <Card />
            </li>
        </ul>
    </div>
</template>

<script setup>
import Card from '@/components/Card.vue';
</script>

<style lang="scss" scoped>
.Service {
    display: flex;
    width: 80%;
    max-width: 1560px;
    margin: 0 auto;
    position: relative;
    top: -110px;
    left: 60px;
    .so-list {
        display: flex;
        padding: 0 15px;
        margin: -70px -15px 0;
        position: relative;
        z-index: 2;
        
        li {
            padding: 0 15px;
        }
    }
}
</style>
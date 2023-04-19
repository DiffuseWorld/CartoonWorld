<script setup lang="ts">
import MainTitle from './components/MainTitle.vue';
</script>

<template>
    <div class="main-page inset-0">
        <!-- 顶部空白 -->
        <div class="security"></div>
        <!-- 顶部导航栏 -->
        <MainTitle/>
        <!-- 主题内容 -->
        <RouterView></RouterView>
    </div>
</template>

<style lang="scss" scoped>
    .main-page{
        position: fixed; // 阻止页面被拖动
        overflow: auto;
        .security{
            height: var(--van-nav-bar-height);
            width: 100%;
        }
    }
</style>
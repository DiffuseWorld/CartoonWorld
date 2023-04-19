<script setup lang="ts">
import Banner from './components/Banner.vue';
import {images} from '@/testdata'
import LightNovelNav from './components/LightNovelNav.vue';
import InfoWrapper from '@/components/InfoWrapper.vue';
import InfoItem from '@/components/InfoItem.vue';
</script>

<template>
<!-- 轮播图 -->
<Banner :images="images"/>
<!-- 中间导航 -->
<LightNovelNav/>
<!-- 最近更新 -->
<InfoWrapper
    message="最近更新"
    class="rmbg"
    title-color="#fff"
    icon="更多">
    <template #default>
        <div class="flex justify-between items-center">
            <InfoItem
                color="#fff"></InfoItem>
            <InfoItem
                color="#fff"></InfoItem>
            <InfoItem
                color="#fff"></InfoItem>
        </div>
    </template>
</InfoWrapper>
<div class="h-2 w-screen bg-slate-200"></div>
<!-- 即将动画化 -->
<InfoWrapper
    message="即将动画化"
    title-color="#000"
    icon="更多">
    <template #default>
        <div class="flex justify-between items-center">
            <InfoItem
                color="#ccc"></InfoItem>
            <InfoItem
                color="#ccc"></InfoItem>
            <InfoItem
                color="#ccc"></InfoItem>
        </div>
    </template>
</InfoWrapper>
<div class="h-2 w-screen bg-slate-200"></div>
<!-- 经典必看 -->
<InfoWrapper
    message="经典必看"
    title-color="#000"
    icon="更多">
    <template #default>
        <div class="flex justify-between items-center">
            <InfoItem
                color="#ccc"></InfoItem>
            <InfoItem
                color="#ccc"></InfoItem>
            <InfoItem
                color="#ccc"></InfoItem>
        </div>
    </template>
</InfoWrapper>
</template>

<style scoped lang="scss">
.rmbg{
    background-color: #FBAB7E;
background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);

}
</style>
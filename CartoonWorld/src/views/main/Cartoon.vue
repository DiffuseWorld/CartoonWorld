<script setup lang="ts">
import Banner from './components/Banner.vue';
import InfoWrapper from '@/components/InfoWrapper.vue';
import InfoItem from '@/components/InfoItem.vue';
import {images} from '@/testdata'
import CartoonNav from './components/CartoonNav.vue';

</script>

<template>
<!-- 轮播图 -->
<Banner :images="images"/>
<!-- 漫画的中间导航区 -->
<CartoonNav/>
<!-- 热门推荐 -->
<InfoWrapper
:message="'热门推荐'"
:icon="'更多'"
:class="'rmbg'"
title-color="#fff"
>
    <template #default>
        <div class="flex justify-between">
            <InfoItem 
                v-for="i in 3" 
                title="赌博默示录"
                color="#fff"/>
        </div>
    </template>
</InfoWrapper>
<div class=" w-screen h-2 bg-slate-200"></div>
<!-- 近期必看 -->
<InfoWrapper
:message="'近期必看'"
>
    <template #default>
        <div class="flex justify-between">
            <InfoItem 
                v-for="i in 3" 
                title="赌博默示录"
                color="#000"/>
        </div>
    </template>
</InfoWrapper>
<div class=" w-screen h-2 bg-slate-200"></div>
<!-- 火热专题 -->
<InfoWrapper
:message="'火热专题'"
:icon="'更多'"
>
    <template #default>
        <div class="grid grid-cols-2 gap-2">
            <InfoItem
                :width="167"
                :height="90"
                color="#000"/>
            <InfoItem
                :width="167"
                :height="90"
                color="#000"/>
            <InfoItem
                :width="167"
                :height="90"
                color="#000"/>
            <InfoItem
                :width="167"
                :height="90"
                color="#000"/>
        </div>
    </template>
</InfoWrapper>
<div class=" w-screen h-2 bg-slate-200"></div>
<!-- 随便看看 -->
<InfoWrapper
:message="'随便看看'"
:icon="'换一换'"
class="rmbg2"
title-color="#fff"
>
    <template #default>
        <div class="flex justify-between items-center">
            <InfoItem
            v-for="i in 3"
            color="#000"
            />
        </div>
    </template>
</InfoWrapper>
<div class=" w-screen h-2 bg-slate-200"></div>
<!-- 大师级的作品怎能不看 -->
<InfoWrapper
:message="'大师级的作品怎能不看'"
class="rmbg3"
title-color="#fff"
>
    <template #default>
        <div class="flex justify-between items-center">
            <InfoItem
            v-for="i in 3"
            color="#fff"
            />
        </div>
    </template>
</InfoWrapper>
</template>

<style lang="scss" scoped>
.rmbg{
    background-color: #FFE53B;
    background-image: linear-gradient(300deg, #FFE53B 0%, #FF2525 74%);
    
}
.rmbg2{
    background-color: #2139fd;
background-image: linear-gradient(135deg, #2139fd 0%, #B721FF 100%);

}
.rmbg3{
    background-color: #8EC5FC;
background-image: linear-gradient(89deg, #8EC5FC 0%, #E0C3FC 100%);

}
</style>
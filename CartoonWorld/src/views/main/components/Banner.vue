<script setup lang="ts">
import { withDefaults } from 'vue'
type IProps={
    images?:Array<string>
    height?:number
    width?:number
};
const props=withDefaults(defineProps<IProps>(),{
    // @ts-ignore
    height:150,
    width:window.innerWidth
})
</script>

<template>
    <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in images" 
        :key="image"
        :style="{height,width}">
            <slot>
                <img :src="image" class="banner-img"/>
            </slot>
        </van-swipe-item>
    </van-swipe>
</template>

<style lang="scss" scoped>
.banner-img{
    height: 150px;
    width: 100%;
}
</style>
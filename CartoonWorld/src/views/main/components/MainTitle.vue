<script lang="ts" setup>
import { useMain } from '@/stores'
import {useRouter,useRoute} from 'vue-router'
const mainStore = useMain()
const router = useRouter()
const route = useRoute()
const toggleNav = (n: number) => {
    mainStore.nav = n
    if(route.name==='cartoon'){
        router.push({
            name:'lightnoval'
        })
    }else{
        router.push({
            name:'cartoon'
        })
    }
}
const isShow = (n: number) => {
    return mainStore.nav === n
}
</script>

<template>
    <div class="main-title -inset-x-0 top-0 fixed flex justify-between items-center">
        <div class="left  flex items-baseline">
            <div class="left__manhua relative" 
            :class="{ 'selected': isShow(0) }" 
            @click="toggleNav(0)">
                漫画
                <div class="bg absolute" v-show="isShow(0)"></div>
            </div>
            <div class="left__xiaoshuo relative" 
            :class="{ 'selected': isShow(1) }" 
            @click="toggleNav(1)">
                轻小说
                <div class="bg absolute" v-show="isShow(1)"></div>
            </div>
        </div>
        <div class="right">
            <div class="search-wrapper">
                搜索
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.main-title {
    height: var(--van-nav-bar-height);
    background-color: var(--van-nav-bar-background);
    font-size: 16px;
    border-bottom: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .15);
    color: var(--van-nav-bar-title-text-color);
    z-index: 120;
    .left {
        margin: 0 10px;
        // width: ;
        font-size: 18px;
        .left__manhua {
            margin-right: 20px;

        }

        .left__xiaoshuo {

        }
    }

    .right {
        margin: 0 10px;

        .search-wrapper {

        }
    }
}

.selected {
    font-size: 20px;
    font-weight: 550;
}
.bg {
    top: 10px;
    left: 10px;
        background-color: #FEE140;
        background-image: linear-gradient(45deg, #FEE140 0%, #f5fa70 100%);
        box-shadow: 0 0 10px 10px yellow;
        height: 0px;
        width: 10px;
        border-radius: 50%;
        z-index: 100;
        opacity: .5;
    }
</style>
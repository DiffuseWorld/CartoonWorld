<script setup lang="ts">
import {withDefaults} from 'vue'
type IProps={
    isLazeLoad?:boolean
    width?:number
    height?:number
    img?:string
    title?:string
    color?:string
    p2?:string
    layout?:'justify-center'|'justify-start'|'justify-end'
    fontSize?:number
};
const props=withDefaults(defineProps<IProps>(),{
    isLazeLoad:true,
    height:120,
    width:100,
    img:'https://images.dmzj.com/webpic/6/dbmslheyepianV2.jpg',
    title:'你好人生',
    color:'#ccc',
    layout:'justify-start',
    fontSize:12,
})
/**
     * 用来在列表中展示漫画或者小说的组件
     * 1.可以调整宽高
     * 2.可以调整图片宽高
     * 3.封面图片可以懒加载
     * 4.可以设置图片
     * 5.可以设置漫画/小说标题
     * 6.可以设置二级标题信息
     * 7.可以调整标题的位置（靠左，居中，靠右)
     */
</script>

<template>
    <div class="info-item">
        <div class="top">
            <div class="top-item"
            :style="{height:height+'px',width:width+'px',}">
                <VanImage
                width="100%"
                height="100%"
                :src="img"
                :lazy-load="isLazeLoad" />
            </div>
        </div>
        <div class="bottom"
            :style="{fontSize:fontSize+'px'}">
            <div class="bottom-p flex items-center van-ellipsis" 
                :style="{color}"
                :class="layout">{{ title }}</div>
            <p class="bottom-p-II flex items-center van-ellipsis" 
                v-if="p2"
                :class="layout">
                {{ p2 }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.info-item{
    height: 100%;
    .top{
        .top-item{
            background-color: #fff;
        }
    }
    .bottom-p{
        margin-top: 5px;
    }
}
</style>
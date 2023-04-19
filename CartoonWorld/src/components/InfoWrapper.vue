<script setup lang="ts">
import {withDefaults} from 'vue'
type IProps={
    height?:number
    width?:number
    backgroundColor?:string
    message?:string
    icon?:any
    isShowBottomBorder?:boolean
    titleColor?:string
};
const props=withDefaults(defineProps<IProps>(),{
    height:45,
    width:window.innerWidth,
    backgroundColor:'transparent',
    message:'标题',
    isShowBottomBorder:false
})
</script>

<template>
    <div class="Info-Wrapper w-screen">
        <div class="Info-wrapper__title-wrapper w-screen">
            <div class="title flex justify-between" 
            :style="{height:height+'px',width:width+'px',backgroundColor}">
                <div class="left flex items-center px-2 box-border">
                    <!-- 左边的标题 -->
                    <slot name="title">
                        <span class="left-item" :style="{color:titleColor}">{{ message }}</span>
                    </slot>
                </div>
                <div class="right flex items-center px-2 box-border">
                    <!-- 右边的图标 -->
                    <slot name="icon">
                        <span class="right-item" v-html="icon?icon:''"></span>
                    </slot>
                </div>
            </div>
        </div>
        <!-- 分割线 -->
        <div class="line" v-if="isShowBottomBorder"></div>
        <div class="Info-wrapper__content-wrapper p-4">
            <!-- 内容区 -->
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.Info-Wrapper{
    min-height: 200px;
    background: #fff;
    &__title-wrapper{
        .left{
            
        }
        .right{

        }
    }
    .line{
        height: 0px;
        width: inherit;
        border-top: 1px solid #ccc;
    }
    &__content-wrapper{
        width: inherit;
    }
}
:slotted(.left-item){ //  注意了，即使是solt的默认显示内容，依然无法直接修改其样式，必须要通过:slotted指定选择器来进行修改
    font-size: 18px;
    font-weight: 500;
}
</style>
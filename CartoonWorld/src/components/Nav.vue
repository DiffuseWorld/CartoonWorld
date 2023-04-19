<script setup lang="ts">
import {withDefaults} from 'vue'
type IProps={
    width?:number
    height?:number
};
const props = withDefaults(defineProps<IProps>(),{
    width:window.innerWidth
})
</script>

<template>
    <div class="nav flex justify-around items-center"
    :style="{height:height+'px',width:width+'px'}">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">

</style>
<script setup lang="ts">
import {withDefaults} from 'vue'
type IProps={
    icon:string
    info:string
}
const props=withDefaults(defineProps<IProps>(),{

})
</script>

<template>
    <div class="icon-nav-item flex-col">
        <div class="flex justify-center items-center">
            <VanIcon :name="icon" class="icon"></VanIcon>
        </div>
        <div class="info flex justify-center items-center mt-1">
            {{ info }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
.icon{
    font-size: 20px;
}
</style>
<script lang="ts" setup>
 import Nav from '@/components/Nav.vue';
 import InconNavItem from '@/components/InconNavItem.vue';
</script>

<template>
<Nav class="lightNovalNav">
    <InconNavItem :icon="'vip-card'" info="排行"/>
    <InconNavItem :icon="'vip-card'" info="排行"/>
    <InconNavItem :icon="'vip-card'" info="排行"/>
</Nav>
</template>

<style scoped lang="scss">
.lightNovalNav{
    padding: 10px;
    box-sizing: border-box;
    font-size: 12px;
}
</style>
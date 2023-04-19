<script setup lang="ts">
import Nav from '@/components/Nav.vue';
import InconNavItem from '@/components/InconNavItem.vue';
</script>

<template>
<Nav class="cartoon">
    <InconNavItem :icon="'diamond'" :info="'排行'" />
    <InconNavItem :icon="'award'" :info="'排行'" />
    <InconNavItem :icon="'award'" :info="'排行'" />
    <InconNavItem :icon="'award'" :info="'排行'" />
</Nav>
</template>

<style scoped lang="scss">
.cartoon{
    padding: 10px;
    box-sizing: border-box;
    font-size: 14px;
}
</style>
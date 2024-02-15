<template>
  <div>
    <TetrisCard v-for="item in items" 
    :key="item.name"
    :items="item"
  />
  </div>
</template>

<script setup>
  import TetrisCard from '@/components/TetrisCard.vue';
  import { items } from '@/router/items.js';

</script>

<style scoped>
</style>

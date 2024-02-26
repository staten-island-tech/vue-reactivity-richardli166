<template>
  <div class = "box">
      <TetrisCard v-for="item in items" 
      :Items="item"
  />
    
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TetrisCard from '@/components/TetrisCard.vue';
import { items } from '@/stores/array.js';

</script>

<style scoped>
.box{
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>

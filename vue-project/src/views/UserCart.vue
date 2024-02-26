<template>
  <div class="cart">
    <h1>Things You Bought:</h1>

    <CartCard v-for="item in items"
    :item="item"/>
    
  </div>
</template>
<script setup>

import { items } from '@/stores/array';
import CartCard from '@/components/CartCard.vue';

</script>

<style scoped>

.cart {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>

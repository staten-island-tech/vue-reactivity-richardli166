<template>
  <div class="cart">
    <h1>Things You Bought:</h1>

    <CartCard v-for="cart in carts" 
      :key="cart.name"
      :items="cart"
      :name= "cart.name"
      :price="cart.price"
      :src="cart.imagesrc"
      :amount="cart.amount"
    />
    
  </div>
</template>
<script setup>
import { store } from '../stores/allvar.js';
import CartCard from '@/components/CartCard.vue';

const carts = store.getCart();

</script>

<style scoped>
</style>

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
  const items = [
    {
      name: "I-Piece",
      price: "$16",
      img: "../I-Piece.png",
    },
    {
      name: "Z-Piece",
      price: "$16",

    },
    {
      name: "L-Piece",
      price: "$16",

    },
    {
      name: "J-Piece",
      price: "$16",

    },
    {
      name: "S-Piece",
      price: "$16",

    },
    {
      name: "O-Piece",
      price: "$16",

    },
    {
      name: "T-Piece",
      price: "$16",

    }
  ];

</script>

<style scoped>
</style>

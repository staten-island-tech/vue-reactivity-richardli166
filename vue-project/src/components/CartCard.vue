<template>
  <div class="card center">
    <h2>You Bought: {{ item.name }}</h2>
    <h3>Each cost: ${{ item.price }}</h3>
    <img :src="item.img" :alt="item.name">
    <h2>Which Costed You This Much: ${{ Number(item.purchaseCount.value) * Number(item.price) }}</h2>
  </div>

</template>

<script setup>

const props = defineProps({
  item: Object,
});

</script>


<style scoped>
.card {
border: .5rem blue solid;
padding: .5rem;
width: 30%;
margin: 1rem;

}
.center{
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}
img{
  min-width: 30%;
  max-width: 100%;
}
</style>
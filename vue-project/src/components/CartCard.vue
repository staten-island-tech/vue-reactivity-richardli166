<template>
  <div class="card center">
    <h2>You Bought: {{ name }}</h2>
    <h3>Each cost: ${{ price }}</h3>
    <h2>You Bought this much: {{ amount }}</h2>
  </div>

</template>

<script setup>
defineProps({
  name: String,
  price: Number,
  image: String,
  amount: Number,
})

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
</style>
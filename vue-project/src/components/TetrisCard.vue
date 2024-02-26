<template>
    <div class="card center">
        <h2>{{ Items.name }}</h2>
        <h3>${{ Items.price }}</h3>
        <img :src="Items.img" :alt="Items.name"/>
        <h2>{{ Items.purchaseCount }}</h2>
        <button @click="increment">Buy me!</button>
    </div>
</template>

<script setup>

const props = defineProps({
    Items: Object, 
});

function increment() {
    props.Items.purchaseCount.value++;
};

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
button{
    width: 6vh;
    height: 6vh;
    font-size: 2vh;
}
</style>
<template>

        <div class="card center">
        <h2>{{ items.name }}</h2>
        <h3>{{ items.price }}</h3>
            <img :src="items.img" :alt="items.name"/>
            <h2>{{ clicked }}</h2>
            <button @click="increment(items.name, items.price, items.img)">Buy me!</button>
    </div>

</template>

    <script setup>
        import { store } from '../stores/allvar.js';
        import { ref } from 'vue';

        const props = defineProps({
        items: Object, 
        });

//clicker logic 
    const clicked = ref(0);
    function increment(name, price, imagescr) {
        ++clicked.value;
        store.addTetris(name, price, imagescr, clicked.value)
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
</style>
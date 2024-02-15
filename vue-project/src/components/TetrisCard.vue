<template>
    <div>
        <h2>{{ items.name }}</h2>
        <h3>{{ items.price }}</h3>
        <img :src="items.img" :alt="items.name"/>
        <h2>{{ clicked }}</h2>
        <button @click="increment">Buy me!</button>
    </div>
</template>

    <script setup>
        import { ref } from 'vue';
        const props = defineProps({
        items: Object, 
        });
//clicker logic 
    const clicked = ref(0);
    function increment(){
    clicked.value++;
}

</script>

<style scoped>

</style>
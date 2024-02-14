<template>
    <div>
        <h2>{{ props.items.name }}</h2>
        <h3>{{ props.items.price }}</h3>
        <img :src="props.items.img" alt="{{ props.items.name }}"/>
        <h2>{{ clicked }}</h2>
        <button @click="increment">Add to Your cart</button>
    </div>
</template>

    <script setup>
        import { ref } from 'vue';
        const props = defineProps({
        items: Object, 
        });
        console.log(props.items.name);
//clicker logic 
    const clicked = ref(0);
    function increment(){
    clicked.value++;
}

</script>

<style scoped>

</style>
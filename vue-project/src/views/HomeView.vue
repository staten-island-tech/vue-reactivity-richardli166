<template>
  <div>
    <DestCard v-for="destination in destinations" 
    :key="destination.name"
    :Destination="destination"
  />
  </div>
</template>

<script setup>
  import DestCard from '@/components/DestCard.vue';
  const destinations = [{
          name: "I piece",
          price: 1300,
          img: "data:image/jpeg;base64,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",
        },
        {
          name: "Swiss Mountain Getaway",
          International: true,
          price: 800,
          img: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1476&q=80&quot;",
        },
        {
          name: "Ibizan Coastal Vacation",
          International: true,
          price: 1200,
          img: "https://images.unsplash.com/photo-1547138494-97041dec734b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80&quot;",
        },
        {
          name: "Hawaiian Vacation",
          International: false,
          price: 900,
          img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80&quot;",
        },
        {
          name: "Cascade Mountains",
          International: false,
          price: 400,
          img: "https://images.unsplash.com/photo-1511497584788-876760111969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80&quot;",
        },
        {
          name: "Egyptian Exploration",
          International: true,
          price: 800,
          img: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80&quot;",
        },
      ];
</script>

<style scoped>
  h1{
    color: red;
  }
</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="pages">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Your Cart</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>

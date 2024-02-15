<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="pages">
      <nav>
        <RouterLink to="/">Home</RouterLink><br>
        <RouterLink to="/cart">Things You Bought!</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>

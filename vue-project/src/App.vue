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
<div class = "homeview">
  <RouterView />
  </div>
</template>

<style scoped>
.homeview{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pages{
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <header>
    <div class="pages">
      <nav>
        <RouterLink to="/cart">Cash Out</RouterLink>
      </nav>
    </div>
  </header>

<div class = "homeview">
    <RouterView />
  </div>
</template>

<style scoped>
.homeview{
  width: 100%;
  height: 30rem;
}
.pages{
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>

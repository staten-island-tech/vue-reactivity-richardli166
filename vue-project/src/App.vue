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
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  margin-top: 2rem;
}

@media (min-width: 1024px) {
  header {
    align-items: center;
  }


  header .pages {
    margin: auto;
  }

  nav {
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

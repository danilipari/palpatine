<template>
  <nav>
    <router-link :to="'test'" class="text-dark"> Test</router-link>
  </nav>
  <main>
    <router-view></router-view>
  </main>
</template>

<script setup>
console.log('app');
</script>

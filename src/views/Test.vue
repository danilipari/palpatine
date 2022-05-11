<template>
  <router-link :to="'/'" class="text-dark">Home</router-link>
  <HelloWorld />

  <b-alert show>Test</b-alert>
</template>

<script setup>
import HelloWorld from '../components/HelloWorld.vue';

console.log('Test');
</script>
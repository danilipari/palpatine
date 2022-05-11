<template>
  <router-link :to="'test'" class="text-dark">Test</router-link>
  <b-alert show variant="success">Home</b-alert>
</template>

<script setup>
console.log('home');
import { ref } from 'vue'

const count = ref(0)
</script>
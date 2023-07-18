<script setup lang="ts">
import {Ticket} from './system.d.ts'
const model = new Ticket();
console.log('Model:\t', model.aliasName);
</script>

<template></template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

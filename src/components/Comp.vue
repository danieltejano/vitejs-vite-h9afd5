<script setup lang="ts">
import type { MyType } from './Comp';

defineProps<{
  state: MyType;
}>();
</script>

<template>
  <h1>{{ state.hello }}</h1>
</template>

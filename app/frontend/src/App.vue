<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template lang="pug">
.root-app
  hello-world
  h2.text-2xl Some Header
</template>

<style lang="sass">
.root-app
  @apply bg-light-200 text-green-700
</style>

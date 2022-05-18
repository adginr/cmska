<script setup>
import { ref } from "vue";
defineProps({
  pack: {
    type: String,
    default: "mdi",
  },
  icon: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div :class="`i-${pack}-${icon}`"></div>
</template>

<style lang="scss"></style>

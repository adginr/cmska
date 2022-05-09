<script setup>
import { ref } from "vue";
import { useDummyStore } from "@/stores/DummyStore";
const store = useDummyStore();
</script>

<template lang="pug">

h2 Store start from SubComponent
pre {{store}}
</template>

<style lang="scss"></style>

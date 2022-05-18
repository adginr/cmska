<script setup>
import { ref } from "vue";
const props = defineProps({
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  scale: {
    type: Number,
    default: 1,
  },
});
const size = ref([`w-${40 * props.scale}px`, `h-${40 * props.scale}px`]);
</script>

<template lang="pug">
.avatar(:class='size')
  img.avatar__img(:src="src" :alt="alt" )
</template>

<style lang="scss">
.avatar {
  @apply inline-flex rounded-full items-center justify-center overflow-hidden;
  &__img {
    @apply object-contain max-w-full max-h-full;
  }
}
</style>

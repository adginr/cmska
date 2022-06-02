<!-- 
  [🔺 text] left inline
  [text 🔺] right inline
  [text         🔺] full width
  [text  |🔺] // with divider
 -->
<script setup>
import { ref } from "vue";
const props = defineProps({
  hasIconLeft: {
    type: Boolean,
    default: false,
  },
  hasIconRight: {
    type: Boolean,
    default: false,
  },
});
const textClass = {
  "ml-2": props.hasIconLeft,
  "mr-2": props.hasIconRight,
  "inline-flex": true,
};
</script>

<template lang="pug">
span(class="inline-flex items-center")
  slot(name='left')
  span(:class='textClass')
    slot(name='default')
  slot(name='right')
</template>

<style lang="scss"></style>

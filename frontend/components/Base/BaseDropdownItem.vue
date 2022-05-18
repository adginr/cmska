<script setup>
import { ref, h } from "vue";

const props = defineProps({
  divider: {
    type: Boolean,
    default: false,
  },
  pack: {
    type: String,
    default: "mdi",
  },
  icon: {
    type: String,
    default: "",
  },
  tag: {
    type: String,
    default: "a",
  },
  text: {
    type: String,
    default: "",
  },
});
const textClass = props.icon ? "ml-4" : "";
const VNodeAnchor = h(props.tag, { class: textClass }, props.text);
</script>

<template lang="pug">

.dropdown__divider(v-if='divider')

.dropdown__item(v-else)
  slot(name='icon')
  .dropdown__item-text(:class="{'ml-4':true}")
    slot(name='default')
</template>

<style lang="scss">
.dropdown__item {
  @apply p-2 hover:bg-coolGray-100 cursor-pointer flex;
}
.dropdown__item-text {
}
.dropdown__divider {
  @apply h-1px bg-gray-100;
}
</style>

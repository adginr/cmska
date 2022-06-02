<script setup>
import { ref } from "vue";

defineProps({
  label: {
    type: String,
    default: null,
  },
});

const opened = ref(false);

function closeDropdown(event) {
  opened.value = false;
}

useWindowEventListener("click", closeDropdown);
</script>

<template lang="pug">
span.dropdown
  base-button(iconRight @click.stop="opened = !opened" ) {{ label }}
    template(#icon-right)
      .i-mdi-chevron-up(v-if='opened')
      .i-mdi-chevron-down(v-if='else')
  .dropdown__items(:class='{"dropdown__items--hidden": !opened}')
    slot(name='default')

</template>

<style lang="scss">
.dropdown {
  @apply relative inline-flex;
  &__items {
    @apply absolute top-12 right-0;
    @apply py-2 shadow border rounded-md bg-white z-10;
    @apply w-12rem flex flex-col;
  }
  &__items--hidden {
    @apply hidden;
  }
  &__item {
  }
}
</style>

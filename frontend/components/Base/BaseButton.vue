<script setup>
import { ref, defineProps, h } from "vue";

const props = defineProps({
  size: {
    type: String,
    default: "base",
  },
  baseType: {
    type: String,
    default: "button",
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "",
  },
  "icon-left": {
    type: Boolean,
    default: false,
  },
  iconRight: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: String,
    default: "md",
  },
  circular: {
    type: Boolean,
    default: false,
  },
});
</script>

<template lang="pug">
button(:type="baseType", :class="['btn', `btn--${size}`, type ? `btn--${type}` : '', !circular ? `rounded-${rounded}` : `rounded-full btn--circular` ]")
  slot(name='append')
  span(:class='["inline-flex items-center justify-center", {"ml-4": iconLeft, "mr-4": iconRight, "w-6 h-6": circular }]')
    slot(scope='default')
  slot(name='prepend')
</template>

<style lang="scss">
button {
  cursor: pointer;
}
.btn {
  @apply inline-flex items-center shadow active:shadow-none focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-warmGray-50 focus:ring-warmGray-100;
  &--primary {
    @apply text-white bg-primary hover:bg-primary-600 focus:ring-primary;
  }
  &--primary-outlined {
    @apply text-primary bg-primary-50 border-1 border-primary hover:bg-primary-50 focus:ring-primary;
  }
  &--outlined {
  }
  &--xs {
    @apply px-2.5 py-1.5 text-xs;
  }
  &--sm {
    @apply px-3 py-2 text-sm;
  }
  &--base {
    @apply px-4 py-2 text-sm;
  }
  &--lg {
    @apply px-4 py-2 text-base;
  }
  &--xl {
    @apply px-6 py-3 text-base;
  }
  &--circular&--xs {
    @apply p-1;
  }
  &--circular&--sm {
    @apply p-1.5;
  }
  &--circular&--base {
    @apply p-2;
  }
  &--circular&--lg {
    @apply p-3;
  }
  &--circular&--xl {
    @apply p-4;
  }
}
</style>

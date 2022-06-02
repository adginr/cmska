<script setup>
import { ref, computed } from "vue";
import { useWindowEventListener } from "@/composables/event.js";
import {
  Dialog,
  DialogOverlay,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";

const props = defineProps(["open"]);
const emit = defineEmits(["update:open"]);

function toggle(state = false) {
  emit("update:open", state);
}

// const isOpen = computed(() => props.open);

function close(e) {
  toggle();
}
</script>

<template lang="pug">
div
  TransitionRoot(:show="open" as="template")
    Dialog(class='relative z-40' as='div' @close="toggle()")
      TransitionChild(as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0")
        DialogOverlay(class='fixed inset-0 border bg-black/30 ')
      TransitionChild(as='template'
          enter="duration-500 transform translate ease-out"
          enter-from="opacity-95 -translate-x-full"
          enter-to="opacity-100 translate-x-0"
          leave="duration-500 ease-out transform"
          leave-from="opacity-100 translate-x-0"
          leave-to="opacity-95 -translate-x-full")
        aside(class='bg-primary-800 w-80 shadow-md h-full text-primary-100 fixed left-0 top-0 h-full')
          div(class='i-mdi-close text-3xl absolute top-4 right-8 ring-1 ring-primary-100 rounded-full' @click="close")
          div.i-mdi-arch.text-4xl.text-white.m-6
          div.menu.p-4
            a.menu__link(href="")
              AtomTextWithIcon(hasIconLeft)
                template(#left)
                  .i-mdi-view-dashboard-outline.text-2xl
                | Dashboard
            a.menu__link(href="")
              AtomTextWithIcon(hasIconLeft)
                template(#left)
                  .i-mdi-cart-outline.text-2xl
                | Cart
            a.menu__link(href="")
              AtomTextWithIcon(hasIconLeft)
                template(#left)
                  .i-mdi-table.text-2xl
                | Data
            a.menu__link(href="")
              AtomTextWithIcon(hasIconLeft)
                template(#left)
                  .i-mdi-cog-outline.text-2xl
                | Settings
</template>

<style lang="scss">
.menu {
  &__link {
    @apply flex items-center cursor-pointer py-1 px-3 rounded mt-2;
    @apply focus:(ring-1 ring-primary-700 ) focus:outline-none;
    &--active,
    &:hover {
      @apply bg-primary-700 text-primary-50;
    }
  }
}
a {
  color: inherit;
}
</style>

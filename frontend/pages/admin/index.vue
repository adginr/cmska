<script setup>
import { ref } from "vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
const openSideBar = ref(false);
async function logout() {
  await useApi().logout();
}
definePageMeta({
  middleware: "auth",
});
</script>

<template lang="pug">
.root-page.flex.h-full
  aside(class='hidden lg:block w-80 flex-shrink-0 bg-primary-700 h-full text-primary-100')
    div.i-mdi-arch.text-4xl.text-white.m-6
    div.menu.p-4
      a.menu__link(href="#")
        AtomTextWithIcon(hasIconLeft)
          template(#left)
            .i-mdi-view-dashboard-outline.text-2xl
          | Dashboard
      a.menu__link(href="#")
        AtomTextWithIcon(hasIconLeft)
          template(#left)
            .i-mdi-cart-outline.text-2xl
          | Cart
      a.menu__link(href="#")
        AtomTextWithIcon(hasIconLeft)
          template(#left)
            .i-mdi-table.text-2xl
          | Data
      nuxt-link.menu__link(:to="{name: `auth-login`}" v-if='true')
        AtomTextWithIcon(hasIconLeft)
          template(#left)
            .i-mdi-cog-outline.text-2xl
          | Login
  main.flex-1
    header.header
      .header__aside-toggler
        button(class ='' @click='openSideBar =! openSideBar')
          .i-mdi-menu-close.text-3xl.font-thin
      Menu(as='div' class='header__user relative')
        MenuButton
          img(class='rounded-full w-10 h-10 focus:(outline-none ring-1 ring-primary-300)' src='https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80')
        MenuItems(class='absolute right-0 top-12 w-50 py-2 bg-white z-10  border border-gray-100 rounded-md shadow-md' as='div')
          MenuItem(v-slot='{ active }') 
            a(:class="['block p-2 text-sm cursor-pointer', {'bg-gray-100': active} ]" ) Settings 
          MenuItem(v-slot='{ active }') 
            a(:class="['block p-2 text-sm cursor-pointer', {'bg-gray-100': active} ]" ) Chat 
          MenuItem(v-slot='{ active }') 
            a(:class="['block p-2 text-sm cursor-pointer', {'bg-gray-100': active} ]" @click='logout') Sign Out 
          

    section.content
      h1.text-4xl Page Title
        
  ui-aside(v-model:open="openSideBar")
  footer
</template>

<style lang="scss">
.main {
  @apply flex-grow md:flex relative;
}
.header {
  @apply flex border-b border-gray-100 h-18 items-center px-4 shadow-sm;
  &__aside-toggler {
    @apply border-r border-gray-100 lg:hidden;
  }
  &__user {
    @apply ml-auto;
  }
}
</style>

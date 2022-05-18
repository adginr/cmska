<script setup>
import { ref } from "vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuItem,
  MenuItems,
  MenuButton,
} from "@headlessui/vue";
</script>
<template lang="pug">
.flex.flex-col
  Disclosure.bg-indigo-600(as='nav' v-slot="{open}" )
    .navbar.flex.h-16.justify-center.items-center(class='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8')
      .logo.flex.items-center.flex-shrink-0(class="lg:w-1/4")
        img.w-auto.h-8(src='https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg')
      //- Search Bar Seaction
      .searchbar.flex.flex-1
        .w-full.px-2(class='lg:px-6')
          .relative.text-indigo-200(class='focus-within:text-gray-400')
            .absolute.left-0.inset-y-0.pl-2.flex.items-center.pointer-events-none
              .i-mdi-magnify.text-xl
            input#search.search(placeholder='Search Projects' name='search' type='Search')
      //- 
      div(class='nav__right hidden lg:(flex w-1/4) ')
        a.nav__link Documentation 
        a.nav__link Support
        //- Profile dropdown
        Menu.ml-2.flex-shrink-0.relative(as='div')
          MenuButton(class='profile__btn')
            base-avatar(src='https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"')
          transition(
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-out"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0")
            MenuItems.profile__items
              MenuItem.profile__link(v-slot="{active}")
                a(href="" :class='[active ? "bg-gray-100" : ""]') Item 1
              MenuItem.profile__link(v-slot="{active}")
                a(href="" :class='[active ? "bg-gray-100" : ""]') Item 2
              MenuItem.profile__link(v-slot="{active}")
                a(href="" :class='[active ? "bg-gray-100" : ""]') Item 3
      //- Mobile Menu Button
      DisclosureButton(class='lg:hidden')
        div
          .i-mdi-menu.text-4xl.text-indigo-400(class='hover:text-white' v-if='!open')
          .i-mdi-close.text-4xl.text-indigo-400(class='hover:text-white' v-else)
    DisclosurePanel(class='lg:(hidden) p-3')
      DisclosureButton(as='a' href="" class='block p-3 text-white text-base font-thin bg-indigo-800 rounded-md') Dashboard
      DisclosureButton(as='a' href="" class='mt-2 block p-3 text-white text-base font-thin bg-indigo-800 rounded-md') Support
  section(class="content flex-grow max-w-7xl mx-auto w-full lg:flex")
    main(class='flex-1 main min-w-0 xl:flex xl:w-64')
      //- Left aria
      div(class='h-full p-6 border-b border-gray-200 bg-white')
        div(class='h-full relative' style='min-height: 16rem;')
          .inner-border
          | Left
      //- Main aria
      div(class='h-full p-6 border-b border-gray-200 bg-white lg:flex-1')
        div(class='h-full relative' style='min-height: 36rem;')
          .inner-border
          | Main
    aside(class='bg-gray-50')
      div(class='h-full p-6 border-b border-gray-200 bg-white lg:w-80')
        div(class='h-full relative' style='min-height: 36rem;')
          .inner-border
          | Aside
</template>
<style lang="scss">
.container {
  @apply;
}
.nav__right {
  @apply items-center text-sm font-medium justify-end text-indigo-200;
}
.nav__link {
  @apply cursor-pointer p-3 hover:text-white;
}
.search {
  @apply block leading-5 pl-10 pr-3 py-2 w-full bg-indigo-400 bg-opacity-25 text-indigo-100 placeholder-indigo-200 rounded sm:text-sm;

  @apply focus:(outline-none bg-white ring-0 placeholder-gray-400 text-gray-900);
}
.profile {
  &__btn {
    @apply flex items-center focus:(outline-none ring-2 ring-offset-2 rounded-full ring-offset-indigo-700 ring-white);
  }
  &__items {
    @apply flex flex-col absolute origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5;
    @apply focus:(outline-none);
  }
  &__link {
    @apply block px-4 py-2 text-gray-700;
  }
}
.inner-border {
  @apply absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg;
}
</style>

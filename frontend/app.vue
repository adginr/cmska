<template>
  <div class="root-nuxt h-full">
    <NuxtLayout class="h-full">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
:root {
  --theme-img-scale: 1;
}
#__nuxt,
html,
body {
  @apply h-full;
}
</style>

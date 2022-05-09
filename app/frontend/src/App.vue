<script setup>
import { onBeforeMount, onMounted, ref } from "vue";
import { useDummyStore } from "@/stores/DummyStore.js";
const store = useDummyStore();
store.fetchProducts();
const prod = ref({});

async function fetchById(id) {
  prod.value = await store.fetchProductById(id);
}

const unsubscribe = store.$onAction(({ name, store, args, after, onError }) => {
  const startTime = Date.now();
  console.log(`Start "${name}" with params [${args.join(", ")}].`);
  after((result) => {
    console.log(
      `Finished "${name}" after ${
        Date.now() - startTime
      }ms.\nResult: ${result}.`
    );
  });
  onError((error) => {
    console.warn(
      `Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`
    );
  });
});
unsubscribe();
</script>

<template lang="pug">
.root
  h1.text-2xl.font-bold Product List
  p {{store.fetching ? "Fetching froducts" : "Done"}}
  ul(v-if='!store.fetching'  v-for='product in store.products' key='product.id')
    li {{product.name}}

  button.btn(@click="fetchById(2)") Fetch 2nd product
  pre(v-if='Object.keys(prod).length') {{prod}}

  pre {{store.context}}
  
  
</template>

<style lang="sass">
.btn
  @apply p-4 bg-light-600 hover:bg-light-900
</style>

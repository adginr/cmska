import { defineStore } from "pinia";
import { $fetch } from "ohmyfetch";

const api = $fetch.create({ baseURL: "https://fakestoreapi.com" });

export const useDummyStore = defineStore("DummyStore", {
  // state
  state: () => {
    return {
      fetching: false,
      counter: 1,
      name: "kolin",
      someAttr: 12,
      products: [
        { id: 1, name: "first" },
        { id: 2, name: "second" },
      ],
    };
  },
  getters: {
    lastname() {
      return `${this.name} + Nickolai`;
    },
    productById(state) {
      return (id) => state.products.filter((el) => el.id === id);
    },
  },
  actions: {
    async fetchProducts() {
      this.fetching = true;
      this.products = await api("/products");
      console.log(this.products);
      this.fetching = false;
      return;
    },
    async fetchProductById(id) {
      return await api(`/products/${id}`);
    },
  },
});

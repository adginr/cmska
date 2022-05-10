import { createApp } from "vue";
import App from "./App.vue";

// CSS
import "./assets/scss/main.scss";
import "virtual:windi.css";
import "virtual:windi-devtools";

// Store
import { createPinia } from "pinia";
function secretItem() {
  return { verySecure: "This is very serure item" };
}

// Router
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(createPinia().use(secretItem)).mount("#app");

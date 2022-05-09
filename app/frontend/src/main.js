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

createApp(App).use(createPinia().use(secretItem)).mount("#app");

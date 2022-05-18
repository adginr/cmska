import { onMounted, onUnmounted } from "vue";
export function useWindowEventListener(onEvent, callback) {
  onMounted(() => window.addEventListener(onEvent, callback));
  onUnmounted(() => window.addEventListener(onEvent, callback));
}

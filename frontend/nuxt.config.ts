import { defineNuxtConfig } from "nuxt";
import IconsResolver from "unplugin-icons/resolver";
import ViteComponents from "unplugin-vue-components/vite";
import extractorPug from "@unocss/extractor-pug";
import { extractorSplit } from "@unocss/core";

export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "nuxt-windicss"],
  vite: {
    plugins: [
      ViteComponents({
        resolvers: [
          IconsResolver({
            componentPrefix: "",
          }),
        ],
        dts: true,
      }),
    ],
  },

  unocss: {
    // presets
    uno: false,
    icons: {
      scale: 1.2,
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    },
    extractors: [extractorPug(), extractorSplit],
  },
});

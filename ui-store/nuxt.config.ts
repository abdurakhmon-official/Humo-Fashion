// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  app: {
    head: {
      title: "Humo Fashion",
      titleTemplate: "Humo Fashion - Online Shopping Mall",
      htmlAttrs: { class: "light scroll-smooth", dir: "ltr", lang: "en" },
      bodyAttrs: {
        class: "dark:bg-slate-900",
      },
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1 maximum-scale-1, user-scalable=no",
        },
        {
          id: "description",
          name: "description",
          content: "",
        },
        {
          name: "format-detection",
          content: "telephone=no",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css",
        },
      ],

      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",
        },
      ],
    },
  },

  css: ["~/assets/css/tailwind.css", "~/assets/css/materialdesignicons.css"],
  modules: ["@pinia/nuxt", "pinia-plugin-persistedstate/nuxt"],
  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    public: {
      baseCatalogApiUrl: process.env.CATALOG_SERVICE_BASE_API_URL,
      baseOrderApiUrl: process.env.ORDER_SERVICE_BASE_API_URL,
      baseUserApiUrl: process.env.USER_SERVICE_BASE_API_URL,
      baseSocialApiUrl: process.env.SOCIAL_SERVICE_BASE_API_URL,
      googleMapsApiKey: process.env.NUXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      apiBase: "/api",
    },
  },
});

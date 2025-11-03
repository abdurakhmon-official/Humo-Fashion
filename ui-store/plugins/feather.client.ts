import feather from "feather-icons";

export default defineNuxtPlugin(() => {
  if (process.client) {
    const replaceFeatherIcons = () => feather.replace();

    window.addEventListener("load", replaceFeatherIcons);

    const nuxtApp = useNuxtApp();
    nuxtApp.hooks.hook("page:finish", replaceFeatherIcons);
  }
});

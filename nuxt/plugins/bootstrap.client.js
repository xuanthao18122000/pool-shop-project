export default defineNuxtConfig({
  plugins: [
    {
      src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
      mode: "clients",
    },
  ],
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "@/assets/css/global.css",
  ],
});
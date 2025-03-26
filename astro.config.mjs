// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
<<<<<<< HEAD
  site: 'https://danydf1.github.io/',
=======
  site: 'https://danydf1.github.io',
>>>>>>> 1af4f2dc522c08253c5862047ab39aefe3018931
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});

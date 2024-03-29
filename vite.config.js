import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";

export default defineConfig(() => {
  return {
    base: "/your-fitness/",
    plugins: [
      ViteImageOptimizer({
        exclude: "icons-sprite.svg",
        svg: {
          multipass: true,
          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: {
                  cleanupNumericValues: false,
                  removeViewBox: false, // https://github.com/svg/svgo/issues/1128
                },
                cleanupIDs: {
                  minify: false,
                  remove: false,
                },
                convertPathData: false,
              },
            },
            "sortAttrs",
            {
              name: "addAttributesToSVGElement",
              params: {
                attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
              },
            },
          ],
        },
        png: {
          // https://sharp.pixelplumbing.com/api-output#png
          quality: 20,
        },
        jpeg: {
          // https://sharp.pixelplumbing.com/api-output#jpeg
          quality: 20,
        },
        jpg: {
          // https://sharp.pixelplumbing.com/api-output#jpeg
          quality: 20,
        },
        tiff: {
          // https://sharp.pixelplumbing.com/api-output#tiff
          quality: 20,
        },
        // gif does not support lossless compression
        // https://sharp.pixelplumbing.com/api-output#gif
        gif: {},
        webp: {
          // https://sharp.pixelplumbing.com/api-output#webp
          lossless: false,
        },
        avif: {
          // https://sharp.pixelplumbing.com/api-output#avif
          lossless: false,
        },
      }),
      injectHTML(),
      FullReload(["config/routes.rb", "app/views/**/*"]),
    ],
  };
});

// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "PP Neue Montreal",
      cssVariable: "--font-neue-montreal",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/PPNeueMontreal-Thin.ttf"],
            weight: 100,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/PPNeueMontreal-ThinItalic.ttf"],
            weight: 100,
            style: "italic",
          },
          {
            src: ["./src/assets/fonts/PPNeueMontreal-Light.ttf"],
            weight: 300,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/PPNeueMontreal-Book.ttf"],
            weight: 450,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/PPNeueMontreal-Regular.ttf"],
            weight: 400,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/PPNeueMontreal-Italic.ttf"],
            weight: 400,
            style: "italic",
          },
          {
            src: ["./src/assets/fonts/PPNeueMontreal-Medium.ttf"],
            weight: 500,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/PPNeueMontreal-Bold.ttf"],
            weight: 700,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/PPNeueMontreal-BoldItalic.ttf"],
            weight: 700,
            style: "italic",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "PT Serif",
      cssVariable: "--font-pt-serif",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/PTSerif-Regular.ttf"],
            weight: 400,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/PTSerif-Italic.ttf"],
            weight: 400,
            style: "italic",
          },
          {
            src: ["./src/assets/fonts/PTSerif-Bold.ttf"],
            weight: 700,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/PTSerif-BoldItalic.ttf"],
            weight: 700,
            style: "italic",
          },
        ],
      },
    },
  ],
});

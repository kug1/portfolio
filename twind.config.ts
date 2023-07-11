import { Options } from "$fresh/plugins/twind.ts";
import * as colors from "twind/colors";

export default {
  selfURL: import.meta.url,
  theme: {
    colors: {
      blue: colors.blue,
      black: colors.black,
      gray: colors.gray,
      green: colors.green,
      white: colors.white,
      yellow: colors.yellow,
      transparent: "transparent",
    },
    extend: {
      colors: {
        header: "#161616",
        text: "#666666",
        primary: "#ffffff",
        secondary: "#fafafa",
        accent: "#2563EB",
      },
    },
  },
} as Options;

import type { Theme } from "@emotion/react";

export const darkTheme: Theme = {
  color: {
    primary: {
      lighter: "#4D94FF",
      default: "#1774FE",
      darker: "#0E69F1",
    },

    danger: {
      lighter: "#FF8282",
      default: "#F84A4A",
      darker: "#DC3D3D",
    },

    text: {
      primary: {
        default: "#FFFFFF",
      },

      secondary: {
        default: "#9E9E9E",
      },
    },

    input: {
      background: "#101010",
    },

    outline: "#1C1C1C",
    background: "#000000",
    foreground: "#171717",
  },
};

import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      primary: {
        lighter: string;
        default: string;
        darker: string;
      };

      text: {
        primary: {
          default: string;
        };

        secondary: {
          default: string;
        };
      };

      background: string;
      foreground: string;
    };
  }
}

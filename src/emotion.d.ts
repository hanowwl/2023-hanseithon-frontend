import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      primary: {
        lighter: string;
        default: string;
        darker: string;
      };

      danger: {
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

      input: {
        background: string;
      };

      outline: string;
      background: string;
      foreground: string;
    };
  }
}

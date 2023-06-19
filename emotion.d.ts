import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      primary: {
        default: string;
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

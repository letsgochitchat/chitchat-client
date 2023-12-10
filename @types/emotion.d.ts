import '@emotion/react';
import { Colors, Fonts } from '@chitchat/styles';

declare module '@emotion/react' {
  export type Theme = {
    colors: Colors;
    fonts: Fonts;
  };
}

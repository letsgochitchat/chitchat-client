'use client';

import { GlobalStyle, theme } from '@/styles';
import { ThemeProvider } from '@emotion/react';
import type { PropsWithChildren } from 'react';

type ChitchatStyleProviderProps = PropsWithChildren;

export const ChitchatStyleProvider = ({ children }: ChitchatStyleProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

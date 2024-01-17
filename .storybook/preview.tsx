import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../src/styles/themes';
import { GlobalStyle } from '../src/styles';
import { ToastProvider } from '../src/providers';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <GlobalStyle />
        <Story />
      </ToastProvider>
    </ThemeProvider>
  ),
];

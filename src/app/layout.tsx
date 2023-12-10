import { type PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { StyleProvider, SuspensiveProvider } from '@chitchat/providers';

export const metadata: Metadata = {
  title: 'Chitchat',
  description: "Let's Chitchat!",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ko">
      <body>
        <SuspensiveProvider>
          <StyleProvider>{children}</StyleProvider>
        </SuspensiveProvider>
      </body>
    </html>
  );
};

export default RootLayout;

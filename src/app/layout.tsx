import { type PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { StyleProvider } from '@/providers';
import QueryClientProvider from '@/providers/QueryClientProvider';

export const metadata: Metadata = {
  title: 'Chitchat',
  description: "Let's Chitchat!",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ko">
      <body>
        <QueryClientProvider>
          <StyleProvider>{children}</StyleProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;

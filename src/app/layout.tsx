import type { Metadata } from 'next';
import { ChitchatStyleProvider } from '@/providers';

export const metadata: Metadata = {
  title: 'Chitchat',
  description: "Let's Chitchat!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr">
      <body>
        <ChitchatStyleProvider>{children}</ChitchatStyleProvider>
      </body>
    </html>
  );
}

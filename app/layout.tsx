import { DefaultLayout, ReduxProvider } from '@/components';
import { strings } from '@/constants';
import '@/styles/globals.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: strings.appName,
  description: strings.appDescription
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ReduxProvider>
          <DefaultLayout>{children}</DefaultLayout>
        </ReduxProvider>
      </body>
    </html>
  );
}

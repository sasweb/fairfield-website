import { Toaster } from '@/components/ui/sonner';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const defaultUrl = process.env.NEXT_PUBLIC_BASE_URL
  ? process.env.NEXT_PUBLIC_BASE_URL
  : 'https://fairfield-archer.com';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();

  return {
    metadataBase: new URL(defaultUrl),
    title: 'Fairfield Archer  - Regulatory Compliance Workflows as a Service',
    description: `${t('Fairfield Archer bietet KI-gestützte Workflow-Lösungen für regulatorisches Compliance Management – automatisiert, effizient und effektiv')}.`,
  };
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} antialiased`}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;

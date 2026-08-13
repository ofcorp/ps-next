import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { JSX } from 'react/jsx-runtime';
import Header from '@/components/Header/Header';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PS NextJS homework',
  description: 'Домашнее задание по NextJS',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="ru" className={`${openSans.variable}`}>
      <body>
        <header>
          <Header />
        </header>
        {children}
      </body>
    </html>
  );
}

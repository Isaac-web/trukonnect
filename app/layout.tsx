import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';
import { halyardDisplay, halyardText, halyardMicro } from './fonts';

export const metadata: Metadata = {
  title: 'Master Gorgeous UI Design',
  description:
    'Transform your visual design skills with our comprehensive course',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${halyardDisplay.variable} ${halyardText.variable} ${halyardMicro.variable} font-halyard-display antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}

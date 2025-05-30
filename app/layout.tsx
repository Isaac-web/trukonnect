import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';
import { halyardDisplay, halyardText, halyardMicro } from './fonts';

export const metadata: Metadata = {
  title: 'Trukonnect | True fans, Real Rewards',
  description:
    "Ghana's first platform that connects real users to real brands. Earn tokens by engaging, and cash out with ease.",
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

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The blog - This is a blog with Next.js',
  description: 'Description of the app',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang='pt-br' className='dark'>
      <body>{children}</body>
    </html>
  );
}

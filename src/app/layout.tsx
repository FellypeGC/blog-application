import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'The blog - This is a blog with Next.js',
    template: '%s | The blog',
  },
  description: 'Description of the app',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang='pt-br' className='dark'>
      <body>
        <Container>
          <Header />

          {children}

          <Footer />
        </Container>
      </body>
    </html>
  );
}

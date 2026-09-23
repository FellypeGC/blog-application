import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Container } from '@/components/Container';

export const metadata: Metadata = {
  title: { 
    default: 'The blog - This is a blog with Next.js',
    template: '%s | The blog'
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

          <footer>
            <p className='text-6xl font-bold text-center py-8'>
              AQUI É O FOOTER
            </p>
          </footer>
        </Container>
      </body>
    </html>
  );
}

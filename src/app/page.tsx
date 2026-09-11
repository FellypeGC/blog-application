import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';

import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// page.tsx (server) -> menu.tsx (server) -> link (client)

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <Link className='w-full h-full overflow-hidden rounded-xl' href='#'>
          <Image
            className='w-full h-full object-cover object-center group-hover:scale-105 transition duration-300'
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Título do post'
            priority
          />
        </Link>

        <div className='flex flex-col gap-4 sm:justify-center'>
          <time className='text-slate-600 mb-4 block text-sm/tight' dateTime='2025-04-20'>
            20/04/2025 10:00
          </time>

          <h1 className='text-2xl/tight mb-4 font-extrabold sm:text-4xl'>
            <Link href='#'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Link>
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            quibusdam dolorum, exercitationem numquam, maxime doloribus nisi
            consequatur, repellendus officiis dolores laborum. Consequatur
            aliquam eum fugiat, modi debitis at nostrum sit.
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>AQUI É O FOOTER</p>
      </footer>
    </Container>
  );
}

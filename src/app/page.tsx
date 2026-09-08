import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';

import { Suspense } from 'react';

// page.tsx (server) -> menu.tsx (server) -> link (client)

export default async function HomePage() {
  return (
    <div>
      <header>
        <h1 className='text-6xl font-bold text-center py-8'>AQUI É A HEADER</h1>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>AQUI É O FOOTER</p>
      </footer>
    </div>
  );
}

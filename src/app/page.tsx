import { Container } from '@/components/Container';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';

import { Suspense } from 'react';

// page.tsx (server) -> menu.tsx (server) -> link (client)

export default async function HomePage() {
  return (
    <Container>
      <header>
        <h1 className='text-6xl font-bold text-center py-8'>AQUI É A HEADER</h1>

        <p className='text-justify'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod error
          impedit consequuntur ex aliquam qui numquam, deleniti officia esse,
          incidunt modi eveniet sapiente ut accusamus reiciendis ducimus
          perferendis tenetur iure!
        </p>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>AQUI É O FOOTER</p>
      </footer>
    </Container>
  );
}

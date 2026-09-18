import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';
import { PostSummary } from '../PostSummary';

export function PostFeatured() {
  const slug = 'anything';
  const postLink = `/post/${slug}`;

  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: '/images/bryen_9.png',
          alt: 'alt da imagem',
          priority: true,
        }}
      />

      <PostSummary
        postLink={postLink}
        postHeading='h1'
        createdAt={'2025-04-08T00:33:56.907Z'}
        title={'Rotina matinal de pessoas altamente eficazes'}
        excerpt={'O Next.js também é uma boa escolha para quem quer se preocupar com performance e SEO.'}
      />
    </section>
  );
}

import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { drizzleDb } from '@/db/drizzle';
import { postsTable } from '@/db/drizzle/schemas';
import { eq, desc } from 'drizzle-orm';

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    console.log('\n', 'D findAllPublic', '\n');

    const publicPosts = await drizzleDb.query.posts.findMany({
      // orderBy: desc(postsTable.createdAt),
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return publicPosts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    console.log('\n', 'D findBySlugPublic', '\n');

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) => and (eq(posts.published, true), eq(posts.slug, slug)),
    });

    if (!post) throw new Error('Post not found for slug: ' + slug);

    return post;
  }

  async findAll(): Promise<PostModel[]> {
    console.log('\n', 'D findAll', '\n');

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    if (!posts) throw new Error('Post not found');

    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    console.log('\n', 'D findById', '\n');

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) throw new Error('Post not found for ID: ' + id);

    return post;
  }
}

(async () => {
  const drizzlePostsRepo = new DrizzlePostRepository();

  // post.forEach(post => console.log(post.id, post.published));
})();


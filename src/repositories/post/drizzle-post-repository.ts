import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { drizzleDb } from '@/db/drizzle';
import { postsTable } from '@/db/drizzle/schemas';
import { eq, desc } from 'drizzle-orm';

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    const publicPosts = await drizzleDb.query.posts.findMany({
      // orderBy: desc(postsTable.createdAt),
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return publicPosts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel[]> {}

  async findAll(): Promise<PostModel[]> {}

  async findById(id: string): Promise<PostModel[]> {}
}

(async () => {
  const drizzlePostsRepo = new DrizzlePostRepository();
  const publicPosts = await drizzlePostsRepo.findAllPublic();

  publicPosts.forEach(post => console.log(post.slug, post.published));
})();


import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { drizzleDb } from '@/db/drizzle';
import { logColor } from '@/utils/log-color';

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    logColor('findAllPublic', Date.now());

    const publicPosts = await drizzleDb.query.posts.findMany({
      // orderBy: desc(postsTable.createdAt),
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return publicPosts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    logColor('findBySlugPublic', Date.now());

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });

    if (!post) throw new Error('Post not found for slug: ' + slug);

    return post;
  }

  async findAll(): Promise<PostModel[]> {
    logColor('D findAll', Date.now());

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    if (!posts) throw new Error('Post not found');

    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    logColor('findById', Date.now());

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

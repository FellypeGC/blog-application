'use server';
import { postRepository } from '@/repositories/post';
import { updateTag } from 'next/cache';

export async function deletePostAction(id: string) {
  // TODO: check login of user

  if (!id || typeof id !== 'string') {
    return {
      error: 'Dados inválidos',
    };
  }

  let post;
  try {
    post = await postRepository.delete(id);
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }

    return {
      error: 'Erro desconhecido',
    };
  }

  // TODO: updateTag (revalidateTag) or revadidatePath
  updateTag('posts');
  updateTag(`post-${post.slug}`);

  return {
    error: '',
  };
}

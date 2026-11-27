'use server';
import { verifyLoginSession } from '@/lib/login/manage-login';
import { postRepository } from '@/repositories/post';
import { updateTag } from 'next/cache';

export async function deletePostAction(id: string) {
  const isAuthenticated = await verifyLoginSession();

  if (!isAuthenticated) {
    return {
      error: 'Faça login novamente em outra aba',
    };
  }

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

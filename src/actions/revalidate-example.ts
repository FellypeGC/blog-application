'use server';

import { revalidateTag } from "next/cache";

export async function revalidateExampleActions(formData: FormData) {
  const path = formData.get('path') || '';
  console.log('Im in a server action', path);

  // revalidatePath(`${path}`);
  revalidateTag('posts', { expire: 0 });
  revalidateTag('post-rotina-matinal-de-pessoas-altamente-eficazes', { expire: 0 });
}
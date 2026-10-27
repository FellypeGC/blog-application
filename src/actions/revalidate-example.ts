'use server';

import { revalidateTag } from "next/cache";

export async function revalidateExampleActions(formData: FormData) {
  const path = formData.get('path') || '';
  console.log('Im in a server action', path);

  // revalidatePath(`${path}`);
  revalidateTag('ExemploDynamicPage', { expire: 10 });
}
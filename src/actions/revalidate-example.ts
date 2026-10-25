'use server';

export async function revalidateExampleActions(formData: FormData) {
  const path = formData.get('path') || '';
  console.log('Im in a server action', path);
}
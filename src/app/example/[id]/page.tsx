import { revalidateExampleActions } from '@/actions/revalidate-example';
import { formatHour } from '@/utils/format-datetime';

// export const dynamic = 'force-static';
// export const revalidate = 30;

// export async function generateStaticParams() {
//   return [{ id: '1' }, { id: '2' }];
// }

export default async function ExampleDynamicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const hour = formatHour(Date.now());

  const response = await fetch('https://randomuser.me/api/?results=1', {
    next: {
      tags: ['randomuser'],
      revalidate: 30,
    }
  });
  const jsonResponsse = await response.json();
  const name = jsonResponsse.results[0].name.first;

  return (
    <main className='min-h-150 text-4xl font-bold'>
      <div>
        Name: {name} - Hora: {hour} (ID: { id })
      </div>

      <form className='py-16' action={revalidateExampleActions}>
        <input type="hidden" name='path' defaultValue={`/example/${id}`} />

        <button className='bg-amber-500 text-white p-2 rounded hover:bg-amber-600 transition cursor-pointer' type="submit">Revalidate</button>
      </form>
    </main>
  );
}

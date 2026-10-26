import { revalidateExampleActions } from '@/actions/revalidate-example';
import { formatHour } from '@/utils/format-datetime';

export const dynamic = 'force-static';
export const revalidate = 30;
// export const dynamicParams = true;

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

  return (
    <main className='min-h-150 text-4xl font-bold'>
      <div>
        Hora: {hour} (ID: { id })
      </div>

      <form className='py-16' action={revalidateExampleActions}>
        <input type="hidden" name='path' defaultValue={`/example/${id}`} />

        <button className='bg-amber-500 text-white p-2 rounded hover:bg-amber-600 transition cursor-pointer' type="submit">Revalidate</button>
      </form>
    </main>
  );
}

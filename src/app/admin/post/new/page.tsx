import { Button } from "@/components/Button";

export const dynamic = 'force-dynamic';

export default async function AdminPostNewPage() {
  return <div className='py-16 text-6xl'>
    <Button type="submit">Funciona como o do JSX</Button>
  </div>;
}

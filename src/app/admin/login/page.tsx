import { Button } from '@/components/Button';
import { InputText } from '@/components/InputText';
import clsx from 'clsx';
import { LogInIcon } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminLoginPage() {
  return (
    <div
      className={clsx(
        'flex items-center justify-center',
        'text-center max-w-sm mt-16 mb-32 mx-auto',
      )}
    >
      <form action='' className='flex-1 flex flex-col gap-6'>
        <InputText
          labelText='Usuário'
          name='username'
          placeholder='Seu usuário'
          type='text'
          disabled={false}
        />

        <InputText
          labelText='Senha'
          name='password'
          placeholder='Sua senha'
          type='password'
          disabled={false}
        />

        <Button disabled={false} type='submit' className='mt-4'>
          <LogInIcon />
          Enviar
        </Button>
      </form>
    </div>
  );
}

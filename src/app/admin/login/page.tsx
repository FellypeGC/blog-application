import { loginAction } from '@/actions/login/login-action';
import { Button } from '@/components/Button';
import { InputText } from '@/components/InputText';
import clsx from 'clsx';
import { LogInIcon } from 'lucide-react';
import { useActionState } from 'react';

export const dynamic = 'force-dynamic';

export default async function AdminLoginPage() {
  const initialState = {
    username: '',
    error: '',
  }
  const [state, action, isPending] = useActionState(loginAction, initialState);

  return (
    <div
      className={clsx(
        'flex items-center justify-center',
        'text-center max-w-sm mt-16 mb-32 mx-auto',
      )}
    >
      <form action={action} className='flex-1 flex flex-col gap-6'>
        <InputText
          labelText='Usuário'
          name='username'
          placeholder='Seu usuário'
          type='text'
          disabled={isPending}
        />

        <InputText
          labelText='Senha'
          name='password'
          placeholder='Sua senha'
          type='password'
          disabled={isPending}
        />

        <Button disabled={isPending} type='submit' className='mt-4'>
          <LogInIcon />
          Enviar
        </Button>
      </form>
    </div>
  );
}

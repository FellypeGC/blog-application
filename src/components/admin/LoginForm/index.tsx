'use client';

import { loginAction } from '@/actions/login/login-action';
import { Button } from '@/components/Button';
import { InputText } from '@/components/InputText';
import clsx from 'clsx';
import { LogInIcon } from 'lucide-react';
import { useActionState, useEffect } from 'react';
import { toast } from 'react-toastify';

export default function LoginForm() {
  const initialState = {
    username: '',
    error: '',
  };
  const [state, action, isPending] = useActionState(loginAction, initialState);

  useEffect(() => {
    if (state.error) {
      toast.dismiss();
      toast.error(state.error);
    }
  }, [state]);

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
          defaultValue={state.username}
        />

        <InputText
          labelText='Senha'
          name='password'
          placeholder='Sua senha'
          type='password'
          disabled={isPending}
          defaultValue={state.username}
        />

        <Button disabled={isPending} type='submit' className='mt-4'>
          <LogInIcon />
          Enviar
        </Button>

        {!!state.error && <p className='text-red-600'>{state.error}</p>}
      </form>
    </div>
  );
}

'use client';

import clsx from 'clsx';

export function Header() {
  console.log('header')
  return (
    <h1
      className={clsx(
        'text-6xl font-bold',
        'text-blue-500 hover:text-blue-50',
        'hover:bg-blue-500',
        'transition duration-300',
      )}
      onClick={() => alert(123)}
    >
      This is the title of the homepage in Next.js
    </h1>
  );
}

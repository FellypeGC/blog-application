'use client'; // <- Spreads to all component that I import here

export function ClientComponent({ children }: { children: React.ReactNode }) {
  console.log('ClientComponent');
  return (
    <div>ClientComponent</div>
  )
}
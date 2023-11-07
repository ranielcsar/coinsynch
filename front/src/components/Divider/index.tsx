import { twMerge } from 'tailwind-merge'

export function Divider({ className = '' }: { className?: string }) {
  return (
    <div
      className={twMerge('min-w-screen mx-5 h-[0.1rem] bg-secondary-200', className)}
    />
  )
}

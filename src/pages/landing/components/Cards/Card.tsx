import { twMerge } from 'tailwind-merge'

export function Card({ className = '' }: { className?: string }) {
  return (
    <div
      className={twMerge(
        'flex h-72 w-[95%] flex-col gap-5 rounded-md border border-secondary-100 bg-white p-5 shadow-md md:shadow-lg',
        className,
      )}
    >
      <div className="h-12 w-12 rounded-full bg-secondary-300" />

      <hgroup>
        <h6 className="font-bold text-primary-500">For your company</h6>
        <h4 className="font-bold">Crypto Solutions</h4>
      </hgroup>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
    </div>
  )
}

import { PropsWithChildren } from 'react'

export function Tag({ children }: PropsWithChildren) {
  return (
    <div className="inline-flex h-10 w-[101px] items-center justify-center rounded bg-primary-100 px-4 py-1 text-base text-primary-500">
      {children}
    </div>
  )
}

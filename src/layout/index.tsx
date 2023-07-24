import { PropsWithChildren } from 'react'

import { Roboto } from 'next/font/google'
const roboto = Roboto({
  subsets: ['latin'],
  variable: '--roboto',
  weight: ['400', '500', '700'],
})

export function Layout({ children }: PropsWithChildren<any>) {
  return (
    <div
      className={`text-default_text ${roboto.className} m-auto flex min-h-screen w-full flex-col bg-white`}
    >
      <>{children}</>
    </div>
  )
}

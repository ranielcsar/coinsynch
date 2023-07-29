import { PropsWithChildren } from 'react'

import { Roboto } from 'next/font/google'
import { QueryClient, QueryClientProvider } from 'react-query'

import { CoinSynchLogo } from '@/assets/icons'
const roboto = Roboto({
  subsets: ['latin'],
  variable: '--roboto',
  weight: ['400', '500', '700'],
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
})

export function Layout({ children }: PropsWithChildren<any>) {
  return (
    <QueryClientProvider client={queryClient}>
      <div
        className={`text-default_text ${roboto.className} m-auto flex min-h-screen w-full flex-col bg-white`}
      >
        <>{children}</>
        <Footer />
      </div>
    </QueryClientProvider>
  )
}

function Footer() {
  return (
    <footer className="w-full bg-white py-3 shadow-[0_2px_8px_2px_rgba(0,0,0,0.25)] md:m-auto md:justify-between md:px-5 xl:px-0">
      <div className="flex max-w-screen-xl items-center justify-center md:justify-between xl:m-auto">
        <p className="hidden md:block">Copyright © 2022 - All rights reserved</p>

        <div className="h-12 w-32">
          <CoinSynchLogo />
        </div>
      </div>
    </footer>
  )
}

import { PropsWithChildren } from 'react'
import 'react-toastify/dist/ReactToastify.css'

import { Roboto } from 'next/font/google'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'

import { AuthContextProvider } from '@/pages/authContext'

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
      <AuthContextProvider>
        <div
          className={`text-default_text ${roboto.className} m-auto flex min-h-screen w-full flex-col bg-white`}
        >
          <>{children}</>
          <ToastContainer />
        </div>
      </AuthContextProvider>
    </QueryClientProvider>
  )
}

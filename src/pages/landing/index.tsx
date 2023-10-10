import { useState } from 'react'

import { SignIn, SignUp } from '@/components/Forms'
import { useBreakpoints } from '@/hooks/useBreakpoints'
import { Footer } from '@/layout/Footer'
import { Cards, Header, Hero, Newsletter, TopCryptos } from '@/page-components/landing'

import { LandingContext } from './context'

export function LandingPage() {
  const [signUpModalOpen, setSignUpModalOpen] = useState(false)
  const [signInModalOpen, setSignInModalOpen] = useState(false)

  const { isMobile } = useBreakpoints()

  const contextValue = {
    signInModalOpen,
    signUpModalOpen,
    setSignInModalOpen,
    setSignUpModalOpen,
  }

  const gradientBg = {
    background: `linear-gradient(0deg, rgba(86,86,87,0.4682247899159664) 0%, rgba(255,255,255,0.17690826330532217) ${
      isMobile ? '60%' : '45%'
    })`,
  }

  return (
    <LandingContext value={contextValue}>
      <SignUp isOpen={signUpModalOpen} onClose={() => setSignUpModalOpen(false)} />
      <SignIn isOpen={signInModalOpen} onClose={() => setSignInModalOpen(false)} />

      <main className="relative min-h-screen">
        <Header />

        <Hero />

        <div className="h-full w-full" style={gradientBg}>
          <Cards />

          <TopCryptos />
        </div>

        <Newsletter />

        <Footer />
      </main>
    </LandingContext>
  )
}

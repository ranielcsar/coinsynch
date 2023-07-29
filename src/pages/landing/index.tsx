import { useState } from 'react'

import { SignIn, SignUp } from '@/components/Forms'
import { useBreakpoints } from '@/hooks/useBreakpoints'

import { Cards } from './components/Cards'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Subscribe } from './components/Subscribe'
import { TopCryptos } from './components/TopCryptos'
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

      <main>
        <Header />

        <Hero />

        <div className="h-full w-full" style={gradientBg}>
          <Cards />

          <TopCryptos />
        </div>

        <Subscribe />
      </main>
    </LandingContext>
  )
}

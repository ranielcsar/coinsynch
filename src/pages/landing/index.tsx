import { useState } from 'react'

import { CoinSyncLogo } from '@/assets/icons'
import { SignIn, SignUp } from '@/components/Forms'
import { useMediaQuery } from '@/hooks/useMediaQuery'

import { Cards } from './components/Cards'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Subscribe } from './components/Subscribe'
import { TopCryptos } from './components/TopCryptos'
import { LandingContext } from './context'

export function LandingPage() {
  const [signUpModalOpen, setSignUpModalOpen] = useState(false)
  const [signInModalOpen, setSignInModalOpen] = useState(false)

  const isMobile = useMediaQuery('(min-width: 320px) and (max-width: 760px)')

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

        <Footer />
      </main>
    </LandingContext>
  )
}

function Footer() {
  return (
    <footer className="flex w-full max-w-screen-xl justify-center bg-white py-5 md:m-auto md:justify-between md:px-10">
      <p className="hidden md:block">Copyright © 2022 - All rights reserved</p>

      <CoinSyncLogo />
    </footer>
  )
}

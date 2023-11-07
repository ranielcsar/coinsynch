import { useState } from 'react'

import { CoinSynchLogo, MenuIcon } from '@/assets/icons'
import { Button, CryptosCarousel, Drawer } from '@/components'
import { useOpenSignModal } from '@/modules/landing/hooks/useOpenSignModal'

export function MobileHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const { openSignIn, openSignUp } = useOpenSignModal()

  const closeDrawer = () => setIsDrawerOpen(false)
  const openDrawer = () => setIsDrawerOpen(true)

  return (
    <header className="flex flex-col pt-5 shadow-md">
      <section className="flex items-center justify-between pb-5 pl-4">
        <div className="h-8 w-36">
          <CoinSynchLogo />
        </div>

        <button onClick={openDrawer} className="h-8 w-20">
          <MenuIcon />
        </button>

        <Drawer isOpen={isDrawerOpen} onClose={closeDrawer}>
          <Drawer.Content>
            <nav className="relative mt-20 flex flex-col items-center gap-6">
              <a href="#about">About us</a>

              <a href="#top-cryptos">Top Cryptos</a>

              <button onClick={openSignIn}>Sign in</button>

              <Button className="mx-auto w-1/2 py-6" onClick={openSignUp}>
                Sing up
              </Button>

              <span className="absolute bottom-3 h-8 w-36">
                <CoinSynchLogo />
              </span>
            </nav>
          </Drawer.Content>
        </Drawer>
      </section>

      <div className="w-full border-t-[0.1rem] border-t-secondary-200" />

      <CryptosCarousel />
    </header>
  )
}

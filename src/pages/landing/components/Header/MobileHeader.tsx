import { useState } from 'react'
import { useContext } from 'react'

import { CoinSyncLogo, MenuIcon } from '@/assets/icons'
import { Button, CoinCarousel, Drawer } from '@/components'

import { landingContext } from '../../context'

export function MobileHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const { setSignUpModalOpen, setSignInModalOpen } = useContext(landingContext)

  const closeDrawer = () => setIsDrawerOpen(false)
  const openDrawer = () => setIsDrawerOpen(true)

  return (
    <header className="flex flex-col pt-5 shadow-md">
      <section className="flex items-center justify-between px-4 pb-5">
        <CoinSyncLogo />

        <button onClick={openDrawer}>
          <MenuIcon />
        </button>

        <Drawer isOpen={isDrawerOpen} onClose={closeDrawer}>
          <Drawer.Content className="relative mt-20 flex flex-col items-center gap-5">
            <a href="#about">About us</a>

            <a href="#top-cryptos">Top Cryptos</a>

            <button onClick={() => setSignInModalOpen(true)}>Sign in</button>

            <Button className="w-full" onClick={() => setSignUpModalOpen(true)}>
              Sing up
            </Button>

            <span className="absolute bottom-3">
              <CoinSyncLogo />
            </span>
          </Drawer.Content>
        </Drawer>
      </section>

      <div className="w-full border-t-[0.1rem] border-t-secondary-200" />

      <CoinCarousel />
    </header>
  )
}

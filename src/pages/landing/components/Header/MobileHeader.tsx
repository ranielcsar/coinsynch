import { useState } from 'react'

import { CoinSynchLogo, MenuIcon } from '@/assets/icons'
import { Button, CryptosCarousel, Drawer } from '@/components'

import { useModal } from '../../hooks/useModal'

export function MobileHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const { openSignIn, openSignUp } = useModal()

  const closeDrawer = () => setIsDrawerOpen(false)
  const openDrawer = () => setIsDrawerOpen(true)

  return (
    <header className="flex flex-col pt-5 shadow-md">
      <section className="flex items-center justify-between px-4 pb-5">
        <CoinSynchLogo />

        <button onClick={openDrawer}>
          <MenuIcon />
        </button>

        <Drawer isOpen={isDrawerOpen} onClose={closeDrawer}>
          <Drawer.Content className="relative mt-20 flex flex-col items-center gap-5">
            <a href="#about">About us</a>

            <a href="#top-cryptos">Top Cryptos</a>

            <button onClick={openSignIn}>Sign in</button>

            <Button className="w-full" onClick={openSignUp}>
              Sing up
            </Button>

            <span className="absolute bottom-3">
              <CoinSynchLogo />
            </span>
          </Drawer.Content>
        </Drawer>
      </section>

      <div className="w-full border-t-[0.1rem] border-t-secondary-200" />

      <CryptosCarousel />
    </header>
  )
}

import { useState } from 'react'

import { CoinSyncLogo, MenuIcon } from '@/assets/icons'
import { CoinCarousel, Drawer } from '@/components'

export function MobileHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

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
          <Drawer.Content>teste</Drawer.Content>
        </Drawer>
      </section>

      <div className="w-full border-t-[0.1rem] border-t-secondary-200" />

      <CoinCarousel />
    </header>
  )
}

import { ElementType, useState } from 'react'

import {
  BitcoinWalletIcon,
  BitconIcon,
  BusinessChartIcon,
  CurrencyIcon,
} from '@/assets/icons'
import { CoinSynchLogo, MenuIcon } from '@/assets/icons'
import { Drawer } from '@/components'

import { Logout } from './Logout'

export function MobileHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const closeDrawer = () => setIsDrawerOpen(false)
  const openDrawer = () => setIsDrawerOpen(true)

  return (
    <>
      <header className="flex items-center justify-between bg-white px-5 py-5 shadow-md">
        <button onClick={openDrawer} className="h-7 w-7">
          <MenuIcon />
        </button>

        <div className="h-[1.45rem] w-32">
          <CoinSynchLogo />
        </div>

        <Logout />
      </header>

      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} direction="left">
        <Drawer.Content>
          <nav className="relative mt-20 flex flex-col gap-5">
            <MenuItem icon={BitcoinWalletIcon} label="Lorem ispum" />
            <MenuItem icon={CurrencyIcon} label="Lorem ispum" />
            <MenuItem icon={BitconIcon} label="Lorem ispum" />
            <MenuItem icon={BusinessChartIcon} label="Lorem ispum" />
          </nav>
        </Drawer.Content>
      </Drawer>
    </>
  )
}

type MenuItemProps = {
  icon: ElementType
  label: string
}

function MenuItem({ icon: Icon, label }: MenuItemProps) {
  return (
    <div className="flex items-center gap-5">
      <div className="h-8 w-8">
        <Icon />
      </div>
      <p>{label}</p>
    </div>
  )
}

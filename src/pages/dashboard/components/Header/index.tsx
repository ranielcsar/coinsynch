import { ElementType, Fragment, useState } from 'react'

import { Popover, Transition } from '@headlessui/react'

import {
  BitcoinWalletIcon,
  BitconIcon,
  BusinessChartIcon,
  ChevronDownIcon,
  CurrencyIcon,
} from '@/assets/icons'
import { CoinSynchLogo, MenuIcon } from '@/assets/icons'
import { Drawer } from '@/components'

export function Header() {
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
        <Drawer.Content className="relative mt-20 flex flex-col gap-5">
          <MenuItem icon={BitcoinWalletIcon} label="Lorem ispum" />
          <MenuItem icon={CurrencyIcon} label="Lorem ispum" />
          <MenuItem icon={BitconIcon} label="Lorem ispum" />
          <MenuItem icon={BusinessChartIcon} label="Lorem ispum" />
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

function Logout() {
  return (
    <div className="h-[1.6rem]">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button className="inline-flex items-center rounded-md text-base font-medium focus:outline-none">
              <div className="h-7 w-7 rounded-full bg-secondary-300" />
              <ChevronDownIcon
                className={`${
                  open ? 'rotate-180' : 'rotate-0'
                } ml-2 h-3 w-3 text-secondary-500 transition duration-150 ease-in-out`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-auto z-10 mt-3 w-max -translate-x-[3.2rem] transform px-2 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-2 bg-white px-6 py-3 lg:grid-cols-2">
                    Logout
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

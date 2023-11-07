import { ElementType, ReactNode, useState } from 'react'

import {
  BitcoinWalletIcon,
  BitconIcon,
  BusinessChartIcon,
  CurrencyIcon,
} from '@/assets/icons'

export function Sidebar() {
  return (
    <aside className="col-[1] row-[2] hidden h-full xl:flex">
      <nav className="mt-4 grid auto-rows-[75px]">
        <MenuItem icon={BitcoinWalletIcon} />
        <MenuItem icon={CurrencyIcon} />
        <MenuItem icon={BitconIcon} />
        <MenuItem icon={BusinessChartIcon} />
      </nav>
    </aside>
  )
}

type MenuItemProps = {
  icon: ElementType
}
function MenuItem({ icon: Icon }: MenuItemProps) {
  return (
    <MenuTooltip label="Lorem ipsum">
      <div className="cursor-pointer p-4">
        <div className="h-8 w-8">
          <Icon />
        </div>
      </div>
    </MenuTooltip>
  )
}

function MenuTooltip({ children, label }: { label: string; children: ReactNode }) {
  const [tooltipIsOpen, setTooltipIsOpen] = useState(false)

  return (
    <>
      <div className="flex flex-col items-center md:flex-row md:justify-center">
        <div
          className="relative mt-20 md:mt-0"
          onMouseEnter={() => setTooltipIsOpen(true)}
          onMouseLeave={() => setTooltipIsOpen(false)}
        >
          <div className="cursor-pointer">{children}</div>
          {tooltipIsOpen && (
            <div
              role="tooltip"
              className="absolute left-10 z-20 -mt-14 ml-8 w-max rounded bg-primary-500 p-4 text-white shadow-lg transition duration-150 ease-in-out"
            >
              {label}
            </div>
          )}{' '}
        </div>
      </div>
    </>
  )
}

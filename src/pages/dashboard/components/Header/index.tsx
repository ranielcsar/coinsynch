import { CoinSynchLogo } from '@/assets/icons'
import { useBreakpoints } from '@/hooks/useBreakpoints'

import { Logout } from './Logout'
import { MobileHeader } from './Mobile'

export function Header() {
  const { isDesktop } = useBreakpoints()

  if (isDesktop) {
    return <DesktopHeader />
  }

  return <MobileHeader />
}

function DesktopHeader() {
  return (
    <header className="col-[1/3] row-[1] w-full bg-white px-5 py-5 shadow-md">
      <div className="m-auto flex max-w-screen-xl items-center justify-between">
        <div className="ml-8 h-[1.45rem] w-32">
          <CoinSynchLogo />
        </div>

        <Logout />
      </div>
    </header>
  )
}

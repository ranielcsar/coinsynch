import { CoinSynchLogo } from '@/assets/icons'

export function Footer() {
  return (
    <footer className="w-full bg-white py-3 shadow-[0_2px_8px_2px_rgba(0,0,0,0.25)] md:m-auto md:justify-between md:px-5 xl:col-[1/3] xl:px-0">
      <div className="flex max-w-screen-xl items-center justify-center md:justify-between xl:m-auto">
        <p className="hidden md:block">Copyright © 2022 - All rights reserved</p>

        <div className="h-12 w-32">
          <CoinSynchLogo />
        </div>
      </div>
    </footer>
  )
}

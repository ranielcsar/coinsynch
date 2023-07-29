import { CoinSynchLogo } from '@/assets/icons'
import { Button, CryptosCarousel } from '@/components'

import { useModal } from '../../hooks/useModal'

export function DesktopHeader() {
  const { openSignIn, openSignUp } = useModal()

  return (
    <header className="pt-5 shadow-md">
      <section className="m-auto grid max-w-[90rem] grid-cols-[1fr,max-content,1fr,25rem,1.2fr] items-center gap-10 px-16 pb-5">
        <div className="h-8 w-36">
          <CoinSynchLogo />
        </div>

        <div className="col-[2] flex gap-5">
          <a href="#about">About us</a>
          <a href="#top-cryptos">Top Cryptos</a>
        </div>

        <div className="col-[4]">
          <CryptosCarousel />
        </div>

        <div className="col-[5] flex justify-end gap-5">
          <button onClick={openSignIn}>Sign in</button>
          <Button className="md:py-2" onClick={openSignUp}>
            Sing up
          </Button>
        </div>
      </section>
    </header>
  )
}

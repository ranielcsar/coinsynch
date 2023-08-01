import { CoinSynchLogo } from '@/assets/icons'
import { Button, CryptosCarousel } from '@/components'

import { useOpenSignModal } from '../../hooks/useOpenSignModal'

export function TabletHeader() {
  const { openSignIn, openSignUp } = useOpenSignModal()

  return (
    <header className="flex flex-col pt-5 shadow-md">
      <section className="grid grid-cols-[1fr,1fr,1.2fr,1fr] items-center px-6 pb-5">
        <div className="h-8 w-32">
          <CoinSynchLogo />
        </div>

        <div className="col-[2] flex gap-5">
          <a href="#about">About us</a>
          <a href="#top-cryptos">Top Cryptos</a>
        </div>

        <div className="col-[4] flex justify-end gap-5">
          <button onClick={openSignIn}>Sign in</button>
          <Button onClick={openSignUp}>Sing up</Button>
        </div>
      </section>

      <div className="w-full border-t-[0.1rem] border-t-secondary-200" />
      <CryptosCarousel />
    </header>
  )
}

import { CoinSyncLogo } from '@/assets/icons'
import { Button, CoinCarousel } from '@/components'

export function DesktopHeader() {
  return (
    <header className="pt-5 shadow-md">
      <section className="m-auto grid max-w-[90rem] grid-cols-[1fr,1fr,1fr,25rem,1.2fr] items-center gap-10 px-16 pb-5">
        <CoinSyncLogo />

        <div className="col-[2] flex gap-5">
          <a href="#about">About us</a>
          <a href="#top-cryptos">Top Cryptos</a>
        </div>

        <div className="col-[4]">
          <CoinCarousel />
        </div>

        <div className="col-[5] flex justify-end gap-5">
          <button>Sign in</button>
          <Button>Sing up</Button>
        </div>
      </section>
    </header>
  )
}

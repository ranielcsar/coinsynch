import { CoinSyncLogo } from '@/assets/icons'
import { Button, CoinCarousel } from '@/components'

export function TabletHeader() {
  return (
    <header className="flex flex-col pt-5 shadow-md">
      <section className="grid grid-cols-[1fr,1fr,1.3fr,1fr] items-center px-4 pb-5">
        <CoinSyncLogo />

        <div className="col-[2] flex gap-5">
          <a href="#about">About us</a>
          <a href="#top-cryptos">Top Cryptos</a>
        </div>

        <div className="col-[4] flex gap-5">
          <button>Sign in</button>
          <Button>Sing up</Button>
        </div>
      </section>

      <div className="w-full border-t-[0.1rem] border-t-secondary-200" />
      <CoinCarousel />
    </header>
  )
}
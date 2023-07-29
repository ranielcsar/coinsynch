import { Button, Divider } from '@/components'
import { CryptoCurrency } from '@/hooks/api/useCryptoCurrencies'

type CryptosProp = {
  // eslint-disable-next-line no-unused-vars
  onTradeClick(crypto: CryptoCurrency): void
}

export function CryptosMobile({ onTradeClick }: CryptosProp) {
  return (
    <section className="mt-6 grid grid-cols-2 grid-rows-2 gap-3">
      {Array.from({ length: 4 }).map((_, index) => (
        <article key={index} className="min-h-[10vh] rounded-lg bg-white shadow-lg">
          <div className="flex items-center justify-center gap-2 rounded-t-lg bg-primary-100 py-4">
            <div className="h-6 w-6 rounded-full bg-secondary-300" />
            <span>Bitcoin</span>
            <span className="text-secondary-500">BTC</span>
          </div>

          <div className="flex flex-col items-start p-3">
            <span className="text-sm text-secondary-500">Holdings</span>
            <p>US$ 25.499,52</p>
            <span className="text-primary-400">434 ADA</span>
          </div>

          <Divider className="mx-3" />

          <div className="flex flex-col items-start p-3">
            <span className="text-sm text-secondary-500">Change</span>
            <p className="text-quartenary-700">-5,65%</p>
          </div>

          <Button
            className="m-2 mb-3 w-[90%]"
            onClick={() => onTradeClick({} as CryptoCurrency)}
          >
            Trade
          </Button>
        </article>
      ))}
    </section>
  )
}

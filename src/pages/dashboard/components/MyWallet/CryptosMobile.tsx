import Image from 'next/image'

import { Button, Divider } from '@/components'
import { CryptoCurrency, useCryptoCurrencies } from '@/hooks/api/useCryptoCurrencies'
import { coinIcon } from '@/services/api'
import { formatPriceInDollar } from '@/utils/formatPriceInDollar'

type CryptosProp = {
  // eslint-disable-next-line no-unused-vars
  onTradeClick(crypto: CryptoCurrency): void
  cryptos?: any[]
}

export function CryptosMobile({ onTradeClick, cryptos = [] }: CryptosProp) {
  const { cryptoCurrencies } = useCryptoCurrencies()

  const myCryptos = cryptoCurrencies
    ?.map((cryptoCurrency) => {
      const existingCrypto = cryptos.find((crypto) => crypto.id === cryptoCurrency.id)

      if (cryptoCurrency.id === existingCrypto?.id) {
        const holdings = existingCrypto.holdings
        const newCrypto = {
          ...cryptoCurrency,
          holdings,
        }

        return newCrypto
      }

      return null
    })
    .filter((crypto) => crypto)

  return (
    <section className="mt-3 grid grid-cols-2 grid-rows-2 gap-4 p-4">
      {myCryptos.map((crypto, index) => {
        const changeValue = Number(crypto?.changePercent24Hr).toFixed(2) || 0
        const isNegative = Number(changeValue) < 0

        return (
          <article key={index} className="min-h-[10vh] rounded-lg bg-white shadow-lg">
            <div className="flex items-center justify-center gap-2 rounded-t-lg bg-primary-100 py-4">
              <div className="flex gap-2">
                <Image
                  src={coinIcon(crypto?.symbol.toLowerCase())}
                  width={30}
                  height={30}
                  alt={`${crypto?.name} icon`}
                />
                <span>{crypto?.name}</span>
                <span className="text-secondary-500">{crypto?.symbol}</span>
              </div>
            </div>

            <div className="flex flex-col items-start p-3">
              <span className="text-sm text-secondary-500">Holdings</span>
              <p>{formatPriceInDollar(Number(crypto?.priceUsd))}</p>

              <span className="text-primary-500">
                {crypto?.holdings} {crypto?.symbol}
              </span>
            </div>

            <Divider className="mx-3" />

            <div className="flex flex-col items-start p-3">
              <span className="text-sm text-secondary-500">Change</span>
              <p className={isNegative ? 'text-quartenary-700' : 'text-tertiary-700'}>
                {isNegative ? '' : '+'}
                {changeValue.toString().replace('.', ',')}%
              </p>
            </div>

            <Button
              className="m-2 mb-3 w-[90%]"
              onClick={() => onTradeClick(crypto as CryptoCurrency)}
            >
              Trade
            </Button>
          </article>
        )
      })}
    </section>
  )
}

import { CryptoCurrency, useCryptoCurrencies } from '@/hooks/api/useCryptoCurrencies'
import { useAuth } from '@/modules/authContext'

import { Balance } from './Balance'
import { DailyVariation } from './DailyVariation'
import { News } from './News'

export function CryptoInfos() {
  const { cryptoCurrencies } = useCryptoCurrencies(20)
  const { user } = useAuth()

  const wallet = user ? user.wallet : []

  const myCryptos = cryptoCurrencies
    ?.map((cryptoCurrency) => {
      const existingCrypto = wallet.find((crypto) => crypto.id === cryptoCurrency.id)

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
    .filter((crypto) => crypto) as CryptoCurrency[]

  return (
    <section className="mx-auto my-8 grid min-h-[25vh] w-full max-w-screen-xl grid-cols-[repeat(auto-fit,minmax(120px,1fr))] grid-rows-[4rem,1fr] gap-4 px-5 xl:min-h-[10vh] xl:grid-cols-[1fr,0.5fr,0.5fr] xl:grid-rows-1 xl:gap-4 xl:px-0">
      <Balance cryptos={myCryptos} />

      <DailyVariation cryptos={cryptoCurrencies} />

      <News />
    </section>
  )
}

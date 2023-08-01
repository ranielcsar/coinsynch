import { useEffect, useState } from 'react'

import Image from 'next/image'

import { CryptoCurrency } from '@/hooks/api/useCryptoCurrencies'

export function DailyVariation({ cryptos }: { cryptos?: CryptoCurrency[] }) {
  const [currentCurrency, setCurrentCurrency] = useState(0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const myCryptos = cryptos ? cryptos : []

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCurrency((current) => {
        if (current === myCryptos.length) {
          return 0
        }

        return current + 1
      })
    }, 5000)

    return () => window.clearInterval(timer)
  }, [myCryptos])

  const actualCurrency = myCryptos[currentCurrency]
  let changeValue = Number(actualCurrency?.changePercent24Hr)
  const isNegative = Number(changeValue) < 0

  if (isNaN(changeValue)) {
    changeValue = 0
  }

  return (
    <article className="md:min-h-auto col-[1] row-[2] flex w-full flex-col gap-3 rounded-lg bg-white shadow-lg md:flex-row xl:col-[2] xl:row-[1]">
      <div className="flex max-h-[5.5rem] flex-col gap-3 pt-2">
        <p className="w-max px-1 text-sm text-secondary-500 lg:px-2">Daily Variation</p>

        <div className="flex w-full items-center justify-between gap-2 px-1 md:flex-col lg:w-[7.5rem] lg:items-start lg:px-2">
          <div className="flex items-center gap-2">
            <Image
              src={`https://cryptoicons.org/api/icon/${actualCurrency?.symbol.toLocaleLowerCase()}/100`}
              width={25}
              height={25}
              alt={`${actualCurrency?.name} icon`}
            />
            <span className="text-ellipsis">{actualCurrency?.name}</span>
          </div>
          <p className={isNegative ? 'text-quartenary-700' : 'text-tertiary-700'}>
            {isNegative ? '' : '+'}
            {changeValue.toFixed(2).replace('.', ',')}%
          </p>
        </div>
      </div>

      <div className="h-full w-full rounded-b-lg bg-secondary-400 md:rounded-b-none md:rounded-br-lg md:rounded-tr-lg" />
    </article>
  )
}

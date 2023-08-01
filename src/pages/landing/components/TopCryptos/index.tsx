import { useEffect, useMemo, useState } from 'react'

import { createColumnHelper } from '@tanstack/react-table'
import Image from 'next/image'

import { CryptosTable } from '@/components'
import { Button } from '@/components'
import { CryptoCurrency, useCryptoCurrencies } from '@/hooks/api/useCryptoCurrencies'
import { useBreakpoints } from '@/hooks/useBreakpoints'
import { formatPriceInDollar } from '@/utils/formatPriceInDollar'

import { MobileCryptos } from './Mobile'

export function TopCryptos() {
  const { isTablet, isDesktop } = useBreakpoints()
  const { cryptoCurrencies, loadingCrypto } = useCryptoCurrencies(15)

  const [viewMore, setViewMore] = useState(false)

  const filteredCurrencies = viewMore
    ? cryptoCurrencies?.slice()
    : cryptoCurrencies?.slice(0, 5)

  const actions = columnHelper.display({
    id: 'actions',
    header: 'Trade',
    size: 10,
    cell: ({ row }) => {
      const coin = row.original

      return (
        <Button onClick={() => console.log(coin)} className="bg-tertiary-700 py-4">
          Buy
        </Button>
      )
    },
  })

  return (
    <section className="mb-5 flex min-h-[25vh] w-full flex-col bg-white p-5">
      <h5 className="mb-4 pt-8 text-center font-bold">Top Cryptos</h5>

      <div className="my-5 w-full max-w-screen-xl md:m-auto">
        {isTablet || isDesktop ? (
          <CryptosTable
            data={filteredCurrencies}
            columns={[...columns, actions]}
            loading={loadingCrypto}
          />
        ) : (
          <MobileCryptos />
        )}
      </div>

      <button
        className="mx-auto my-8 w-max text-lg text-primary-500"
        onClick={() => setViewMore((view) => !view)}
      >
        {viewMore ? 'View less -' : 'View more +'}
      </button>
    </section>
  )
}

const columnHelper = createColumnHelper<CryptoCurrency>()

const columns = [
  columnHelper.display({
    id: 'index',
    header: '#',
    cell: (props) => String(props.row.index + 1).padStart(2, '0'),
  }),
  columnHelper.accessor(({ name, symbol }) => ({ name, symbol }), {
    id: 'crypto',
    header: () => <span>Crypto</span>,
    cell: ({ getValue }) => {
      const { name, symbol } = getValue()

      return (
        <div className="flex gap-2">
          <Image
            src={`https://cryptoicons.org/api/icon/${symbol.toLocaleLowerCase()}/100`}
            width={30}
            height={30}
            alt={`${name} icon`}
          />
          <span>{name}</span>
          <span className="text-secondary-500">{symbol}</span>
        </div>
      )
    },
  }),
  columnHelper.accessor((row) => row.priceUsd, {
    id: 'priceUsd',
    header: () => <span>Price</span>,
    cell: (info) => formatPriceInDollar(Number(info.getValue())),
  }),
  columnHelper.accessor((row) => row.changePercent24Hr, {
    id: 'changePercent',
    header: () => <span>Change</span>,
    cell: (info) => {
      const value = Number(info.getValue()).toFixed(2) || 0
      const isNegative = Number(value) < 0

      return (
        <p className={isNegative ? 'text-quartenary-700' : 'text-tertiary-700'}>
          {isNegative ? '' : '+'}
          {value.toString().replace('.', ',')}%
        </p>
      )
    },
  }),
]

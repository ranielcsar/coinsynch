import { ReactNode, useState } from 'react'

import { createColumnHelper } from '@tanstack/react-table'
import Image from 'next/image'

import { TradeIcon } from '@/assets/icons'
import { CryptosTable, Tooltip } from '@/components'
import { CryptoCurrency, useCryptoCurrencies } from '@/hooks/api/useCryptoCurrencies'
import { formatPriceInDollar } from '@/utils/formatPriceInDollar'

type CryptosProp = {
  // eslint-disable-next-line no-unused-vars
  onTradeClick(crypto: CryptoCurrency): void
}

export function Cryptos({ onTradeClick }: CryptosProp) {
  const { cryptoCurrencies, loadingCrypto } = useCryptoCurrencies()

  const actions = columnHelper.display({
    id: 'actions',
    header: 'Trade',
    size: 60,
    cell: ({ row }) => {
      const cryptoCurrency = row.original

      return (
        <Tooltip label="Transfer Crypto">
          <button
            data-tooltip-target="tooltip-default"
            onClick={() => onTradeClick(cryptoCurrency)}
            className="h-7 w-7"
          >
            <TradeIcon />
          </button>
        </Tooltip>
      )
    },
  })

  return (
    <div className="mb-5 flex min-h-[25vh] w-full max-w-screen-xl flex-col bg-white p-5 xl:m-auto">
      <CryptosTable
        data={cryptoCurrencies}
        columns={[...columns, actions]}
        loading={loadingCrypto}
      />
    </div>
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
  columnHelper.accessor(({ priceUsd, symbol }) => ({ priceUsd, symbol }), {
    id: 'priceUsd',
    header: () => <span>Holdings</span>,
    cell: (info) => {
      const { priceUsd, symbol } = info.getValue()
      const holding = Math.floor(Math.random() * 100)

      return (
        <div className="flex flex-col text-sm">
          <p>{formatPriceInDollar(Number(priceUsd))}</p>

          <span className="text-primary-500">
            {holding} {symbol}
          </span>
        </div>
      )
    },
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

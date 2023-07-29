import { Disclosure } from '@headlessui/react'
import Image from 'next/image'

import { ChevronDownIcon } from '@/assets/icons'
import { useCryptoCurrencies } from '@/hooks/api/useCryptoCurrencies'
import { formatPriceInDollar } from '@/utils/formatPriceInDollar'

export function MobileCryptos() {
  const { cryptoCurrencies } = useCryptoCurrencies()

  return (
    <>
      {cryptoCurrencies?.map((crypto) => (
        <Disclosure key={crypto.id}>
          {({ open }) => {
            const percentValue = Number(crypto.changePercent24Hr).toFixed(2) || 0
            const isNegative = Number(crypto.changePercent24Hr) < 0

            return (
              <>
                <Disclosure.Button className="w-full p-4 odd:bg-secondary-100">
                  <div className="grid grid-cols-[1fr,1rem] items-center text-left">
                    <div className="flex items-center gap-2">
                      <Image
                        src={`https://cryptoicons.org/api/icon/${crypto.symbol.toLocaleLowerCase()}/100`}
                        width={30}
                        height={30}
                        alt={`${crypto.name} icon`}
                      />
                      <span>{crypto.name}</span>
                      <span className="text-secondary-500">{crypto.symbol}</span>
                    </div>

                    <ChevronDownIcon
                      className={`text-primary-500 ${
                        open ? 'rotate-180' : 'rotate-0'
                      } h-4 w-max`}
                    />
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="border-t border-t-secondary-200 px-4 text-secondary-500">
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm">Price</span>
                    <span>{formatPriceInDollar(Number(crypto.priceUsd))}</span>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm">Change</span>
                    <span
                      className={isNegative ? 'text-quartenary-700' : 'text-tertiary-700'}
                    >
                      {isNegative ? '' : '+'}
                      {percentValue}%
                    </span>
                  </div>
                </Disclosure.Panel>
              </>
            )
          }}
        </Disclosure>
      ))}
    </>
  )
}

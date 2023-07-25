import { Disclosure } from '@headlessui/react'
import Image from 'next/image'

import { ChevronDownIcon } from '@/assets/icons'

export function MobileCryptos() {
  const src = `https://picsum.photos/100?random=${Math.floor(Math.random() * 10)}`

  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <Disclosure key={`item-${index}`}>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full p-4 odd:bg-secondary-100">
                <div className="grid grid-cols-[2.2rem,1fr,1rem] items-center text-left">
                  <Image
                    src={src}
                    alt={`Picture of ${index}`}
                    width={10}
                    height={10}
                    className="h-6 w-6 rounded-full bg-secondary-300"
                  />

                  <span>Bitcoin BTC</span>

                  <ChevronDownIcon
                    className={`text-primary-500 ${open ? 'rotate-180' : 'rotate-0'}`}
                  />
                </div>
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500 border-t border-t-secondary-200 px-4">
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm">Price</span>
                  <span>US$ 25.499,52</span>
                </div>

                <div className="flex items-center justify-between py-2">
                  <span className="text-sm">Change</span>
                  <span>+5,65%</span>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </>
  )
}

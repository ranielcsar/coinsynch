import { useEffect } from 'react'

import { useSpringCarousel } from 'react-spring-carousel'

import { CryptoCurrency, useCryptoCurrencies } from '@/hooks/api/useCryptoCurrencies'
import { useBreakpoints } from '@/hooks/useBreakpoints'
import { formatPriceInDollar } from '@/utils/formatPriceInDollar'

export function CryptosCarousel() {
  const { loadingCrypto, cryptoCurrencies } = useCryptoCurrencies()

  if (loadingCrypto) {
    return (
      <div
        role="status"
        className="h-6 w-full animate-pulse rounded-sm bg-secondary-300"
      />
    )
  }

  return <Carousel cryptos={cryptoCurrencies} />
}

function Carousel({ cryptos }: { cryptos: CryptoCurrency[] }) {
  const { isDesktop, isTablet } = useBreakpoints()
  let itemsPerSlide = 1.2

  if (isDesktop) itemsPerSlide = 1.5
  if (isTablet) itemsPerSlide = 1.7

  const { carouselFragment, slideToNextItem } = useSpringCarousel({
    items: cryptos.map((crypto) => {
      const percentValue = Number(crypto.changePercent24Hr).toFixed(2) || 0
      const isNegative = Number(crypto.changePercent24Hr) < 0

      return {
        id: crypto.id,
        renderItem: (
          <div key={crypto.id} className="mr-8 flex w-max gap-2">
            <span>{crypto.symbol}</span>
            <span>{formatPriceInDollar(Number(crypto.priceUsd))}</span>
            <span className={isNegative ? 'text-quartenary-700' : 'text-tertiary-700'}>
              {isNegative ? '' : '+'}
              {percentValue}%
            </span>
          </div>
        ),
      }
    }),
    itemsPerSlide,
    withLoop: true,
    slideType: 'fluid',
  })

  useEffect(() => {
    const timer = setInterval(() => {
      slideToNextItem()
    }, 3000)

    return () => window.clearInterval(timer)
    // You MUST add the slide methods to the dependency list useEffect!
  }, [slideToNextItem])

  return (
    <div className="w-full overflow-hidden px-2 py-1 md:m-auto md:w-3/5 xl:w-full">
      {carouselFragment}
    </div>
  )
}

import { useEffect } from 'react'

import { useSpringCarousel } from 'react-spring-carousel'

export function CoinCarousel() {
  const { carouselFragment, slideToNextItem } = useSpringCarousel({
    items: mockItens.map((item) => ({
      id: item.currency,
      renderItem: (
        <div key={item.currency} className="mr-8 flex w-max gap-2">
          <span>{item.currency}</span>
          <span>{item.value}</span>
          <span
            className={item.variance < 0 ? 'text-quartenary-500' : 'text-tertiary-500'}
          >
            {item.variance}
          </span>
        </div>
      ),
    })),
    itemsPerSlide: 2,
    withLoop: true,
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

const mockItens = [
  {
    currency: 'BIT',
    value: 'R$ 23,62',
    variance: 7.082,
  },
  {
    currency: 'DOG',
    value: 'R$ 23,62',
    variance: -5.23,
  },
  {
    currency: 'BRL',
    value: 'R$ 23,62',
    variance: 3.082,
  },
]

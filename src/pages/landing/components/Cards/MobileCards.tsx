import { useSpringCarousel } from 'react-spring-carousel'

import { BitconIcon, BusinessChartIcon, ComputerIcon, CurrencyIcon } from '@/assets/icons'

import { Card } from './Card'

export function MobileCards() {
  const { carouselFragment } = useSpringCarousel({
    items: [
      {
        id: 'bitcoin',
        renderItem: <Card icon={BitconIcon} />,
      },
      {
        id: 'currency',
        renderItem: <Card icon={CurrencyIcon} />,
      },
      {
        id: 'business',
        renderItem: <Card icon={BusinessChartIcon} />,
      },
      {
        id: 'computer',
        renderItem: <Card icon={ComputerIcon} />,
      },
    ],
    withLoop: true,
    itemsPerSlide: 1.12,
  })

  return (
    <section className="my-8 p-5">
      <hgroup>
        <h6 className="font-bold text-primary-500">Lorem ipsum</h6>
        <h4 className="font-bold">Lorem ipsum</h4>
      </hgroup>

      <p className="mt-3 text-sm leading-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
        luctus venenatis, lectus magna fringilla urna, porttitor
      </p>

      <div className="overflow-hidden py-4">{carouselFragment}</div>
    </section>
  )
}

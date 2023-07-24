import { useSpringCarousel } from 'react-spring-carousel'

import { Card } from './Card'

export function MobileCards() {
  const { carouselFragment } = useSpringCarousel({
    items: Array.from({ length: 4 }).map((item) => ({
      id: item,
      renderItem: <Card />,
    })),
    withLoop: true,
  })

  return (
    <section className={'custom_shadow my-8 p-5'}>
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

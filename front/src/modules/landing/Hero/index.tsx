import { useState } from 'react'

import Image from 'next/image'
import { useSpringCarousel } from 'react-spring-carousel'

import { DesktopWaveSvg } from '@/assets/bg-svgs/desktopWave'
import { WaveSvg } from '@/assets/bg-svgs/wave'
import Banner1 from '@/assets/images/banner-image-1.svg'
import Banner2 from '@/assets/images/banner-image-2.svg'
import Banner3 from '@/assets/images/banner-image-3.svg'
import { Button, Tag } from '@/components'
import { useBreakpoints } from '@/hooks/useBreakpoints'
import { useOpenSignModal } from '@/modules/landing/hooks/useOpenSignModal'

export function Hero() {
  const { openSignUp } = useOpenSignModal()
  const { isDesktop } = useBreakpoints()

  return (
    <>
      <section className="relative flex max-w-screen-xl flex-col overflow-hidden p-5 pt-16 md:m-auto md:flex-row md:items-center xl:gap-20">
        <div className="relative flex flex-[1.2] flex-col md:px-5 xl:flex-[0.8]">
          <header className="text-center text-lg font-bold leading-8 text-primary-500 md:text-left md:text-4xl">
            Lorem ipsum dolor sit amet, consectetur
          </header>

          <p className="mt-3 text-center text-sm leading-5 md:text-left xl:max-w-lg xl:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
            amet luctus venenatis, lectus magna fringilla urna, porttitor
          </p>

          <Button
            className="mx-auto my-4 mt-8 md:mx-0 xl:w-[15rem] xl:py-6 xl:font-bold"
            onClick={openSignUp}
          >
            SIGN UP NOW <RightArrowIcon />
          </Button>

          <div className="m-auto mt-6 flex items-center gap-4 md:mx-0 md:mt-6 md:items-start">
            <Tag className="h-7 md:h-auto">Cryptos</Tag>
            <Tag className="h-7 md:h-auto">NFTs</Tag>
            <Tag className="h-7 md:h-auto">Games</Tag>
          </div>
        </div>

        <ImagesCarousel />
      </section>

      {isDesktop ? <DesktopWaveSvg /> : <WaveSvg />}
    </>
  )
}

const bannerImages = [
  {
    id: 'banner-1',
    src: Banner1,
  },
  {
    id: 'banner-2',
    src: Banner2,
  },
  {
    id: 'banner-3',
    src: Banner3,
  },
]

function ImagesCarousel() {
  const [activeItem, setActiveItem] = useState(bannerImages[0].id)
  const { isDesktop } = useBreakpoints()

  const { carouselFragment, useListenToCustomEvent, slideToNextItem } = useSpringCarousel(
    {
      items: bannerImages.map((item) => ({
        id: item.id,
        renderItem: (
          <Image
            width={400}
            height={400}
            src={item.src}
            alt="Banner image"
            className={activeItem === item.id ? 'opacity-100' : 'opacity-60'}
          />
        ),
      })),
      withLoop: true,
      itemsPerSlide: isDesktop ? 1.3 : 1.2,
    },
  )

  useListenToCustomEvent((event: any) => {
    if (event.eventName === 'onSlideStartChange') {
      setActiveItem(event.nextItem.id)
    }
  })

  return (
    <div className="flex-1 select-none overflow-hidden sm:hidden md:block">
      {carouselFragment}
    </div>
  )
}

function RightArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      className="mt-1"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M7.63781 1.67007C7.86457 1.44331 8.23221 1.44331 8.45897 1.67007L12.3299 5.54104C12.386 5.59715 12.4283 5.66189 12.4566 5.73099C12.4835 5.79646 12.4988 5.86794 12.4999 5.94285C12.5 5.94903 12.5 5.9552 12.4999 5.96137C12.4987 6.03624 12.4833 6.10765 12.4563 6.17306C12.4423 6.20696 12.425 6.23981 12.4043 6.2711C12.3831 6.3033 12.3583 6.33385 12.3299 6.36219L8.45897 10.2332C8.23221 10.4599 7.86457 10.4599 7.63781 10.2332C7.41105 10.0064 7.41105 9.63876 7.63781 9.412L10.5176 6.53226L1.08065 6.53226C0.759964 6.53226 0.5 6.27229 0.5 5.95161C0.5 5.63093 0.759964 5.37097 1.08065 5.37097L10.5176 5.37097L7.63781 2.49122C7.41105 2.26447 7.41105 1.89682 7.63781 1.67007Z"
        fill="white"
      />
    </svg>
  )
}

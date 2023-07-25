import { useContext } from 'react'

import { Button } from '@/components'

import { landingContext } from '../../context'

import { Card } from './Card'

export function CardsGrid() {
  const { setSignUpModalOpen } = useContext(landingContext)

  return (
    <section className="m-auto mb-24 w-[85%] max-w-screen-xl xl:flex xl:w-full xl:gap-16">
      <div className="m-auto w-9/12 xl:order-2 xl:w-full xl:flex-1">
        <hgroup>
          <h6 className="font-bold text-primary-500">Lorem ipsum</h6>
          <h4 className="text-3xl font-bold">Lorem ipsum</h4>
        </hgroup>

        <p className="mt-3 text-sm leading-5 xl:w-[75%] xl:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
          amet luctus venenatis, lectus magna fringilla urna, porttitor
        </p>

        <div className="hidden xl:mt-8 xl:block">
          <Button className="w-[12rem] py-6" onClick={() => setSignUpModalOpen(true)}>
            Sign up now
          </Button>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-[3rem,repeat(7,1fr),3rem] grid-rows-2 gap-5 xl:w-full xl:flex-[1.5]">
        <Card className="col-[1/5] row-[1]" />
        <Card className="col-span-4 row-[1]" />
        <Card className="col-[2/6] row-[2]" />
        <Card className="col-span-4 row-[2]" />
      </div>
    </section>
  )
}

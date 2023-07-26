import { SubscribeBg } from '@/assets/bg-svgs/subscribeBg'
import { Button, TextInput } from '@/components'

export function Subscribe() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-500 to-primary-700">
        <div className="flex max-w-screen-xl flex-col p-5 md:m-auto md:flex-row md:items-center md:gap-6 md:py-16 xl:py-32">
          <div className="md:flex-[1]">
            <hgroup className="pt-11 md:pt-0">
              <h6 className="font-bold text-primary-200">Lorem ipsum</h6>
              <h4 className="font-bold text-white md:text-3xl">Lorem ipsum</h4>
            </hgroup>

            <p className="mt-3 text-sm leading-5 text-white lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus
              sit amet luctus venenatis, lectus magna fringilla urna, porttitor
            </p>
          </div>

          <form className="z-10 mb-4 mt-6 md:m-0 md:flex-[1]">
            <div>
              <label
                htmlFor="subscribe_email"
                className="text-md block font-medium leading-6 text-white"
              >
                Email
              </label>

              <TextInput className="px-0">
                <TextInput.Input className="w-full p-2 outline-none" />
              </TextInput>
            </div>

            <Button className="my-5 w-full py-6 shadow-lg">Subscribe</Button>
          </form>
        </div>

        <div className="absolute bottom-0 left-0 right-0 top-0 h-auto">
          <SubscribeBg />
        </div>
      </section>
    </>
  )
}

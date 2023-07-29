import { BalanceIcon } from '@/assets/icons'

export function CryptoInfos() {
  return (
    <section className="mx-auto my-8 grid min-h-[25vh] w-full max-w-screen-xl grid-cols-[repeat(auto-fit,minmax(120px,1fr))] grid-rows-[4rem,1fr] gap-4 px-5 xl:px-0">
      <Balance />

      <DailyVariation />

      <News />
    </section>
  )
}

function Balance() {
  return (
    <article className="col-[1/3] row-[1] flex h-full w-full items-center rounded-lg bg-white shadow-lg">
      <div className="m-auto ml-4 flex flex-1 items-center gap-2 md:m-0 md:ml-4">
        <div className="h-10 w-10 rounded-full bg-primary-100 p-[0.4rem]">
          <BalanceIcon />
        </div>

        <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-0">
          <p className="flex flex-col text-default_text md:flex-row md:gap-1 md:text-lg">
            Balance
            <span className="text-secondary-500 md:text-default_text">in US$</span>
          </p>
          <span className="hidden w-max text-secondary-400 md:inline">
            (approximately)
          </span>
        </div>
      </div>

      <div className="flex h-full flex-[1.2] rounded-e-lg bg-primary-100 font-bold text-default_text">
        <p className="m-auto text-xl">$32,256.56</p>
      </div>
    </article>
  )
}

function DailyVariation() {
  return (
    <article className="md:min-h-auto col-[1] row-[2] flex w-full flex-col gap-3 rounded-lg pt-2 shadow-lg md:flex-row">
      <div className="flex max-h-[5.5rem] flex-col gap-3">
        <p className="ml-2 w-max text-sm text-secondary-500">Daily Variation</p>

        <div className="flex w-full max-w-max flex-1 items-center justify-between gap-2 px-1 md:flex-col">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-primary-300" />
            <p className="text-sm">ETH</p>
          </div>
          <p className="text-sm text-tertiary-700">+5,65%</p>
        </div>
      </div>

      <div className="h-full w-full flex-[2] rounded-b-lg bg-secondary-400 md:rounded-b-none md:rounded-br-lg md:rounded-tr-lg" />
    </article>
  )
}

function News() {
  return (
    <article className="md:min-h-auto col-[2] row-[2] flex w-full flex-col gap-3 rounded-lg pt-2 shadow-lg md:flex-row">
      <div className="flex flex-1 flex-col p-2">
        <p className="ml-2 w-max text-sm font-bold">NFT{'’'}s NEWS</p>

        <p className="m-0 flex-1 px-1 text-sm md:m-1">New ElephantX NFT to be lauched!</p>

        <button className="hidden text-primary-500 md:ml-2 md:block md:text-left">
          Read more +
        </button>
      </div>

      <div className="min-h-[5rem] w-full flex-[2] rounded-b-lg bg-secondary-400 md:flex-[1.2] md:rounded-b-none md:rounded-br-lg md:rounded-tr-lg" />
    </article>
  )
}

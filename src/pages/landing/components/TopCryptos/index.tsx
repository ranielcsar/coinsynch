import { CryptosTable } from '@/components'

export function TopCryptos() {
  return (
    <section className="mb-5 flex min-h-[25vh] w-full flex-col bg-white p-5">
      <h5 className="mb-4 pt-8 text-center font-bold">Top Cryptos</h5>

      <div className="mt-5 max-w-screen-xl md:m-auto">
        <CryptosTable />
      </div>

      <button className="mx-auto my-3 w-max text-lg text-primary-500">View more +</button>
    </section>
  )
}

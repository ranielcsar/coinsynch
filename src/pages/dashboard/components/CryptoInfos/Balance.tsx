import { BalanceIcon } from '@/assets/icons'
import { CryptoCurrency } from '@/hooks/api/useCryptoCurrencies'
import { formatPriceInDollar } from '@/utils/formatPriceInDollar'

export function Balance({ cryptos }: { cryptos?: CryptoCurrency[] }) {
  const totalValueInUsd =
    cryptos?.reduce((total, crypto) => {
      const { priceUsd, holdings } = crypto as CryptoCurrency
      const quantity = holdings ? holdings : 0

      return total + Number(priceUsd) * quantity
    }, 0) || 0

  return (
    <article className="col-[1/3] row-[1] flex h-full w-full items-center rounded-lg bg-white shadow-lg xl:col-[1]">
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
        <p className="m-auto text-xl">{formatPriceInDollar(totalValueInUsd)}</p>
      </div>
    </article>
  )
}

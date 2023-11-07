import { useQuery } from 'react-query'

import { api } from '@/services/api'

export type CryptoCurrency = {
  id: string
  name: string
  symbol: string
  priceUsd: string
  changePercent24Hr: string
  holdings?: number
}

async function getCryptoCurrencies(limit: number) {
  try {
    const { data } = await api.get('assets', { params: { limit } })

    return data.data
  } catch (error) {
    console.error(error)
  }
}

export function useCryptoCurrencies(limit = 5) {
  const { isFetching, data } = useQuery(['crypto_currencies', limit], () =>
    getCryptoCurrencies(limit),
  )

  return { loadingCrypto: isFetching, cryptoCurrencies: data as CryptoCurrency[] }
}

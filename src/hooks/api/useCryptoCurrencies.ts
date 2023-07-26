import { useQuery } from 'react-query'

import { api } from '@/services/api'

export type CryptoCurrency = {
  id: string
  name: string
  symbol: string
  priceUsd: string
  changePercent24Hr: string
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
  const { isLoading, data } = useQuery(
    ['crypto_currencies'],
    () => getCryptoCurrencies(limit),
  )

  return { loadingCrypto: isLoading, cryptoCurrencies: data as CryptoCurrency[] }
}
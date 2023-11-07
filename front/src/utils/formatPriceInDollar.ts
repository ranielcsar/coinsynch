export function formatPriceInDollar(price: number): string {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'USD',
  })

  return formatter.format(price)
}
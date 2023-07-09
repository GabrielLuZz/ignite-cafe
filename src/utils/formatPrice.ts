export function formatPrice(price: number) {
  const priceWithSign = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const priceWithoutSign = priceWithSign.split('$')[1]

  return {
    priceWithSign,
    priceWithoutSign,
  }
}

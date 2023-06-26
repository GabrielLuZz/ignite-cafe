import { ReactNode } from 'react'

import { CartContextProvider } from './Cart'
import { OrderContextProvider } from './Order/OrderContext'

interface IGlobalProvider {
  children: ReactNode
}

export function GlobalProvider({ children }: IGlobalProvider) {
  return (
    <OrderContextProvider>
      <CartContextProvider>{children}</CartContextProvider>
    </OrderContextProvider>
  )
}

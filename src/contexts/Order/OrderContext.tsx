import { ReactNode, createContext, useState } from 'react'
import { ICartState } from '../../reducers/cart/reducer'

interface IAddress {
  cep: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
}

interface IOrder {
  address: IAddress
  paymentMethod: string
  cart: ICartState
}

interface IOrderContext {
  orders: IOrder[]
}

const OrderContext = createContext({} as IOrderContext)

interface IOrderContextProvider {
  children: ReactNode
}

export function OrderContextProvider({ children }: IOrderContextProvider) {
  const [orders, setOrders] = useState<IOrder[]>([])

  return (
    <OrderContext.Provider value={{ orders }}>{children}</OrderContext.Provider>
  )
}

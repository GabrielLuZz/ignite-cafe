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

export interface IOrder {
  id: string
  address: IAddress
  paymentMethod: string
  cartState: ICartState
}

interface IOrderContext {
  orders: IOrder[]
  setInOrders: (order: IOrder) => void
}

export const OrderContext = createContext({} as IOrderContext)

interface IOrderContextProvider {
  children: ReactNode
}

export function OrderContextProvider({ children }: IOrderContextProvider) {
  const [orders, setOrders] = useState<IOrder[]>([])

  function setInOrders(order: IOrder) {
    setOrders((state) => [...state, order])
  }

  return (
    <OrderContext.Provider value={{ orders, setInOrders }}>
      {children}
    </OrderContext.Provider>
  )
}

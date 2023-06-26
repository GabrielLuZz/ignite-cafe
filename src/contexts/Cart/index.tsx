import { createContext, ReactNode, useReducer } from 'react'

import { cartReducer, ICartState } from '../../reducers/cart/reducer'

interface ICartContext extends ICartState {}

const CartContext = createContext({} as ICartContext)

interface ICartContextProvider {
  children: ReactNode
}

const initalCartState: ICartState = {
  cartProducts: [],
  productsTotalPrice: 0,
  deliveryPrice: 0,
  cartTotalPrice: 0,
}

export function CartContextProvider({ children }: ICartContextProvider) {
  const [cartState, cartDispatch] = useReducer(cartReducer, initalCartState)

  const { cartProducts, cartTotalPrice, deliveryPrice, productsTotalPrice } =
    cartState

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        cartTotalPrice,
        deliveryPrice,
        productsTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

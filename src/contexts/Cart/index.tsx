import { createContext, ReactNode, useReducer } from 'react'

import {
  cartReducer,
  ICartProduct,
  ICartState,
} from '../../reducers/cart/reducer'
import {
  addInCartAction,
  cleanCartAction,
  decreaseQuantityAction,
  increaseQuantityAction,
  removeFromCartAction,
} from '../../reducers/cart/actions'

interface ICartContext extends ICartState {
  addInCart: (product: ICartProduct) => void
  removeFromCart: (id: string) => void
  increaseQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
  cleanCart: () => void
}

export const CartContext = createContext({} as ICartContext)

interface ICartContextProvider {
  children: ReactNode
}

const initalCartState: ICartState = {
  cart: [],
  productsTotalPrice: 0,
  deliveryPrice: 0,
  cartTotalPrice: 0,
}

export function CartContextProvider({ children }: ICartContextProvider) {
  const [cartState, cartDispatch] = useReducer(cartReducer, initalCartState)

  const { cart, cartTotalPrice, deliveryPrice, productsTotalPrice } = cartState

  function addInCart(product: ICartProduct) {
    cartDispatch(addInCartAction(product))
  }

  function removeFromCart(productId: string) {
    cartDispatch(removeFromCartAction(productId))
  }

  function increaseQuantity(productId: string) {
    cartDispatch(increaseQuantityAction(productId))
  }

  function decreaseQuantity(productId: string) {
    cartDispatch(decreaseQuantityAction(productId))
  }

  function cleanCart() {
    cartDispatch(cleanCartAction())
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartTotalPrice,
        deliveryPrice,
        productsTotalPrice,
        addInCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

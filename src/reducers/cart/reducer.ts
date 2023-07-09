import { CartActionTypes } from './actions'
import { produce } from 'immer'

export interface ICartProduct {
  productId: string
  cartId: string
  name: string
  image: string
  price: number
  quantity: number
}

export interface ICartState {
  cart: ICartProduct[]
  productsTotalPrice: number
  deliveryPrice: number
  cartTotalPrice: number
}

function changeQuantityOfProduct(draft: ICartState, action: any) {
  const indexInCart = draft.cart.findIndex(
    (productInCart) => productInCart.productId === action.payload.productId,
  )

  if (draft.cart[indexInCart]) {
    if (action.type === CartActionTypes.INCREASE_QUANTITY) {
      draft.cart[indexInCart].quantity += 1
    } else if (action.type === CartActionTypes.DECREASE_QUANTITY) {
      if (draft.cart[indexInCart].quantity > 1) {
        draft.cart[indexInCart].quantity--
      } else {
        removeFromCart(draft, action.payload.productId)
      }
    }
  }
}

function removeFromCart(draft: ICartState, productId: string) {
  draft.cart = draft.cart.filter((product) => product.productId !== productId)
}

export function cartReducer(state: ICartState, action: any) {
  let newState
  switch (action.type) {
    case CartActionTypes.ADD_IN_CART:
      newState = {
        ...produce(state, (draft) => {
          draft.cart.push(action.payload.product)
        }),
      }
      break
    case CartActionTypes.REMOVE_FROM_CART:
      newState = {
        ...produce(state, (draft) => {
          removeFromCart(draft, action.payload.productId)
        }),
      }
      break
    case CartActionTypes.INCREASE_QUANTITY:
    case CartActionTypes.DECREASE_QUANTITY:
      newState = {
        ...produce(state, (draft) => changeQuantityOfProduct(draft, action)),
      }
      break
    case CartActionTypes.CLEAN_CART:
      newState = {
        ...produce(state, (draft) => {
          draft.cart = []
        }),
      }
      break
    default:
      newState = state
  }

  newState.productsTotalPrice = newState.cart.reduce((acumulator, product) => {
    const productValue = product.quantity * product.price

    return acumulator + productValue
  }, 0)

  newState.deliveryPrice = newState.productsTotalPrice ? 3.5 : 0

  newState.cartTotalPrice = newState.productsTotalPrice + newState.deliveryPrice

  return newState
}

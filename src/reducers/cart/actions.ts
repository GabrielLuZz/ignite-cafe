import { ICartProduct } from './reducer'

export enum CartActionTypes {
  ADD_IN_CART = 'ADD_IN_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  INCREASE_QUANTITY = 'INCREASE_QUANTITY',
  DECREASE_QUANTITY = 'DECREASE_QUANTITY',
  CLEAN_CART = 'CLEAN_CART',
}

export function addInCartAction(product: ICartProduct) {
  return {
    type: CartActionTypes.ADD_IN_CART,
    payload: {
      product,
      productId: product.productId,
    },
  }
}

export function removeFromCartAction(productId: string) {
  return {
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: {
      productId,
    },
  }
}
export function increaseQuantityAction(productId: string) {
  return {
    type: CartActionTypes.INCREASE_QUANTITY,
    payload: {
      productId,
    },
  }
}
export function decreaseQuantityAction(productId: string) {
  return {
    type: CartActionTypes.DECREASE_QUANTITY,
    payload: {
      productId,
    },
  }
}

export function cleanCartAction() {
  return {
    type: CartActionTypes.CLEAN_CART,
  }
}

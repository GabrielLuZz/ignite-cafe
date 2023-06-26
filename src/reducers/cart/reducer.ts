export interface ICartProducts {
  name: string
  image: string
  price: number
}

export interface ICartState {
  cartProducts: ICartProducts[]
  productsTotalPrice: number
  deliveryPrice: number
  cartTotalPrice: number
}

export function cartReducer(state: ICartState, action: any) {
  switch (action.type) {
    default:
      return state
  }
}

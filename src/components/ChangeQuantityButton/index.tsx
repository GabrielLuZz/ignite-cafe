import { Minus, Plus } from 'phosphor-react'
import { ChangeQuantityContainer } from './style'
import { useContext } from 'react'
import { CartContext } from '../../contexts/Cart'
import { ICartProduct } from '../../reducers/cart/reducer'

interface IChangeQuantityButton {
  product: ICartProduct
}

export function ChangeQuantityButton({ product }: IChangeQuantityButton) {
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext)

  function handleIncreaseQuantity() {
    increaseQuantity(product.productId)
  }

  function handleDecreaseQuantity() {
    decreaseQuantity(product.productId)
  }
  return (
    <ChangeQuantityContainer>
      <button type="button" onClick={handleDecreaseQuantity}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{product.quantity}</span>
      <button type="button" onClick={handleIncreaseQuantity}>
        <Plus size={14} weight="bold" />
      </button>
    </ChangeQuantityContainer>
  )
}

import { Trash } from 'phosphor-react'
import { ChangeQuantityButton } from '../../../../../../components/ChangeQuantityButton'
import { CartItemContainer } from './style'
import { ICartProduct } from '../../../../../../reducers/cart/reducer'
import { formatPrice } from '../../../../../../utils/formatPrice'
import { useContext } from 'react'
import { CartContext } from '../../../../../../contexts/Cart'

interface ICartItem {
  product: ICartProduct
}

export function CartItem({ product }: ICartItem) {
  const { removeFromCart } = useContext(CartContext)

  function handleRemoveFromCart() {
    removeFromCart(product.productId)
  }

  return (
    <CartItemContainer>
      <div className="leftSide">
        <img src={`/public/assets/${product.image}`} alt="" />
        <div className="info">
          <h3>${product.name}</h3>
          <div className="actions">
            <ChangeQuantityButton product={product} />
            <button
              type="button"
              className="removeButton"
              onClick={handleRemoveFromCart}
            >
              <Trash size={16} />
              <span>Remover</span>
            </button>
          </div>
        </div>
      </div>
      <span className="price">{formatPrice(product.price).priceWithSign}</span>
    </CartItemContainer>
  )
}

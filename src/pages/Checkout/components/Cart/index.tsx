import { useContext } from 'react'
import { CartItem } from './components/CartItem'
import { CartContainer } from './style'
import { CartContext } from '../../../../contexts/Cart'
import { formatPrice } from '../../../../utils/formatPrice'

export function Cart() {
  const { cart, productsTotalPrice, deliveryPrice, cartTotalPrice } =
    useContext(CartContext)
  return (
    <CartContainer>
      <section className="cartShowcase">
        {cart.map((cartProduct) => (
          <CartItem key={cartProduct.cartId} product={cartProduct} />
        ))}
      </section>
      <section className="cartInfo">
        <div className="info">
          <span className="infoTitle">Total de itens</span>
          <span className="infoPrice">
            {formatPrice(productsTotalPrice).priceWithSign}
          </span>
        </div>
        <div className="info">
          <span className="infoTitle">Entrega</span>
          <span className="infoPrice">
            {formatPrice(deliveryPrice).priceWithSign}
          </span>
        </div>
        <div className="info totalInfo">
          <span className="infoTitle">Total</span>
          <span className="infoPrice">
            {formatPrice(cartTotalPrice).priceWithSign}
          </span>
        </div>

        <button type="submit">confirmar pedido</button>
      </section>
    </CartContainer>
  )
}

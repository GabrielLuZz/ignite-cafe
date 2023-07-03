import { CartItem } from './components/CartItem'
import { CartContainer } from './style'

export function Cart() {
  return (
    <CartContainer>
      <section className="cartShowcase">
        <CartItem />
        <CartItem />
        <CartItem />
      </section>
      <section className="cartInfo">
        <div className="info">
          <span className="infoTitle">Total de itens</span>
          <span className="infoPrice">R$ 29,70</span>
        </div>
        <div className="info">
          <span className="infoTitle">Entrega</span>
          <span className="infoPrice">R$ 3,50</span>
        </div>
        <div className="info totalInfo">
          <span className="infoTitle">Total</span>
          <span className="infoPrice">R$ 33,20</span>
        </div>

        <button type="submit">confirmar pedido</button>
      </section>
    </CartContainer>
  )
}

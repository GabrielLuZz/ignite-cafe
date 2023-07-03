import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { Cart } from './components/Cart'
import { CheckoutSession } from './components/CheckoutSession'
import { CheckoutContainer } from './style'
import { Address } from './components/Address'
import { Payment } from './components/Payment'

export function Checkout() {
  return (
    <main>
      <CheckoutContainer>
        <section className="side">
          <h2>Complete seu pedido</h2>

          <CheckoutSession
            titleText="Endereço de Entrega"
            subtitleText="Informe o endereço onde deseja receber seu pedido"
            Icon={<MapPinLine size={22} />}
            iconColor="yellowDark"
          >
            <Address />
          </CheckoutSession>

          <CheckoutSession
            titleText="Pagamento"
            subtitleText="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            Icon={<CurrencyDollar size={22} />}
            iconColor="purple"
          >
            <Payment />
          </CheckoutSession>
        </section>
        <section className="side">
          <h2>Cafés selecionados</h2>
          <Cart />
        </section>
      </CheckoutContainer>
    </main>
  )
}

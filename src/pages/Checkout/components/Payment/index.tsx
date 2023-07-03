import { Bank, CreditCard, Money } from 'phosphor-react'
import { PaymentContainer, PaymentMethod } from './style'

export function Payment() {
  return (
    <PaymentContainer>
      <PaymentMethod>
        <CreditCard size={16} />
        <input type="radio" name="paymentMethod" value="credit-card" />
        <span>Cartão de crédito</span>
      </PaymentMethod>
      <PaymentMethod>
        <Bank size={16} />
        <input type="radio" name="paymentMethod" value="credit-card" />
        <span>cartão de débito</span>
      </PaymentMethod>
      <PaymentMethod>
        <Money size={16} />
        <input type="radio" name="paymentMethod" value="credit-card" />
        <span>dinheiro</span>
      </PaymentMethod>
    </PaymentContainer>
  )
}

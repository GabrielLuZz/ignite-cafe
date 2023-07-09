import { Bank, CreditCard, Money } from 'phosphor-react'
import { PaymentContainer, PaymentMethod } from './style'
import { UseFormRegister } from 'react-hook-form'
import { IOrderFormData } from '../..'

interface IPayment {
  register: UseFormRegister<IOrderFormData>
}

export function Payment({ register }: IPayment) {
  return (
    <PaymentContainer>
      <PaymentMethod>
        <CreditCard size={16} />
        <input
          type="radio"
          {...register('paymentMethod')}
          value="cartão de crédito"
        />
        <span>Cartão de crédito</span>
      </PaymentMethod>
      <PaymentMethod>
        <Bank size={16} />
        <input
          type="radio"
          {...register('paymentMethod')}
          value="cartão de débito"
        />
        <span>cartão de débito</span>
      </PaymentMethod>
      <PaymentMethod>
        <Money size={16} />
        <input
          type="radio"
          {...register('paymentMethod')}
          value="em dinheiro"
        />
        <span>dinheiro</span>
      </PaymentMethod>
    </PaymentContainer>
  )
}

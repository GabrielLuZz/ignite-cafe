import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { Cart } from './components/Cart'
import { CheckoutSession } from './components/CheckoutSession'
import { CheckoutContainer } from './style'
import { Address } from './components/Address'
import { Payment } from './components/Payment'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { IOrder, OrderContext } from '../../contexts/Order/OrderContext'
import { v4 as uuidv4 } from 'uuid'
import { useContext } from 'react'
import { CartContext } from '../../contexts/Cart'
import { useNavigate, Navigate } from 'react-router-dom'

const orderFormValidationSchema = zod.object({
  cep: zod.string(),
  street: zod.string(),
  number: zod.string(),
  complement: zod.string(),
  neighborhood: zod.string(),
  city: zod.string(),
  state: zod.string(),
  paymentMethod: zod.string(),
})

export type IOrderFormData = zod.infer<typeof orderFormValidationSchema>

export function Checkout() {
  const { register, handleSubmit, reset } = useForm<IOrderFormData>({
    resolver: zodResolver(orderFormValidationSchema),
  })

  const navigateFunction = useNavigate()

  const cartState = useContext(CartContext)
  const { setInOrders } = useContext(OrderContext)

  function handleConfirmOrder(data: IOrderFormData) {
    const {
      cep,
      city,
      complement,
      neighborhood,
      number,
      paymentMethod,
      state,
      street,
    } = data

    const order: IOrder = {
      id: uuidv4(),
      address: {
        cep,
        city,
        neighborhood,
        number,
        state,
        street,
        complement,
      },
      paymentMethod,
      cartState,
    }

    setInOrders(order)

    reset()

    cartState.cleanCart()

    navigateFunction(`/success/${order.id}`)
  }

  if (!cartState.cart.length) {
    return <Navigate to="/" />
  }

  return (
    <main>
      <CheckoutContainer onSubmit={handleSubmit(handleConfirmOrder)}>
        <section className="side">
          <h2>Complete seu pedido</h2>

          <CheckoutSession
            titleText="Endereço de Entrega"
            subtitleText="Informe o endereço onde deseja receber seu pedido"
            Icon={<MapPinLine size={22} />}
            iconColor="yellowDark"
          >
            <Address register={register} />
          </CheckoutSession>

          <CheckoutSession
            titleText="Pagamento"
            subtitleText="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            Icon={<CurrencyDollar size={22} />}
            iconColor="purple"
          >
            <Payment register={register} />
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

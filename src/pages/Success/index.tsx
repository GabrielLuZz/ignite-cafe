import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { OrderInfo, SuccessContainer } from './style'
import { Navigate, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/Order/OrderContext'

export function Success() {
  const { orderId } = useParams()

  const { orders } = useContext(OrderContext)

  const order = orders.find((order) => order.id === orderId)

  if (!order) {
    return <Navigate to={'/checkout'} />
  }

  return (
    <SuccessContainer>
      <div className="info">
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
        <div className="summary">
          <OrderInfo iconBackground="purple">
            <span className="icon">
              <MapPin size={16} weight="fill" />
            </span>
            <p className="text">
              Entrega em
              <span className="bold">
                {' '}
                Rua {order?.address.street}, {order?.address.number}{' '}
              </span>
              {order?.address.neighborhood} - {order?.address.city},{' '}
              {order?.address.state}
            </p>
          </OrderInfo>

          <OrderInfo iconBackground="yellow">
            <span className="icon">
              <Timer size={16} weight="fill" />
            </span>
            <p className="text">
              Previsão de entrega
              <span className="bold block">20 min - 30 min </span>
            </p>
          </OrderInfo>

          <OrderInfo iconBackground="yellowDark">
            <span className="icon">
              <CurrencyDollar size={16} weight="fill" />
            </span>
            <p className="text">
              Pagamento na entrega
              <span className="bold block">{order?.paymentMethod}</span>
            </p>
          </OrderInfo>
        </div>
      </div>
      <img src="/public/assets/illustration.svg" alt="" />
    </SuccessContainer>
  )
}

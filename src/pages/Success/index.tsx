import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { OrderInfo, SuccessContainer } from './style'

export function Success() {
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
              <span className="bold"> Rua João Daniel Martinelli, 102 </span>
              Farrapos - Porto Alegre, RS
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
              <span className="bold block">Cartão de Crédito</span>
            </p>
          </OrderInfo>
        </div>
      </div>
      <img src="/public/assets/illustration.svg" alt="" />
    </SuccessContainer>
  )
}

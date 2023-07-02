import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from './style'
import Logo from '../../../public/assets/logo.svg'
import { CartButton } from '../../styles/global'

export function Header() {
  return (
    <HeaderContainer>
      <div className="wrapper">
        <img src={Logo} alt="" />
        <div>
          <div className="locationTag">
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
            <span></span>
          </div>

          <CartButton
            cartBackground="yellowLight"
            cartColor="yellowDark"
            className="cartButton"
          >
            <ShoppingCart size={22} weight="fill" />
            <span>3</span>
          </CartButton>
        </div>
      </div>
    </HeaderContainer>
  )
}

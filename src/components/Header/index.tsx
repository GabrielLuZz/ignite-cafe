import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from './style'
import Logo from '../../../public/assets/logo.svg'
import { CartButton } from '../../styles/global'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <div className="wrapper">
        <NavLink className="logo" to="/">
          <img src={Logo} alt="" />
        </NavLink>
        <div>
          <div className="locationTag">
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
            <span></span>
          </div>

          <NavLink to="/checkout">
            <CartButton
              cartBackground="yellowLight"
              cartColor="yellowDark"
              className="cartButton"
              focusColor="yellowDark"
            >
              <ShoppingCart size={22} weight="fill" />
              <span>3</span>
            </CartButton>
          </NavLink>
        </div>
      </div>
    </HeaderContainer>
  )
}

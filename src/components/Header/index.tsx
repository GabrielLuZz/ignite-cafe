import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from './style'
import Logo from '../../../public/assets/logo.svg'
import { CartButton } from '../../styles/global'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/Cart'

export function Header() {
  const { cart } = useContext(CartContext)

  const productQuantityInCart = cart.length

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
              {productQuantityInCart > 0 && (
                <span>{productQuantityInCart}</span>
              )}
            </CartButton>
          </NavLink>
        </div>
      </div>
    </HeaderContainer>
  )
}

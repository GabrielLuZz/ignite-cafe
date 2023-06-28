import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from './style'
import Logo from '../../assets/logo.svg'

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
          <button className="cartButton">
            <ShoppingCart size={22} weight="fill" />
            <span>3</span>
          </button>
        </div>
      </div>
    </HeaderContainer>
  )
}

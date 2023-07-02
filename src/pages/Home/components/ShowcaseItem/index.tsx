import { ShoppingCart } from 'phosphor-react'
import { CartButton } from '../../../../styles/global'
import { ShowcaseItemContainer } from './style'
import { ChangeQuantityButton } from '../../../../components/ChangeQuantityButton'

export function ShowcaseItem() {
  return (
    <ShowcaseItemContainer>
      <img src="/public/assets/arabe.png" alt="" />
      <div className="tagsList">
        <span>Tradicional</span>
      </div>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <div className="actionsArea">
        <span className="price">
          <span>R$</span> 9,90
        </span>
        <div className="actionsRightSide">
          <ChangeQuantityButton />
          <CartButton cartBackground="purpleDark" cartColor="baseCard">
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </div>
      </div>
    </ShowcaseItemContainer>
  )
}

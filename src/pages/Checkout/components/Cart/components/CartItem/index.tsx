import { Trash } from 'phosphor-react'
import { ChangeQuantityButton } from '../../../../../../components/ChangeQuantityButton'
import { CartItemContainer } from './style'

export function CartItem() {
  return (
    <CartItemContainer>
      <div className="leftSide">
        <img src="/public/assets/arabe.png" alt="" />
        <div className="info">
          <h3>Expresso Tradicional</h3>
          <div className="actions">
            <ChangeQuantityButton />
            <button className="removeButton">
              <Trash size={16} />
              <span>Remover</span>
            </button>
          </div>
        </div>
      </div>
      <span className="price">R$ 9,90</span>
    </CartItemContainer>
  )
}

import { Minus, Plus } from 'phosphor-react'
import { ChangeQuantityContainer } from './style'

export function ChangeQuantityButton() {
  return (
    <ChangeQuantityContainer>
      <button>
        <Minus size={14} weight="bold" />
      </button>
      <span>2</span>
      <button>
        <Plus size={14} weight="bold" />
      </button>
    </ChangeQuantityContainer>
  )
}

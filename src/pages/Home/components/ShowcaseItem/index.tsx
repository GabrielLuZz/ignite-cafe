import { ShoppingCart } from 'phosphor-react'
import { CartButton } from '../../../../styles/global'
import { ShowcaseItemContainer } from './style'
import { ChangeQuantityButton } from '../../../../components/ChangeQuantityButton'
import { IProduct } from '../../../../mocks/products'
import { formatPrice } from '../../../../utils/formatPrice'

interface IShowcaseItem {
  product: IProduct
}

export function ShowcaseItem({ product }: IShowcaseItem) {
  console.log(formatPrice(product.price).split(' '))
  return (
    <ShowcaseItemContainer>
      <img src={`/public/assets/${product.image}`} alt={product.name} />
      <div className="tagsList">
        {product.flags.map((flag) => (
          <span key={product.name + flag + new Date().getTime()}>{flag}</span>
        ))}
      </div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="actionsArea">
        <span className="price">
          <span>R$</span> {formatPrice(product.price)}
        </span>
        <div className="actionsRightSide">
          <ChangeQuantityButton />
          <CartButton
            cartBackground="purpleDark"
            cartColor="baseCard"
            focusColor="purple"
            className="cartButton"
          >
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </div>
      </div>
    </ShowcaseItemContainer>
  )
}

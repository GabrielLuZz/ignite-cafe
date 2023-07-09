import { ShoppingCart } from 'phosphor-react'
import { CartButton } from '../../../../styles/global'
import { ShowcaseItemContainer } from './style'
import { ChangeQuantityButton } from '../../../../components/ChangeQuantityButton'
import { IProduct } from '../../../../mocks/products'
import { formatPrice } from '../../../../utils/formatPrice'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/Cart'
import { v4 as uuidv4 } from 'uuid'

interface IShowcaseItem {
  product: IProduct
}

export function ShowcaseItem({ product }: IShowcaseItem) {
  const { addInCart, cart, increaseQuantity } = useContext(CartContext)

  const isAlreadyInCart = cart.find(
    (productCart) => productCart.productId === product.id,
  )

  function handleAddInCartButton() {
    if (isAlreadyInCart) {
      increaseQuantity(product.id)
    } else {
      const cartProduct = {
        productId: product.id,
        cartId: uuidv4(),
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: 1,
      }

      addInCart(cartProduct)
    }
  }
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
          <span>R$</span> {formatPrice(product.price).priceWithoutSign}
        </span>
        <div className="actionsRightSide">
          {isAlreadyInCart && isAlreadyInCart.quantity > 0 && (
            <ChangeQuantityButton product={isAlreadyInCart} />
          )}
          <CartButton
            cartBackground="purpleDark"
            cartColor="baseCard"
            focusColor="purple"
            className="cartButton"
            onClick={handleAddInCartButton}
          >
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </div>
      </div>
    </ShowcaseItemContainer>
  )
}

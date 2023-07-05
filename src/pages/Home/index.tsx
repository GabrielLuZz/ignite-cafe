import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Introduction, Showcase } from './style'
import introductionImage from '../../../public/assets/introductionImage.png'
import { ShowcaseItem } from './components/ShowcaseItem'
import { products } from '../../mocks/products'

export function Home() {
  return (
    <main>
      <Introduction>
        <div className="wrapper">
          <div className="content">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <ul>
              <li>
                <span>
                  <ShoppingCart size={16} weight="fill" />
                </span>
                Compra simples e segura
              </li>
              <li>
                <span>
                  <Package size={16} weight="fill" />
                </span>
                Embalagem mantém o café intacto
              </li>
              <li>
                <span>
                  <Timer size={16} weight="fill" />
                </span>
                Entrega rápida e rastreada
              </li>
              <li>
                <span>
                  <Coffee size={16} weight="fill" />
                </span>
                O café chega fresquinho até você
              </li>
            </ul>
          </div>
          <div className="imageArea">
            <img src={introductionImage} alt="" />
          </div>
        </div>
      </Introduction>
      <Showcase>
        <div className="wrapper">
          <h2>Nossos cafés</h2>
          <ul className="showcaseList">
            {products.map((product) => (
              <ShowcaseItem key={product.id} product={product} />
            ))}
          </ul>
        </div>
      </Showcase>
    </main>
  )
}

import { v4 as uuidv4 } from 'uuid'

export interface IProduct {
  id: string
  image: string
  name: string
  description: string
  price: number
  flags: string[]
}

export const products: IProduct[] = [
  {
    id: uuidv4(),
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 5.9,
    image: 'exp-trad.png',
    flags: ['tradicional'],
  },
  {
    id: uuidv4(),
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 20.9,
    image: 'exp-amer.png',
    flags: ['tradicional'],
  },
  {
    id: uuidv4(),
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 12.5,
    image: 'exp-crem.png',
    flags: ['tradicional'],
  },
  {
    id: uuidv4(),
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 24.9,
    image: 'exp-gel.png',
    flags: ['tradicional', 'gelado'],
  },
  {
    id: uuidv4(),
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 7.9,
    image: 'cafe-com-leite.png',
    flags: ['tradicional', 'com leite'],
  },
  {
    id: uuidv4(),
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 12.9,
    image: 'latte.png',
    flags: ['tradicional', 'com leite'],
  },
  {
    id: uuidv4(),
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 22.9,
    image: 'capuccino.png',
    flags: ['tradicional', 'com leite'],
  },
  {
    id: uuidv4(),
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 17.5,
    image: 'macchiato.png',
    flags: ['tradicional', 'com leite'],
  },
  {
    id: uuidv4(),
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 76.9,
    image: 'mocaccino.png',
    flags: ['tradicional', 'com leite'],
  },
  {
    id: uuidv4(),
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 14.9,
    image: 'choc-quen.png',
    flags: ['especial', 'com leite'],
  },
  {
    id: uuidv4(),
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 45.5,
    image: 'cubano.png',
    flags: ['especial', 'alcoólico', 'gelado'],
  },
  {
    id: uuidv4(),
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 29.9,
    image: 'havaiano.png',
    flags: ['especial'],
  },
  {
    id: uuidv4(),
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 32.9,
    image: 'arabe.png',
    flags: ['especial'],
  },
  {
    id: uuidv4(),
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 28.9,
    image: 'irlandes.png',
    flags: ['especial', 'alcoólico'],
  },
]

import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['yellow-dark']} ;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: ${(props) => props.theme.fonts.font1.TextS};
  }
`

const CART_COLORS = {
  yellowLight: 'yellow-light',
  yellowDark: 'yellow-dark',
  purpleDark: 'purple-dark',
  baseCard: 'base-card',
} as const

interface CartProps {
  cartBackground: keyof typeof CART_COLORS
  cartColor: keyof typeof CART_COLORS
}

export const CartButton = styled.button<CartProps>`
  border: 0;
  position: relative;
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  background: ${(props) =>
    props.theme.colors[CART_COLORS[props.cartBackground]]};
  color: ${(props) => props.theme.colors[CART_COLORS[props.cartColor]]};
`

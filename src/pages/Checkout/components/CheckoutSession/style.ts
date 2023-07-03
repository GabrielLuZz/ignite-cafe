import styled from 'styled-components'

export const ICON_COLORS = {
  yellowDark: 'yellow-dark',
  purple: 'purple',
} as const

interface CheckoutSessionProps {
  iconColor: keyof typeof ICON_COLORS
}

export const CheckoutSessionContainer = styled.div<CheckoutSessionProps>`
  width: 100%;
  padding: 2.5rem;
  border-radius: 0.375rem;
  background: ${(props) => props.theme.colors['base-card']};
  .title {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.13rem 0.5rem;
    color: ${(props) => props.theme.colors[ICON_COLORS[props.iconColor]]};
    margin-bottom: 2rem;

    h3 {
      font: ${(props) => props.theme.fonts.font1.TextMReg};
      color: ${(props) => props.theme.colors['base-subtitle']};
    }

    p {
      grid-column: 2;
      font: ${(props) => props.theme.fonts.font1.TextS};
      color: ${(props) => props.theme.colors['base-text']};
    }
  }
`

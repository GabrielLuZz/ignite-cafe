import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding-top: 5rem;
  padding-bottom: 8rem;

  .info {
    h1 {
      font: ${(props) => props.theme.fonts.font2.TitleL};
      color: ${(props) => props.theme.colors['yellow-dark']};
      margin-bottom: 0.25rem;
    }

    h2 {
      font: ${(props) => props.theme.fonts.font1.TextLReg};
      color: ${(props) => props.theme.colors['base-subtitle']};
      margin-bottom: 2.5rem;
    }
  }

  .summary {
    display: flex;
    width: 100%;
    max-width: 32.875rem;
    padding: 2.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    border-radius: 0.375rem 2.25rem;
    position: relative;
    background: ${(props) => props.theme.colors.background};

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to right, #dbac2c, #8047f8);
      z-index: -1;
      margin: -2px;
      border-radius: 0.375rem 2.25rem;
    }
  }
`

const ORDER_COLORS = {
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
  purple: 'purple',
} as const

interface OrderProps {
  iconBackground: keyof typeof ORDER_COLORS
}

export const OrderInfo = styled.div<OrderProps>`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.75rem;

  .icon {
    width: 2rem;
    height: 2rem;
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: ${(props) =>
      props.theme.colors[ORDER_COLORS[props.iconBackground]]};
    color: ${(props) => props.theme.colors.background};
  }

  .text {
    max-width: 19.375rem;
    font: ${(props) => props.theme.fonts.font1.TextMReg};
    color: ${(props) => props.theme.colors['base-text']};

    .bold {
      font: ${(props) => props.theme.fonts.font1.TextMBol};
    }

    .block {
      display: block;
    }
  }
`

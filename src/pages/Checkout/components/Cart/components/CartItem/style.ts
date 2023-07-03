import styled from 'styled-components'

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 2.09rem;
  border-bottom: 1px solid ${(props) => props.theme.colors['base-button']};

  .leftSide {
    display: flex;
    gap: 1.25rem;
    align-items: start;

    img {
      width: 4rem;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      h3 {
        font: ${(props) => props.theme.fonts.font1.TextMReg};
        color: ${(props) => props.theme.colors['base-subtitle']};
      }

      .actions {
        display: flex;
        gap: 0.5rem;

        .removeButton {
          display: flex;
          height: 2rem;
          padding: 0rem 0.5rem;
          align-items: center;
          gap: 0.25rem;
          border: 0;
          border-radius: 0.375rem;
          background: ${(props) => props.theme.colors['base-button']};
          color: ${(props) => props.theme.colors.purple};

          span {
            font: ${(props) => props.theme.fonts.font1.ButtonM};
            color: ${(props) => props.theme.colors['base-text']};
            text-transform: uppercase;
          }
        }
      }
    }
  }

  .price {
    font: ${(props) => props.theme.fonts.font1.TextMBol};
    color: ${(props) => props.theme.colors['base-text']};
  }
`

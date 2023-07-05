import styled from 'styled-components'

export const CartContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  border-radius: 0.375rem 2.75rem;
  background: ${(props) => props.theme.colors['base-card']};

  .cartShowcase {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 14.5rem;
    overflow-y: auto;
  }

  .cartInfo {
    width: 100%;

    .info {
      display: flex;
      justify-content: space-between;
      color: ${(props) => props.theme.colors['base-text']};
      margin-bottom: 0.75rem;
    }

    .infoTitle {
      font: ${(props) => props.theme.fonts.font1.TextS};
    }

    .infoPrice {
      font: ${(props) => props.theme.fonts.font1.TextMReg};
    }

    .info.totalInfo {
      margin-bottom: 1.5rem;
      .infoTitle {
        font: ${(props) => props.theme.fonts.font1.TextLBol};
        color: ${(props) => props.theme.colors['base-subtitle']};
      }

      .infoPrice {
        font: ${(props) => props.theme.fonts.font1.TextLBol};
        color: ${(props) => props.theme.colors['base-subtitle']};
      }
    }

    button {
      border: 0;
      width: 100%;
      padding: 0.75rem 0.5rem;
      border-radius: 0.375rem;
      background: ${(props) => props.theme.colors.yellow};
      font: ${(props) => props.theme.fonts.font1.ButtonG};
      color: ${(props) => props.theme.colors.white};
      text-transform: uppercase;

      &:hover {
        background: ${(props) => props.theme.colors['yellow-dark']};
      }
    }
  }
`

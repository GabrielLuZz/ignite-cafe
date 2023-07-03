import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 40rem 28rem;
  gap: 2rem;
  padding-bottom: 15rem;

  .side {
    display: flex;
    flex-direction: column;
    gap: 0.94rem;

    h2 {
      font: ${(props) => props.theme.fonts.font2.TitleXS};
      color: ${(props) => props.theme.colors['base-subtitle']};
    }
  }
`

import styled from 'styled-components'

export const PaymentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.75rem 0.3rem;
`

export const PaymentMethod = styled.label`
  display: flex;
  padding: 1rem;
  align-items: center;
  gap: 0.75rem;
  flex: 1 0 0;
  border-radius: 0.375rem;
  background: ${(props) => props.theme.colors['base-button']};
  color: ${(props) => props.theme.colors.purple};
  border: 1px solid ${(props) => props.theme.colors['base-card']};

  span {
    font: ${(props) => props.theme.fonts.font1.ButtonM};
    color: ${(props) => props.theme.colors['base-text']};
    text-transform: uppercase;
  }

  input {
    display: none;
  }

  &:has(input:checked) {
    border: 1px solid ${(props) => props.theme.colors.purple};
    background: ${(props) => props.theme.colors['purple-light']};
  }
`

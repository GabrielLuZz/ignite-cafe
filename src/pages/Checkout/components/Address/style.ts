import styled from 'styled-components'

export const AddressContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 1rem 0.75rem;

  input {
    padding: 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid ${(props) => props.theme.colors['base-button']};
    background: ${(props) => props.theme.colors['base-input']};
    color: ${(props) => props.theme.colors['base-text']};
    font: ${(props) => props.theme.fonts.font1.TextS};

    &::placeholder {
      color: ${(props) => props.theme.colors['base-label']};
      font: ${(props) => props.theme.fonts.font1.TextS};
    }

    &[name='street'] {
      grid-column: 1 / -1;
    }

    &[name='complement'] {
      grid-column: 2 / -1;
    }

    &[name='state'] {
      max-width: 3.75rem;
      grid-column: 3;
      grid-template-columns: 1fr 0.5fr 1fr;
    }
  }
`

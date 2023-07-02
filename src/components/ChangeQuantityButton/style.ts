import styled from 'styled-components'

export const ChangeQuantityContainer = styled.div`
  display: flex;
  width: 4rem;
  height: 2.375rem;
  padding: 0 0.5rem;
  justify-content: center;
  gap: 0.25rem;
  border-radius: 0.375rem;
  background: ${(props) => props.theme.colors['base-button']};

  button {
    flex: 1;
    border: 0;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.purple};
  }

  span {
    color: ${(props) => props.theme.colors['base-title']};
    font: ${(props) => props.theme.fonts.font1.TextMReg};
    display: flex;
    align-items: center;
  }
`

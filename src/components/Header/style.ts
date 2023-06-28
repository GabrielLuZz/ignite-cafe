import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 0 1.25rem;
  .wrapper {
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;

    & > div {
      display: flex;
      gap: 0.75rem;
    }
  }

  .locationTag {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    gap: 0.25rem;
    border-radius: 6px;
    background: ${(props) => props.theme.colors['purple-light']};
    color: ${(props) => props.theme.colors['purple-dark']};

    svg {
      color: ${(props) => props.theme.colors.purple};
    }
  }

  .cartButton {
    border: 0;
    position: relative;
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    border-radius: 6px;
    background: ${(props) => props.theme.colors['yellow-light']};
    color: ${(props) => props.theme.colors['yellow-dark']};

    span {
      position: absolute;
      right: -0.52156rem;
      top: -0.5rem;
      font: ${(props) => props.theme.fonts.font1.TextXS};
      color: ${(props) => props.theme.colors.white};
      width: 1.25rem;
      height: 1.25rem;
      padding-top: 1px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background: ${(props) => props.theme.colors['yellow-dark']};
    }
  }
`

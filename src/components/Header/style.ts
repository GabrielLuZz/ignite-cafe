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
    font: ${(props) => props.theme.fonts.font1.TextS};

    svg {
      color: ${(props) => props.theme.colors.purple};
    }
  }

  .cartButton {
    span {
      position: absolute;
      right: -0.52156rem;
      top: -0.5rem;
      font: ${(props) => props.theme.fonts.font1.TextXS};
      letter-spacing: -0.045rem;
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

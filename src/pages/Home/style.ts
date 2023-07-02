import styled from 'styled-components'

export const Introduction = styled.section`
  background: url('/src/assets/introductionBackground.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 34rem;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  .wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;
    gap: 3.5rem;
  }

  .content {
    h1 {
      font: ${(props) => props.theme.fonts.font2.TitleXL};
      color: ${(props) => props.theme.colors['base-title']};
      margin-bottom: 1rem;
    }

    p {
      font: ${(props) => props.theme.fonts.font1.TextLReg};
      color: ${(props) => props.theme.colors['base-subtitle']};
      margin-bottom: 4.12rem;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      gap: 1.25rem 0;

      li {
        font: ${(props) => props.theme.fonts.font1.TextMReg};
        color: ${(props) => props.theme.colors['base-text']};
        display: flex;
        align-items: center;
        gap: 0.75rem;
        flex: 1;
        min-width: 50%;

        span {
          display: inline-flex;
          padding: 0.5rem;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          color: ${(props) => props.theme.colors.background};
        }

        &:first-child span {
          background: ${(props) => props.theme.colors['yellow-dark']};
        }

        &:nth-child(2) span {
          background: ${(props) => props.theme.colors['base-text']};
        }
        &:nth-child(3) span {
          background: ${(props) => props.theme.colors.yellow};
        }
        &:last-child span {
          background: ${(props) => props.theme.colors.purple};
        }
      }
    }
  }
`
export const Showcase = styled.section`
  padding: 0px 1.25rem;
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;
    gap: 3.37rem;
  }

  h2 {
    font: ${(props) => props.theme.fonts.font2.TitleL};
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  .showcaseList {
    display: grid;
    grid-template-columns: repeat(auto-fit, 16rem);
    justify-content: space-between;
    gap: 2.5rem 2rem;
    padding-bottom: 9.81rem;
  }
`

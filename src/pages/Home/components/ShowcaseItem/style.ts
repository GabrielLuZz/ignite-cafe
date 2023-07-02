import styled from 'styled-components'

export const ShowcaseItemContainer = styled.li`
  list-style: none;
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 0.375rem 2.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1.25rem;

  img {
    margin-bottom: 0.75rem;
    position: relative;
    top: -1.25rem;
  }

  .tagsList {
    margin-bottom: 1rem;
    span {
      border-radius: 6.25rem;
      background: ${(props) => props.theme.colors['yellow-light']};
      padding: 0.25rem 0.5rem;
      color: ${(props) => props.theme.colors['yellow-dark']};
      font: ${(props) => props.theme.fonts.font1.Tag};
      text-transform: uppercase;
    }
  }

  h3 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font: ${(props) => props.theme.fonts.font2.TitleS};
    margin-bottom: 0.5rem;
  }

  p {
    max-width: 13.5rem;
    color: ${(props) => props.theme.colors['base-label']};
    font: ${(props) => props.theme.fonts.font1.TextS};
    text-align: center;
    margin-bottom: 2.06rem;
  }

  .actionsArea {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 13rem;
    .price {
      font: ${(props) => props.theme.fonts.font2.TitleM};
      color: ${(props) => props.theme.colors['base-text']};

      span {
        font: ${(props) => props.theme.fonts.font1.TextS};
      }
    }

    .actionsRightSide {
      display: flex;
      gap: 0.5rem;
    }
  }
`

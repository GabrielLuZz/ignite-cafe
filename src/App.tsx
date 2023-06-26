import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { GlobalProvider } from './contexts/GlobalProvider'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalProvider>
          <Router />
        </GlobalProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}

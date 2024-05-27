import { ThemeProvider } from "styled-components"
import Header from "./components/Header"
import theme from "./global/styles/theme"
import GlobalStyle from "./global/styles/globalStyles"
import Home from "./pages/Home"
import Main from "./components/Main"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main>
        <Home />
      </Main>
    </ThemeProvider>
  )
}
export default App

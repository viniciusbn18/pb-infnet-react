import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Bebas Neue', sans-serif;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  section {
    display: flex;
    width: 100vw;
  }
`

export default GlobalStyle
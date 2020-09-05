import { createGlobalStyle } from 'styled-components'
import 'typeface-source-sans-pro'

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #f7fbff;
    --text: #1a2a3a;
    --primary: #00916e;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;

    background: var(--bg);
    color: var(--text);
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.6rem;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* MENU */
  .menu-item_active {
    color: var(--primary);
    font-weight: 600;
  }
`

export default GlobalStyle

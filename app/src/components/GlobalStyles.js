import { createGlobalStyle } from 'styled-components'
import 'typeface-source-sans-pro'

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #fff;
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

  /* TYPOGRAPHY */
  .page-title {
    color: var(--primary);
    font-weight: 400;
    margin: 16px 0 32px 0;
  }

  /* TABLE */
  table {
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    padding: 8px 16px;
  }

  th {
    background: #4a5a6a;
    border: 1px solid #7a8a9a;
    color: #fff;
  }

  td {
    font-size: 1.4rem;
    border: 1px solid #7a8a9a;
    text-align: center;
  }

  tr:nth-child(even) {
    background: #efefef;
  }

  .active-yes {
    color: green;
    font-weight: 600;
  }

  .active-no {
    color: tomato;
    font-weight: 600;
  }
`

export default GlobalStyle

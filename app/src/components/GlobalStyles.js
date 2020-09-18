import { createGlobalStyle } from 'styled-components'
import 'typeface-inter'

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #fff;
    --text: #1a2a3a;
    --primary: tomato;
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
    font-family: 'Inter', sans-serif;
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
    font-size: 2.4rem;
    font-weight: 600;
    margin: 16px 0 32px 0;
  }

  .underdotted {
    border-bottom: 1px dotted var(--text);
    cursor: pointer;
    padding-bottom: 2px;
  }

  /* TABLE */
  table {
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    padding: 16px;
  }

  th {
    border-bottom: 1px solid var(--text);
    text-align: left;
  }

  td {
    font-size: 1.4rem;
  }

  tr:nth-child(even) {
    background: #f3f3f3;
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

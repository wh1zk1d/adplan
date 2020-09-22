import { createGlobalStyle } from 'styled-components'
import 'typeface-inter'

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #f9fafb;
    --text: #161e2e;
    --primary: #1c64f2;
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
  }

  nav a {
    font-weight: 500;
  }

  /* TYPOGRAPHY */
  .page-title {
    font-size: 2.4rem;
    font-weight: 500;
    letter-spacing: -0.015em;
    margin: 0 0 48px 0;
  }

  .underdotted {
    border-bottom: 1px dotted var(--text);
    cursor: pointer;
    padding-bottom: 2px;
  }

  .text-link {
    color: var(--primary);
    font-weight: 600;

    &:hover {
      filter: brightness(80%);
    }
  }

  /* TABLE */
  table {
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    padding: 10px;
  }

  th {
    border-bottom: 1px solid var(--text);
    font-weight: 500;
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

  .icon {
    width: 18px;
  }

  .delete-icon {
    appearance: none;
    background: none;
    border: 0 none;
    margin-left: 1rem;

    &:focus {
      outline: 0 none;
    }
  }

  /* FLEX/GRID */
  .flex-between {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  /* FORMS */
  input:not([type="checkbox"]), select {
    border-radius: 4px;
    border: 1px solid #7a8a9a;
    color: inherit;
    display: block;
    font-family: inherit;
    padding: 8px;
    width: 24rem;

    &:focus {
      outline: 0 none;
      border: 1px solid var(--primary);
    }
  }

  input[type="checkbox"] {
    margin-right: .5rem;
  }

  input + label,
  select + label,
  div + label {
    margin-top: 32px;
  }

  label {
    display: inline-block;
    font-weight: 500;
    margin-bottom: 8px;
  }

  button[type="submit"] {
    background: var(--primary);
    border: 0 none;
    border-radius: .5rem;
    color: #fff;
    display: block;
    font-weight: 500;
    margin-top: 48px;
    padding: 1.25rem 2.75rem;

    &:focus {
      outline: 0 none;
    }

    &:hover {
      filter: brightness(110%) saturate(110%);
    }
  }
`

export default GlobalStyle

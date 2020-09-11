import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import GlobalStyles from './GlobalStyles'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;

  min-height: 100vh;
  margin: 0 auto;
  max-width: 75em;
  padding: 0 24px;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding: 32px 0;

  .logo {
    font-weight: 700;
    font-size: 2rem;
  }

  nav a:not(:last-child) {
    margin-right: 32px;
  }
`

const Footer = styled.footer`
  font-size: 1.4rem;
  padding: 32px 0;
`

const Layout = ({ children }) => {
  return (
    <Container>
      <GlobalStyles />
      <Header>
        <span className='logo'>
          <span role='img' aria-label='Popcorn emoji'>
            🍿
          </span>{' '}
          adplan
        </span>

        <nav>
          <NavLink to='/' activeClassName='menu-item_active'>
            Dashboard
          </NavLink>
          <NavLink to='/new' activeClassName='menu-item_active'>
            Kunde anlegen
          </NavLink>
          <NavLink to='/settings' activeClassName='menu-item_active'>
            Einstellungen
          </NavLink>
        </nav>
      </Header>

      <main>{children}</main>

      <Footer>
        <a
          href='https://github.com/wh1zk1d'
          target='_blank'
          rel='noopener noreferrer'
          title='Check me out on GitHub'>
          <span role='img' aria-label='Avocado emoji'>
            🥑
          </span>{' '}
          Made by wh1zk1d
        </a>
      </Footer>
    </Container>
  )
}

export default Layout

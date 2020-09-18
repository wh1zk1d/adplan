import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import GlobalStyles from './GlobalStyles'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;

  min-height: 100vh;
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 75em;
  padding: 0 24px;
  width: 100%;
`

const Header = styled.header`
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 48px;
  padding: 16px 0;
  position: sticky;
  top: 0;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-weight: 500;
    font-size: 2.2rem;
  }

  nav a:not(:last-child) {
    margin-right: 32px;
  }
`

const Layout = ({ children }) => {
  return (
    <Container>
      <GlobalStyles />
      <Header>
        <Wrapper>
          <NavLink to='/'>
            <span className='logo'>adplan</span>
          </NavLink>

          <nav>
            <NavLink to='/' exact activeClassName='menu-item_active'>
              Kunden
            </NavLink>
            <NavLink to='/settings' exact activeClassName='menu-item_active'>
              Einstellungen
            </NavLink>
          </nav>
        </Wrapper>
      </Header>

      <main>
        <Wrapper>{children}</Wrapper>
      </main>
    </Container>
  )
}

export default Layout

import React from 'react'
import { NavLink } from 'react-router-dom'

import LoginBtn from '../LoginButton'
import LogoutBtn from '../LogoutButton'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = () => (
  <Navbar bg='dark' variant='dark' expand='lg'>
    <Container>
      <NavLink to='/'>
        <Navbar.Brand>adplan</Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <NavLink to='/dashboard' className='nav-link'>
            Dashboard
          </NavLink>
          <NavLink to='/add' className='nav-link'>
            Kunde hinzufügen
          </NavLink>
          <NavLink to='/settings' className='nav-link'>
            Einstellungen
          </NavLink>
        </Nav>
        <LoginBtn />
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container className='mt-5'>
        <main>{children}</main>
      </Container>
    </div>
  )
}

export default Layout

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

function Header() {
  return (
    <Navbar expand="lg" className='main-nav'>
      <Navbar.Brand href="/" className='m-2'>
        <img src="/logo.png" alt="Logo" width={90} height={60} className='rounded' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: 'grey' }} />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="position-absolute end-0 d-inline-flex" style={{ backgroundColor: 'rgb(43, 41, 41)', borderRadius: '15px' }}>
          <Nav.Link href="/" className='d-inline p-2 nav-link'>ACCUEIL</Nav.Link>
          <Nav.Link href="about" className='d-inline p-2 nav-link'>ABOUT</Nav.Link>
          <Nav.Link href="contact" className='d-inline p-2 nav-link'>CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
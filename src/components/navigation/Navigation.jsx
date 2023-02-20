import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



export default function Navigation() {
  return (
    <div>
    <Navbar bg="danger" variant="dark">
    <Container>
          <Navbar.Brand href="#home">Bienvenido</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={NavLink} to='/home'>Home</Nav.Link>
          <Nav.Link as={NavLink} to='/sobremi'>Sobre mi</Nav.Link>
          <Nav.Link as={NavLink} to='/lenguajes'>Lenguajes</Nav.Link>
          <Nav.Link as={NavLink} to='/contacto'>Contacto</Nav.Link>
          <Nav.Link as={NavLink} to='/Api'>Api</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
  )
}

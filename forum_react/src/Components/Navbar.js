import React from 'react'
import { Navbar, Container, Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">CSCheck</Navbar.Brand>
            <Nav className="me-auto">
                <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
                <NavLink exact to="/about" className="nav-link" activeClassName="active">About</NavLink>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar

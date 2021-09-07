import React from 'react'
import '../CSS/Navbar.css';
import { Navbar, Container, Nav, Button} from 'react-bootstrap'
import { NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Navbar variant="dark" expand="lg" className = "top-nav">
                <Container>
                    <div className = "nav-logo">
                        <NavLink className="nav-icon fas fa-laptop" exact to="/"></NavLink>
                        <div className = "nav-text">
                            <NavLink exact to="/" className="navbar-brand">CSCheck</NavLink>
                            <p>For all things Computer Science</p>
                        </div>
                    </div>

                    <div className = "nav-user">
                        <NavLink exact to="/login">
                            <Button type = "button" className = "bottom-nav">Login</Button>
                        </NavLink>
                        <NavLink exact to="/register">
                            <Button type="button" className = "bottom-nav">Sign Up</Button>
                        </NavLink>
                    </div>
{/* 
                    <div className = "nav-user">
                        <NavLink exact to="/login" className="nav-button">CSCheck</NavLink>
                    </div> */}
                </Container>
            </Navbar> 
            <Navbar variant="dark" expand="lg" className = "bottom-nav">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
                                <NavLink exact to="/Forums" className="nav-link" activeClassName="active">Forums</NavLink>
                                <NavLink exact to="/Login" className="nav-link" activeClassName="active">Login</NavLink>
                                <NavLink exact to="/Register" className="nav-link" activeClassName="active">Register</NavLink>
                                <NavLink exact to="/about" className="nav-link" activeClassName="active">About</NavLink>
                            </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>  
        </div>
    )
}

export default NavBar

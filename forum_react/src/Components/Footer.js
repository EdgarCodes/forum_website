import React from 'react'
import '../CSS/Footer.css';
import { Navbar, Container} from 'react-bootstrap'

const NavBar = () => {
    return (
        <div>
            <Navbar variant="dark" expand="lg" className = "footer">
                <Container className = "footer-container">
                    <div className = "footer-text">@2021 Edgar Gonzalez WKU</div>
                </Container>
            </Navbar>  
        </div>
    )
}

export default NavBar

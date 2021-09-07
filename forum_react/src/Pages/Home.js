import React from 'react';
import {Container} from 'react-bootstrap';
import '../CSS/Home.css';
import NavbarList from "../Components/Forum_List";

const Home = () => {
    return (
        <Container className = "home">
            <div className = "home-intro-container">
                <NavbarList/>
            </div>
            
            <h1>Hello World!</h1>
        </Container>
    )
}

export default Home

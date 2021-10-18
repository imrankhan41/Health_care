import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Header.css"
const Header = () => {
    return (
        <div>
            <Navbar fixed="top" className="container bg-light">
            <Container>
                <Navbar.Brand className="logo" href="#home">BODY FITNESS</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav className="m-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Services</Nav.Link>
                <Nav.Link href="#link">Login</Nav.Link>
                </Nav>

                <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;
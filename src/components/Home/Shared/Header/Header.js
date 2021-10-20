import React from 'react';
import { Container, Nav, Navbar, NavLink, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../../hooks/useAuth';

import "./Header.css"
const Header = () => {
    const{user,logOut} =useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" className="header bg-light">
            <Container >
                <Navbar.Brand className="logo" href="#home">BODY FITNESS</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav className="m-auto">
                <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                <Nav.Link as={HashLink} to="/home#consultancy">Consultancy</Nav.Link>
                <Nav.Link as={HashLink} to="/home#schedule">Schedule</Nav.Link>
                <Nav.Link as={HashLink} to="/member">Membership</Nav.Link>
                {/* <Nav.Link as={Link} to="/registration">Registartion</Nav.Link> */}
                {user.email?
                <button onClick={logOut}>Log Out</button>
                :<NavLink as={Link} to="/login1">Login</NavLink>}
                </Nav>

                {
                    user.email &&
                    <Navbar.Text>
                    Signed in as: <a href="#login">{user.displayName}</a>
                </Navbar.Text>
                }
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;
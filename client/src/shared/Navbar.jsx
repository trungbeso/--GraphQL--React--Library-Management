import React from 'react';
import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';
import { FaBook } from 'react-icons/fa';

const Navbar = () => {
    return (
        <BootstrapNavbar className="custom-navbar" variant="dark" expand="lg" sticky="top">
            <Container>
                <BootstrapNavbar.Brand href="#home" className="navbar-brand-custom">
                    <FaBook /> Fluent Platform
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className="nav-link-custom">
                            Home
                        </Nav.Link>
                        <Nav.Link href="#books" className="nav-link-custom">
                            Books
                        </Nav.Link>
                        <Nav.Link href="#authors" className="nav-link-custom">
                            Authors
                        </Nav.Link>
                        <Nav.Link href="#categories" className="nav-link-custom">
                            Categories
                        </Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;

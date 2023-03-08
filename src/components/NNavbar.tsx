import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";

export const NNavbar = () => {
    return (
        <Navbar bg="primary" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/" href="#" className='text-white'>Ejercicio</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/background" href="#" className='text-white'>Background</Nav.Link>
                    <Nav.Link as={Link} to="/filter" href="#" className='text-white'>Filter</Nav.Link>
                    <Nav.Link as={Link} to="/form" href="#" className='text-white'>Form</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { useEffect } from 'react'
import Dropdown from './dropdown'


export default function Header({onHover}) {


    const catergoryFocus = (event) => {
        onHover()
    }

    return (
            // responsive
            <Navbar bg="dark" variant="dark" sticky="top" expand="lg" collapseOnSelect>  
                <Container>
                <Navbar.Brand href="/home">The Fast Way</Navbar.Brand>
                <span className='category' onMouseOver={catergoryFocus}>
                    Categories
                </span>
                <span className='category' onMouseOver={catergoryFocus}>
                </span>
                    <Nav className="">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/cart">Cart</Nav.Link>
                </Nav>
                
                </Container>
            </Navbar>

        
    )
}
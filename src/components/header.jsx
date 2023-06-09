import React, { useState } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { useEffect } from 'react'
import Dropdown from './dropdown'
import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';

export default function Header({ onHover, cartNumber }) {
    
    const [count, setCount] = useState(0)
    
    const selectorValue = useSelector((state) => {
        return state
      })

    useEffect(() => {
        const cartCount = localStorage.getItem('cartItem') || 0;

        console.log("keri");
        if (cartCount || cartCount === 0) {
            setCount(cartCount)
        }

    }, [])
    


    return (
            // responsive
            <Navbar bg="dark" variant="dark" sticky="top" expand="lg" collapseOnSelect>  
                <Container>
                <Navbar.Brand href="/home">The Fast Way</Navbar.Brand>
                    <Nav className="">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/cart">Cart <Icon icon={'mdi:cart'} /> {selectorValue}</Nav.Link>
                </Nav>
                
                </Container>
            </Navbar>

        
    )
}
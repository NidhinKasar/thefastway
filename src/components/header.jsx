import React, { useState } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { useEffect } from 'react'
import Dropdown from './dropdown'
import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header({ onHover, cartNumber }) {
    
    const [count, setCount] = useState(0)
    
    const selectorValue = useSelector((state) => {
        return state.market.payload
    })
    console.log("selectorValue", selectorValue);

    useEffect(() => {
        const cartCount = localStorage.getItem('cartItem') || 0;

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
                        <Link to="/home">Home</Link>
                        <Link to="/cart">Cart <Icon icon={'mdi:cart'} /> {selectorValue}</Link>
                </Nav>
                
                </Container>
            </Navbar>

        
    )
}
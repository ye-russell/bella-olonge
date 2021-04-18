import React, {useState} from 'react'
import { FaTwitter, FaFacebookSquare, FaInstagram} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
    Heading,
    Nav,
    NavbarContainer,
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks,
    Copyright
} from './Footer.elements';
import logo from '../../images/logo.svg';


const Footer = () => {
    return (
        <>
        <IconContext.Provider value={{ color: '#FA4A0C'}}>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <img src={logo} alt="Bella Olonge"/>
                    <Heading >Bella Olonge</Heading>
                </NavLogo>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='https://twitter.com/'><FaTwitter size={33} /></NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='https://www.facebook.com/'><FaFacebookSquare size={33} /></NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='https://www.instagram.com/'><FaInstagram size={33} /></NavLinks>
                    </NavItem>
                </NavMenu> 
                <Copyright>
                    Copyright 2021
                </Copyright>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Footer

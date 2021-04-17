import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
    Heading,
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavItemActive,
    NavLinks
} from './Navbar.elements';
import logo from '../../images/logo.svg';


const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
        <IconContext.Provider value={{ color: '#252B42'}}>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <img src={logo} alt="Bella Olonge"/>
                    <Heading >Bella Olonge</Heading>
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu   NavMenu onClick={handleClick} click={click}>
                    <NavItemActive>
                        <NavLinks to='/'>Home</NavLinks>
                    </NavItemActive>
                    <NavItem>
                        <NavLinks to='/'>Product</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/'>Faq</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/'>Contact</NavLinks>
                    </NavItem>
                </NavMenu> 
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar

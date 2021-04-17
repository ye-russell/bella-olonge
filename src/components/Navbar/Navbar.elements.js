import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../globalStyles';


export const Nav = styled.nav`
height: 155px;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 1em;
`;
export const Heading = styled.h1`
display: none;
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
align-items: center;
height: 155px;


${Container}
`;

export const NavLogo = styled(Link)`
color: #252B42;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
`
export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    font-size: 1.8rem;
    cursor: pointer;
}
`
export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 155px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: gray;
}

`;

export const NavItem = styled.li`
color: #252B42;
height: 80px;
border-bottom: 2px solid transparent;
margin-left: 4em;

&:hover {
    border-bottom: 2px solid #252B42;
}


@media screen and (max-width: 960px) {
    margin-left: 0em;
    width: 100%;

    &:hover {
        border: none;
    }
}

`

export const NavItemActive = styled.li`
height: 80px;
border-bottom: 2px solid transparent;
margin-left: 0em;
color: #FA4A0C;

&:hover {
    border-bottom: 2px solid #FA4A0C;
}


@media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
        border: none;
    }
}

`
export const NavLinks = styled(Link)`
color: inherit;
font-weight: 600;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;

@media screen and (max-width: 960px) {
    text-align: center; 
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
        color: #4b59f7;
        transition: all 0.3s ease;
    }
}
`

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../globalStyles';
import btmBg from '../../images/btm-bg.png';


export const BtmSection = styled(Container)`
height: 510px;
color: #FFFFFF;
background-image: url(${btmBg});
display: flex;
flex-direction: column;
align-items: center;
`
export const BtmSectionActive = styled(Container)`
height: 510px;
color: black;
background: transparent;
display: flex;
flex-direction: column;
align-items: center;
`
export const Background = styled.div`
position: fixed;
top: 100px;
height: 510px;
width: 1440px;
background-image: url(${btmBg});
z-index: 100;
`
export const Content = styled.div`
display: flex;
flex-direction: column;
max-width: 1000px;
margin: auto;
justify-content: center;
`
export const HeadingPar = styled.h3`
margin-top: 73px;
margin-bottom: 20px;
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: 57px;
/* identical to box height, or 142% */

text-align: center;
letter-spacing: 0.2px;
`
export const Paragraph = styled.p`
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 38px;
/* identical to box height, or 158% */
text-align: center;
letter-spacing: 0.2px;
margin-bottom: 60px;
`

export const Btns = styled.div`
display: flex;
align-self: center;
margin: auto;
`

export const BtnLeft = styled.button`
height: 64px;
width: 142px;
background: #FA4A0C;
box-shadow: 0px 10px 30px rgba(183, 50, 39, 0.2);
border: 0;
border-radius: 10px;
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 28px;
/* identical to box height, or 175% */
letter-spacing: 0.2px;

color: #FFFFFF;
transition: 0.2s;

&:focus {
    outline: 0;
}
&:hover {
    background: #ED553B;
}
&:active {
    background: #ED113B;
}
`
export const BtnRight = styled.button`
margin-left: 16px;
height: 60px;
width: 173px;
background: transparent;
border: 1px solid #FFFFFF;
box-sizing: border-box;
border-radius: 10px;
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 28px;
/* identical to box height, or 175% */
letter-spacing: 0.2px;

color: #FFFFFF;
transition: 0.2s;


&:focus {
    outline: 0;
}
&:hover {
    border: 1px solid #ED553B;
    
}
&:active {
    border: 1px solid #ED113B;
}
`
export const BtnRightActive = styled.button`
margin-left: 16px;
height: 60px;
width: 173px;
background: transparent;
border: 1px solid black;
box-sizing: border-box;
border-radius: 10px;
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 28px;
/* identical to box height, or 175% */
letter-spacing: 0.2px;

color: black;
transition: 0.2s;


&:focus {
    outline: 0;
}
&:hover {
    border: 1px solid #ED553B;
    
}
&:active {
    border: 1px solid #ED113B;
}
`
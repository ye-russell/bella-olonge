import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../globalStyles';
import topBg from '../../images/top-bg.png';


export const TopSection = styled(Container)`
height: 619px;
color: #F7F7F7;
background-image: url(${topBg});
margin-bottom: 603px;
`
export const Content = styled.div`
display: flex;
flex-direction: column;
max-width: 1000px;
margin: auto;
justify-content: center;
`
export const Heading = styled.h3`
margin-top: 73px;
margin-bottom: 17px;
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 36px;
text-align: center;
letter-spacing: 0.1px;
`
export const HeadingPar = styled.h2`
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 58px;
line-height: 80px;
text-align: center;
letter-spacing: 0.2px;
color: #FFFFFF;
`
export const Paragraph = styled.p`
margin-top: 27px;
margin-bottom: 54px;
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 38px;
text-align: center;
letter-spacing: 0.2px;
color: #F7F7F7;
`

export const Btns = styled.div`
display: flex;
align-self: center;
margin: auto;
z-index: 5;
`

export const BtnLeft = styled.button`
height: 68px;
width: 236px;
background: #FA4A0C;
box-shadow: 0px 10px 30px rgba(183, 50, 39, 0.2);
border: 0;
border-radius: 30px;
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 36px;
/* identical to box height, or 150% */
letter-spacing: 0.1px;
/* Light text */
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
margin-left: 34px;
height: 68px;
width: 236px;
background: transparent;
border: 1px solid #FFFFFF;
box-sizing: border-box;
border-radius: 30px;
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 36px;
/* identical to box height, or 150% */
letter-spacing: 0.1px;
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
export const TwoPhones = styled.img`
margin-left: -150px;
margin-top: -130px;
display: flex;
align-self: center;
`
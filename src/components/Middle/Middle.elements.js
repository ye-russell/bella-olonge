import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../globalStyles';


export const MidSection = styled(Container)`
margin-top: 200px;
color: #000000;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`
export const MidHeading = styled.h2`
padding-top: 72px;
border-top: 3px solid #E4E4E4;
width: 884px;
text-align: center;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 44px;
line-height: 36px;
/* identical to box height, or 82% */
letter-spacing: 0.1px;
color: #000000;
opacity: 0.8;
`

export const InnerSection1 = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`
export const InnerSection2 = styled.div`
display: flex;
flex-direction: row-reverse;
justify-content: center;
`
export const InnerSection3 = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`
export const Content = styled.div`
display: flex;
flex-direction: column;
max-width: 561px;
margin: auto;
justify-content: center;
align-items: left;
text-align: left;
`
export const Heading = styled.h3`
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 36px;
/* identical to box height, or 150% */
letter-spacing: 0.1px;
color: #FA4A0C;
`
export const HeadingPar = styled.h2`
margin-top: 17px;
margin-bottom: 27px;
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: 57px;
/* or 142% */
letter-spacing: 0.2px;
/* text */
color: #252B42;

`
export const Paragraph = styled.p`
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 38px;
/* or 158% */
letter-spacing: 0.2px;
/* second text */
color: #737373;
`

export const PhoneImg = styled.img`
display: flex;
height: 600px;
`
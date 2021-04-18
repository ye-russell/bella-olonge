import React, {useState} from 'react'
import {
    TopSection,
    TopSectionActive,
    Content,
    Heading,
    HeadingPar,
    Paragraph,
    Btns,
    BtnRight,
    BtnLeft,
    BtnRightActive,
    TwoPhones,
} from './Top.elements';
import twoPhones from '../../images/two-phones.png'
import './Top.css'

const Top = () => {
    
    const [top, setTop] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setTop(true);
        } else {
            setTop(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <>
        {top ?
        <TopSectionActive>
            <Content>
                <Heading>Food app</Heading>
                <HeadingPar>Why stay hungry when <br/>
                you can order form Bella Onojie</HeadingPar>
                <Paragraph>
                Download the bella onoje’s food app now on
                </Paragraph>
                <Btns>
                    <BtnLeft>Playstore</BtnLeft><BtnRightActive>App store</BtnRightActive>
                </Btns>
                <TwoPhones src={twoPhones} alt='Phones'/>
            </Content>
        </TopSectionActive>
        :
        <TopSection>
            <Content>
                <Heading>Food app</Heading>
                <HeadingPar>Why stay hungry when <br/>
                you can order form Bella Onojie</HeadingPar>
                <Paragraph>
                Download the bella onoje’s food app now on
                </Paragraph>
                <Btns>
                    <BtnLeft>Playstore</BtnLeft><BtnRight>App store</BtnRight>
                </Btns>
                <TwoPhones src={twoPhones} alt='Phones'/>
            </Content>
        </TopSection>
        }
        
        </>
    )
}

export default Top

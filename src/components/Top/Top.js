import React, {useState} from 'react'
import {
    TopSection,
    Content,
    Heading,
    HeadingPar,
    Paragraph,
    Btns,
    BtnRight,
    BtnLeft,
    TwoPhones,
} from './Top.elements';
import twoPhones from '../../images/two-phones.png'


const Top = () => {
    return (
        <>
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
        </>
    )
}

export default Top

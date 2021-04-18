import React, {useState} from 'react'
import {
    MidSection,
    MidHeading,
    InnerSection1,
    InnerSection2,
    InnerSection3,
    Content,
    Heading,
    HeadingPar,
    Paragraph,
    PhoneImg
} from './Middle.elements';
import phone1 from '../../images/phone3.png'
import phone2 from '../../images/phone4.png'
import phone3 from '../../images/phone5.png'


const Middle = () => {
    return (
        <>
        <MidSection>
            <MidHeading>How the app works</MidHeading>
            <InnerSection1>
                <PhoneImg src={phone1} alt='Phone'/>
                <Content>
                    <Heading>Create an account</Heading>
                    <HeadingPar>Create/login to an existing
                    account to get started</HeadingPar>
                    <Paragraph>An account is created with your email
                    and a desired password</Paragraph>
                </Content>
            </InnerSection1>
            <InnerSection2>
                <PhoneImg src={phone2} alt='Phone'/>
                <Content>
                    <Heading>Explore varieties</Heading>
                    <HeadingPar>Shop for your favorites
                    meal as e dey hot.</HeadingPar>
                    <Paragraph>Shop for your favorite meals or drinks
                    and enjoy while doing it.</Paragraph>
                </Content>
            </InnerSection2>
            <InnerSection3>
                <PhoneImg src={phone3} alt='Phone'/>
                <Content>
                    <Heading>Checkout</Heading>
                    <HeadingPar>When you done check out
                    and get it delivered.</HeadingPar>
                    <Paragraph>When you done check out and get it 
                    delivered with ease.</Paragraph>
                </Content>
            </InnerSection3>
        </MidSection>
        </>
    )
}

export default Middle
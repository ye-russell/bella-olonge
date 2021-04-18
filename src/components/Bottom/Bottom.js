import React, {useState} from 'react'
import {
    BtmSection,
    BtmSectionActive,
    Background,
    Content,
    HeadingPar,
    Paragraph,
    Btns,
    BtnRight,
    BtnRightActive,
    BtnLeft,
} from './Bottom.elements';


const Bottom = () => {

    
    const [bottom, setTop] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 2600) {
            setTop(true);
        } else {
            setTop(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <>
        {bottom 
        ? <BtmSectionActive>
            <Background />
            <Content>
                <HeadingPar>Download the app now.</HeadingPar>
                <Paragraph>
                Available on your favorite store. Start your premium experience now                </Paragraph>
                <Btns>
                    <BtnLeft>Playstore</BtnLeft><BtnRightActive>App store</BtnRightActive>
                </Btns>
            </Content>
        </BtmSectionActive>
        : <BtmSection>
            <Content>
                <HeadingPar>Download the app now.</HeadingPar>
                <Paragraph>
                Available on your favorite store. Start your premium experience now                </Paragraph>
                <Btns>
                    <BtnLeft>Playstore</BtnLeft><BtnRight>App store</BtnRight>
                </Btns>
            </Content>
        </BtmSection>
        
        }
        </>
    )
}

export default Bottom

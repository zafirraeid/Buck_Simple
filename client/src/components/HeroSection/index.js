import React from 'react'
import {Container, HeroBackground, VideoBackground} from './HeroElements'
import Video from '../../video/video.mp4'

const HeroSection = () => {
    return (
        <>
            <Container>
                <HeroBackground>
                     <VideoBackground autoPlay loop muted src={Video} type= "video/mp4"/> 
                </HeroBackground>
                {/* <Content>
                    <HeroH1>An easy job finder</HeroH1>
                    <ButtonWrapper><button>Get Started</button></ButtonWrapper>
                </Content>  */}
            </Container>
        </>
    )
}

export default HeroSection

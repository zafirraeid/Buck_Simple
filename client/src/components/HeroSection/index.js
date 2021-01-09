import React from 'react'
import {Container, HeroBackground, VideoBackground, Content, HeroH1, ButtonWrapper, BTN} from './HeroElements'
import Video from '../../video/video.mp4'
import { useHistory} from "react-router-dom";

const HeroSection = () => {

    const history = useHistory()
  const signup = () => history.push('/signup')
    return (
        <>
            <Container>
                <HeroBackground>
                     <VideoBackground autoPlay loop muted src={Video} type= "video/mp4"/> 
                </HeroBackground>
               <Content>
                    <HeroH1>Stairs to Wealth</HeroH1>
                    <ButtonWrapper><BTN onClick={signup}>Get Started</BTN></ButtonWrapper>
                </Content>  
            </Container>
        </>
    )
}

export default HeroSection

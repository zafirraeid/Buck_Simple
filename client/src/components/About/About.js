import React from 'react'
import styled from 'styled-components'
import Image from '../../image/image.jpg'

const About = () => {

    return (
        <>
         <Container id ="about">
             <AboutH1>
                 About Us
             </AboutH1>
             <InfoRow>
             <Col1>
             <Info>
                   Hello! This website has been created with the development of society in mind.
                    I wanted to create oppourtunities for individuals to earn money by
                    completing various and simplistic tasks posted by employers. This is beneficial
                    for people who are in poverty and bring a smile on their faces.
                    I really hope you enjoy my web application- Buck$imple. Thank you
                    :)
                 </Info>
                 </Col1>
                 <Col2><ImageWrap>
                     <Img src ={Image} alt = 'money' /> 
                     </ImageWrap></Col2>
             </InfoRow>
             
             
         </Container>
        </>
    )
}

export default About

const Container = styled.div`
display: grid;
  z-index: 1;
  height: 500px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 10px;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    height: 800px;
  }

`
const AboutH1 = styled.h1`
text-align: center;
padding-top: 15px;
font-size: 37px;
color: #126d96;
font-family: 'Noto Sans JP', sans-serif;
`

const Info = styled.div`
text-align: left;
color: #126d96;
font-size: 20px;
font-family: 'Noto Sans JP', sans-serif;
padding-bottom: 40px;
width: 80%;
padding-left: 40px;
@media screen and (max-width: 768px) {
    text-align: center;
    margin-left: 15px;
}
`
const Col1 = styled.div`
margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  
`

const Col2 = styled.div`
margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`
const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
      justify-content: center;
      
  }`

  const ImageWrap = styled.div`
  max-width: 555px;
  height: 100%;
  `

const Img = styled.img`
width: 300px;
margin-left: 60px;
padding-right: 0;
height: auto;
`
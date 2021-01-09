import styled from 'styled-components'

export const Container = styled.div`
background: black;
display:flex;
justify-content: center;
align-items: center;
padding: 0 30px;
margin-top: 75px;
height: 800px;
position: relative;
z-index: 1;
`

export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
export const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`

export const HeroH1 = styled.h1`
color: black;
  font-size: 37px;
  text-align: center;
  z-index: 3;
  color: #126d96;
  font-weight: bold;
  font-family: 'Noto Sans JP', sans-serif;
  @media screen and (max-width: 768px) {
    font-size: 40px;
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
    width: 100%;
  }

`

export const Content = styled.div`
z-index: 2;
background: white;
border-radius: 20px;
padding: 130px;
background: rgb(204, 204, 204); /* Fallback for older browsers without RGBA-support */
    background: rgba(204, 204, 204, 0.5);
align-items: center;

`

export const ButtonWrapper = styled.div`
 margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  
`
export const BTN = styled.button`
background-color: #126d96;
padding: 15px;
padding-left: 30px;
padding-right: 30px;
border-radius: 8px;
color: #ffffff;
font-size: 15px;
  font-family: 'Noto Sans JP', sans-serif;
  transition: all 0.3s ease-in;
  &:hover {
    background-color:#ffffff;
    color:#126d96;
    }
`

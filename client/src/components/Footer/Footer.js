import React from 'react'
import styled from 'styled-components'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {animateScroll as scroll,Link} from 'react-scroll'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  
    return (
        <>
            <Container id = "footer">
                <FooterWrap>
                <List>
                    <Wrapper>
                      <Logo to ='/' onClick = {toggleHome}>
                            Buck$imple
                        </Logo>
                        <SocialIconWrapper>
                        <Icon href = "//www.github.com/zafirraeid" target = "_blank" aria-label = "Github">
<FaGithub />
                        </Icon>
                        <Icon href = "//www.linkedin.com/in/zafir-raeid" target = "_blank" aria-label = "LinkedIn">
<FaLinkedin />
                        </Icon>
                        </SocialIconWrapper>
                    </Wrapper>
                </List>


                </FooterWrap>
                
            </Container>
        </>
    )
}

export default Footer


const Container = styled.footer`
  background-color: #101522;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;

`

const List = styled.section`
  max-width: 1000px;
  width: 100%;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

const Logo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  font-family: 'Noto Sans JP', sans-serif;
`

const SocialIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`

const Icon = styled.a`
  color: #fff;
  font-size: 24px;
`
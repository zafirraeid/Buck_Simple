import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const SignUpComp = () => {
  const history = useHistory()
  const home = () => history.push('/')
    return (
        <div>
             <Container>
<Logo href="" onClick = {home}>Buck$imple</Logo>
<FormContent>
            <Form action='#'>
              <FormH1>Sign Up</FormH1>
              
              <FormLabel htmlFor='for'>Display Name</FormLabel>
              <FormInput
                type='text'
                // onChange={(e) => setEmail(e.target.value)}
                // required
              />
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput
                type='email'
                // onChange={(e) => setPassword(e.target.value)}
                // required
              />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput
                type='password'
                // onChange={(e) => setPassword(e.target.value)}
                // required
              />
              <FormLabel htmlFor='for'>Phone Number</FormLabel>
              <FormInput
                type='text'
                // onChange={(e) => setPassword(e.target.value)}
                // required
              />
              <FormButton /*type='submit' onClick={submit} to='/postings' */>
                Submit
              </FormButton>
              
            </Form>
          </FormContent>

            </Container>
        </div>
    )
}

export default SignUpComp

const Container = styled.div`
height: 1000px;
background: #126d96;
`

const Logo = styled.div`
  padding: 15px;
  color: #ffffff;
  font-family: 'Noto Sans JP', sans-serif;
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
  @media screen and (max-width: 820px) {
   text-align: center;
    
  }
`

const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`

const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  font-family: 'Noto Sans JP', sans-serif;
`

const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 16px;
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
`

const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`

const FormButton = styled.button`
  background: #126d96;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  font-family: 'Noto Sans JP', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease-in;
  &:hover {
    color: #126d96;
    background-color: #fff
  }
`


const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`
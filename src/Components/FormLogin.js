import React, { useState } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form';
import {Redirect} from 'react-router-dom';

function Form() {
    const [isLogged, setIsLogged] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) =>{
          console.log(data)
          fetch('http://localhost:9000/users/login', {
              method: 'POST',
              headers: {
                  'Content-Type':'application/x-www-form-urlencoded',
                },
              body: `email=${data.email}&password=${data.password}`
          }).then((res) => res.json()).then((data) => {
              // eslint-disable-next-line
              if (data.status == 200) {
                  localStorage.setItem("mail", data['data']['email'])
                  setTimeout(() => {
                    setIsLogged(true)
                  }, 1000); 
              }
              else {
                alert(data.data)
              }
            })
        };
    if (isLogged === true) {
        return  <Redirect  to="/profile" />
    }
    return (
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
            <Container>
                <Login>Se connecter à HomeCollab</Login>
                <Input placeholder="Email, nom d'utilisateur ou téléphone" type="email" {...register('email', { required: true })} />
                {errors.email && <Errors>Please enter a correct email.</Errors>}
                <Input placeholder="Mot de Passe" type="password" {...register('password', { required: true })} />
                {errors.password && <Errors>Please enter a correct password.</Errors>}
                <Btn type="submit" />
                <Div>
                    <Check type="checkbox" id="rememberMe"></Check>
                    <Label htmlfor="rememberMe">Se souvenir de moi</Label>
                </Div>
                <SignUp>Vous n'avez pas de compte ? <LinkTo href="/signup">S'inscrire</LinkTo></SignUp>
                <ForgetPassword href="/forget">Mot de passe oublié ?</ForgetPassword>
            </Container>
        </LoginForm>
    )
}

const LoginForm = styled.form`
background-color: white;
box-shadow: 0px 3px 7px 0px rgba(0,0,0,0.53);
-webkit-box-shadow: 0px 3px 7px 0px rgba(0,0,0,0.53);
-moz-box-shadow: 0px 3px 7px 0px rgba(0,0,0,0.53);
grid-area: 2 / 4 / 3 / 6;
border-radius: 1.2rem;
max-width: 80%;
min-width: 450px;
`
const Container = styled.div`
display: flex;
flex-direction: column;
padding: 4.5rem;
align-items: left;
`
const Login = styled.h2`
font-size: 2.2rem;
max-width: 100%;
color: black;
font-family: 'Jost', sans-serif;
`
const Input = styled.input`
padding: 0.8rem 1.8rem 0.8rem 0.2rem;
font-size: 1.1rem;
color: black;
margin-bottom: 1.5rem;
margin-top: 1.5rem;
border: 1px solid black;
border-radius: 0.3rem;
font-family: 'Jost', sans-serif;
`
const Btn = styled.input`
padding: 0.5rem 1.8rem;
background-color: #163791;
border-radius: 1.5rem;
color: white;
font-family: 'Jost', sans-serif;
`
const Div = styled.div`
display:flex;
align-items:center;
justify-content: left;
`
const Label = styled.label`
font-size: 1.1rem;
color: black;
font-family: 'Jost', sans-serif;
`
const Check = styled.input`
margin-right: 0.4rem;
`
const SignUp = styled.p`
font-size: 0.8rem;
color: black;
font-family: 'Jost', sans-serif;
margin: 0.4rem 0.1rem;
`
const LinkTo = styled.a`
color: #163791;
font-family: 'Jost', sans-serif;
margin: 0.4rem 0.1rem;
`
const ForgetPassword = styled.a`
color: #163791;
text-decoration: none;
font-size: 0.9rem;
font-family: 'Jost', sans-serif;
margin: 0.4rem 0.1rem;
`
const Errors = styled.p`
color: red;
font-size: 1.1rem;
font-family: 'Jost', sans-serif;
`

export default Form

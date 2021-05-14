import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form';

function FormSignup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) =>{
          const formData = new FormData(document.querySelector("#haha"));
          fetch('http://localhost:9000/users', {
              method: 'POST',
              body: formData
          }).then((res) => res.json()).then((data) => {
              console.log(data)
            })
      };
    return (
        <SignupForm onSubmit={handleSubmit(onSubmit)} id="haha">
            <Container>
                <Login>Se connecter à HomeCollab</Login>
                <Div>
                    <Input placeholder="Firstname" type="text" {...register('firstname', { required: true })} />
                    {errors.firstname && <Errors>Please enter a correct firstname.</Errors>}
                    <Input placeholder="Lastname" type="text" {...register('lastname', { required: true })} />
                    {errors.lastname && <Errors>Please enter a correct lastname.</Errors>}
                </Div>
                <Div>
                    <Input placeholder="Email" type="email" {...register('email', { required: true })} />
                    {errors.email && <Errors>Please enter a correct email.</Errors>}
                    <Input placeholder="Numéro de téléphone" type="text" {...register('phone', { required: true })} />
                    {errors.phone && <Errors>Please enter a correct phone.</Errors>}
                </Div>
                <Label htmlFor="Profile image">
                    <h3>Profile image</h3>
                    <Input id="Profile image" type="file" {...register('profile_img', { required: true })} />
                    {errors.profile_img && <Errors>Please enter a correct profile_img.</Errors>}
                </Label>
                <Label htmlFor="Profile image">
                    <h3>Cover image</h3>
                    <Input placeholder="Cover image" type="file" {...register('cover_img', { required: true })} />
                    {errors.cover_img && <Errors>Please enter a correct cover_img.</Errors>}
                </Label>
                <Input placeholder="Mot de Passe" type="password" {...register('password', { required: true })} />
                {errors.password && <Errors>Please enter a correct password.</Errors>}
                <Btn type="submit" />
                <SignUp>Vous avez déjà un compte ? <LinkTo href="/signup">Se connecter</LinkTo></SignUp>
            </Container>
        </SignupForm>
    )

}

const SignupForm = styled.form`
background-color: white;
box-shadow: 0px 3px 7px 0px rgba(0,0,0,0.53);
-webkit-box-shadow: 0px 3px 7px 0px rgba(0,0,0,0.53);
-moz-box-shadow: 0px 3px 7px 0px rgba(0,0,0,0.53);
grid-area: 2 / 4 / 3 / 6;
border-radius: 1.2rem;
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
padding: 0.5rem 1rem 0.5rem 0.2rem;
font-size: 1.1rem;
color: black;
margin-bottom: 1.5rem;
margin-top: 1.5rem;
margin-right: 0.5rem;
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
justify-content: space-between;
`
const Label = styled.label`
font-size: 1.1rem;
color: black;
font-family: 'Jost', sans-serif;
display: flex;
flex-direction: column;
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
const Errors = styled.p`
color: red;
font-size: 1.1rem;
font-family: 'Jost', sans-serif;
`

export default FormSignup

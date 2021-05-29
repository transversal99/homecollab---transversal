/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form';

function BoxModify(props) {
    const [validationForm, setValidationForm] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (datas) =>{
          let title = props.title
          if(localStorage.getItem("mail") !== null){
            let storedMail = localStorage.getItem("mail")
            fetch(`http://localhost:9000/users/email/${storedMail}`).then((data) => data.json())
            .then((user) => {
                let id = user.data
                fetch(`http://localhost:9000/users/id/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type':'application/x-www-form-urlencoded',
                    },
                    body: `${title}=${datas[title]}&password=${datas.password}`
                }).then((data) => data.json())
                .then((data => setValidationForm(true)))
            })
            .catch(error => {
                console.error("Error: ", error)
            })
        }
    };
    if (validationForm === true) {
        console.log(validationForm)
        window.location.reload(false);
    }
    return (
        <Div>
            <Title>Changez de {props.title}</Title>
            <Sub>Saisissez le nouveau {props.title} que vous voulez indiquer</Sub>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input placeholder={props.title} type="text" {...register(props.title, { required: true })} />
                {errors[props.title] && <Errors>Please enter a correct props.title .</Errors>}
                <Input placeholder="Mot de passe actuel" type="password" {...register('password', { required: true })} />
                {errors.lastname && <Errors>Please enter a correct lastname.</Errors>}
                <Btn type="submit" />
            </Form>
        </Div>
    )
}

const Form = styled.form`
height: 100%;
display:flex;
flex-direction: column;
width: 100%;
`
// const Overlay = styled.div`
// background-color: black;
// opacity: 0.3;
// position: absolute;
// width: 100%;
// height: 100%;
// top: 0;
// right: 0;
// `
const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 1.5rem;
width: 550px;
height: 400px;
background-color: white;
border-radius: 0.8rem;
position: absolute;
top: 50%;
left: 40%;
box-shadow: 0px 3px 7px 0px rgba(0,0,0,0.53);
-webkit-box-shadow: 0px 3px 7px 0px rgba(0,0,0,0.53);
-moz-box-shadow: 0px 3px 7px 0px rgba(0,0,0,0.53);
z-index: 99;
`
const Title = styled.h2`
font-size: 1.7rem;
color: black;
`
const Sub = styled.h3`
font-size: 1.1rem;
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
const Errors = styled.p`
color: red;
font-size: 1.1rem;
font-family: 'Jost', sans-serif;
`

export default BoxModify

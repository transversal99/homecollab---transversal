import React from 'react'
import styled from 'styled-components'
import Form from '../Components/Form'
import Footer from '../Components/Footer.js'
import GlobalFonts from '../fonts/fonts';

function login() {
    return (
        <>
            <Container>
                <GlobalFonts />
                <TextPage>
                    <Title>Home<SecondTitle>Collab</SecondTitle></Title>
                    <SubTitle>Quand le télétravail est en accord avec votre bien être</SubTitle>
                </TextPage>
                <Form />
            </Container>
            <Footer />
        </>
    )
}

const Container = styled.div`
display: grid;
place-items: center;
height: 100vh;
grid-template-columns: repeat(2, 1fr) 0.3fr repeat(2, 1fr);
grid-template-rows: 0.5fr 2fr 0.5fr 1fr;
grid-column-gap: 50px;
grid-row-gap: 50px; 
padding: 5rem;
margin-bottom: 10rem;
`
const TextPage = styled.div`
display: flex;
align-items: left;
flex-direction: column;
grid-area: 2 / 1 / 3 / 3;
`
const Title = styled.h1`
font-size: 3rem;
color: #163791;
letter-spacing: 0.5rem;
text-transform: uppercase;
font-family: 'Jost', sans-serif;
`
const SecondTitle = styled.span`
font-size: 2.8rem;
font-family: 'Jost', sans-serif;
`
const SubTitle = styled.h2`
color:#000000;
font-size: 2.5rem;
font-family: 'Jost', sans-serif;
`

export default login

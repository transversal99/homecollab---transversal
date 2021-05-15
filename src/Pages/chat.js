import React from 'react'
import HeaderLogin from '../Components/HeaderLogin'
import styled from 'styled-components'
import Footer from '../Components/Footer'

function chat() {
    return (
        <>
            {localStorage.getItem("mail") && <HeaderLogin />} 
            <Container>

            </Container>
            <Footer />
        </>
    )
}
const Container = styled.section`
display: grid;
grid-template-areas: "cover" "bloc";
place-items: center;
padding: 1rem 5rem;
background-color: #F9F9F9;
`

export default chat

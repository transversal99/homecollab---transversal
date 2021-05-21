import React from 'react'
import HeaderLogin from '../Components/HeaderLogin'
import styled from 'styled-components'
import Footer from '../Components/Footer'
import '../styles/chat.css'
import MessageContainer from '../Components/MessageContainer'

function chat() {
    return (
        <>
            {localStorage.getItem("mail") && <HeaderLogin />} 
            <Container>
                <MessageContainer />
            </Container>
            <Footer />
        </>
    )
}
const Container = styled.div`
display: grid;
grid-template-columns: 0.5fr 1fr;
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 20px;
grid-row-gap: 0px; 
padding: 0 5rem;
background-color: #F9F9F9;
position: relative;
`


export default chat

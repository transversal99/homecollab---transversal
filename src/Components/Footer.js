import React from 'react'
import { FaPaperPlane, FaPhone, FaEnvelope } from 'react-icons/fa'
import styled from 'styled-components'

function Footer() {
    return (
        <BottomFooter>
            <Part>
                <Title>Contact</Title>
                <Line></Line>
                <Item><FaPaperPlane />182 rue Saint-Honoré 75001 Paris</Item>
                <Item><FaPhone /> 01.40.15.80.00</Item>
                <Item><FaEnvelope /> problemes@sav.fr</Item>
            </Part>
            <Parttwo>
                <Title>Suivez-nous</Title>
                <Linetwo></Linetwo>
                <Item>Facebook</Item>
                <Item>Instagram</Item>
                <Item>Twitter</Item>
            </Parttwo>
        </BottomFooter>
    )
}

const BottomFooter = styled.footer`
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem;
background-color: #163791;
grid-area: 4 / 1 / 5 / 6;
`
const Part = styled.div`
display:flex;
flex-direction: column;
align-items: left;
`
const Parttwo = styled.div`
display:flex;
flex-direction: column;
align-items: last baseline;
`
const Title = styled.h2`
color: white;
font-size: 1.5rem;
`
const Line = styled.span`
height: 3px;
background-color: white;
width: 250px;
`
const Linetwo = styled.span`
height: 3px;
background-color: white;
width: 250px;
`
const Item = styled.div`
display: flex;
align-items: center;
font-size: 1.5rem;
color: white;
padding: 1rem 0;
`

export default Footer

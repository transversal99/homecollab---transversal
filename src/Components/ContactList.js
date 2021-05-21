import React, { useEffect} from 'react'
import styled from 'styled-components'

function ContactList(props) {
    let storedMail = localStorage.getItem("mail")
    let base64Flag = 'data:image/png;base64,';

    let arrayBufferToBase64 = (buffer) => {
        let binary = ''
        let bytes = [].slice.call(new Uint8Array(buffer))   
        bytes.forEach((b) => binary += String.fromCharCode(b))
        return window.btoa(binary)
    }

    useEffect(() => {
        if(localStorage.getItem("mail") !== null){
            props.fetchUserData()
        }
        // eslint-disable-next-line
    }, [storedMail])
    return (
        <Container>
            {props.users.map((value, index) => {
                return (
                    <Item key={index} id={value.id}>
                        <ToLink href="#" onClick={(e) => props.handleClick(e)}>
                            <ImagePic src={base64Flag + arrayBufferToBase64(value.profile_img.data)} />
                            <Middle>
                                <Name>{value.firstname} {value.lastname}</Name>
                                <Message>{value.Message.message}</Message>
                            </Middle>
                            <Status>
                                <LogoTime></LogoTime>
                                <LastTime>{value.recent_connexion}</LastTime>
                            </Status>
                        </ToLink>
                    </Item>
                )
            })}
        </Container>
    )
}

const Container = styled.ul`
padding: 1rem 0;
`
const Item = styled.li`
padding: 0.5rem 0;
border-radius: 5px;
transition: 0.4s;
list-style: none;
`
const ToLink = styled.a`
width: 100%;
height: 100%;
text-decoration: none;
transition: 0.4s;
display: flex;
align-items: center;
color: black;
z-index: 99;
`
const ImagePic = styled.img`
width: 50px;
height: 50px;
object-fit: cover;
border-radius: 50%;
`
const Middle = styled.div`
display: flex;
flex-direction: column;
`
const Name = styled.p`
font-size: 1.1rem;
padding-left: 0.5rem;
color: black;
`
const Message = styled.p`
font-size: 0.8rem;
padding-left: 0.5rem;
`
const Status = styled.div`
display: flex;
align-items: center;
padding-left: 3.5rem;
`
const LogoTime = styled.span`
font-size: 0.5rem;
width: 10px;
height: 10px;
border-radius: 50%;
border: 1px solid #000000;
margin-right: 0.2rem;
`

const LastTime = styled.span`
font-size: 0.5rem;
`
export default ContactList

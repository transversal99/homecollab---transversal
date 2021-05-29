import React, { useState, useEffect } from 'react'
import socketIOClient from "socket.io-client";
import styled from 'styled-components'
import { useForm } from 'react-hook-form';
import ImagePic from '../Components/ImagePic'
import NewChat from '../Assets/Groupe 54.png'
import { FaSearch } from 'react-icons/fa'
import ContactList from '../Components/ContactList'
import GalleryPic from '../Assets/Groupe 55.png'
import GifPic from '../Assets/Groupe 56.png'
import DocPic from '../Assets/Icon feather-paperclip.png'
import PicEmoji from '../Assets/Icon material-insert-emoticon.png'
import IconSend from '../Assets/Icon material-send.png'

function MessageContainer() {
    const ENDPOINT = "http://localhost:9000";
    const [users, setUsers] = useState([])
    const [receiverPresent, setReceiverPresent] = useState(false)
    const [chat, setChat] = useState([])
    const [userId, setuserId] = useState("")
    let storedMail = localStorage.getItem("mail")
    // const [img, setImg] = useState("")
    let handleClick = (e) => {
        // setReceive(e.currentTarget.parentElement.id)
        localStorage.setItem('receiver', e.currentTarget.parentElement.id)
        setReceiverPresent(true)
        fetchChatData(localStorage.getItem("receiver"))
    }
    let fetchChatData = (item) => {
        fetch(`http://localhost:9000/users/email/${storedMail}`).then((data) => data.json())
        .then((user) => {
            let id = user.data
            setuserId(id)
            fetch(`http://localhost:9000/messages/user/${id}/${item}`).then((data) => data.json())
            .then((data => setChat(data.data)))
        })
        .catch(error => {
            console.error("Error fetching data : ", error)
        })
    }

    useEffect(() => {
        localStorage.removeItem("receiver")
        // if(localStorage.getItem("mail") !== null){
        //     fetchChatData(receive)
        // }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on("MESSAGE-CREATED", data => {
            setChat([...chat, data])
            fetchUserData()
        });
         // CLEAN UP THE EFFECT
        //  When the component dismount the connexion with the socket is disconnected
        return () => socket.disconnect();
        // eslint-disable-next-line
    }, [chat]);
    
    const {
        register,
        handleSubmit,
      } = useForm();

    const onSubmit = (data) =>{
        let messageData = data.message
        let storedMail = localStorage.getItem("mail")
        fetch(`http://localhost:9000/users/email/${storedMail}`).then((data) => data.json())
        .then((user) => {
            let id = user.data
            fetch(`http://localhost:9000/messages/user/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded',
                },
                body: `receiverId=${localStorage.getItem('receiver')}&message=${messageData}`
            }).then((data) => data.json())
            .then((response => console.log(response)))
        })
        .catch(error => {
            console.error("Error fetching data : ", error)
        })
    }
    let fetchUserData = () => {
        fetch(`http://localhost:9000/users/email/${storedMail}`).then((data) => data.json())
        .then((user) => {
            let id = user.data
            fetch(`http://localhost:9000/messages/${id}`).then((data) => data.json())
            .then((data => setUsers(data.data[0].receiver)))
        })
        .catch(error => {
            console.error("Error fetching data : ", error)
        })
    }
    return (
        <>
            <LeftBox>
                <MessageBox>
                    <ImageContainer>
                        <ImagePic />
                    </ImageContainer>
                    <Text>Message privé</Text>
                    <ImageContainer>
                        <Img src={NewChat} />
                    </ImageContainer>
                </MessageBox>
                <SearchBarContainer>
                    <FaSearch className="search" />
                    <Input placeholder="Rechercher un contact"/>
                </SearchBarContainer>
                <ContactList handleClick={handleClick} fetchUserData={fetchUserData} users={users}/>
            </LeftBox>
            <RightBox>
                {receiverPresent === false && <ScreenWhenNoMessage>
                    <FirstText>
                        Vous n'avez cliqué sur aucune conversation
                        <SubText>Veuillez cliquer sur une conversation, sinon vous pouvez en commencer une nouvelle</SubText>
                    </FirstText>
                    <Btn>Nouveau message</Btn>
                </ScreenWhenNoMessage>}
                {receiverPresent === true && 
                <ScreenWhenMessageClicked>
                    {chat.map((value) => {
                        // eslint-disable-next-line
                        if (value.UserId == userId ) {
                            return(
                                <User key={value.id}>
                                    <Message id={value.UserId}>{value.message}</Message>
                                </User>
                            )
                        }
                        else {
                            return(
                                <UserSecond key={value.id}>
                                    <MessageSecond id={value.UserId}>{value.message}</MessageSecond>
                                </UserSecond>
                            )
                        }
                    })}
                </ScreenWhenMessageClicked>}
                <MessageSender>
                    <Gallery src={GalleryPic} />
                    <Gif src={GifPic} />
                    <SendDocument src={DocPic} />
                    <SendContainer onSubmit={handleSubmit(onSubmit)}>
                        <InputMessage type="text" {...register('message', { required: true })}/>
                        <Emoji src={PicEmoji}/>
                        <BtnMessage type="submit">
                            <SendBtn src={IconSend}/>
                        </BtnMessage>
                    </SendContainer>
                </MessageSender>
            </RightBox>
        </>
    )
}

const LeftBox = styled.div`
grid-area: 1 / 1 / 5 / 2;
background-color: white;
padding: 0rem 1rem;
padding-bottom: 0;
`
const RightBox = styled.div`
grid-area: 1 / 2 / 5 / 3;
background-color: white;
padding: 0rem 1rem;
height: 80vh;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
`
const MessageBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
padding-bottom: 0.5rem;
`
const ImageContainer = styled.div`
border-radius: 50%;
width: 50px;
height: 50px;
`
const Text = styled.h1`
font-size: 1.4rem;
color: black;
font-weight: normal;
`
const Img = styled.img`
object-fit: contain;
width: 100%;
height: 100%;
`
const SearchBarContainer = styled.div`
padding: 0.5rem 0;
display: grid;
grid-template-columns: 0.05fr 0.075fr 1fr;
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px; 
place-items: center;
`
const Input = styled.input`
grid-area: 1 / 1 / 2 / 4;
width: 100%;
background-color: #F2F2F2;
border-radius: 1.8rem;
padding: 0.8rem 0 0.8rem 3.5rem;
border: none;
`
const MessageSender = styled.div`
padding: 1rem 0;
display: flex;
justify-content: space-between;
width: 100%;
`
const Gallery = styled.img`
object-fit: contain;
width: 45px;
height: 45px;
`
const Gif = styled.img`
object-fit: contain;
width: 45px;
height: 45px;
`
const SendDocument = styled.img`
object-fit: contain;
width: 45px;
height: 45px;
`
const SendContainer = styled.form`
display:flex;
align-items: center;
width: 70%;
`
const InputMessage = styled.input`
background-color: #F2F2F2;
border-radius: 2.1rem;
position: relative;
width: 100%;
padding: 0.7rem 0 0.7rem 2rem;
font-size: 1.1rem;
border: none;
margin-right: 0.6rem;
`
const Emoji = styled.img`
object-fit: contain;
width: 40px;
height: 40px;
position: absolute;
left: 83%;
`
const SendBtn = styled.img`
object-fit: contain;
width: 40px;
height: 40px;
`
const BtnMessage = styled.button`
border: none;
background: none;
cursor: pointer;
`
const ScreenWhenNoMessage = styled.div`
height: 90%;
background-color: white;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
`
const FirstText = styled.h2`
font-size: 1.4rem;
color: #163791;
text-align: center;
`
const SubText = styled.p`
font-size: 1rem;
color: black;
padding-top: 1rem;
font-weight: normal;
`
const Btn = styled.button`
padding: 0.5rem 1.2rem;
color: white;
font-size: 1.3rem;
background-color: #163791;
border-radius: 1.8rem;
width: 40%;
border: none;
`
const ScreenWhenMessageClicked = styled.div`
background-color: white;
padding: 0.3rem;
width: 100%;
height: 100%;
overflow-y: scroll;
`
const Message = styled.p`
font-size: 1rem;
padding: 0.5rem;
margin: 0.2rem 0;
border-radius: 0.5rem 0.5rem 0 0.5rem;
background-color: #163791;
color: white;
`
const User = styled.div`
display: flex;
align-items: center;
justify-content: right;
`
const MessageSecond = styled.p`
font-size: 1rem;
padding: 0.5rem;
margin: 0.2rem 0;
border-radius: 0.5rem 0.5rem 0.5rem 0;
background-color: #F2F2F2;
color: black;
`
const UserSecond = styled.div`
display: flex;
align-items: center;
justify-content: left;
`

export default MessageContainer

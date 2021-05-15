import React from 'react'
import Footer from '../Components/Footer'
import HeaderLogin from '../Components/HeaderLogin'
import styled from 'styled-components'
import Cover from '../Components/Cover'
import {FaCommentAlt} from 'react-icons/fa'
import Param from '../Assets/Icon feather-settings.png'
import ArticleLogo from '../Assets/Icon awesome-history.png'
import MusicLogo from '../Assets/Icon awesome-music.png'
import Chevron from '../Assets/Icon awesome-chevron-right.png'
import AgendaLogo from '../Assets/Groupe 48.png'
import QuestionnaireLogo from '../Assets/Groupe 49.png'
import ImagePic from '../Components/ImagePic'

function profile() {
    return (
        <>
            {localStorage.getItem("mail") && <HeaderLogin />}  
            <Container>
                <Cover />
                <ProfileBloc>
                    <Profile>
                        <TopBox>
                            <Lien href="profile/parameters">
                                <Parameter src={Param} />
                            </Lien>
                            <Pic>
                                <ImagePic />
                            </Pic>
                        </TopBox>
                        <BottomBox>
                            <Btn href="/profile/chat"><FaCommentAlt /> Message</Btn>
                            <Div>
                                <Item src={MusicLogo} />
                                <Text>Historique des articles</Text>
                                <Item src={Chevron} />
                            </Div>
                            <Div>
                                <Item src={ArticleLogo} />
                                <Text>Historique des playlist</Text>
                                <Item src={Chevron} />
                            </Div>
                        </BottomBox>
                    </Profile>
                    <AgendaContainer>
                        <Top>
                            <ButtonF><Item src={AgendaLogo} />Agenda</ButtonF>
                            <ButtonS><Item src={QuestionnaireLogo} />Questionnaire</ButtonS>
                        </Top>
                        <Agenda>
                            <Task>Ajouter une tâche</Task>
                            <Message>Bravo vous avez accompli tout vos objectif aujourd'hui !</Message>
                        </Agenda>
                    </AgendaContainer>
                </ProfileBloc>
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
const ProfileBloc = styled.div`
display: grid;
grid-template-columns: 1.5fr repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr); 
grid-column-gap: 50px;
grid-row-gap: 0px;
grid-area: bloc;
width: 100%;
`
const Profile = styled.div`
display: flex;
flex-direction: column;
padding: 1rem;
grid-area: 1 / 1 / 3 / 2;
width: 100%;
height: 500px;
box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.6);
-webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.6);
-moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.6);
justify-content: space-between;
`
const TopBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 0.3rem;
position: relative;
`
const Parameter = styled.img`
object-fit: contain;
width: 100%;
height: 100%;
`
const Lien = styled.a`
width: 30px;
height: 30px;
position: absolute;
top: 0;
left: 0;
`
const Pic = styled.div`
width: 150px;
height: 150px;
border-radius: 50%;
`
const BottomBox = styled.div`
display: flex;
align-items: center;
flex-direction: column;
padding: 0.3rem;
position: relative;
margin-bottom: 5rem;
height: 40%;
justify-content: space-between;
`
const Btn = styled.a`
width: 100%;
border-radius: 1.5rem;
background-color: #163791;
color: white;
border: none;
font-size: 1.25rem;
padding: 0.4rem 1.2rem;
text-align: center;
cursor: pointer;
text-decoration: none;
`
const Div = styled.div`
display:flex;
align-items: center;
`
const Item = styled.img`
width: 25px;
height: 25px;
object-fit: contain;
margin-right: 0.4rem;
`
const Text = styled.p`
font-size: 1.25rem;
padding-right: 1rem;
`
const AgendaContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
grid-area: 1 / 2 / 4 / 5;
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
width: 50%;
margin-top: 0.5rem;
margin-bottom: 0.5rem;
`
const ButtonF = styled.button`
background-color: #163791;
border-radius: 0.5rem 0.1rem 0.1rem 0.5rem;
color: white;
width: 50%;
padding: 0.4rem 0rem;
border: 1px solid #163791;
display: flex;
align-items: center;
justify-content: center;
`
const ButtonS = styled.button`
justify-content: center;
display: flex;
align-items: center;
background-color: #FFFFFF;
border-radius: 0.1rem 0.5rem 0.5rem 0.1rem;
color: black;
width: 50%;
padding: 0.4rem 0rem;
border: 1px solid black;
`
const Agenda = styled.div`
height: 400px;
width: 100%;
display:flex;
align-items: center;
`
const Task = styled.button`
background-color: #163791;
border-radius: 1.875rem;
color: white;
padding: 0.4rem 2rem;
font-size: 1.25rem;
`
const Message = styled.p`
font-size: 1.25rem;
color: black;
`

export default profile

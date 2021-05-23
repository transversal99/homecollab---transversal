import React from 'react'
import Footer from '../Components/Footer'
import HeaderLogin from '../Components/HeaderLogin'
import styled from 'styled-components'
import Cover from '../Components/Cover'
import AgendaContainer from '../Components/AgendaContainer'
import {FaCommentAlt} from 'react-icons/fa'
import Param from '../Assets/Icon feather-settings.png'
import ArticleLogo from '../Assets/Icon awesome-history.png'
import MusicLogo from '../Assets/Icon awesome-music.png'
import Chevron from '../Assets/Icon awesome-chevron-right.png'
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
                    <AgendaContainer />
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

export default profile

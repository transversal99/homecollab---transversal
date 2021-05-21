import React from 'react'
import Footer from '../Components/Footer'
import styled from 'styled-components'
import ImagePic from '../Components/ImagePic'
import ImageCover from '../Components/ImageCover'
import ListModify from '../Components/ListModify'
import UploadLogo from '../Assets/Groupe 51.png'
import ButtonPassword from '../Components/ButtonPassword'
import Logout from '../Components/Logout'

function parameters() {
    return (
        <>
            <Container>
                <LeftBox>
                    <List>
                        <Title>Paramètre d'utilisateur</Title>
                        <Item>Mon compte</Item>
                        <Item>Confidentialité et sécurité</Item>
                        <Item>Application autorisé</Item>
                    </List>
                    <ListTwo>
                        <Title>Paramètre du compte</Title>
                        <Item>Apparence</Item>
                        <Item>Accesibilité</Item>
                        <Item>Texte et image</Item>
                        <Item>Vidéo et voix</Item>
                        <Item>Notification</Item>
                        <Logout />
                    </ListTwo>
                </LeftBox>
                <RightBox>
                    <BigTitle>Mon Compte</BigTitle>
                    <DivCenter>
                        <SubTitle>Photo de profil</SubTitle>
                        <PicContainer>
                            <Overlay />
                            <Img src={UploadLogo} alt="LogoUpload"/>
                            <ImagePic />
                        </PicContainer>
                    </DivCenter>
                    <DivCenter>
                        <SubTitle>Photo de couverture</SubTitle>
                        <CoverContainer>
                            <OverlayCover />
                            <Img src={UploadLogo} alt="LogoUpload"/>
                            <ImageCover />
                        </CoverContainer>
                    </DivCenter>
                    <Div>
                        <SecondTitle>Paramètres généraux du compte</SecondTitle>
                        <List>
                            <ListModify />
                        </List>
                    </Div>
                    <Div>
                        <SecondTitle>Mot de passe</SecondTitle>
                        <Paragraph>Pour des raisons de sécurité vous devez connaitre le mot de passe actuellement appliqué à ce compte afin de
                            pouvoir prétendre à un changement de mot de passe. Cependant si le compte vous appartient bel et bien et que
                            vous avez oubliez le mot de passe, il est possible de le réinitialiser via une demande de lien par mail prévu à cet
                            effet.
                        </Paragraph>
                        <ButtonPassword />
                    </Div>
                    <Div>
                        <SecondTitle>Authentification à double facteur </SecondTitle>
                        <Paragraph>Protégez votre compte HomeCollab avec une deuxième couche de sécurité en plus. Une fois l'option activé, tu 
                            devras, en plus d'indiqué ton mot de passe, indiquer un code d'authentification venant de ton téléphone pour te 
                            connecter. 
                        </Paragraph>
                        <Btn>Activé l'authentification à deux facteur</Btn>
                    </Div>
                    <Div>
                        <SecondTitle>Notifications</SecondTitle>
                    </Div>
                    <Div>
                        <SecondTitle>Son d'alerte</SecondTitle>
                    </Div>
                </RightBox>
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
const LeftBox = styled.div`
grid-area: 1 / 1 / 5 / 2;
background-color: white;
padding: 8rem 3rem;
padding-bottom: 0;
`
const RightBox = styled.div`
grid-area: 1 / 2 / 5 / 3;
background-color: white;
padding: 8rem 0rem;
`
const List = styled.ul`
display: flex;
flex-direction: column;
list-style: none;
height: 20%;
justify-content: space-around;
`
const ListTwo = styled.ul`
display: flex;
flex-direction: column;
list-style: none;
height: 35%;
justify-content: space-around;
`
const Title = styled.li`
font-size: 1.6rem;
font-weight: bold;
margin-bottom: 0.7rem;
`
const Item = styled.li`
font-size: 1.10rem;
margin-bottom: 0.2rem;
`
const BigTitle = styled.h1`
font-size: 2.3rem;
color: black;
font-weight: bold;
padding: 0 3rem;
padding-bottom: 2rem;
`
const DivCenter = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-bottom: 1.2rem;
`
const SubTitle = styled.h2`
font-size: 1.5rem;
color: black;
padding-bottom: 1rem;
`
const Overlay = styled.div`
width: 100%;
height: 100%;
background-color: black;
opacity: 0;
position: absolute;
top: 0;
left: 0;
border-radius: 50%;
transition: 0.4s;
`
const OverlayCover = styled.div`
width: 100%;
height: 100%;
background-color: black;
opacity: 0;
position: absolute;
top: 0;
left: 0;
transition: 0.4s;
`
const Img = styled.img`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
opacity: 0;
width: 80px;
z-index: 99;
transition: 0.25s;
`
const PicContainer = styled.div`
height: 230px;
width: 230px;
border-radius: 50%;
cursor:pointer;
position: relative;
&:hover ${Overlay}{
    opacity: 0.6;
}
&:hover ${Img} {
    opacity: 1;
}
`
const CoverContainer = styled.div`
width: 100%;
height: 234px;
margin-bottom: 0.5rem;
position: relative;
cursor:pointer;
&:hover ${OverlayCover}{
    opacity: 0.6;
}
&:hover ${Img} {
    opacity: 1;
}
`
const Div = styled.div`
display: flex;
flex-direction: column;
padding: 0 3rem;
padding-bottom: 1rem;
`
const SecondTitle = styled.h2`
font-size: 1.5rem;
font-weight: bold;
padding-bottom: 1.5rem;
`
const Paragraph = styled.p`
font-size: 0.9rem;
color: black;
padding-bottom: 1rem;
`
const Btn = styled.button`
background-color: #163791;
padding: 0.3rem 0rem;
border-radius: 0.75rem;
font-size: 1.2rem;
color: white;
width: 65%;
`
export default parameters

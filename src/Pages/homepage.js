import React from 'react'
import styled from 'styled-components'
import Footer from '../Components/Footer'
import HeaderLogin from '../Components/HeaderLogin'
import Carousel from 'react-elastic-carousel';
import BackgroundFirst from '../Assets/Placement Area1.png'
import BackgroundSecond from '../Assets/Placement Area2.png'
import BackgroundThird from '../Assets/Placement Area3.png'
import Creativity from '../Assets/amoule.png'
import Generale from '../Assets/société.png'
import Zen from '../Assets/zen.png'
import Spotify from '../Assets/Image 1.png'
import Plaza from '../Assets/Image 2.png'
import Organisation from '../Assets/icones.png'
import ExplicationImg  from '../Assets/Placement Area.png'
import '../styles/app.css'

function homepage() {
    let items = [
        {
            id: 1, 
            title: 'Calendrier', 
            subtext:"Découvrez notre nouvelle fonctionnalité : le calendrier. Enregistrez dès maintenant vos objectifs de la semaine.",
            cta: "Je découvre",
            image: {BackgroundFirst}
        },
        {
            id: 2, 
            title: 'E-Coffee', 
            subtext:"L'E-Coffee vous permet de faire votre pause avec vos collègues et/ou les personnes qui utilisent HomeCollab.",
            cta: "Je prends une pause",
            image: {BackgroundSecond}
        },
        {
            id: 3, 
            title: 'La Playlist', 
            subtext:"Prenez vos pauses en musique et découvrez ce que les autres écoutes. ",
            cta: "J'écoute",
            image: {BackgroundThird}
        },
    ]

    return (
        <>
            <HeaderLogin />
            <Carousel 
            showArrows={false}
            transitionMs={1500}>
                {items.map(item => {
                    return (
                        <Contain key={item.id}>
                            <Title>{item.title}</Title>
                            <Img src={item.image[Object.keys(item.image)[0]]} alt="Placement Area"/>
                            <SubTitle>{item.subtext}</SubTitle>
                            <Btn>{item.cta}</Btn>
                        </Contain>
                    )
                })}
            </Carousel>
            <Section>
                <Divide>
                    <TopDiv>
                        <BoxTitle>Lorem ipsum</BoxTitle>
                        <BoxSub>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Tristique Vestibulum Mauris Non Suscipit. Praesent Commodo </BoxSub>
                    </TopDiv>
                    <SecondDiv>
                        <SecondImg src={ExplicationImg} alt="imageexplication" />
                    </SecondDiv>
                </Divide>
                <Div>
                    <HomeTitle>Pourquoi utiliser HomeCollab ?</HomeTitle>
                    <DivideTwo>
                        <BoxDiv>
                            <BoxImg>
                                <Img src={Zen} alt="stress logo"/>
                            </BoxImg>
                            <TextImg>Apprenez à gérer votre stress</TextImg>
                        </BoxDiv>
                        <Separation></Separation>
                        <BoxDiv>
                            <BoxImg>
                                <Img src={Organisation} alt="Organisation"/>
                            </BoxImg>
                            <TextImg>Mieux gérer votre organisation</TextImg>
                        </BoxDiv>
                        <Separation></Separation>
                        <BoxDiv>
                            <BoxImg>
                                <Img src={Creativity} alt="productivité"/>
                            </BoxImg>
                            <TextImg>Des conseils pour améliorer votre productivité</TextImg>
                        </BoxDiv>
                    </DivideTwo>
                    <Div>
                        <HomeTitle>Ils nous recommandent déjà</HomeTitle>
                        <Divide>
                            <Img src={Spotify} alt="spotify"/>
                            <Img src={Generale} alt="societe generale"/>
                            <Img src={Plaza} alt="stephane plaza"/>
                        </Divide>
                    </Div>
                </Div>
            </Section>
            <Footer />
        </>
    )
}

const Contain = styled.div`
display: grid;
align-items: center;
justify-items: center;
height:90vh;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(6, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px; 
`
const Img = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
grid-area: 1 / 1 / 7 / 6;
`
const Title = styled.h2`
grid-area: 2 / 2 / 3 / 5;
z-index: 99;
font-size: 4.3rem;
color: #163791;
`
const SubTitle = styled.h3`
grid-area: 3 / 1 / 4 / 6;
font-size: 1.4rem;
color: black;
`
const Btn = styled.button`
grid-area: 5 / 4 / 6 / 5;
background-color: #163791;
padding: 0.7rem 6rem;
border-radius: 0.6rem;
border: none;
color: white;
text-transform: uppercase;
font-weight: bold;
`
const Section = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`
const Div = styled.div`
padding: 2rem 1rem;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`
const TopDiv = styled.div`
padding: 2rem 1rem;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 50%;
`
const Divide = styled.div`
display: flex;
align-items: center;
padding: 5rem 2rem;
width: 100%;
`
const DivideTwo = styled.div`
display: flex;
align-items: center;
padding: 5rem 4rem;
width: 100%;
justify-content: space-evenly;
`
const BoxTitle = styled.h2`
color: #1B019B;
font-size: 2.5rem;
padding-bottom: 2rem;
`
const BoxSub = styled.p`
width: 60%;
color: #000000;
`
const SecondImg = styled.img`
height: 100%;
width: 100%;
object-fit: contain;
`
const SecondDiv = styled.div`
height: 300px;
width: 400px;
`
const HomeTitle = styled.h2`
color: #1B019B;
font-size: 2.75rem;
font-weight: normal;
padding-top: 2rem;
`
const Separation = styled.span`
background-color: #4B0082;
height: 220px;
width: 2px;
`
const BoxImg = styled.div`
width: 100px;
height: 100px;
margin-bottom: 1.5rem;
`
const TextImg = styled.p`
width: 60%;
`
const BoxDiv = styled.div`
padding: 2rem 1rem;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 250px;
`
export default homepage

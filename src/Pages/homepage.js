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
            <section>
                <div>
                    <div>
                        <h2>Lorem ipsum</h2>
                        <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Tristique Vestibulum Mauris Non Suscipit. Praesent Commodo </p>
                    </div>
                    <img src="" alt="imageexplication" />
                </div>
                <div>
                    <h2>Pourquoi utiliser HomeCollab ?</h2>
                    <div>
                        <div>
                            <img src={Zen} alt="stress logo"/>
                            <p>Apprenez à gérer votre stress</p>
                        </div>
                        <div>
                            <img src={Organisation} alt="Organisation"/>
                            <p>Mieux gérer votre organisation</p>
                        </div>
                        <div>
                            <img src={Creativity} alt="productivité"/>
                            <p>Des conseils pour améliorer votre productivité</p>
                        </div>
                    </div>
                    <div>
                        <h2>Ils nous recommandent déjà</h2>
                        <div>
                            <img src={Spotify} alt="spotify"/>
                            <img src={Generale} alt="societe generale"/>
                            <img src={Plaza} alt="stephane plaza"/>
                        </div>
                    </div>
                </div>
            </section>
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



export default homepage

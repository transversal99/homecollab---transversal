import React from 'react'
import Footer from '../Components/Footer'
import HeaderLogin from '../Components/HeaderLogin'
import styled from 'styled-components'
import '../styles/css/style2.css'
import Productivité from '../Assets/img/productivité.png'
function articles() {
    return (
        <>
            <HeaderLogin />
            <Container>
                <h1>Articles</h1>
                <h2>Catégories</h2>
                <div className="cat">
                    <div className="teletravail">
                        <p>Télétravail</p>
                    </div>
                    <div className="tips">
                        <p>Tips</p>
                    </div>
                    <div className="productivite">
                        <p>Productivité</p>
                    </div>
                </div>
                <div>
                    <h2>Dernier article publié</h2>
                    <Art href="/articles/1">
                        <img src={Productivité} alt="Productivité" />
                        <div>
                            <h3>Productivité : 5 lois à connaître pour être plus efficace au travail</h3>
                            <p>Très connue, cette loi stipule que s’il est possible que quelque chose tourne mal, cela tournera forcément mal. Autrement dit, il faut toujours s’attendre au pire.</p>
                        </div>
                    </Art>
                </div>
            </Container>
            <Footer />
        </>
    )
}
const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
margin-left: 200px;
margin-right: 200px;
`
const Art = styled.a`
text-decoration: none;
color: black;
padding: 1rem;
`

export default articles

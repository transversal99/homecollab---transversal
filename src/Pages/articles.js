import React from 'react'
import Footer from '../Components/Footer'
import HeaderLogin from '../Components/HeaderLogin'
import styled from 'styled-components'
import '../styles/css/style2.css'
function articles() {
    return (
        <>
            <HeaderLogin />
            <Container>
                <h1>Articles</h1>
                <h2>Catégories</h2>
                <div class="cat">
                    <div class="teletravail">
                        <p>Télétravail</p>
                    </div>
                    <div class="tips">
                        <p>Tips</p>
                    </div>
                    <div class="productivite">
                        <p>Productivité</p>
                    </div>
                </div>
                <div>
                    <h2>Dernier article publié</h2>
                    <div>
                        <img src="" alt="" />
                        <div>
                            <h3>Smh</h3>
                            <p></p>
                        </div>
                    </div>
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

export default articles

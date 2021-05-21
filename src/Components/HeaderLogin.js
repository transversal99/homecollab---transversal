import {React} from 'react'
import styled from 'styled-components'
import Logo from '../Assets/logo.png'
import ImagePic from './ImagePic'

function HeaderLogin() {
    return (
        <Header>
            <Nav>
                <Img src={Logo} />
                <List>
                    <Item href="/">Acceuil</Item>
                    <Item href="/">Conseils</Item>
                    <Item href="/">E-coffee</Item>
                    <Item href="/">Playlist</Item>
                    <Div>
                        <ToProfile href="/profile">
                            <ImagePic />
                        </ToProfile>
                    </Div>
                </List>
            </Nav>
        </Header>
    )
}

const Header = styled.header`
padding: 2rem 5rem;
display: flex;
align-items: center;
`
const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`
const Img = styled.img`
object-fit: contain;
width: 20%;
`
const List = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 50%;
`
const Item = styled.a`
text-decoration: none;
font-size: 1.2rem;
color: #000000;
font-weight: bold;
`
const Div = styled.div`
display:flex;
align-items:center;
width: 100px;
height: 100px;
border-radius: 50%;
overflow: hidden;
min-width: 100px;
`
const ToProfile = styled.a`
width: 100%;
height: 100%;
`

export default HeaderLogin

import {React,useEffect,useState} from 'react'
import styled from 'styled-components'
import Logo from '../Assets/logo.png'

function HeaderLogin() {
    const [img, setImg] = useState("")
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
            fetch(`http://localhost:9000/users/email/${storedMail}`).then((data) => data.json())
            .then((user) => {
                let id = user.data
                fetch(`http://localhost:9000/users/id/${id}`).then((data) => data.json())
                .then((data => setImg(data.data.profile_img.data)))
            })
            .catch(error => {
                console.error("Error fetching data : ", error)
            })
        }
        // eslint-disable-next-line
    }, [])

    // Image conversion
    let imageStr = arrayBufferToBase64(img)
    let fullimage = base64Flag + imageStr

    return (
        <Header>
            <Nav>
                <Img src={Logo} />
                <List>
                    <Item>Acceuil</Item>
                    <Item>Conseils</Item>
                    <Item>E-coffee</Item>
                    <Item>Playlist</Item>
                    <Div>
                        <ProfileImg src={fullimage} />
                    </Div>
                </List>
            </Nav>
        </Header>
    )
}

const Header = styled.header`
padding: 5rem;
display: flex;
align-items: center;
`
const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
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
background: blue;
overflow: hidden;
min-width: 100px;
`
const ProfileImg = styled.img`
width: 100%;
object-fit: cover;
margin-left: auto;
margin-right: auto;
`

export default HeaderLogin

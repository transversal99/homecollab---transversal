import React, {useState} from 'react'
import { Redirect } from 'react-router'
import styled from 'styled-components'

function Logout() {
    const [logout, setLogout] = useState(false)
    let handleLogout = () => {
        console.log(logout)
        localStorage.getItem("mail") && localStorage.removeItem("mail")
        setLogout(true)
    }
    if (logout === true) {
        return <Redirect  to="/login" />
    } 
    return (
        <>
            <LogBtn onClick={handleLogout}>Déconnexion</LogBtn>
        </>
    )
}

const LogBtn = styled.li`
font-size: 1.25rem;
color: #E61616;
margin-top: 5rem;
cursor:pointer;
transition: 0.3s;
&:hover {
    opacity: 0.5;
}
`

export default Logout

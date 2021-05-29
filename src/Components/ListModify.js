import React, { useState } from 'react'
import styled from 'styled-components'
import BoxModify from './BoxModify'
import FetchData from '../Components/FetchData'

function ListModify() {
    const [box, setBox] = useState(0)
    let handleModifying = (e) => {
        switch (e.target.dataset.content) {
            case "lastname":
                setBox(1)
                break;
            case "firstname":
                setBox(2)
                break;
            case "email":
                setBox(3)
                break;
            case "phone":
                setBox(4)
                break;
            default:

                break;
        }
    }
    return (
        <>
            {box === 1 && <BoxModify title="lastname"/>}
            <ItemSecond><Phrase>Nom: <Soan><FetchData content="lastname" /></Soan></Phrase>  <Lien data-content="lastname" onClick={(e) => handleModifying(e)}>Modifier</Lien></ItemSecond>
            {box === 2 && <BoxModify title="firstname"/>}
            <ItemSecond><Phrase>Prénom: <Soan><FetchData content="firstname" /></Soan></Phrase>  <Lien data-content="firstname" onClick={(e) => handleModifying(e)}>Modifier</Lien></ItemSecond>
            {box === 3 && <BoxModify title="email"/>}
            <ItemSecond><Phrase>Email: <Soan><FetchData content="email" /></Soan></Phrase>  <Lien data-content="email" onClick={(e) => handleModifying(e)}>Modifier</Lien></ItemSecond>
            {box === 4 && <BoxModify title="phone"/>}
            <ItemSecond><Phrase>Téléphone: <Soan>+<FetchData content="phone" /></Soan></Phrase> <Lien data-content="phone" onClick={(e) => handleModifying(e)}>Modifier</Lien></ItemSecond>
        </>
    )
}
const ItemSecond = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
padding-bottom: 1.3rem;
`
const Soan = styled.span`
margin-left: 4rem;
`
const Lien = styled.a`
text-decoration: none;
cursor: pointer;
`
const Phrase = styled.p`
width: 50%;
display: flex;
justify-content: space-between;
`

export default ListModify

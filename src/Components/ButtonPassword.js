import React, { useState } from 'react'
import styled from 'styled-components'
import PasswordModify from './PasswordModify'

function ButtonPassword() {
    const [form, setForm] = useState(false)
    return (
        <>
            {form === true && <PasswordModify title="password"/>}
            <Btn onClick={() => {setForm(true)}}>Changer de mot de passe</Btn>
        </>
    )
}

const Btn = styled.button`
background-color: #163791;
padding: 0.3rem 0rem;
border-radius: 0.75rem;
font-size: 1.2rem;
color: white;
width: 65%;
`

export default ButtonPassword

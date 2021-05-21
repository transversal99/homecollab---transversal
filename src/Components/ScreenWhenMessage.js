import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

function ScreenWhenMessage() {
    const [receiverPresent, setReceiverPresent] = useState(false)
    const [chat, setChat] = useState([])
    let storedMail = localStorage.getItem("mail")
    let storageReceiver = localStorage.getItem("receiver")
    let fetchChatData = (item) => {
        fetch(`http://localhost:9000/users/email/${storedMail}`).then((data) => data.json())
        .then((user) => {
            let id = user.data
            fetch(`http://localhost:9000/messages/user/${id}/${item}`).then((data) => data.json())
            .then((data => setChat(data.data)))
        })
        .catch(error => {
            console.error("Error fetching data : ", error)
        })
    }
    useEffect(() => {
        if(localStorage.getItem("mail") !== null){
            fetchChatData(storageReceiver)
        }
        // eslint-disable-next-line
    }, [])
    
    useEffect(() => {
        let receiverItem = 0
        setInterval(() => {
            if (receiverItem !== null) {
                setReceiverPresent(true)
                if (localStorage.getItem("receiver") !== receiverItem) {
                    console.log(localStorage.getItem("receiver"))
                    fetchChatData(receiverItem)
                }
            }
            else {
                setReceiverPresent(false)
            }
            receiverItem = localStorage.getItem("receiver")
        }, 500);

        // eslint-disable-next-line
    }, [])
    return (
        <>
        </>
    )
}


export default ScreenWhenMessage

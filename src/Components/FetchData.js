import React, {useState, useEffect} from 'react'

function FetchData(props) {
    const [str, setStr] = useState("")
    let storedMail = localStorage.getItem("mail")
    let content = props.content

    useEffect(() => {
        if(localStorage.getItem("mail") !== null){
            fetch(`http://localhost:9000/users/email/${storedMail}`).then((data) => data.json())
            .then((user) => {
                let id = user.data
                fetch(`http://localhost:9000/users/id/${id}`).then((data) => data.json())
                .then((data) => {
                    setStr(data.data[content])
                })
            })
            .catch(error => {
                console.error("Error fetching data : ", error)
            })
        }
        // eslint-disable-next-line
    }, [])

    let Data = str
    return (
        <>
            {Data}
        </>
    )
}

export default FetchData

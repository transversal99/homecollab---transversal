import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

function ImagePic() {
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
        <>
            <Img src={fullimage} alt="ImagePic"/>
        </>
    )
}
const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 50%;
`
export default ImagePic

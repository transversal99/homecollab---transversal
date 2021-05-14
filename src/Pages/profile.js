import React from 'react'
import Footer from '../Components/Footer'
import HeaderLogin from '../Components/HeaderLogin'

function profile() {
    return (
        <div>
            {localStorage.getItem("mail") && <HeaderLogin />}  
            <section>

            </section>
            <Footer />
        </div>
    )
}

export default profile

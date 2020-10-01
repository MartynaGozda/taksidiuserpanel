
import React from 'react';
import MenuPage from './MenuPage.js'
import Reset from './Reset.js'
// import Registration from'./Registration.js'
// import Login from'./Login.js'
import Footer from "./Footer.js"

function UserPanel() {
    return (
        <div>
            <MenuPage />
            {/* <Registration /> */}
            {/* <Login /> */}
            <Reset />
            <Footer /> 
        </div>

    );
}

export default UserPanel

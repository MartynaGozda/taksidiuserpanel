
import React from 'react';
import './MenuPage.scss';
import Hamburger from "./Hamburger.js";


class MenuPage extends React.Component {

    render() {
        return (
            <>
                <div id="menuPage">
                    <div class="menu">
                        <div class="logoBox">
                            <img src={require('./img/logo-taksidi.png')} alt='logo' />
                        </div>
                        <Hamburger />
                        <ul class="navItems">
                            <li class="navItem"><a href="#contactContainer">Nasze wyjazdy</a></li>
                            <li class="navItem"><a href="#contactContainer">Okres specjalny</a></li>
                            <li class="navItem"><a href="#contactContainer">Promocje</a></li>
                            <li class="navItem"><a href="#contactContainer">Dlaczego My?</a></li>
                            <li class="navItem"><a href="#contactContainer">O nas</a></li>
                            <li class="navItem"><a href="#contactContainer">FAQ</a></li>
                            <li class="navItem"><a href="#contactContainer">Kontakt</a></li>
                            <li class="navItem"><a href="#contactContainer">Zaloguj</a></li>
                            <li class="navItem"><a href="#contactContainer">PL<i class="arrow down"></i></a></li>
                        </ul>
                    </div>
                </div>
                
            </>
        );
    }
}

export default MenuPage

import React, {Component} from "react";

class Comp1 extends Component{
    render() {
        //Código para que funcione el menú hamburguesa para celulares
        const toggleButton = document.getElementsByClassName('toggle-button')[0]
        const navbarLinks = document.getElementsByClassName('navbar-links')[0]

        toggleButton.addEventListener('click', () => {
            navbarLinks.classList.toggle('active')
        })
        return(
            <div>
                <nav className="navbar">
                    <div className="brand-title">Mi CV</div>
                    <a href="#" className="toggle-button">
                        <span className="bar"> </span>
                        <span className="bar"> </span>
                        <span className="bar"> </span>
                    </a>
                    <div className="navbar-links">
                        <ul>
                            <li><a href="#sobre_mi">Sobre mi</a></li>
                            <li><a href="#tabla">Rutina</a></li>
                            <li><a href="#proyectos">Proyectos</a></li>
                            <li><a href="#redes">Contacto</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Comp1;
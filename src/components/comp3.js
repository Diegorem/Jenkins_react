import React, {Component} from "react";

class Comp3 extends Component{
    render() {
        return(
        <div>
            <h2>Futuro Ingeniero en sistemas</h2>
            <center><iframe width="560" height="315" src="https://www.youtube.com/embed/o1PAa1llOmk"
    title="YouTube video player" frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen/>
            </center>
            <p>Soy un estudiante de 6to semestre de ingeniería
                en sistemas en el Tecnológico de Monterrey, soy una persona muy innovadora y con diversas habilidades
                de mucho valor aplicables para trabajos en equipo, a continuación se mostraran diferentes categorías
                de demostrando los lenguajes de programación que manejo en un nivel y algunas habilidades extras que
                tengo.
            </p>
            <h3>Lenguajes de programación:</h3>
            <ul>
                <li>Python <progress max="100" value="90"> 90% </progress>90%</li>
                <li>C++ <progress max="100" value="80"> 80% </progress>70%</li>
                <li>JavaScript <progress max="100" value="90"> 90% </progress>90%</li>
                <li>Java <progress max="100" value="40">40%</progress>40%</li>
            </ul>

            <h3>Proezas extra:</h3>
            <ul>
                <li>Creación de páginas web en wordpress: <a href="https://datumplane.dev/">https://datumplane.dev/</a>
                </li>
                <li>Manejo básico de servidores Linux con SO Redhat</li>
                <li>Conocimiento básico en bases de Data science y Big data</li>
            </ul>


        </div>
        );
    }
}
export default Comp3;
import React, {Component} from "react";
import port1 from './media/port1.1.png'
import port12 from './media/port1.2.png'
import port13 from "./media/port1.3.png"
import port21 from './media/port2.1.png'
import port22 from './media/port2.2.png'
import port23 from './media/port2.3.png'
import port31 from './media/port3.1.png'
import port32 from './media/port3.2.png'
import port33 from './media/port3.3.png'
import doc from './media/Equipo06_EvidenciaFinal.pdf'


class Comp6 extends Component{
    render() {
        return(
            <div id="proyectos">
                <h3>Algúnos de mis proyectos</h3>

                <h4> <u>Derrape de auto de carreras de F1</u> </h4>
                <h6>04/12/2019</h6>
                <p>
                    En este proyecto  utilizamos varias formulas físicas y con la ayuda de Matlab pudimos simular una
                    pista de carrea de F1 con varias curvas también tomando en cuenta el peralte de la pista y condiciones
                    del ambiente.
                </p>
                <img src={port1} alt="ss1" width={300} height={180}/>
                <img src={port12} alt="ss1" width={300} height={180}/>
                <img src={port13} alt="ss1" width={300} height={180}/>

                <h4> <u>POO en Netflix</u> </h4>
                <h6>25/05/2020</h6>
                <p>
                    En mi clase de Programación orientada a objetos en C++ nos pidieron hacer una replica de una tipo base
                    de datos de las peliculas y series de netflix y por medio de clases y objetos poder realizar
                    búsquedas entre todo el catálogo y de diferentes maneras y con previamente un inicio de sesión validado.
                </p>
                <img src={port21} alt="ss1" width={250} height={180}/>
                <img src={port22} alt="ss1" width={300} height={180}/>
                <img src={port23} alt="ss1" width={300} height={180}/>

                <h4> <u>Conexión de sensores por IoT a bases de datos</u> </h4>
                <h6>07/12/2020</h6>
                <p>
                    Por medio de la aplicación packet tracer hicimos la conexión de varios sensores que iban obteniendo datos en tiempo
                    real donde se recolectaban en un servidor dentro de la aplicación y por medio de un código en Python
                    los mandamos hacia una base de datos en nuestro servidor web en internet por medio de protocolos
                    TCP/IP y HTTP y se podían consultar en una página web diseñada por nosotros.
                    <a href={doc}>DOCUMENTO</a>
                </p>
                <img src={port31} alt="ss1" width={250} height={180}/>
                <img src={port32} alt="ss1" width={300} height={180}/>
                <img src={port33} alt="ss1" width={300} height={180}/>
            </div>
        );
    }
}
export default Comp6;
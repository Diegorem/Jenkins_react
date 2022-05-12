import React, {Component} from "react";
import FotoPerfil from "./media/Profile.jpg"

class Comp2 extends Component{
    render() {
        document.addEventListener('DOMContentLoaded', () => {
            //variable
            const DATE_TARGET = new Date('6/13/2023 0:01 AM');
            //DOM
            const SPAN_DAYS = document.querySelector('span#days');
            const SPAN_HOURS = document.querySelector('span#hours');
            const SPAN_MINUTES = document.querySelector('span#minutes');
            const SPAN_SECONDS = document.querySelector('span#seconds');
            //milisegundos ara los cálculos
            const MILLISECONDS_OF_A_SECOND = 1000;
            const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
            const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
            const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

            function updateCountdown() {
                //cálculos
                const NOW = new Date()
                const DURATION = DATE_TARGET - NOW;
                const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
                const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
                const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
                const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);

                //renderización del DOM
                SPAN_DAYS.textContent = REMAINING_DAYS;
                SPAN_HOURS.textContent = REMAINING_HOURS;
                SPAN_MINUTES.textContent = REMAINING_MINUTES;
                SPAN_SECONDS.textContent = REMAINING_SECONDS;
                return REMAINING_DAYS, REMAINING_HOURS, REMAINING_MINUTES, REMAINING_SECONDS;
            }
            updateCountdown();
            setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);
        });

        return(
            <div className="title_section">
                <h1>
                    Diego Eduardo Rodríguez Guzmán
                </h1>
                <h2>
                    Mi CV
                </h2>
                <img src={FotoPerfil} width={178} height={180}/>
                <div className="reloj">
                    <b>
                        Tiempo restante para graduarme: <span id="days"></span> días / <span id="hours"></span> horas
                        / <span id="minutes"></span> minutos / <span id="seconds"></span> segundos
                    </b>
                </div>
            </div>
        );
    }
}
export default Comp2;
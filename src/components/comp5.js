import React, {Component} from "react";

class Comp5 extends Component{
    render() {
        return(
            <div id="tabla">
                <h3>Tabla de rutina semanal</h3>
                <table>
                    <tr>
                        <th/>
                        <th>Lunes</th>
                        <th>Martes</th>
                        <th>Miercoles</th>
                        <th>Jueves</th>
                        <th>Viernes</th>
                        <th>Sábado</th>
                        <th>Domingo</th>
                    </tr>
                    <tr>
                        <th>9:00 - 13:00</th>
                        <td>Trabajar en TIMWare</td>
                        <td>Trabajar en TIMWare</td>
                        <td>Trabajar en TIMWare</td>
                        <td>Trabajar en TIMWare</td>
                        <td>Trabajar en TIMWare</td>
                        <td>Descansar</td>
                        <td>Descansar</td>
                    </tr>
                    <tr>
                        <th>13:00 - 16:00</th>
                        <td>Comer y hacer ejercicio</td>
                        <td>Comer y hacer ejercicio</td>
                        <td>Comer y hacer ejercicio</td>
                        <td>Comer y hacer ejercicio</td>
                        <td>Comer y hacer ejercicio</td>
                        <td>Hacer tarea</td>
                        <td>Hacer tarea</td>
                    </tr>
                    <tr>
                        <th>16:00 - 22:00</th>
                        <td>Clases</td>
                        <td>Clases</td>
                        <td>Clases</td>
                        <td>Clases</td>
                        <td>Clases</td>
                        <td>Salir a pasear</td>
                        <td>Estudiar</td>
                    </tr>
                    <tr>
                        <th>22:00 - 23:00</th>
                        <td>Tarea</td>
                        <td>Tarea</td>
                        <td>Tarea</td>
                        <td>Tarea</td>
                        <td>Tarea</td>
                        <td>Salir a pasear</td>
                        <td>Dormir</td>
                    </tr>

                </table>

            </div>
        );
    }
}
export default Comp5;
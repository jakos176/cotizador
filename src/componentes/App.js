import React, {Component} from 'react';
import Header from "./Header";
import Formulario from "./Formulario";
import {calcularMarca, obtenerDiferenciaAnio, obtenerPlan} from "../helper";

class App extends Component {

    state = {
        resultado: '',
        datos: {}
    }

    cotizar = (infoAuto) => {
        const {marca, year, plan} = infoAuto;

        //Agregar una base de 2000
        let resultado = 2000;

        //Obtener la diferencia de años y
        const diferencia = obtenerDiferenciaAnio(year);

        //por cada año restar el 3% al valor de seguro
        resultado -= ((diferencia * 3) * resultado) / 100;

        //Americano 15%, Asiatico 5% y europeo 305% del incremento al valor actual
        resultado = calcularMarca(marca) * resultado;

        //el plan del auto, el basico incrementa el valor del 20% y completa del 50%
        let incrementoPlan = obtenerPlan(plan);

        let coste = resultado * incrementoPlan;


        const datosAuto = {
            marca: marca,
            plan: plan,
            year: year
        };

        this.setState({
            resultado: coste,
            datos: datosAuto
        });

    };

    render() {
        return (
            <div className="App">
                <Header titulo="Cotizador de Seguros de auto"/>

                <div className="contenedor-formulario">
                    <Formulario cotizarSeguro={this.cotizar}/>
                </div>
            </div>
        );
    };
}

export default App;

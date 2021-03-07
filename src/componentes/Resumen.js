import React, {Component} from 'react';
import {primeraMayuscula} from "../helper";

class Resumen extends Component {
    mostrarResumen = () => {
        const {marca, year, plan} = this.props.datos;

        if (!marca || !year || !plan) {
            return null;
        }

        return (
            <div className='resumen'>
                <h2>Resumen de cotizacion</h2>
                <li>Marca: {primeraMayuscula(marca)}</li>
                <li>Plan: {primeraMayuscula(plan)}</li>
                <li>Año del auto:{primeraMayuscula(year)} </li>
            </div>

        );
    };

    render() {
        return (this.mostrarResumen());
    }

}

export default Resumen;
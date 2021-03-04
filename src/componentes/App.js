import React from 'react';
import Header from "./Header";
import Formulario from "./Formulario";

const App = () => {
    return (
        <div className="App">
            <Header titulo="Cotizador de Seguros de auto"/>

            <div className="contenedor-formulario">
                <Formulario/>
            </div>
        </div>
    );
}

export default App;

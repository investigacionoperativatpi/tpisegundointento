import  React from 'react';

import Parametros from '../components/Parametros'
import Datos from '../components/Datos'
class Inicio extends React.Component{
    render(){
        return (
            <div>
                <h1>Hola estas en inicio</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-3 borde">
                            <Parametros/>
                        </div>
                        <div className="col-9 borde">
                            <Datos/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Inicio;

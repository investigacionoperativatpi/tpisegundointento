import React from 'react';

import './Datos.css';
import FuncionObjetivo from './FuncionObjetivo';
import Restricciones from './Restricciones';

class Datos extends React.Component{
    render(){
        return (
            <div className="card Card-Datos">
                <div className="card-body">
                    <h5 className="card-title">Datos</h5>
                    <div className="container borde">
                        <div className="row">
                            <div className="col-12">
                                <FuncionObjetivo/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <Restricciones />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Datos;
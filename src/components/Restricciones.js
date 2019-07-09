import React from 'react';

import './Restricciones.css';
import Input from './Input';

class Restricciones extends React.Component{
    render(){
        return (
            <div className="card Card-Restricciones">
                <div className="card-header">
                    Restricciones
                </div>
                <div className="card-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-2 borde">
                                <Input/>
                            </div>
                            <div className="col-1 borde">
                                <h3>+</h3>
                            </div>
                            <div className="col-2 borde">
                                <Input/>
                            </div>
                            <div className="col-1 borde">
                                <h3>=</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Restricciones;
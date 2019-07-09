import React from 'react';

import './Parametros.css';

class Parametros extends React.Component{
    render(){
        return (
            <div className="card Card-Parametros">
                <div className="card-body">
                <h5 className="card-title">Parametros</h5>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="input-group mb-3">
                            <div className="input-group-prepend ">
                                <span className="input-group-text Variables" id="basic-addon3"><p>Variables:</p> </span>
                            </div>
                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text Restricciones" id="basic-addon3"><p>Restricciones:</p> </span>
                            </div>
                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="./App" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    }
}

export default Parametros;
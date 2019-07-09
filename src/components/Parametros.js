import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { setVar, setRestrictions } from '../store/actions'

import './Parametros.css';

class Parametros extends React.Component{
    guardarVarRestrictions = () => {
        console.log('paso por el metodo de guaradr')
        const cantVar = document.getElementById('variables').value
        const cantRestricciones = document.getElementById('restricciones').value
        this.props.setVar(cantVar)
        this.props.setRestrictions(cantRestricciones)
    }

    mostrar = () => {
        console.log('variables: ', this.props.var , 'restricciones: ', this.props.restricciones)
    }

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
                                        <input type="text" className="form-control" id="variables" aria-describedby="basic-addon3"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text Restricciones" id="basic-addon3"><p>Restricciones:</p> </span>
                                    </div>
                                        <input type="text" className="form-control" id="restricciones" aria-describedby="basic-addon3"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={this.guardarVarRestrictions}>Guardar</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      var: state.var,
      restricciones: state.restricciones
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    setVar,
    setRestrictions
},dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Parametros);
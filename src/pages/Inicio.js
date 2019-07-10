import  React from 'react';

import Parametros from '../components/Parametros'
import Solucion from '../components/Solucion'
import Datos from '../components/Datos'
import './inicio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare, faCheckCircle, faStream } from '@fortawesome/free-solid-svg-icons'
import Matriz from '../components/Matriz';
import { connect } from 'react-redux';


class Inicio extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            show: 1
        }
    }
    render(){
        console.log(this.funcionObj)
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav row">
                        <button class={`button-navbar col-4 ${this.state.show === 1 && 'selected'}`} onClick={() => {this.setState({show:1})}}><FontAwesomeIcon icon={faPenSquare} />      Cargar datos<span class="sr-only">(current)</span></button>
                        <button class={`button-navbar col-4 ${this.state.show === 2 && 'selected'}`} onClick={() => {this.setState({show:2})}}><FontAwesomeIcon icon={faCheckCircle} />      Solucion</button>
                        <button class={`button-navbar col-4 ${this.state.show === 3 && 'selected'}`} onClick={() => {this.setState({show:3})}}><FontAwesomeIcon icon={faStream} />      Interpretacion</button>
                        </div>
                    </div>
                    </nav>
                    {this.state.show === 1 &&
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
                    }
                    {this.state.show === 2 &&
                        <div className="container">
                            <div class="card-columns">
                                <div class="card border-secondary mb-3">
                                    <div class="card-header">Problema</div>
                                    <div class="card-body text-secondary">
                                        <p>
                                        {this.funcionObj}
                                        </p>
                                        <p>
                                        {this.restricciones}
                                        </p>
                                    </div>
                                </div>
                                <div class="card text-white bg-secondary mb-3" >
                                    <div class="card-header">Tabla Optima</div>
                                    <div class="card-body">
                                        <Matriz/>
                                    </div>
                                </div>
                                <div class="card text-white bg-info mb-3" >
                                    <div class="card-header">Solución</div>
                                    <div class="card-body">
                                        <Solucion />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        funcionObj:state.FuncionObj,
        restricciones:state.ArrRestricciones,
    }
}
export default connect(mapStateToProps,null)(Inicio);
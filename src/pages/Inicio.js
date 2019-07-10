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
        this.strProblema = [];
        
    }
    render(){
        
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav row">
                        <button class={`button-navbar col-4 ${this.state.show === 1 && 'selected'}`} onClick={() => {this.setState({show:1})}}><FontAwesomeIcon icon={faPenSquare} />      Cargar datos<span class="sr-only">(current)</span></button>
                        <button class={`button-navbar col-4 ${this.state.show === 2 && 'selected'}`} onClick={() => {this.setState({show:2})}}><FontAwesomeIcon icon={faCheckCircle} />      Solucion</button>
                        <button class={`button-navbar col-4 ${this.state.show === 3 && 'selected'}`} onClick={() => {this.setState({show:3})}} ><FontAwesomeIcon icon={faStream} />  <a href="https://drive.google.com/file/d/1QginC1IjdMj_h4qT810oKtv_3X_RVXf6/view">Ayuda</a>    </button>
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
                            
                            <div class="row mt-5"> 
                                <div class="col-sm-1"></div>
                                <div class="card border-secondary col-sm-4">
                                    <div class="card-header">Problema</div>
                                    <div class="card-body text-secondary">
                                        {this.mostrarProblema()}
                                        
                                    </div>
                                </div>
                                <div class="col-sm-1"></div>
                                <div class="card text-white bg-secondary col-sm-5" >
                                    <div class="card-header">Tabla Optima</div>
                                    <div class="card-body">
                                        <Matriz/>
                                    </div>
                                </div>
                                <div class="col-sm-1"></div>
                                
                            </div>
                            <div class="row mt-5">
                                <div class="col-sm-3"></div>
                                <div class="card text-white bg-info mb-3 col-sm-6" >
                                    <div class="card-header">Solución</div>
                                    <div class="card-body">
                                        <Solucion />
                                    </div>
                                </div>
                                <div class="col-sm-3"></div>

                            </div>
                                
                                
                                

                            
                            
                        </div>
                    }
            </div>
        )
    }
    mostrarProblema(){
        var strFuncion = 'Z = ';
        var strRestriccion = '';
        var coeficientes = Object.values(this.props.funcionObj.objetivo);
        var opt = this.props.funcionObj.tipoOptimizacion;

        for (let index = 0; index < coeficientes.length; index++) {
            strFuncion = strFuncion + coeficientes[index] + 'X' + (index+1) + ' ';
            if (index!== coeficientes.length-1){
                strFuncion = strFuncion + '+ ';
            }

        }
        this.strProblema.push(
            <p>
                <strong>
                Funcion Objetivo:
                </strong>
            </p>
        );
        this.strProblema.push(
            <p>
                {strFuncion}
            </p>
        );
        this.strProblema.push(
            <p>
                <strong>
                Sujeto a:
                </strong>
            </p>
        )

        console.log(this.props.restricciones.restricciones);
        var restricciones = this.props.restricciones.restricciones;
        for (let i = 0; i < restricciones.length; i++) {
            var namedVector = Object.values(restricciones[i].namedVector);
            strRestriccion = '';
            strRestriccion = 'R' + i + ': '
            var x = 1;
            namedVector.forEach(coef => {
                strRestriccion = strRestriccion + coef + 'X' + x + ' + ';
                x = x + 1;
            });
            strRestriccion = strRestriccion + ' ' +restricciones[i].constraint + ' ' + restricciones[i].constant;
            this.strProblema.push(
                <p>
                    {strRestriccion}
                </p>
            );
        }
        
        return  this.strProblema

    }
}
const mapStateToProps = (state) => {
    return {
        funcionObj:state.FuncionObj,
        restricciones:state.ArrRestricciones,
    }
}
export default connect(mapStateToProps)(Inicio);
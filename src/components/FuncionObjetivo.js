import React from 'react';

import './FuncionObjetivo.css';
import Input from '../components/Input'
import Optimizacion from './Optimizacion';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setObjFunction } from '../store/actions'
import { PropTypes } from 'prop-types';
import { async } from 'q';


class FuncionObjetivo extends React.Component{
    constructor() {
        super()
        this.state = {
            elementos: ['holis'],
            value:0,   
        }
        this.armarArreglo = this.armarArreglo.bind(this)
    }

    createObjFunc() {
        let arr0 = []
        for (let index = 0; index < this.props.var; index++) {
            arr0.push(
                <div className="col-2 borde">
                    <Input name="prueba" key={index} id={index}/>
                </div>
            ) 
        }
        return arr0
    }

    armarArreglo() {
        let elementosInput = []
        for (let index = 0; index < this.props.var; index++) {
            elementosInput.push(
                parseInt(document.getElementById(`${index}`).value)   
            )
        }
        let obj = '{'
        elementosInput.map((elemento, index) => {
            if (index < this.props.var -1) {
                if (index === 1)
                {
                    obj = obj.concat(`"${index}": ${elemento},`)    
                }else{
                    obj = obj.concat(` "${index}": ${elemento},`)
                }
            }else {
                obj = obj.concat(` "${index}": ${elemento}}`)
            }
        })
        return JSON.parse(obj)
    }

    click = async () => {
        const funObj = this.armarArreglo();
        const tipo = document.getElementById('tipoSimplex').value
        const objetivo = {}
        objetivo.obj=funObj
        objetivo.tipoOptimizacion=tipo
        console.log('COSA: ', objetivo)
        this.props.setObjFunction(objetivo);
    }


    handlerChargeValue=(event)=>{
        this.setState({
            value:Number.parseInt(document.getElementById(`${this.key}`).value, 16)
        })
    }

    render(){
        return (
            <div className="card Card-FuncionObjetivo">
                <div className="card-header">
                    Funcion Objetivo
                </div>
                <div className="card-body">
                    <div className="container">
                        <div className="row">
                            {this.createObjFunc()}
                            <div className="col-2">
                                <Optimizacion/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10"></div>
                            <div className="col-2"><button className="btn btn-primary" onClick={this.click}>Continuar</button></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

FuncionObjetivo.propTypes = {
    var: PropTypes.number.isRequired,
    objetivo: PropTypes.array.isRequired,
    setObjFunction: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
      var: state.var,
      objetivo: state.FuncionObj.objetivo
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    setObjFunction
},dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FuncionObjetivo);
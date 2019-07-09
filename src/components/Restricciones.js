import React from 'react';
import { connect } from 'react-redux';
import './Restricciones.css';
import Input from './Input';
import { setRestrictionsValues, saveResult } from '../store/actions';
import { bindActionCreators } from 'redux';
import SimpleSimplex from 'simple-simplex'

class Restricciones extends React.Component{
   
    constructor() {
        super()
        this.state = {
          arr: [],
        }
        this.armarArreglo = this.armarArreglo.bind(this)
    }

    montarRestricciones() {
        let arr1 = []
        for (let index = 0; index < this.props.restricciones; index++) {
                let arr0 = []
                for (let indexj = 0; indexj < (this.props.var); indexj++) {
                    arr0.push(
                        // <div className="col-2 borde">
                        //     <Input/>
                        // </div>
                        <div className="col-3 borde">
                            <div className="row">
                                <div className="col-8 borde">
                                    <Input key={`${index}${indexj}`} id={`${index}${indexj}`}/>
                                </div>
                                
                                <div className="col-1 borde">
                                    <h3>+</h3>
                                </div>         
                            </div> 
                        </div>
                    ) 
                }
                arr0.push(
                    <div className="col-3 borde">
                        <div className="row">
                            <div className="col-4">
                                <select id={`S${index}`}>
                                    <option value='=>'>{`=>`}</option>   
                                    <option value='<='>{`<=`}</option>
                                </select>
                            </div>
                            <div className="col-8 borde">
                                <Input key={index} id={`V${index}`}/>
                            </div>
                        </div>
                    </div>            
                )
            arr1.push(
                <div className="col-12">
                    
                    <div className='col-md-1 col-xs-6'>{`R${index}: `}</div>
                    <div className='row'>{arr0}</div>
                    
                    
                </div>
                )
        }
        return arr1
    }    

    armarArreglo(){
        let elementosInputRestricciones = []
        for (let index = 0; index < this.props.restricciones; index++) {
            let elementosInput = []
            for (let indexj = 0; indexj < (this.props.var); indexj++) {
            elementosInput.push(
                parseInt(document.getElementById(`${index}${indexj}`).value)
            )
            }
            elementosInput.push(
                document.getElementById(`S${index}`).value
            )
            elementosInput.push(
                parseInt(document.getElementById(`V${index}`).value)   
            )
            let restriccion = '{'
            elementosInput.map((elemento, index) => {
            if (index < this.props.var -1) {
                if (index === 1)
                {
                    restriccion = restriccion.concat(`"${index}": ${elemento},`)    
                }else{
                    restriccion = restriccion.concat(` "${index}": ${elemento},`)
                }
            }
            if (index === this.props.var -1) {
                restriccion = restriccion.concat(` "${index}": ${elemento}}`)
            }
            })
            let RESTRICCIONES = {}
            let nameV = JSON.parse(restriccion)
            RESTRICCIONES.namedVector=nameV
            RESTRICCIONES.constraint=elementosInput[this.props.var]
            console.log(Object.keys(RESTRICCIONES.namedVector))
            RESTRICCIONES.constant=elementosInput[parseInt(this.props.var) +1]
            elementosInputRestricciones.push(RESTRICCIONES)
        }
        return elementosInputRestricciones
    }

    click = async() => {
      let restric = this.armarArreglo()
      await this.props.setRestrictionsValues(restric)
      const solver = new SimpleSimplex({
        objective: this.props.objetivo,
        constraints: this.props.restrictionsValues,
        optimizationType: this.props.optimizationType
      })
      const result = solver.solve({
          methodName: 'simplex',
      });
      console.log(result)
      this.props.saveResult(result)
    }

    click2 = async()=>{
      console.log('este es el state', this.props.state)
    }

    render(){
        return (
            <div className="card Card-Restricciones">
                <div className="card-header">
                    Restricciones
                </div>
                <div className="card-body">
                    <div className="container">
                        {this.montarRestricciones()}
                    </div>
                    <div className="row">
                        <div className="col-10"></div>
                        <div className="col-2"><button className="btn btn-primary" onClick={this.click}>Continuar</button></div>
                        <div className="col-2"><button className="btn btn-primary" onClick={this.click2}>Ver Resultados</button></div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        var: state.var,
        restricciones: state.restricciones,
        objetivo: state.FuncionObj.objetivo,
        restrictionsValues: state.ArrRestricciones.restricciones,
        optimizationType: state.FuncionObj.tipoOptimizacion,
        state: state
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    setRestrictionsValues,
    saveResult
},dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Restricciones)
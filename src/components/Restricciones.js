import React from 'react';
import { connect } from 'react-redux';

import './Restricciones.css';
import Input from './Input';

class Restricciones extends React.Component{
   
    constructor() {
        super()
        this.state = {
          arr: [],
        }
    }

    componentWillMount() {
        let arr1 = []
        for (let index = 0; index < this.props.restricciones; index++) {
                let arr0 = []
                for (let index = 0; index < (this.props.var); index++) {
                    arr0.push(
                        // <div className="col-2 borde">
                        //     <Input/>
                        // </div>
                        <div className="col-3 borde">
                            <div className="row">
                                <div className="col-8 borde">
                                    <Input/>
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
                                <select>
                                    <option value="0">{`=>`}</option>   
                                    <option value="1">{`<=`}</option>
                                </select>
                            </div>
                            <div className="col-8 borde">
                                <Input/>
                            </div>
                        </div>
                    </div>            
                )
                console.log(arr0)
            arr1.push(
                <div className="col-12">
                    
                    <div className='col-md-1 col-xs-6'>{`R${index}: `}</div>
                    <div className='row'>{arr0}</div>
                    
                    
                </div>
                )
        }
        //console.log(arr1)
        this.setState({ arr: arr1})
    }    

    render(){
        return (
            <div className="card Card-Restricciones">
                <div className="card-header">
                    Restricciones
                </div>
                <div className="card-body">
                    <div className="container">
                        {this.state.arr}
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
      objectivo: state.FuncionObj.objectivo,
      restrictionsValues: state.ArrRestricciones.restricciones,
      optimizationType: state.FuncionObj.tipoOptimizacion,
    }
}

export default connect(
    mapStateToProps,
    // mapDispatchToProps
  )(Restricciones)
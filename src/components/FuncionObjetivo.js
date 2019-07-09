import React from 'react';

import './FuncionObjetivo.css';
import Input from '../components/Input'
import Optimizacion from './Optimizacion';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setObjFunction } from '../store/actions'
import { PropTypes } from 'prop-types';


class FuncionObjetivo extends React.Component{
    constructor() {
        super()
        this.state = {
            arr: [],
            value:0,
            
        }
    }

    componentWillMount() {
        let arr0 = [],
        refsCollection = {}
        for (let index = 0; index < this.props.var; index++) {
            arr0.push(
                <div className="col-2 borde">
                    <Input name="prueba" key={index} id={index} value={this.state.value} ref={`coeficiente-${index}`}/>
                </div>
            ) 
        }
        console.log(arr0)
        this.setState({ arr: arr0})
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
                            {this.state.arr}
                            <div className="col-2">
                                <Optimizacion/>
                            </div>
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
      objectivo: state.FuncionObj.objetivo
    }
}

// const mapDispatchToProps = dispatch => bindActionCreators({
//     setObjFunction
// },dispatch)

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(FuncionObjetivo);
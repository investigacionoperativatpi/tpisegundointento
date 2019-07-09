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
            
        }
    }

    componentWillMount() {
        let arrO = []
        for (let index = 0; index < this.props.var; index++) {
            arrO.push(
                <div className="col-2 borde">
                    <Input />
                </div>
            ) 
        }
        this.setState({ arr: arrO})
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
    restricciones: PropTypes.number.isRequired,
    objetivo: PropTypes.array.isRequired,
    setObjFunction: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
      var: state.var,
      restricciones: state.restricciones,
      objectivo: state.FuncionObj.objectivo
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    setObjFunction
},dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FuncionObjetivo);
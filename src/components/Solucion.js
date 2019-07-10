import React from 'react';
import { connect } from 'react-redux';

class Solucion extends React.Component{
    constructor(props) {
        super(props)
        this.solucion = []
    }
    componentWillMount() {
        this.solucion = []
        for (let index = 0; index < (parseInt(this.props.var) +1) ; index++) {
            if(index === 0) {
                this.solucion.push(
                    <tr>
                        <th scope="row">Optimo</th>
                        <td>Z</td>
                        <td>{ Math.round(this.props.resultado.solution.optimum*100)/100}</td>
                    </tr>
                )
            }
            if(index > 0 && index < this.props.var +1) {
                this.solucion.push(
                    <tr>
                        <th scope="row">Producir</th>
                        <td>{`X${index}`}</td>
                        <td>{Math.round(this.props.resultado.solution.coefficients[index-1]*100)/100}</td>
                    </tr>
                )
            }
            
        }
        this.costoOportunidad()
        this.valorMarginal()
    }

    costoOportunidad() {
        const length = this.props.resultado.details.finalTableau.length 
        const resultadosTabla = this.props.resultado.details.finalTableau[length -1]
        for (let index = 0; index < this.props.var ; index++) {
            this.solucion.push(
                <tr>
                    <th scope="row">costo de oportunidad</th>
                    <td>{`X${index +1}`}</td>
                    <td>{Math.round(resultadosTabla[index]*100)/100}</td>
                </tr>
            )
            
        }
    }

    valorMarginal() {
        const length = this.props.resultado.details.finalTableau.length 
        const resultadosTabla = this.props.resultado.details.finalTableau[length -1]
        const variable = parseInt(this.props.var)
        for (let index = 0; index < this.props.restricciones ; index++) {
            this.solucion.push(
                <tr>
                    <th scope="row">Valor Marginal</th>
                    <td>{`S${index +1}`}</td>
                    <td>{Math.round(resultadosTabla[index + variable]*100)/100}</td>
                </tr>
            )
            
        }
    }
    render() {
        return (
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col">Elemento</th>
                    <th scope="col">Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {this.solucion}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        var: state.var,
        restricciones: state.restricciones,
        resultado: state.resultado
    }
}

export default connect(
    mapStateToProps,
    null
  )(Solucion)
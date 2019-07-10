import React from 'react';
import { connect } from 'react-redux';


class Matriz extends React.Component{
    constructor(props){
        super(props)
        this.armarMatriz = this.armarMatriz.bind(this);
        this.matriz=[];
        this.head=[];
        this.armarMatriz();
    }
    armarMatriz(){
        let length = this.props.resultado.details.finalTableau.length
        let table = this.props.resultado.details.finalTableau
                
        for(let index = 0; index<this.props.resultado.details.finalTableau[0].length-2; index++){
            this.head.push(
                <th>X<sub>{index+1}</sub></th>
            )
        }
        this.head.push(<th>Z</th>);
        this.head.push(<th>B</th>);
        
        for(let i = 0; i<this.props.resultado.details.finalTableau.length; i++){
            let row=[];
            let celdas=[];
            
            for(let j=0; j<this.props.resultado.details.finalTableau[i].length; j++){
                celdas.push(
                    <td>
                        {Math.round(this.props.resultado.details.finalTableau[i][j]*100)/100}
                    </td>
                )
            }
            row.push(
                <tr>
                    {celdas}
                </tr>);

            this.matriz.push(row);
        }
        console.log(this.matriz)
        return this.matriz
        // console.log(this.props.resultado)
    }
    render(){ 
        return (
            <div>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            {this.head}
                        </tr>
                    </thead>
                    <tbody>
                        {this.matriz}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        resultado: state.resultado
    }
}

export default connect(
    mapStateToProps,
    null
) (Matriz);
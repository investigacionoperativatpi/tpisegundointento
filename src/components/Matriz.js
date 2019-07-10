import React from 'react';
import { connect } from 'react-redux';


class Matriz extends React.Component{
    constructor(props){
        super(props)
        this.armarMatriz = this.armarMatriz.bind(this)
    }
    armarMatriz(){
        let datos = this.props.resultado.details.finalTableau
        let nuevoArray = []
        for(let indexi = 0; indexi<this.props.resultado.details.finalTableau.length; indexi++){
            let elementos = `${datos[indexi]}Elemento`
            
            nuevoArray.push(elementos)
             
            
            // arrayMatriz.map((elemento, index)=>{
            //     nuevoArray.push(elemento,"id",index)
            // })
            // console.log(
            //     datos[indexi]
            // )
        }
        return nuevoArray
        // console.log(this.props.resultado)
    }
    render(){ 
        return (
            <div>
                {this.armarMatriz()}
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
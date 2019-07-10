import  React from 'react';

import Parametros from '../components/Parametros'
import Solucion from '../components/Solucion'
import Datos from '../components/Datos'
import './inicio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare, faCheckCircle, faStream } from '@fortawesome/free-solid-svg-icons'
import Matriz from '../components/Matriz';

class Inicio extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            show: 1
        }
    }
    render(){
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
                            <div className="row">
                                <div className="col-2"/>
                                <div className="col-8">
                                    <Solucion/>
                                </div>
                                <div className="col-2"/>
                            </div>
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-8">
                                    <Matriz/>
                                </div>
                                <div className="col-2"></div>
                            </div>
                        </div>
                    }
            </div>
        )
    }
}

export default Inicio;
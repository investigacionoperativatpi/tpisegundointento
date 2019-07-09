import React from 'react';

import './Optimizacion.css';

class Optimizacion extends React.Component{
    render(){
        return (
            <div>
                <select defaultValue="max" name="select" id="tipoSimplex" className="btn custom-select">
                    <option value="max">MAX</option> 
                    <option value="min">MIN</option>
                </select>
            </div>
        )
    }
}

export default Optimizacion;
import React from 'react';

import './Optimizacion.css';

class Optimizacion extends React.Component{
    render(){
        return (
            <div>
                <select name="select" className="btn custom-select">
                    <option value="max" selected>MAX</option> 
                    <option value="min">MIN</option>
                </select>
            </div>
        )
    }
}

export default Optimizacion;
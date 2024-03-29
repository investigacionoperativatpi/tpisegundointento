import React from 'react';

import './Input.css';

class Input extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="input-group mb-3">
                <input id={this.props.id} type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">x<sub>1</sub></span>
                </div>
            </div>
        )
    }
}

export default Input;
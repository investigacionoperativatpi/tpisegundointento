import React from 'react';

import './Input.css';

class Input extends React.Component{
    render(){
        return (
            <div class="input-group mb-3">
                <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">x<sub>1</sub></span>
                </div>
            </div>
        )
    }
}

export default Input;
import React from 'react';
import './InputOptions.css';

function InputOptions({Icon, title, color}) {
    return (
        <div className='inputoption'>
            <Icon style={{color:color}} ></Icon>
           <h4>{title}</h4> 
        </div>
    )
}

export default InputOptions

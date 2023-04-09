import React from 'react';
import './Button.css'
export const Button = (props) => {
    return (
        <div>
            <button className="buttons"
                    onClick={props.onClick}>
                {props.title}
            </button>

        </div>
    );
};


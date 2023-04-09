import React from "react";
import'./FormInput.css'
export const FormInput =({label,type,placeholder})=>{
    return(
        <div>
            <label >{label}

            <input className="inputs" type={type}placeholder={placeholder||''}/>
            </label>
        </div>
    )
}


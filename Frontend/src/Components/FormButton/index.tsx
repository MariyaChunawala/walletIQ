import React from "react";
import './index.scss'

function FormButton(props: any) {
    const {type, name} = props
    return (
        <div className="button-container">
            <button type={type} className="button-label">
                {name} 
            </button>
        </div>
    )
}
export default FormButton;
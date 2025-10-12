import React from "react";
import './index.scss'

function FormButton(props: any) {
    const {type, name, classes} = props
    return (
        <div className={`button-container ${classes}`}>
            <button type={type} className="button-label">
                {name} 
            </button>
        </div>
    )
}
export default FormButton;
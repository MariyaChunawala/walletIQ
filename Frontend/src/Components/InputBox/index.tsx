import React, { useRef, useState } from "react";
import './index.scss';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import _ from "lodash";

function InputBox(props: any) {
    const {
        type, 
        value, 
        name, 
        placeholder, 
        onChangeHandler = () => {}, 
        label, 
        validateInputField = () => [true, ''],
    } = props;

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('')

    const togglePassword = () => setShowPassword(!showPassword);

    const validateInput = () => {
        const [valid, errorMsg] = validateInputField();
        if(!valid){
            setError(errorMsg);
        }else {
            setError('')
        }
    }

    return (
        <div className="input-container">
            <label htmlFor={name} className="input-label"> {label} </label>
            <div className={`input-box ${error ? 'error' : ''}`}>
                <input
                    type={type === 'password' ? 
                            showPassword ? 'text' : 'password' 
                            : 'text'
                    }
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                    onBlur={(e) => {
                        if(!_.isEmpty(e.target.value)){
                            validateInput();
                        }else {
                            setError('')
                        }
                    }}
                    className="w-full p-2"
                />

                {type === 'password' && 
                    <div className="password-icon-box">
                        {showPassword ? 
                            <FaEyeSlash onClick={togglePassword} className="password-icon" /> 
                                : <FaEye onClick={togglePassword} className="password-icon" /> }            
                    </div>
                }
            </div>
            {error && <div className="text-xs text-red-500">{error}</div>}
        </div>
    )
}

export default InputBox;
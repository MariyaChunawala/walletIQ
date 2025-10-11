import React, { useState } from "react";
import './index.scss';
import { FaEye, FaEyeSlash } from "react-icons/fa";

function InputBox(props: any) {
    const {type, value, name, placeholder, onChangeHandler, label} = props;
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => setShowPassword(!showPassword);

    return (
        <div className="input-container">
            <label htmlFor={name} className="input-label"> {label} </label>
            <div className='input-box'>
                <input
                    type={type === 'password' ? 
                            showPassword ? 'text' : 'password' 
                            : 'text'
                    }
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
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
        </div>
    )
}

export default InputBox;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../Layouts/Auth";
import InputBox from "../../Components/InputBox";
import FormButton from "../../Components/FormButton";
import { validateEmail, validatePassword } from "../../Utils/utils";
import _ from "lodash";

function Login() {
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const handleLogin = async (e:any) => {
        e.preventDefault();

        // validate Email Address
        const [validEmailId] = validateEmail(emailId); 
        if(!validEmailId || _.isEmpty(password)){
            setError('*Please enter valid login details');
            return;
        }else {
            setError('');
        }
        //Login API Call
    }

    return (
        <AuthLayout>
            <div className="lg:w-full flex flex-col items-center">
                <div className="h-[3/4] flex flex-col justify-center items-center">
                    <div className="text-3xl semi-bold mt-12">Welcome Back</div>
                    <div className="text-sm text-slate-400 mt-2 mb-7">Please enter your details to Login.</div>
                </div>
                <div className="w-[60%] bg-black p-10 rounded-2xl">
                    <form onSubmit={handleLogin}>
                        <div>
                            <InputBox 
                                type='text'
                                value={emailId} 
                                name='user-emailid'
                                placeholder='user@example.com' 
                                onChangeHandler={(e:any) => setEmailId(e.target.value)} 
                                validateInputField={() => {
                                    return validateEmail(emailId)
                                }}
                                label='Email Address'
                            />
                            <InputBox
                                type="password"
                                value={password}
                                name='user-password'
                                placeholder='Min. 8 Characters'
                                onChangeHandler={(e:any) => setPassword(e.target.value)}
                                label='Password'
                            />
                        </div>
                        {error && <div className="text-red-500 text-xs">{error}</div>}
                        <FormButton type='submit' name='Login' classes='mt-8'/>
                        <div className="mt-3 text-center">
                            Don't have an account?{' '}
                            <Link to='/signup' className="underline text-teal-100">Signup</Link>
                        </div>
                    </form>
                </div>
            </div>
        </AuthLayout>
    )
}

export default Login;
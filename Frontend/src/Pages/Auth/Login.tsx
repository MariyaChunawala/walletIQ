import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../Layouts/Auth";
import InputBox from "../../Components/InputBox";
import FormButton from "../../Components/FormButton";

function Login() {
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e:any) => {
        e.preventDefault();
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
                        <div className="mb-8">
                            <InputBox 
                                type='text'
                                value={emailId} 
                                name='user-emailid'
                                placeholder='john@example.com' 
                                onChangeHandler={(e:any) => setEmailId(e.target.value)} 
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
                        <FormButton type='submit' name='Login'/>
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
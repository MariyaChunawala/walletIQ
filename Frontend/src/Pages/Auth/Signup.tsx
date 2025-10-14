import React, { useState } from "react";
import AuthLayout from "../../Layouts/Auth";
import InputBox from "../../Components/InputBox";
import { validateEmail, validatePassword, validateUsername } from "../../Utils/utils";
import FormButton from "../../Components/FormButton";
import { Link } from "react-router-dom";
import ProfilePhotoSelector from "../../Components/ProfilePhotoSelector";

function Signup() {
    const [fullName, setFullName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [image, setImage] = useState('');

    const handleSignup = async (e:any) => {
        e.preventDefault();

        // validate Email Address and password
        const [validEmailId] = validateEmail(emailId);
        const [validPassword] = validatePassword(password); 

        // validate username
        const [validateFullname] = validateUsername(fullName);

        if(!validEmailId || !validPassword || !validateFullname){
            setError('*Please enter valid signup details');
            return;
        }else {
            setError('');
        }

        // Signup API Call
    }
    return(
        <AuthLayout>
            <div className="lg:w-full flex flex-col items-center">
                <div className="h-[3/4] flex flex-col justify-center items-center">
                    <div className="text-2xl semi-bold mt-4">Create an Account</div>
                    <div className="text-sm text-slate-400 mt-2 mb-7">Join us today by entering your details below.</div>
                </div>
                <div className="w-[60%] bg-black p-10 rounded-2xl">
                    <form onSubmit={handleSignup}>
                        <div>
                            <ProfilePhotoSelector image={image} setImage={setImage}/>

                            <InputBox 
                                type='text'
                                value={fullName} 
                                name='full-name'
                                placeholder='Alice' 
                                onChangeHandler={(e:any) => setFullName(e.target.value)} 
                                alidateInputField={() => {
                                    return validateUsername(fullName)
                                }}
                                classes="w-[100%]"
                                label='Full Name'
                            />
                            <InputBox 
                                type='text'
                                value={emailId} 
                                name='user-emailid'
                                placeholder='alice@example.com' 
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
                                validateInputField={() => {
                                    return validatePassword(password)
                                }}
                                label='Password'
                            />
                        </div>
                        {error && <div className="text-red-500 text-xs">{error}</div>}
                        <FormButton type='submit' name='Signup' classes='mt-8'/>
                        <div className="mt-3 text-center">
                            Already have an account?{' '}
                            <Link to='/login' className="underline text-teal-100">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </AuthLayout>
    )
}
export default Signup;
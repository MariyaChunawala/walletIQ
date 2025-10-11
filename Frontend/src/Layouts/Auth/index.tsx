import React from "react";
import authLayout from  '../../Assets/Images/authLayout.png';
import StatsInfoCard from "../../Components/Login/StatsInfoCard";
import statsInfo from "../../Interface/StatsInfoCard";

function AuthLayout(props:any) {
    return (
        <div className="flex">
            <div className="w-screen h-screen p-10">
                <div className="text-[100px] font-extrabold tracking-tight 
                    bg-gradient-to-r from-teal-300 via-teal-500 to-teal-700 
                    text-transparent bg-clip-text italic text-center">
                    <img />
                    <span>WALLET IQ</span>
                </div>
                <div>
                    {props.children}
                </div>
            </div>
            <div className="hidden md:block overflow-hidden h-screen w-[50vw] bg-no-repeat relative">
                <div className="w-48 h-48 bg-teal-600 rounded-[40px] absolute -top-10 left-4 animate-floatY " />
                <div className="w-55 h-64 border-[25px] rounded-[40px] border-teal-400 absolute top-[35%] -right-20 animate-floatX" />
                <div className="w-48 h-48 bg-teal-700 rounded-[40px] absolute -bottom-20 animate-floatDiagonal" />

                <div className="absolute w-[90%]">
                    { statsInfo.map(({label, icon, value, color}) => (
                        <StatsInfoCard 
                            key={label}
                            label={label}
                            icon={icon}
                            value={value}
                            color={color}
                        />
                    ))}
                </div>
                <img 
                    src={authLayout} 
                    className="w-64 h-[40%] lg:w-[90%] absolute rounded-[20px] bottom-10 right-5 shadow-login-card-shadow"
                />
            </div>
        </div>
    )
}

export default AuthLayout;
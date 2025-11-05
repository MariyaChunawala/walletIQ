import React, { useEffect, useState } from "react";
import { navbarList } from "../../Utils/data";
import { LuUser } from "react-icons/lu";
import _ from "lodash";
import { useNavigate, useLocation } from "react-router-dom";

function NavigationBar(props:any){
    const navigate = useNavigate();
    const location = useLocation();

    const [activeMenu, setActiveMenu] = useState('dashboard');

    useEffect(() => {
        const current = navbarList.find((item) => item.path === location.pathname);
        if (current) setActiveMenu(current.key);
    }, [location.pathname]);

    return <>
        <div className="bg-black h-16 flex justify-between items-center w-[85%] m-auto mt-5 rounded-full">
            <div className="text-3xl font-extrabold tracking-tight  
                    bg-gradient-to-r from-teal-300 via-teal-500 to-teal-600 
                    text-transparent bg-clip-text italic text-center pl-10">
                Wallet IQ
            </div>
            <div className="flex gap-8">
                {navbarList.map((list) => (
                    <div className={`w-full h-10 flex justify-center items-center gap-2 p-5
                            text-lg italic cursor-pointer ${activeMenu === list.key ? 'border-2 border-teal-500 rounded-full' : 'border-transparent'}`} 
                        onClick={()=>{
                            navigate(list.path);
                        }}
                    >
                        <div className="text-xl">
                                <list.icon/>
                        </div>
                        <span>{list.title}</span>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center gap-3 pr-10">
                <div className="text-lg text-center italic">Jane Jose</div>
                <div className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center relative">
                    <LuUser className="text-2xl"/>
                </div>
            </div>
        </div>
    </>
}

export default NavigationBar;
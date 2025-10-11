import React from "react";

function StatsInfoCard(props: any) {
    return (
        <div className={`w-full absolute flex justify-start items-center gap-3 ${props.color} 
                p-3  pl-7 rounded-[15px] shadow-login-card-shadow top-12 left-7.5`}>
            <div className="rounded-full border-2 border-teal-500 p-2 align-center">
                {props.icon}
            </div>
            <div>
                <h6 className="text-sm text-gray-500">{props.label}</h6>
                <span className="text-xl">${props.value}</span>
            </div>
        </div>
    )
}

export default StatsInfoCard;
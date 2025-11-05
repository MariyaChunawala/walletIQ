import React from "react";
import { LuTrendingUp, LuTrendingDown } from "react-icons/lu";

function TransactionInfoCard (props: any) {
    const { 
        title,
        icon,
        date,
        amount,
        type,
        hideDeleteBtn
    } = props

    return (
        <div className="flex justify-between mt-5">
            <div className="flex justify-center items-center gap-8">
                <div className="text-2xl">{icon}</div>
                <div className="flex-col">
                    <div>{title}</div>
                    <div className="text-gray-500 text-sm">{date}</div>
                </div>
            </div>
            <div className={`flex justify-center items-center gap-1 ${type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
                <span>{type === 'income' ? '+' : '-'}</span>
                <span>{amount}</span>
                <span>
                    {type === 'income' ? <LuTrendingUp />: <LuTrendingDown />}
                </span>
            </div>
        </div>
    )
}

export default TransactionInfoCard;
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import TransactionInfoCard from "../TransactionInfoCard";
import _ from "lodash";

function RecentTransactions(props: any){
    const {
        data,
        onMoreOption,
    } = props;
    return (
        <div className='m-8 bg-black w-[45%] rounded-2xl p-6'>
            <div className="flex justify-between border-b-1 border-gray-800">
                <h5 className="text-lg">
                    Recent Transactions
                </h5>
                <button 
                    onClick={onMoreOption}
                    className="flex justify-center items-center gap-2 border-2 border-teal-500 
                                pl-2 pr-2 pt-1 pb-1 rounded-lg cursor-pointer mb-2">
                    See All <span> <FaArrowRightLong /> </span>
                </button>
            </div>

            <div>
                {!_.isEmpty(data) ? data.slice(0, 5).map((info:any)=>(
                    <TransactionInfoCard 
                        title = {info.title}
                        icon = {<info.icon/>}
                        date = {info.date}
                        amount = {info.amount}
                        type = {info.type}
                        hideDeleteBtn
                    />
                )): (
                    <div className="text-center mt-5 text-gray-500">
                        You don’t have any transactions yet.
                    </div>
                )}
            </div>
        </div>
    );
}

export default RecentTransactions;
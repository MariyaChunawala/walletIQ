import React from "react";
import CustomPieChart from "../PieChart";

function FinancialOverview(props: any){
    const {
        totalBalance,
        totalIncome,
        totalExpenses,
    } = props

    const data = [
        {title: 'Total Income', amount: totalIncome, color: '#22c55e'},
        {title: 'Total Expense', amount: totalExpenses, color: '#ef4444'},
        {title: 'Total Savings', amount: totalIncome - totalExpenses, color: '#14b8a6'},
    ]
    return (
        <div className='m-8 bg-black w-[45%] rounded-2xl p-6'>
            <div className="flex justify-between">
                <h5 className="text-lg">
                    Financial Overview
                </h5>
            </div>
            <div className="h-full w-full">
                <CustomPieChart
                    data={data}
                    label={'Total Balance'}
                    totalAmount={totalBalance}
                    showTextAnchor
                />
            </div>
        </div>
    )
}

export default FinancialOverview;
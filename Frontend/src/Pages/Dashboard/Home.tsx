import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../Layouts/Dashboard";
import InfoCard from "../../Components/InfoCard";
import { homeCardList, transactionData } from "../../Utils/data";
import RecentTransactions from "../../Components/RecentTransactions";
import FinancialOverview from "../../Components/FinancialOverview";

function Dashboard() {
    const navigate = useNavigate();
    return (
        <DashboardLayout>
            <div className="flex justify-center">
                {homeCardList.map((list) => (
                    <InfoCard 
                        icon={<list.icon/>}
                        label={list.label}
                        value={list.value}
                        color={list.color}
                        classes={list.classes}
                    />
                ))
                }
            </div>
            <div className="w-full flex justify-center">
                <RecentTransactions 
                    data={transactionData}
                    onMoreOption = {() =>{
                        navigate('/expenses');
                    }}
                />
                <FinancialOverview 
                    totalBalance={10000}
                    totalIncome={4000}
                    totalExpenses={1000}
                />
            </div>
        </DashboardLayout>
    );
}
export default Dashboard;
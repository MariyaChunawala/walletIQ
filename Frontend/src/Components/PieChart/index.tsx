import React from "react";
import {PieChart, Pie, ResponsiveContainer, Cell, Tooltip, Legend} from 'recharts';
import CustomTooltip from "../CustomTooltip";
import CustomLegends from "../CustomLegends";

function CustomPieChart(props:any){
    const {
        data,
        label,
        totalAmount,
        showTextAnchor = false,
    } = props
    return (
        <div className="relative w-full h-full">
            <ResponsiveContainer width="100%" height="94%">
                <PieChart responsive>
                    <Pie
                        data={data}
                        dataKey="amount"
                        nameKey="title"
                        cx="40%"
                        cy="50%"
                        innerRadius={90}
                        outerRadius={120}
                        label
                        labelLine={false}
                    >
                        {data.map((item:any, index:any) => (
                            <Cell key={`cell-${index}`} fill={item.color} className="outline-transparent"/>
                        ))}
                    </Pie>

                    <Tooltip content={CustomTooltip}/>
                    <Legend content={CustomLegends}/>

                    {showTextAnchor &&
                        <>
                            <text 
                                x="40%"
                                y="55%"
                                dy={-25}
                                textAnchor="middle"
                                fill="#666"
                                fontSize="14px"
                            > 
                                {label}
                            </text>

                            <text 
                                x="40%"
                                y="55%"
                                dy={8}
                                textAnchor="middle"
                                fill="#fff"
                                fontSize="24px"
                                fontWeight="semi-bold"
                            > 
                                ${totalAmount}
                            </text>
                        </>
                    }

                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CustomPieChart;
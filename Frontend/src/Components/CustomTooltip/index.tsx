import React from "react";

function CustomTooltip(props:any) {
    const {active, payload} = props;
    
    if(active && payload && payload.length){
        const data = payload[0].payload;
        return (
            <div className={`border-2 p-2 rounded-lg bg-black`}
                style={{ borderColor: data.color }}    
            >
                <div>{data.title}</div>
                <div>Amount: ${data.amount}</div>
            </div>
        )
    }

    return null;
}

export default CustomTooltip;
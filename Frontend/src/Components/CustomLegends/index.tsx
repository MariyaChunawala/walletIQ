import React from "react";

function CustomLegends(props:any) {
    const { payload } = props;
    return (
        <>
            <div className="absolute right-10 top-[-230px]">
                {payload.map((entry:any, index:any) => (
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: entry.color }} 
                        />
                        <div key={`legend-${index}`} 
                            style={{color: entry.color}}
                        >
                            {entry.value}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CustomLegends;
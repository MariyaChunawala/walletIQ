import React from "react";
import NavigationBar from "../../Components/NavigationBar";

function DashboardLayout (props:any){
    return <>
        <NavigationBar/>
        {props.children}
    </>
}

export default DashboardLayout;
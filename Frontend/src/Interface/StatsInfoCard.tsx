import { LuTrendingUpDown } from "react-icons/lu";
import React, { type JSX } from "react";

interface StatInfo {
  label: string;
  icon: JSX.Element;
  value: String
  color: String
}

const statsInfo: StatInfo[] = [
  {
    label: 'Track Your Income & Expenses',
    icon: <LuTrendingUpDown style={{width: '30px', height: '30px'}}/>,
    value: '430,000',
    color: 'bg-black'
  }
];

export default statsInfo;

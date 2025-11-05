import { GrAppsRounded } from "react-icons/gr";
import { LuWalletMinimal } from "react-icons/lu";
import { PiHandCoinsFill } from "react-icons/pi";

import { IoMdCard } from 'react-icons/io'


// Temporary Imports
import { IoBarbellOutline, 
        IoBriefcaseOutline, 
        IoCafeOutline, 
        IoCardOutline, 
        IoCarOutline, 
        IoCartOutline, 
        IoCashOutline, 
        IoFastFoodOutline, 
        IoFilmOutline, 
        IoFlashOutline, 
        IoGiftOutline, 
        IoHeartOutline, 
        IoLaptopOutline, 
        IoPhonePortraitOutline, 
        IoRestaurantOutline, 
        IoSchoolOutline, 
        IoShirtOutline, 
        IoTrendingUpOutline, 
        IoWalletOutline, 
        IoWifiOutline 
    } from "react-icons/io5";



export const navbarList = [
    {
        title: 'Dashboard',
        key: 'dashboard',
        icon: GrAppsRounded,
        path: '/dashboard',
    },
    {
        title: 'Income',
        key: 'income',
        icon: PiHandCoinsFill,
        path: '/income',
    },
    {
        title: 'Expenses',
        key: 'expenses',
        icon: LuWalletMinimal,
        path: '/expenses',
    },
]

export const homeCardList = [
    {
        icon: IoMdCard,
        label: "Total Balance",
        value: '333',
        color: 'bg-black',
        classes: 'w-100 ml-8 mt-8 rounded-xl border-r-10 border-teal-500'
    },
    {
        icon: PiHandCoinsFill,
        label: "Total Income",
        value: '333',
        color: 'bg-black',
        classes: 'w-100 ml-8 mt-8 rounded-xl border-r-10 border-green-500'
    },
    {
        icon: LuWalletMinimal,
        label: "Total Expenses",
        value: '333',
        color: 'bg-black',
        classes: 'w-100 ml-8 mt-8 rounded-xl border-r-10 border-red-500'
    },
    {
        icon: PiHandCoinsFill,
        label: "Last 30 Days Income",
        value: '333',
        color: 'bg-black',
        classes: 'w-100 ml-8 mt-8 rounded-xl border-r-10 border-green-500'
    },
    {
        icon: LuWalletMinimal,
        label: "Last 30 Days Expense",
        value: '333',
        color: 'bg-black',
        classes: 'w-100 ml-8 mr-8 mt-8 rounded-xl border-r-10 border-red-500'
    },
]

export const transactionData = [
    { title: 'Food Expenses', icon: IoFastFoodOutline, date: '4th Oct 2025', amount: 800, type: 'expense' },
    { title: 'Salary Credit', icon: IoCashOutline, date: '1st Oct 2025', amount: 50000, type: 'income' },
    { title: 'Electricity Bill', icon: IoFlashOutline, date: '6th Oct 2025', amount: 1200, type: 'expense' },
    { title: 'Freelance Payment', icon: IoBriefcaseOutline, date: '8th Oct 2025', amount: 7000, type: 'income' },
    { title: 'Grocery Shopping', icon: IoCartOutline, date: '10th Oct 2025', amount: 2500, type: 'expense' },
    { title: 'Petrol Refill', icon: IoCarOutline, date: '11th Oct 2025', amount: 1500, type: 'expense' },
    { title: 'Stock Dividends', icon: IoTrendingUpOutline, date: '12th Oct 2025', amount: 1200, type: 'income' },
    { title: 'Dinner Out', icon: IoRestaurantOutline, date: '13th Oct 2025', amount: 950, type: 'expense' },
    { title: 'Internet Bill', icon: IoWifiOutline, date: '14th Oct 2025', amount: 899, type: 'expense' },
    { title: 'Gym Membership', icon: IoBarbellOutline, date: '15th Oct 2025', amount: 1500, type: 'expense' },
    { title: 'Part-time Tutoring', icon: IoSchoolOutline, date: '16th Oct 2025', amount: 3000, type: 'income' },
    { title: 'Phone Recharge', icon: IoPhonePortraitOutline, date: '17th Oct 2025', amount: 499, type: 'expense' },
    { title: 'Movie Night', icon: IoFilmOutline, date: '18th Oct 2025', amount: 600, type: 'expense' },
    { title: 'Gift Received', icon: IoGiftOutline, date: '19th Oct 2025', amount: 2000, type: 'income' },
    { title: 'Health Insurance', icon: IoHeartOutline, date: '20th Oct 2025', amount: 2500, type: 'expense' },
    { title: 'Sold Old Laptop', icon: IoLaptopOutline, date: '22nd Oct 2025', amount: 18000, type: 'income' },
    { title: 'Coffee Shop', icon: IoCafeOutline, date: '23rd Oct 2025', amount: 350, type: 'expense' },
    { title: 'Bonus Credit', icon: IoCardOutline, date: '24th Oct 2025', amount: 10000, type: 'income' },
    { title: 'Clothing Purchase', icon: IoShirtOutline, date: '25th Oct 2025', amount: 2700, type: 'expense' },
    { title: 'Interest Income', icon: IoWalletOutline, date: '27th Oct 2025', amount: 800, type: 'income' },
];

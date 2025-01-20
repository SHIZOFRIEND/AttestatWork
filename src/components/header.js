"use client"
import React from 'react';
import {usePathname} from "next/navigation";



const Header = () => {
    const pathname = usePathname();
    const isMainContentPage =  pathname ==="/mainContent";
    return (
        <div className="h-[40px] bg-white shadow-lg flex ">
            <div className={"w-1/2 h-full bg-[#CFDFDF]"}>

            </div>
            <div className={"w-1/2 h-full bg-[#FFBFBF]"}>
                {isMainContentPage ?  "Салон красоты" : "Авторизация в кабинет"}
            </div>
        </div>
    );
};
export default Header;
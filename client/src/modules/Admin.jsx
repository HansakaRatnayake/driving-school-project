import React from 'react'
import SideNav from "./SideNav.jsx";
import {Outlet} from "react-router-dom";

const Admin = () => {
    return (
        <div className="flex">
            <div>
                <SideNav/>
            </div>
            <div className="w-full">
                <Outlet/>
            </div>
        </div>
    )
}
export default Admin

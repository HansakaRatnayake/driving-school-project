import React from 'react'
import SideNav from "./SideNav.jsx";
import {Outlet} from "react-router-dom";

const Admin = () => {
    return (
        <div className="flex">
            <div>
                <SideNav/>
            </div>
            <div>
                <Outlet/>
            </div>

        </div>
    )
}
export default Admin

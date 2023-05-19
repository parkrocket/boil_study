import React, { useState, useEffect } from "react";
import AdminLnb from "./AdminLnb";
import AdminHead from "./AdminHead";

import AdminFoot from "./AdminFoot";
import adminStyle from "../../Css/admin.module.scss";
import { ChakraProvider } from "@chakra-ui/react";
import { useParams, Outlet, useOutlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Admin() {
    const [hamClick, setHamClick] = useState(false);
    const location = useLocation();
    const [adminMenus, setAdminMenus] = useState({});

    // console.log(location);

    //const adminMenu = useSelector((state) => state);

    return (
        <ChakraProvider>
            <div className={`${adminStyle.admin} ${hamClick ? adminStyle.active : ""}`}>
                <div className={`${adminStyle.admin_lnb_outer}`}>
                    <AdminLnb
                        hamClick={hamClick}
                        setHamClick={setHamClick}
                        path={location.pathname}
                        setAdminMenus={setAdminMenus}
                        adminMenus={adminMenus}></AdminLnb>
                </div>
                <div className={`${adminStyle.right}`}>
                    <AdminHead hamClick={hamClick} setHamClick={setHamClick}></AdminHead>
                    <Outlet></Outlet>
                    <AdminFoot></AdminFoot>
                </div>
            </div>
        </ChakraProvider>
    );
}

export default Admin;

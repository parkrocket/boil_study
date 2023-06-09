import React, { useState } from "react";
import AdminLnb from "./AdminLnb";
import AdminHead from "./AdminHead";

import AdminFoot from "./AdminFoot";
import adminStyle from "../../Css/admin.module.scss";
import { ChakraProvider } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

function Admin() {
    const localSt = window.localStorage.getItem("AdminLnbOpen");
    const data = JSON.parse(localSt);

    let initLnbOpen = "";
    if (localSt === null) {
        initLnbOpen = false;
    } else {
        initLnbOpen = data.AdminLnbOpen;
    }

    const [hamClick, setHamClick] = useState(initLnbOpen);

    const [adminMenus, setAdminMenus] = useState({});

    return (
        <ChakraProvider>
            <div className={`${adminStyle.admin} ${hamClick ? adminStyle.active : ""}`}>
                <div className={`${adminStyle.admin_lnb_outer}`}>
                    <AdminLnb setAdminMenus={setAdminMenus} adminMenus={adminMenus}></AdminLnb>
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

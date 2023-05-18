import React, { useState } from "react";
import AdminLnb from './AdminLnb';
import AdminHead from './AdminHead';
import AdminMain from './AdminMain';
import AdminFoot from './AdminFoot';
import adminStyle from '../../Css/admin.module.scss';
import { ChakraProvider } from "@chakra-ui/react";

function Admin() {
    const [hamClick, setHamClick] = useState(false);

    return (
        <ChakraProvider>
            <div className={`${adminStyle.admin} ${adminStyle.active}`}>
                <div className={`${adminStyle.admin_lnb_outer}`}>
                    <AdminLnb hamClick={hamClick} setHamClick={setHamClick}></AdminLnb>
                </div>
                <div className={`${adminStyle.right}`}>
                    <AdminHead  hamClick={hamClick} setHamClick={setHamClick}></AdminHead>
                    <AdminMain></AdminMain>
                    <AdminFoot></AdminFoot>
                </div>
            </div>
        </ChakraProvider>
    );
}

export default Admin;

import React from "react";
import AdminLnb from './AdminLnb';
import AdminHead from './AdminHead';
import AdminMain from './AdminMain';
import AdminFoot from './AdminFoot';
// import commonStyle from '../../Css/common.module.scss';
import adminStyle from '../../Css/admin.module.scss';
import { ChakraProvider } from "@chakra-ui/react";

function Admin() {

    return (
        <ChakraProvider>
            <div className={`${adminStyle.admin}`}>
                <AdminLnb></AdminLnb>
                <div className={`${adminStyle.right}`}>
                    <AdminHead></AdminHead>
                    <AdminMain></AdminMain>
                    <AdminFoot></AdminFoot>
                </div>
            </div>
        </ChakraProvider>
    );
}

export default Admin;

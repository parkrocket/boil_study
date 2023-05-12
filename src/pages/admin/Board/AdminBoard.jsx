import React from "react";
import AdminLnb from "../AdminLnb";
import AdminHead from "../AdminHead";
import AdminFoot from "../AdminFoot";
import adminStyle from "../../../Css/admin.module.scss";
import { ChakraProvider } from "@chakra-ui/react";

function AdminBoard() {
    return (
        <ChakraProvider>
            <div className={`${adminStyle.admin}`}>
                <AdminLnb></AdminLnb>
                <div className={`${adminStyle.right}`}>
                    <AdminHead></AdminHead>
                    <div>board</div>
                    <AdminFoot></AdminFoot>
                </div>
            </div>
        </ChakraProvider>
    );
}

export default AdminBoard;

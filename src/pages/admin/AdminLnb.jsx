import React from "react";
import adminStyle from '../../Css/admin.module.scss';
import { Box } from '@chakra-ui/react'

function AdminLnb() {
    return (
        <Box bg='#222' w='250px' className={`${adminStyle.admin_lnb}`}>
            AdminLnb
        </Box>
    );
}

export default AdminLnb;

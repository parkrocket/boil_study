import React from "react";
import adminStyle from '../../Css/admin.module.scss';

function AdminLnb() {
    return (
        <div className={`${adminStyle.admin_lnb}`}>
            <div className={`${adminStyle.container}`}>
                <h1>
                    <a href="#">admin home</a>
                </h1>
            </div>
        </div>
    );
}

export default AdminLnb;

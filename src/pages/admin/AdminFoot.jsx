import React from "react";
import adminStyle from '../../Css/admin.module.scss';


function AdminFoot() {
    return (
        <div className={`${adminStyle.admin_foot}`}>
            <div className={`${adminStyle.container}`}>
                <p>Hello, this is the admin page. Welcome.</p>
            </div>
        </div>
    );
}

export default AdminFoot;

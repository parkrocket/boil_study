import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { adminMenu } from "../_actions/adminMenu_action";

function AdminHoc(ChildrenComponent, menu, subMenu = 1) {
    function AuthenticationCheck() {
        const dispatch = useDispatch();

        const data = { menu, subMenu };
        console.log(data);

        useEffect(() => {
            dispatch(adminMenu(data));
        }, [dispatch]);

        // null -> 모두다 가능
        // true -> 로그인 한 인원만
        // false -> 로그인 안한 인원만

        return (
            <div>
                <ChildrenComponent></ChildrenComponent>
            </div>
        );
    }

    return (
        <div>
            <AuthenticationCheck></AuthenticationCheck>
        </div>
    );
}

export default AdminHoc;

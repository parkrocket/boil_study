import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { adminMenu } from "../_actions/adminMenu_action";

function AdminHoc(ChildrenComponent1, menu, subMenu = 1) {
    function AuthenticationCheck1() {
        const dispatch = useDispatch();

        const data = { menu, subMenu };
        useEffect(() => {
            dispatch(adminMenu(data));
        }, [dispatch]);

        // null -> 모두다 가능
        // true -> 로그인 한 인원만
        // false -> 로그인 안한 인원만

        return (
            <div>
                <ChildrenComponent1 data={data}></ChildrenComponent1>
            </div>
        );
    }

    return (
        <div>
            <AuthenticationCheck1></AuthenticationCheck1>
        </div>
    );
}

export default AdminHoc;

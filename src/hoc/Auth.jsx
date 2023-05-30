import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { auth } from "../_actions/user_actions";
import { adminMenu } from "../_actions/adminMenu_action";
import Empty from "../pages/Empty";

function Auth(ChildrenComponent, option, adminRoute = false, menu = 0, subMenu = 0) {
    function AuthenticationCheck() {
        const navigate = useNavigate();
        const dispatch = useDispatch();
        const [cookies] = useCookies(["x_auth"]);

        const [view, setView] = useState(false);
        console.log(cookies);
        useEffect(() => {
            dispatch(auth(cookies)).then((response) => {
                if (response.payload.isAuth) {
                    //console.log(response.payload.isAdmin);
                    //로그인 했음
                    if (adminRoute && !response.payload.isAdmin) {
                        //관리자 페이지를 관리자 권한이 없는 사람이 들어가려고 할때
                        alert("관리자가 아닙니다.");
                        navigate("/");
                    } else {
                        //로그인 안했을때 가능한 페이지를 진입하려고 할때
                        if (option === false) {
                            alert("로그인 상태라 진입이 불가능합니다.");
                            navigate("/");
                        }

                        setView(true);
                    }
                } else {
                    //로그인 안했음
                    if (option === true) {
                        alert("로그인이 필요합니다!");
                        navigate("/login");
                    }
                    setView(true);
                }
            });

            if (adminRoute === true) {
                const data = { menu, subMenu };

                dispatch(adminMenu(data));
            }
        }, [cookies, dispatch]);

        // null -> 모두다 가능
        // true -> 로그인 한 인원만
        // false -> 로그인 안한 인원만
        if (view === false) {
            return (
                <div>
                    <Empty></Empty>
                </div>
            );
        } else {
            return (
                <div>
                    <ChildrenComponent></ChildrenComponent>
                </div>
            );
        }
    }

    return (
        <div>
            <AuthenticationCheck></AuthenticationCheck>
        </div>
    );
}

export default Auth;

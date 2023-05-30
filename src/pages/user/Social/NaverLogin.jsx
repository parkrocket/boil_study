import React from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import { clientId, clientSecret, callbackUrl, SERVER_URL } from "../../Config";

function NaverLogin() {
    const location = useLocation();

    const token = location.hash.split("=")[1].split("&")[0];
    const state = location.hash.split("=")[2].split("&")[0];

    const [cookies, setCookie, removeCookie] = useCookies(["x_auth"]);
    const navigate = useNavigate();

    const data = {
        token: token,
        state: state,
        clientId: clientId,
        clientSecret: clientSecret,
        callbackUrl: callbackUrl,
    };

    axios.post(`${SERVER_URL}/api/users/naver`, data).then((response) => {
        if (response.data.loginSuccess) {
            console.log(response.data);
            removeCookie("x_auth");
            setCookie("x_auth", response.data.token);
            window.localStorage.setItem("userId", response.data.userId);
            navigate("/");
        } else {
            alert("잘못됐습니다...");
        }
    });

    return <div>naverlogin</div>;
}

export default NaverLogin;

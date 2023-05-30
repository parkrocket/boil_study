import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";

function NaverLogin() {
    const location = useLocation();

    const token = location.hash.split("=")[1].split("&")[0];
    const state = location.hash.split("=")[2].split("&")[0];

    const [cookies, setCookie, removeCookie] = useCookies(["x_auth"]);

    console.log(token, state, cookies);

    return <div>naverlogin</div>;
}

export default NaverLogin;

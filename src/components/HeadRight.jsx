import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { logout } from "../_actions/user_actions";
import { useNavigate } from "react-router-dom";

function HeadRight() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(["x_auth"]);

    const logOutHandler = (event) => {
        console.log(user);
        dispatch(logout(user)).then((response) => {
            console.log(response);
            if (response.payload.success === true) {
                localStorage.removeItem("userId");
                removeCookie("x_auth");
                navigate("/");
            } else {
                alert("로그아웃에 실패하였습니다.");
            }
        });
    };

    if (user.auth && !user.auth.isAuth) {
        return (
            <ul className="head-login">
                <li>
                    <Link to="/login">로그인</Link>
                </li>
                {/*<Link to="/logout">로그아웃</Link>*/}
                <li>
                    <Link to="/register">회원가입</Link>
                </li>
            </ul>
        );
    } else {
        return (
            <ul className="head-login">
                <li>
                    <a href="#!" onClick={logOutHandler}>
                        로그아웃
                    </a>
                </li>
            </ul>
        );
    }
}

export default HeadRight;

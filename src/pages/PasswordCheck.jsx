import React, { useState } from "react";
import Head from "../components/Head";
import loginStyle from "../Css/login.module.css";
import axios from "axios";
import { SERVER_URL } from "./Config";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function PasswordCheck() {
    const [password, setPassword] = useState("");

    const [Cookie, setCookie] = useCookies(["my_auth"]);
    const user = useSelector((state) => state);
    const navigate = useNavigate();

    function passwordHandler(e) {
        setPassword(e.target.value);
    }

    function onSubmitHandler(e) {
        const data = { password: password, userId: user.user.auth._id };

        if (password === "") {
            alert("비밀번호를 확인해주세요.");
            return;
        }

        axios.post(`${SERVER_URL}/api/users/passcheck`, data).then((response) => {
            if (response.data.passCheckSuccess === false) {
                alert("비밀번호가 틀렸습니다.");
                return;
            } else {
                setCookie("my_auth", response.data.token);
                navigate("/mypage");
            }
        });

        e.preventDefault();
    }

    return (
        <div>
            <Head></Head>
            <div className="container_wrap">
                <div className={loginStyle.login_wrap}>
                    <form onSubmit={onSubmitHandler}>
                        <div className={loginStyle.log_section}>
                            <em>비밀번호</em>
                            <input type="password" onChange={passwordHandler}></input>
                        </div>

                        <div>
                            <input
                                type="submit"
                                defaultValue="회원가입"
                                className={loginStyle.login_btn}></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PasswordCheck;

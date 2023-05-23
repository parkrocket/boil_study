import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { loginUser } from "../../_actions/user_actions";

import Head from "../../components/Head";
import loginStyle from "../../Css/login.module.css";
import "../../Css/media.css";

function Login(props) {
    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
    const [, setCookie] = useCookies(["x_auth"]);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const data = { id: Id, password: Password };

        dispatch(loginUser(data)).then((response) => {
            if (response.payload.loginSuccess) {
                setCookie("x_auth", response.payload.token);
                window.localStorage.setItem("userId", response.payload.userId);
                navigate("/");
            } else {
                alert("아이디가 없거나 비밀번호가 틀렸습니다.");
            }
        });
    };
    return (
        <div>
            <Head></Head>
            <div className={loginStyle.wrap}>
                <div className={loginStyle.login_wrap}>
                    <div className={loginStyle.login_title}>
                        <h2 className={`${loginStyle.logo} ${loginStyle.fontf}`}>LinkBoard</h2>
                        <span>LinkBoard 로그인</span>
                    </div>
                    <form onSubmit={onSubmitHandler}>
                        <div className={loginStyle.log_section}>
                            <em>아이디</em>
                            <input
                                type="text"
                                name="id"
                                id="id"
                                defaultValue=""
                                onChange={onIdHandler}></input>
                        </div>
                        <div className={loginStyle.log_section}>
                            <em>비밀번호</em>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                defaultValue=""
                                onChange={onPasswordHandler}></input>
                        </div>
                        <div className={`${loginStyle.log_section} ${loginStyle.log_lost}`}>
                            <a href="#!">아이디/비밀번호 찾기 </a>
                        </div>
                        <div>
                            <input
                                type="submit"
                                defaultValue="로그인하기"
                                className={loginStyle.login_btn}></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;

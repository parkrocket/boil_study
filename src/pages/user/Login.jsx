import React, { useState } from "react";
import axios from "axios";
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
    const [Cookie, setCookie] = useCookies(["x_auth"]);

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

        //console.log(data2);
        //console.log(data);

        // TODO: services/ 또는 apis 폴더로 빼기 (논의후))

        /*
        axios({
            method: "post",
            url: "http://54.180.35.70/api/login",
            data: data,
        }).then((response) => {
            if (response.data.success === "failed") {
                document.getElementById("id").value = "";
                document.getElementById("password").value = "";

                alert("아이디가 없거나 비밀번호가 틀렸습니다.");
            } else if (response.data.success === "success") {
                //alert("로그인 성공");

                setCookie("x_auth", response.data.token);
                window.localStorage.setItem("userId", response.data.userId);

                navigate("/");
                console.log(response);
            }
        });
        */
    };
    return (
        <div>
            <Head></Head>
            <div className={loginStyle.wrap}>
                <div className={loginStyle.login_wrap}>
                    <div className={loginStyle.login_title}>
                        <h2 className={`${loginStyle.logo} ${loginStyle.fontf}`}>kakao</h2>
                        <span>kakao 로그인</span>
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

import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Head from "../components/Head";
import "../Css/login.css";
import "../Css/media.css";

function Login() {
    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
    const [Cookie, setCookie, removeCookie] = useCookies(["x_auth"]);
    const navigate = useNavigate();

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onSubmitHandler = (event) => {
        const data = { id: Id, password: Password };

        //console.log(data);

        // TODO: services/ 또는 apis 폴더로 빼기 (논의후))
        axios({
            method: "post",
            url: "http://54.180.35.70/api/users",
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

        event.preventDefault();
    };
    return (
        <div>
            <Head></Head>
            <div className="wrap">
                <div className="login_wrap">
                    <div className="login_title">
                        <h2 className="logo fontf">kakao</h2>
                        <span>kakao 로그인</span>
                    </div>
                    <form onSubmit={onSubmitHandler}>
                        <div className="log_section">
                            <em>아이디</em>
                            <input
                                type="text"
                                name="id"
                                id="id"
                                defaultValue=""
                                onChange={onIdHandler}></input>
                        </div>
                        <div className="log_section">
                            <em>비밀번호</em>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                defaultValue=""
                                onChange={onPasswordHandler}></input>
                        </div>
                        <div className="log_section log_lost">
                            <a href="#!">아이디/비밀번호 찾기 </a>
                        </div>
                        <div>
                            <input
                                type="submit"
                                defaultValue="로그인하기"
                                className="login_btn"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;

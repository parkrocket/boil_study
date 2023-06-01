import React, { useState, useCallback, useEffect, useRef } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../_actions/user_actions";

import Head from "../../components/Head";
import Footer from "../../components/Footer";
import loginStyle from "../../Css/login.module.css";
import "../../Css/media.css";

import { clientId, callbackUrl } from "../Config";

import naverLogoImage from "../../img/naver_logo.png";

import { SERVER_URL } from "../Config";

const { naver } = window;

function Login(props) {
    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
    const [, setCookie] = useCookies(["x_auth"]);
    const [logoImage, setLogoImage] = useState("");

    const config = useSelector((state) => state);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const naverRef = useRef();

    const initializeNaverLogin = useCallback(() => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: clientId,
            callbackUrl: callbackUrl,
            isPopup: false, // popup 형식으로 띄울것인지 설정
            loginButton: { color: "white", type: 1, height: "20" }, //버튼의 스타일, 타입, 크기를 지정
        });
        naverLogin.init();
    }, []);

    useEffect(() => {
        if (config.configSet.config !== undefined) {
            setLogoImage(`${SERVER_URL}/${config.configSet.config.config.logo_image}`);
        }

        initializeNaverLogin();
    }, [initializeNaverLogin, config]);

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

    const naverIdLoginHandler = () => {
        naverRef.current.children[0].click();
    };

    return (
        <div>
            <Head></Head>
            <div className={loginStyle.wrap}>
                <div className={loginStyle.login_wrap}>
                    <div className={loginStyle.login_title}>
                        <h2 className={`${loginStyle.logo} ${loginStyle.fontf}`}>
                            <img src={logoImage} alt="logo" />
                        </h2>
                        <span>로그인</span>
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
                        <div
                            id="naverIdLogin"
                            ref={naverRef}
                            className={`${loginStyle.naverIdLogin}`}
                        />

                        <div>
                            <input
                                type="submit"
                                defaultValue="로그인하기"
                                className={loginStyle.login_btn}></input>
                        </div>
                        <div className={`${loginStyle.login_type_box}`}>
                            <button
                                className={`${loginStyle.naverIdLogin_btn}`}
                                onClick={naverIdLoginHandler}>
                                <img src={naverLogoImage} alt="" />
                                <span>네이버 아이디로 로그인</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Login;

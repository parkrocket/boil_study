import React, { useState } from "react";
import Head from "../components/Head";
import axios from "axios";
import "../Css/login.css";
import "../Css/media.css";

function Register() {
    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [NickName, setNickName] = useState("");

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };

    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    };

    const onNickNameHandler = (event) => {
        setNickName(event.currentTarget.value);
    };

    const onSubmitHandler = (event) => {
        const data = { id: Id, password: Password, email: Email, name: Name, nickname: NickName };

        //console.log(data);

        // TODO: services/ 또는 apis 폴더로 빼기 (논의후))
        axios({
            method: "post",
            url: "http://54.180.35.70/api/register",
            data: data,
        }).then((response) => console.log(response));

        event.preventDefault();
    };

    return (
        <div>
            <Head></Head>
            <div className="wrap">
                <div className="login_wrap">
                    <form onSubmit={onSubmitHandler}>
                        <div className="login_title">
                            <h2 className="logo fontf">kakao</h2>
                            <span>kakao 회원가입</span>
                        </div>
                        <div className="log_section">
                            <em>아이디</em>
                            <input type="text" onChange={onIdHandler}></input>
                        </div>
                        <div className="log_section">
                            <em>비밀번호</em>
                            <input type="text" onChange={onPasswordHandler}></input>
                        </div>
                        <div className="log_section">
                            <em>이메일</em>
                            <input type="text" onChange={onEmailHandler}></input>
                        </div>
                        <div className="log_section">
                            <em>실명</em>
                            <input type="text" onChange={onNameHandler}></input>
                        </div>
                        <div className="log_section">
                            <em>닉네임</em>
                            <input type="text" onChange={onNickNameHandler}></input>
                        </div>
                        <div className="chk_wrap">
                            <div className="chkbox">
                                <input type="radio" id="chk_1" name="" />
                                <label htmlFor="chk_1">
                                    <em>(필수)</em> 이용 약관 동의
                                </label>
                                <span className="pop">약관보기 </span>
                            </div>
                            <div className="chkbox">
                                <input type="radio" id="chk_2" name="" />
                                <label htmlFor="chk_2">
                                    <em>(필수)</em> 개인정보처리방침 동의
                                </label>
                                <span className="pop">약관보기 </span>
                            </div>
                        </div>
                        <div>
                            <input
                                type="submit"
                                defaultValue="회원가입"
                                className="login_btn"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;

import React, { useState } from "react";
import Head from "../../components/Head";
import { useDispatch } from "react-redux";
import { registerUser } from "../../_actions/user_actions";
import { useNavigate } from "react-router-dom";
import loginStyle from "../../Css/login.module.css";

import axios from "axios";

function Register() {
    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
    const [PasswordRe, setPasswordRe] = useState("");
    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [NickName, setNickName] = useState("");
    const [Check1, setCheck1] = useState(false);
    const [Check2, setCheck2] = useState(false);
    const [IdCheck, setIdCheck] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onIdHandler = (event) => {
        axios
            .post(`http://3.37.9.205/api/users/idcheck`, { id: event.currentTarget.value })
            .then((response) => {
                if (response.data.checksuccess === false) {
                    setIdCheck(false);
                    document.getElementById("check_text_wrap").innerText =
                        "사용할수 없는 아이디입니다.";
                } else {
                    setIdCheck(true);
                    document.getElementById("check_text_wrap").innerText = "";
                }
                console.log(response);
            });

        setId(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onPasswordReHandler = (event) => {
        setPasswordRe(event.currentTarget.value);
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

    const onCheck1Handler = (event) => {
        setCheck1(event.target.checked);
    };

    const onCheck2Handler = (event) => {
        setCheck2(event.target.checked);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const data = {
            id: Id,
            password: Password,
            email: Email,
            name: Name,
            nickname: NickName,
            idcheck: IdCheck,
        };

        console.log(Id);

        if (Id === "") {
            alert("아이디를 입력해주세요.");
            return;
        }

        if (Password === "") {
            alert("비밀번호를 입력해주세요.");
            return;
        }

        if (PasswordRe === "") {
            alert("비밀번호확인을 입력해주세요.");
            return;
        }

        if (Password !== PasswordRe) {
            alert("비밀번호가 서로 다릅니다.");
            return;
        }

        if (Email === "") {
            alert("메일을 입력해주세요.");
            return;
        }

        if (Name === "") {
            alert("이름을 입력해주세요.");
            return;
        }

        if (NickName === "") {
            alert("닉네임을 입력해주세요.");
            return;
        }

        if (Check1 === false) {
            alert("이용약관에 동의해주세요.");
            return;
        }

        if (Check2 === false) {
            alert("개인정보처리방침에 동의해주세요.");
            return;
        }

        if (IdCheck === false) {
            alert("사용하실수 없는 아이디입니다.");
            return;
        }

        //console.log(data);

        // TODO: services/ 또는 apis 폴더로 빼기 (논의후))

        dispatch(registerUser(data)).then((response) => {
            //if(payload.)
            if (response.payload.registersuccess === true) {
                navigate("/");
            } else {
                alert(response.payload.msg);
            }
        });

        /*
        axios({
            method: "post",
            url: "http://54.180.35.70/api/register",
            data: data,
        }).then((response) => console.log(response));
        */
    };

    return (
        <div>
            <Head></Head>
            <div className={loginStyle.wrap}>
                <div className={loginStyle.login_wrap}>
                    <form onSubmit={onSubmitHandler}>
                        <input type="hidden" name="idcheck" defaultValue={IdCheck}></input>
                        <div className={loginStyle.login_title}>
                            <h2 className={`${loginStyle.logo} ${loginStyle.fontf}`}>kakao</h2>
                            <span>kakao 회원가입</span>
                        </div>
                        <div className={loginStyle.log_section}>
                            <em>아이디</em>
                            <input type="text" onChange={onIdHandler}></input>
                            <p id="check_text_wrap"></p>
                        </div>
                        <div className={loginStyle.log_section}>
                            <em>비밀번호</em>
                            <input type="password" onChange={onPasswordHandler}></input>
                        </div>
                        <div className={loginStyle.log_section}>
                            <em>비밀번호 확인</em>
                            <input type="password" onChange={onPasswordReHandler}></input>
                        </div>
                        <div className={loginStyle.log_section}>
                            <em>이메일</em>
                            <input type="text" onChange={onEmailHandler}></input>
                        </div>
                        <div className={loginStyle.log_section}>
                            <em>이름</em>
                            <input type="text" onChange={onNameHandler}></input>
                        </div>
                        <div className={loginStyle.log_section}>
                            <em>닉네임</em>
                            <input type="text" onChange={onNickNameHandler}></input>
                        </div>
                        <div className={loginStyle.chk_wrap}>
                            <div className={loginStyle.chkbox}>
                                <input
                                    type="checkbox"
                                    id="chk_1"
                                    name=""
                                    onClick={onCheck1Handler}
                                />
                                <label htmlFor="chk_1">
                                    <em>(필수)</em> 이용 약관 동의
                                </label>
                                <span className={loginStyle.pop}>약관보기 </span>
                            </div>
                            <div className={loginStyle.chkbox}>
                                <input
                                    type="checkbox"
                                    id="chk_2"
                                    name=""
                                    onClick={onCheck2Handler}
                                />
                                <label htmlFor="chk_2">
                                    <em>(필수)</em> 개인정보처리방침 동의
                                </label>
                                <span className={loginStyle.pop}>약관보기 </span>
                            </div>
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

export default Register;

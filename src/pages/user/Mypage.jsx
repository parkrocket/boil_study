import React, { useState, useEffect } from "react";
import Head from "../../components/Head";
import { useDispatch } from "react-redux";
import { updateUser } from "../../_actions/user_actions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar } from "@chakra-ui/react";

import axios from "axios";
import loginStyle from "../../Css/login.module.css";
import { SERVER_URL } from "../Config";

function Mypage() {
    const [Password, setPassword] = useState("");
    const [PasswordRe, setPasswordRe] = useState("");
    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [NickName, setNickName] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state) => state);

    useEffect(() => {
        console.log(user.user.auth._id);

        axios
            .post(`${SERVER_URL}/api/users/userInfo`, { id: user.user.auth._id })
            .then((response) => {
                setEmail(response.data.userInfo.user_email);
                setName(response.data.userInfo.user_name);
                setNickName(response.data.userInfo.user_nickname);
            });
    }, []);

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

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const data = {
            id: user.user.auth._id,
            password: Password,
            email: Email,
            name: Name,
            nickname: NickName,
        };

        if (Password !== "") {
            if (PasswordRe === "") {
                alert("비밀번호확인을 입력해주세요.");
                return;
            }

            if (Password !== PasswordRe) {
                alert("비밀번호가 서로 다릅니다.");
                return;
            }
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

        //console.log(data);

        // TODO: services/ 또는 apis 폴더로 빼기 (논의후))

        dispatch(updateUser(data)).then((response) => {
            //if(payload.)

            //console.log(response);

            if (response.payload.updateSuccess === true) {
                alert("정보수정에 성공하였습니다.");
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
            <div className="container_wrap">
                <div className={loginStyle.login_wrap}>
                    <form onSubmit={onSubmitHandler}>
                        <div className={loginStyle.login_title}>
                            <h2 className={`${loginStyle.logo} ${loginStyle.fontf}`}>정보수정</h2>
                            <span>정보수정</span>
                        </div>
                        <div className={loginStyle.log_section}>
                            <Avatar></Avatar>
                        </div>
                        <div className={loginStyle.log_section}>
                            <em>아이디</em>
                            <input type="text" readOnly defaultValue={user.user.auth._id}></input>
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
                            <input
                                type="text"
                                onChange={onEmailHandler}
                                defaultValue={Email}></input>
                        </div>
                        <div className={loginStyle.log_section}>
                            <em>이름</em>
                            <input type="text" onChange={onNameHandler} defaultValue={Name}></input>
                        </div>
                        <div className={loginStyle.log_section}>
                            <em>닉네임</em>
                            <input
                                type="text"
                                onChange={onNickNameHandler}
                                defaultValue={NickName}></input>
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

export default Mypage;

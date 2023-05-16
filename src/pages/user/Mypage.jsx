import React, { useState, useEffect, useRef } from "react";
import Head from "../../components/Head";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar } from "@chakra-ui/react";
import { useCookies } from "react-cookie";
import axios from "axios";
import loginStyle from "../../Css/login.module.css";
import { SERVER_URL } from "../Config";

function Mypage() {
    const [Password, setPassword] = useState("");
    const [PasswordRe, setPasswordRe] = useState("");
    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [NickName, setNickName] = useState("");
    const [Images, setImages] = useState({});
    const [profileImg, setProfileImg] = useState("");
    const [Cookie, setCookie] = useCookies(["my_auth"]);

    const navigate = useNavigate();

    const imgRef = useRef();

    const user = useSelector((state) => state);

    useEffect(() => {
        if (Cookie.my_auth === undefined) {
            navigate("/passwordcheck");
            return;
        }

        axios
            .post(`${SERVER_URL}/api/users/userInfo`, { id: user.user.auth._id })
            .then((response) => {
                setEmail(response.data.userInfo.user_email);
                setName(response.data.userInfo.user_name);
                setNickName(response.data.userInfo.user_nickname);
                setProfileImg(response.data.userInfo.user_image);
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

        const formData = new FormData();

        formData.append("id", user.user.auth._id);
        formData.append("password", Password);
        formData.append("email", Email);
        formData.append("name", Name);
        formData.append("nickname", NickName);
        formData.append("profile", Images);

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

        axios({
            method: "post",
            url: `${SERVER_URL}/api/users/update`,
            data: formData,
        }).then((response) => {
            if (response.data.updateSuccess === true) {
                alert("정보수정에 성공하였습니다.");
                navigate("/");
            } else {
                alert(response.data.msg);
            }
        });
    };

    function fileChange(e) {
        const file = imgRef.current.files[0];

        const fileReader = new FileReader();

        fileReader.readAsDataURL(file);

        fileReader.onload = (e) => {
            setProfileImg(fileReader.result);
            setImages(file);
        };
    }

    return (
        <div>
            <Head></Head>
            <div className="container_wrap">
                <div className={loginStyle.login_wrap}>
                    <form onSubmit={onSubmitHandler} entype="multipart/formdata">
                        <div className={loginStyle.log_section}>
                            <label className={`${loginStyle.profileImg}`}>
                                <Avatar src={profileImg} className={`${loginStyle.img}`}></Avatar>
                                <input
                                    type="file"
                                    onChange={fileChange}
                                    ref={imgRef}
                                    style={{ visibility: "hidden" }}
                                />
                            </label>
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

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { SERVER_URL } from "../Config";

import Head from "../../components/Head";
import BoardStyle from "../../Css/boardwrite.module.css";

function Login(props) {
    const [Subject, setSubject] = useState("");
    const [Content, setContent] = useState("");

    const user = useSelector((state) => state);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubjectHandler = (event) => {
        setSubject(event.currentTarget.value);
    };

    const onContentHandler = (event) => {
        setContent(event.currentTarget.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const data = { subject: Subject, content: Content, userid: user.user.auth._id };

        axios.post(`${SERVER_URL}/api/board/write`, data).then((response) => {
            navigate("/board");
        });

        /*
        dispatch(loginUser(data)).then((response) => {
            if (response.payload.loginSuccess) {
                setCookie("x_auth", response.payload.token);
                window.localStorage.setItem("userId", response.payload.userId);
                navigate("/");
            } else {
                alert("아이디가 없거나 비밀번호가 틀렸습니다.");
            }
        });
        */
    };
    return (
        <div>
            <Head></Head>
            <div className="wrap">
                <div className="login_wrap">
                    <div className="login_title">
                        <h2 className="logo fontf">게시판글쓰기</h2>
                    </div>
                    <form onSubmit={onSubmitHandler}>
                        <div className="log_section">
                            <em>제목</em>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                defaultValue=""
                                onChange={onSubjectHandler}></input>
                        </div>
                        <div className="log_section">
                            <em>내용</em>
                            <textarea
                                name="content"
                                id={BoardStyle.content}
                                onChange={onContentHandler}></textarea>
                        </div>
                        <div className="log_section">
                            <em>파일업로드</em>
                        </div>
                        <div>
                            <input type="submit" defaultValue="글쓰기" className="login_btn" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;

import React, { useState, useRef, useMemo } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { SERVER_URL } from "../Config";

import Head from "../../components/Head";
import BoardStyle from "../../Css/boardwrite.module.css";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Login(props) {
    const [Subject, setSubject] = useState("");
    const [Content, setContent] = useState("");

    const user = useSelector((state) => state);

    const navigate = useNavigate();

    const quillRef = useRef();

    const onSubjectHandler = (event) => {
        setSubject(event.currentTarget.value);
    };

    const onContentHandler = (event) => {
        //console.log(event);
        setContent(event);
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

    // 이미지 처리를 하는 핸들러
    const imageHandler = () => {
        console.log("에디터에서 이미지 버튼을 클릭하면 이 핸들러가 시작됩니다!");

        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.addEventListener("change", async () => {
            const file = input.files[0];

            const formData = new FormData();
            formData.append("img", file);

            try {
                const result = await axios.post(`${SERVER_URL}/api/board/imageUpload`, formData);

                const IMG_URL = result.data.url;

                const editor = quillRef.current.getEditor();

                const range = editor.getSelection();

                editor.insertEmbed(range, "image", IMG_URL);
            } catch {
                alert("이미지 처리가 실패했어열 ㅠ_ㅠ");
            }
        });
    };

    const modules = useMemo(
        () => ({
            toolbar: {
                // 툴바에 넣을 기능들을 순서대로 나열하면 된다.
                container: [
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [{ size: ["small", false, "large", "huge"] }, { color: [] }],
                    [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                        { align: [] },
                    ],
                    ["image", "video"],
                ],
                handlers: {
                    // 위에서 만든 이미지 핸들러 사용하도록 설정
                    image: imageHandler,
                },
            },
        }),
        []
    );

    return (
        <div>
            <Head></Head>
            <div className="wrap">
                <div className="login_wrap">
                    <div className="login_title">
                        <h2 className="logo fontf">게시판글쓰기😎</h2>
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
                            <ReactQuill
                                ref={quillRef}
                                theme="snow"
                                modules={modules}
                                value={Content}
                                onChange={onContentHandler}></ReactQuill>
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

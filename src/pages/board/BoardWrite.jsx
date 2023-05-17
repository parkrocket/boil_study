import React, { useState, useRef, useMemo, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { SERVER_URL } from "../Config";

import Head from "../../components/Head";
import boardWriteStyle from "../../Css/boardwrite.module.css";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Login(props) {
    const [Subject, setSubject] = useState("");
    const [Content, setContent] = useState("");
    const [fileCount, setFileCount] = useState(0);
    const [fileList, setFileList] = useState([]);

    const user = useSelector((state) => state);

    let params = useParams();

    if (params.boardId === undefined) {
        alert("게시판이 없습니다.");
    }

    const navigate = useNavigate();

    const quillRef = useRef();
    const inputRef = useRef();

    useEffect(() => {
        const data = { boardId: params.boardId };
        axios.post(`${SERVER_URL}/api/admin/board/boardInfo`, data).then((response) => {
            setFileCount(response.data.info.upload_count);
        });

        if (params.wrNo !== undefined) {
            const data_info = { boardId: params.boardId, wrNo: params.wrNo };

            axios.post(`${SERVER_URL}/api/board/boardUpdateInfo`, data_info).then((response) => {
                setSubject(response.data.info.subject);
                setContent(response.data.info.content);
                setFileList(response.data.files);
            });
        }
    }, [params]);

    const onSubjectHandler = (event) => {
        setSubject(event.currentTarget.value);
    };

    const onContentHandler = (event) => {
        //console.log(event);
        setContent(event);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append("boardId", params.boardId);
        formData.append("subject", Subject);
        formData.append("content", Content);
        formData.append("userid", user.user.auth._id);

        if (params.wrNo !== undefined) {
            formData.append("wrNo", params.wrNo);
        }

        if (fileCount !== 0) {
            for (let i = 0; i < event.target.upload_files.length; i++) {
                formData.append("upload_files", event.target.upload_files[i].files[0]);
            }
        }

        let apiUrl;
        if (params.wrNo !== undefined) {
            apiUrl = `${SERVER_URL}/api/board/update`;
        } else {
            apiUrl = `${SERVER_URL}/api/board/write`;
        }

        axios.post(apiUrl, formData).then((response) => {
            navigate(`/board/${params.boardId}`);
        });
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

                const IMG_URL = result.data.thumbUrl;

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

    const fileUploadInput = [...Array(fileCount)].map((el, index) => {
        return (
            <React.Fragment key={index}>
                <input type="file" name="upload_files" multiple="multiple"></input>
                {fileList[index] && <div>{fileList[index].filename}</div>}
            </React.Fragment>
        );
    });
    return (
        <div>
            <Head></Head>
            <div className="wrap">
                <div className={`login_wrap ${boardWriteStyle.boardWrite_wrap}`}>
                    <div className={`login_title ${boardWriteStyle.boardWrite_title}`}>
                        <h2 className="logo fontf">
                            {params.wrNo !== undefined ? <>게시판 수정</> : <>게시판 글쓰기</>}
                        </h2>
                    </div>
                    <div className={`${boardWriteStyle.boardWrite_form}`}>
                        <form
                            onSubmit={onSubmitHandler}
                            ref={inputRef}
                            encType="multipart/form-data">
                            <div className={`log_section ${boardWriteStyle.boardWrite_section}`}>
                                <em>제목</em>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    defaultValue={Subject}
                                    onChange={onSubjectHandler}></input>
                            </div>
                            <div className={`log_section ${boardWriteStyle.boardWrite_section}`}>
                                <em>내용</em>
                                <ReactQuill
                                    ref={quillRef}
                                    theme="snow"
                                    modules={modules}
                                    value={Content}
                                    style={{ height: "430px" }}
                                    onChange={onContentHandler}></ReactQuill>
                            </div>
                            {fileCount !== 0 && (
                                <div
                                    className={`log_section ${boardWriteStyle.boardWrite_section}`}
                                    style={{ marginTop: "60px" }}>
                                    <em>파일업로드</em>
                                    <div>{fileUploadInput}</div>
                                </div>
                            )}

                            <div>
                                <input
                                    type="submit"
                                    defaultValue="글쓰기"
                                    className={`login_btn ${boardWriteStyle.boardWrite_btn}`}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

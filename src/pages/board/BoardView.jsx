import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Head from "../../components/Head";
import { SERVER_URL } from "../Config";
import Comment from "./BoardComment";
import boardViewStyle from "../../Css/boardView.module.scss";
import moment from "moment";
import { useSelector } from "react-redux";
import Confirm from "../../components/Confirm";
import { useDisclosure } from "@chakra-ui/react";
import { ViewIcon, TimeIcon } from "@chakra-ui/icons";

function BoardView() {
    const params = useParams();
    const [BoardView, setBoardView] = useState({});
    const [CommentList, setCommentList] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [fileList, setFileList] = useState([]);

    const cancelRef = React.useRef();

    const confirmMsg = {
        subject: "게시글 삭제하기",
        content: "정말 게시글을 삭제하시겠습니까?",
        leftButton: "취소",
        rightButton: "삭제",
    };

    const navigate = useNavigate();

    const user = useSelector((state) => state);

    useEffect(() => {
        const data = { boardId: params.boardId, wrNo: params.wrNo };

        axios.post(`${SERVER_URL}/api/board/view`, data).then((response) => {
            if (response.data.viewsuccess === false) {
                alert("글 불러오기가 실패했습니다.");
                navigate("/board");
            }
            console.log("글가져오기");
            setBoardView(response.data.view);
        });

        axios.post(`${SERVER_URL}/api/comment/list`, data).then((response) => {
            if (response.data.commentListSuccess === false) {
                alert("글 불러오기가 실패했습니다.");
                navigate("/board");
            }

            setCommentList(response.data.list);
        });

        axios.post(`${SERVER_URL}/api/board/boardUpdateInfo`, data).then((response) => {
            setFileList(response.data.files);
        });
    }, [params, navigate]);

    const refreshComment = (newComment) => {
        setCommentList(newComment);
    };

    const viewDateTime = BoardView.datetime
        ? moment(BoardView.datetime).format("YYYY-MM-DD HH:mm:ss")
        : "";

    function boardDeleteHandler() {
        const data = { boardId: params.boardId, wrNo: params.wrNo };

        if (BoardView.comment !== 0) {
            alert("코멘트가 있는 글은 삭제하실 수 없습니다.");
            return;
        }

        axios.post(`${SERVER_URL}/api/board/delete`, data).then((response) => {
            if (response.data.boardDeleteSuccess === false) {
                alert("글 삭제가 실패했습니다.");
                return;
            }

            alert("글이 삭제되었습니다.");
            navigate(`/board/${params.boardId}`);
        });

        console.log(BoardView);
    }

    const okConfirm = () => {
        boardDeleteHandler();
        onClose();
    };

    function confirmOpen() {
        onOpen();
    }

    function fileDownloadHandler(e) {
        if (window.confirm("파일을 다운로드 하시겠습니까?")) {
            const data = { path: e.target.dataset["path"], fileName: e.target.dataset["filename"] };
            axios({
                url: `${SERVER_URL}/api/board/fileDownload`,
                method: "post",
                responseType: "blob",
                data: data,
            }).then((response) => {
                console.log(response.data);
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", `${e.target.dataset["filename"]}`);
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
                console.log(url);
            });
        }
    }

    const fileListComp = fileList.map((file, index) => {
        return (
            <React.Fragment key={index}>
                {file.filename && (
                    <span>
                        첨부파일 #{index + 1}:{" "}
                        <button
                            onClick={fileDownloadHandler}
                            data-path={file.filepath}
                            data-filename={file.filename}>
                            {file.filename}
                        </button>
                    </span>
                )}
            </React.Fragment>
        );
    });

    return (
        <div>
            <Head></Head>
            <div className={`${boardViewStyle.container}`}>
                <h2 className={`${boardViewStyle.tit} fontf`}>자유게시판</h2>
                <div className={`${boardViewStyle.wrapper}`}>
                    <h2 className={`${boardViewStyle.cont_tit}`}>
                        {BoardView.subject}{" "}
                        <span>
                            <ViewIcon></ViewIcon>
                            {BoardView.hit}
                        </span>
                        <span>
                            <TimeIcon></TimeIcon>
                            {viewDateTime}
                        </span>
                    </h2>

                    <div
                        dangerouslySetInnerHTML={{ __html: BoardView.content }}
                        className={`${boardViewStyle.cont}`}></div>
                </div>
                <div>{fileListComp}</div>

                {(user.user.auth._id === BoardView.user_id || user.user.auth.isAdmin === true) && (
                    <div>
                        <Link to={`/board/update/${params.boardId}/${BoardView.wr_no}`}>수정</Link>
                        <button onClick={confirmOpen}>삭제</button>
                    </div>
                )}

                <div>
                    <Comment commentList={CommentList} refreshComment={refreshComment}></Comment>
                </div>
            </div>
            <div className={`${boardViewStyle.btn_box}`}>
                <Link to="/board" className={`${boardViewStyle.prev_btn}`}>
                    목록으로
                </Link>
            </div>
            <Confirm
                isOpen={isOpen}
                onClose={onClose}
                cancelRef={cancelRef}
                okConfirm={okConfirm}
                content={confirmMsg}></Confirm>
        </div>
    );
}

export default BoardView;

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

function BoardView() {
    const params = useParams();
    const [BoardView, setBoardView] = useState({});
    const [CommentList, setCommentList] = useState([]);
    const [confirm, setConfirm] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

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

            setBoardView(response.data.view);
        });

        axios.post(`${SERVER_URL}/api/comment/list`, data).then((response) => {
            if (response.data.commentListSuccess === false) {
                alert("글 불러오기가 실패했습니다.");
                navigate("/board");
            }

            setCommentList(response.data.list);
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

    return (
        <div>
            <Head></Head>
            <div className={`${boardViewStyle.container}`}>
                <h2 className={`${boardViewStyle.tit} fontf`}>자유게시판</h2>
                <div className={`${boardViewStyle.wrapper}`}>
                    <h2 className={`${boardViewStyle.cont_tit}`}>
                        {BoardView.subject} <span>{viewDateTime}</span>
                    </h2>

                    <div
                        dangerouslySetInnerHTML={{ __html: BoardView.content }}
                        className={`${boardViewStyle.cont}`}></div>
                </div>

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

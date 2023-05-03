import React, { useState } from "react";
import moment from "moment";
import boardCommentStyle from "../../Css/boardComment.module.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import { SERVER_URL } from "../Config";
import Confirm from "../../components/Confirm";
import { useDisclosure } from "@chakra-ui/react";

function SingleComment(props) {
    const [replyOpen, setReplyOpen] = useState(false);
    const [replyText, setReplyText] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [confirm, setConfirm] = useState(false);
    const cancelRef = React.useRef();
    const confirmMsg = {
        subject: "댓글 삭제하기",
        content: "정말 코멘트를 삭제하시겠습니까?",
        leftButton: "취소",
        rightButton: "삭제",
    };

    const user = useSelector((state) => state);

    const listDateTime = props.comment.datetime
        ? moment(props.comment.datetime).format("YYYY-MM-DD HH:mm:ss")
        : "";

    function replyClick() {
        if (replyOpen) {
            setReplyOpen(false);
        } else {
            setReplyOpen(true);
        }
    }

    function onSubmit(e) {
        const data = {
            content: replyText,
            userId: user.user.auth._id,
            commentId: props.comment.comment_id,
            boardId: props.comment.board_id,
        };

        axios.post(`${SERVER_URL}/api/comment/write`, data).then((response) => {
            if (response.data.commentWriteSuccess === true) {
                setReplyText("");
                setReplyOpen(false);
                props.refreshComment(response.data.list);
            } else {
                alert("코멘트 작성 실패");
            }
        });

        e.preventDefault();
    }

    function textHandler(e) {
        setReplyText(e.currentTarget.value);
    }

    function confirmOpen() {
        onOpen();
    }

    function deleteCommentHandler() {
        const data = { commentId: props.comment.comment_id, boardId: props.comment.board_id };

        axios.post(`${SERVER_URL}/api/comment/delete`, data).then((response) => {
            if (response.data.commentDeleteSuccess === true) {
                //console.log(response);
                props.refreshComment(response.data.list);
            } else {
                if (response.data.msg === "children comment") {
                    alert("이 코멘트에는 이미 답변 코멘트가 존재하므로 삭제 할 수 없습니다.");
                } else {
                    alert("코멘트 삭제 실패");
                }
            }
        });
    }

    const okConfirm = () => {
        deleteCommentHandler();
        onClose();
    };

    return (
        <div>
            <ul className={`${boardCommentStyle.list}`}>
                <li className={`${boardCommentStyle.nickname}`}>{props.comment.user_nickname}</li>
                <li className={`${boardCommentStyle.cont}`}>{props.comment.content}</li>
                <li className={`${boardCommentStyle.time}`}>{listDateTime}</li>
                <li className={`${boardCommentStyle.action}`}>
                    <div>
                        <span onClick={replyClick}>댓글</span>
                        <span onClick={confirmOpen}>삭제</span>
                    </div>
                </li>
            </ul>
            {replyOpen && (
                <form style={{ display: "flex" }} onSubmit={onSubmit}>
                    <textarea
                        // style={{ width: "100%", borderRadius: "5px" }}
                        onChange={textHandler}
                        value={replyText}
                        placeholder="코멘트를 작성해주세요"></textarea>
                    <br></br>
                    <button
                        // style={{ width: "20%", height: "52px" }}
                        onClick={onSubmit}
                        className={`${boardCommentStyle.submit_btn}`}>
                        <span className="material-symbols-outlined">edit</span>
                    </button>
                </form>
            )}
            <Confirm
                isOpen={isOpen}
                onClose={onClose}
                cancelRef={cancelRef}
                okConfirm={okConfirm}
                content={confirmMsg}></Confirm>
        </div>
    );
}

export default SingleComment;

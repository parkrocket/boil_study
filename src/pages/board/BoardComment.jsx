import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SERVER_URL } from "../Config";
import SingleComment from "./SingleComment";
import ReplyComment from "./ReplyComment";
import boardCommentStyle from "../../Css/boardComment.module.scss";

function BoardComment(props) {
    const user = useSelector((state) => state.user);
    const BoardId = useParams();

    const [Text, setText] = useState("");
    const [OpenReplyCommentNumber, setOpenReplyCommentNumber] = useState();

    const textHandler = (e) => {
        setText(e.currentTarget.value);
    };

    const openCommentNumberChange = (setting) => {
        setOpenReplyCommentNumber(setting);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            content: Text,
            userId: user.auth._id,
            boardId: BoardId.boardId,
        };

        axios.post(`${SERVER_URL}/api/comment/write`, data).then((response) => {
            console.log(response.data.commentWriteSuccess);
            if (response.data.commentWriteSuccess) {
                setText("");
                props.refreshComment(response.data.list);
            } else {
                alert("코멘트 작성 실패");
            }
        });
    };

    return (
        <div className={`${boardCommentStyle.container}`}>
            <br></br>
            <p className={`${boardCommentStyle.tit}`}>
                댓글
                <span className={`${boardCommentStyle.chat_ico} material-symbols-outlined`}>
                    chat
                </span>
            </p>
            <hr />
            {props.commentList &&
                props.commentList.map((comment, index) => {
                    if (!comment.response) {
                        return (
                            <React.Fragment key={index}>
                                <SingleComment
                                    comment={comment}
                                    refreshComment={props.refreshComment}></SingleComment>
                                <ReplyComment
                                    parentCommentId={comment.comment_id}
                                    commentList={props.commentList}
                                    refreshComment={props.refreshComment}></ReplyComment>
                            </React.Fragment>
                        );
                    } else {
                        return "";
                    }
                })}

            <div className={`${boardCommentStyle.form_box}`}>
                <form style={{ display: "flex" }} onSubmit={onSubmit}>
                    <textarea
                        // style={{ width: "100%", borderRadius: "5px" }}
                        onChange={textHandler}
                        value={Text}
                        placeholder="코멘트를 작성해주세요"></textarea>
                    <br></br>
                    <button
                        // style={{ width: "20%", height: "52px" }}
                        onClick={onSubmit}
                        className={`${boardCommentStyle.submit_btn}`}>
                        <span className="material-symbols-outlined">edit</span>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default BoardComment;

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
    const params = useParams();

    const [Text, setText] = useState("");

    //const [depth,setDepth] = useState(0);

    // console.log(props);

    let depth = 0;

    const textHandler = (e) => {
        setText(e.currentTarget.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            content: Text,
            userId: user.auth._id,
            boardId: params.boardId,
            wrNo: params.wrNo,
            commentId: 0,
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
                                    refreshComment={props.refreshComment}
                                    depth={depth}></SingleComment>
                                <ReplyComment
                                    parentCommentNo={comment.comment_no}
                                    commentList={props.commentList}
                                    refreshComment={props.refreshComment}
                                    depth={depth}></ReplyComment>
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

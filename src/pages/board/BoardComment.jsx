import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SERVER_URL } from "../Config";

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
                console.log(response.data);
            } else {
                alert("코멘트 작성 실패");
            }
        });
    };

    return (
        <div>
            <br></br>
            <p> 댓글</p>
            <hr />

            <form style={{ display: "flex" }} onSubmit={onSubmit}>
                <textarea
                    style={{ width: "100%", borderRadius: "5px" }}
                    onChange={textHandler}
                    value={Text}
                    placeholder="코멘트를 작성해주세요"></textarea>
                <br></br>
                <button style={{ width: "20%", height: "52px" }} onClick={onSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default BoardComment;

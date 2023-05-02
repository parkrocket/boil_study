import React from "react";
import moment from "moment";

function SingleComment(props) {
    console.log(props);

    const listDateTime = props.comment.datetime
        ? moment(props.comment.datetime).format("YYYY-MM-DD HH:mm:ss")
        : "";
    return (
        <div>
            <ul>
                <li>{props.comment.user_nickname}</li>
                <li>{props.comment.content}</li>
                <li>{listDateTime}</li>
            </ul>
            <span>댓글</span>
            <span>수정</span>
            <span>삭제</span>
        </div>
    );
}

export default SingleComment;

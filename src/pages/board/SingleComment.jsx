import React from "react";
import moment from "moment";
import boardCommentStyle from '../../Css/boardComment.module.scss';


function SingleComment(props) {
    console.log(props);

    const listDateTime = props.comment.datetime
        ? moment(props.comment.datetime).format("YYYY-MM-DD HH:mm:ss")
        : "";
    return (
        <div>
            <ul className={`${boardCommentStyle.list}`}>
                <li className={`${boardCommentStyle.nickname}`}>{props.comment.user_nickname}</li>
                <li className={`${boardCommentStyle.cont}`}>{props.comment.content}</li>
                <li className={`${boardCommentStyle.time}`}>{listDateTime}</li>
                <li className={`${boardCommentStyle.action}`}>
                    <div>
                        <span>댓글</span>
                        <span>수정</span>
                        <span>삭제</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default SingleComment;

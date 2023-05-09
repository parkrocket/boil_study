import React, { useEffect, useState } from "react";
import SingleComment from "./SingleComment";

import axios from "axios";

function ReplyComment(props) {
    const renderReplyComment = () => {
        return props.commentList.map((comment, index) => (
            <React.Fragment key={index}>
                {comment.response === props.parentCommentId && (
                    <div style={{ width: "100%", paddingLeft: "40px" }}>
                        <SingleComment
                            key={index}
                            comment={comment}
                            refreshComment={props.refreshComment}></SingleComment>

                        <ReplyComment
                            refreshComment={props.refreshComment}
                            parentCommentId={comment.comment_id}
                            commentList={props.commentList}></ReplyComment>
                    </div>
                )}
            </React.Fragment>
        ));
    };

    return <React.Fragment>{renderReplyComment()}</React.Fragment>;
}

export default ReplyComment;

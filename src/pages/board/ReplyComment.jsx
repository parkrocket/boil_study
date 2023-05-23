import React from "react";
import SingleComment from "./SingleComment";

function ReplyComment(props) {
    const renderReplyComment = () => {
        return props.commentList.map((comment, index) => (
            <React.Fragment key={index}>
                {comment.response === props.parentCommentNo && (
                    <div style={{ width: "100%", paddingLeft: "0" }}>
                        <SingleComment
                            key={index}
                            comment={comment}
                            refreshComment={props.refreshComment}
                            depth={props.depth + 40}
                            changeDepth={props.changeDepth}></SingleComment>

                        <ReplyComment
                            refreshComment={props.refreshComment}
                            parentCommentNo={comment.comment_no}
                            commentList={props.commentList}
                            depth={props.depth + 40}></ReplyComment>
                    </div>
                )}
            </React.Fragment>
        ));
    };

    return <React.Fragment>{renderReplyComment()}</React.Fragment>;
}

export default ReplyComment;

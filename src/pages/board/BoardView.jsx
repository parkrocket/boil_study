import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Head from "../../components/Head";
import { SERVER_URL } from "../Config";

function BoardView() {
    const boardId = useParams().boardId;
    const [BoardView, setBoardView] = useState({});

    const navigate = useNavigate();
    console.log(BoardView);

    useEffect(() => {
        const data = { boardId: boardId };
        axios.post(`${SERVER_URL}/api/board/view`, data).then((response) => {
            if (response.data.viewsuccess === false) {
                alert("글 불러오기가 실패했습니다.");
                navigate("/board");
            }

            setBoardView(response.data.view);
        });
    }, [boardId, navigate]);

    return (
        <div>
            <Head></Head>
            <h2>{BoardView.subject}</h2>
            <div dangerouslySetInnerHTML={{ __html: BoardView.content }}></div>
            <div>
                <Link to="/board">목록으로</Link>
            </div>
        </div>
    );
}

export default BoardView;

import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Head from "../../components/Head";
import { SERVER_URL } from "../Config";
import boardViewStyle from '../../Css/boardView.module.scss'

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
            <div className={`${boardViewStyle.container}`}>
                <h2 className={`${boardViewStyle.tit} fontf`}>자유게시판</h2>
                <div className={`${boardViewStyle.wrapper}`}>
                    <h2 className={`${boardViewStyle.cont_tit}`}>{BoardView.subject}</h2>
                    <div dangerouslySetInnerHTML={{ __html: BoardView.content }} className={`${boardViewStyle.cont}`}></div>
                </div>
            </div>
            <div className={`${boardViewStyle.btn_box}`}>
                <Link to="/board" className={`${boardViewStyle.prev_btn}`}>목록으로</Link>
            </div>
        </div>
    );
}

export default BoardView;

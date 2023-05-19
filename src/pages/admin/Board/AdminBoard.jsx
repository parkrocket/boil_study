import React, { useState, useEffect } from "react";

import axios from "axios";
import { SERVER_URL } from "../../Config";
import { useParams, Link } from "react-router-dom";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import adminBoardStyle from "../../../Css/adminBoard.module.scss";

function AdminBoard() {
    const [boardList, setBoardList] = useState([]);

    const list = 8;

    let params = useParams();

    if (params.page === undefined) {
        params.page = 1;
    }

    useEffect(() => {
        axios
            .post(`${SERVER_URL}/api/admin/board/list`, { list: list, page: params.page })
            .then((response) => {
                setBoardList(response.data.list);
            });
    }, [params.page]);

    const adminboardList = boardList.map((list, index) => {
        return (
            <li key={index}>
                <Link to={`/board/${list.board_id}`} className={`${adminBoardStyle.board}`}>
                    <div className={`${adminBoardStyle.board_ico}`}>
                        <ContentPasteIcon/>
                        {/* <span>{index+1}</span> */}
                    </div>
                    <p>{list.board_id}</p>
                    <p>
                        <span>{list.board_name}</span>
                    </p>
                    <p>{list.upload_count}</p>
                </Link>
                <Link to={`/admin/board/update/${list.board_id}`} className={`${adminBoardStyle.retouch_btn}`}>수정</Link>
            </li>
        );
    });

    return (
        <div className={`${adminBoardStyle.admin_board}`}>
            <div className={`${adminBoardStyle.container}`}>
                <div className={`${adminBoardStyle.tit_box}`}>
                    <Link to="/admin/board/write" className={`${adminBoardStyle.tit}`}>게시판 만들기</Link>
                </div>
                <div className={`${adminBoardStyle.board_list}`}>{adminboardList}</div>
            </div>
        </div>
    );
}

export default AdminBoard;

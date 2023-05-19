import React, { useState, useEffect } from "react";

import axios from "axios";
import { SERVER_URL } from "../../Config";
import { useParams, Link } from "react-router-dom";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import adminBoardStyle from "../../../Css/adminBoard.module.scss";
import adminStyle from "../../../Css/admin.module.scss";

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
                    <p className={`${adminBoardStyle.index}`}>{index+1}</p>
                    <p className={`${adminBoardStyle.board_id}`}>{list.board_id}</p>
                    <p className={`${adminBoardStyle.board_name}`}>
                        <span>{list.board_name}</span>
                    </p>
                    <p className={`${adminBoardStyle.board_upload_count}`}>{list.upload_count}</p>
                </Link>
                <Link to={`/admin/board/update/${list.board_id}`} className={`${adminBoardStyle.retouch_btn}`}>수정</Link>
            </li>
        );
    });

    return (
        <div className={`${adminBoardStyle.admin_board} ${adminStyle.admin_outer}`}>
            <div className={`${adminBoardStyle.container} ${adminStyle.container}`}>
                <div className={`${adminStyle.tit_box}`}>
                    <h2 className={`${adminStyle.tit}`}><ContentPasteIcon/>게시판 목록</h2>
                </div>
                <div className={`${adminBoardStyle.board_list}`}>
                    <Link to="/admin/board/write" className={`${adminBoardStyle.board_add_btn}`}><AddCircleOutlineIcon/>게시판 만들기</Link>
                    <li className={`${adminBoardStyle.list_head}`}>
                        <div className={`${adminBoardStyle.board}`}>
                            <p className={`${adminBoardStyle.index}`}>NO</p>
                            <p className={`${adminBoardStyle.board_id}`}>ID</p>
                            <p className={`${adminBoardStyle.board_name}`}>이름</p>
                            <p className={`${adminBoardStyle.board_upload_count}`}>업로드 <br className={`${adminBoardStyle.mo_br}`}/>파일 수</p>
                        </div>
                    </li>
                    {adminboardList}
                </div>
            </div>
        </div>
    );
}

export default AdminBoard;

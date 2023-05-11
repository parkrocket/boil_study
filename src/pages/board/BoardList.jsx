import React, { useState } from "react";
import Head from "../../components/Head";
import boardListStyle from "../../Css/boardlist.module.scss";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SERVER_URL } from "../Config";
import moment from "moment";

function BoardList() {
    const [List, setList] = useState([]);

    useEffect(() => {
        axios.post(`${SERVER_URL}/api/board/list`, { page: 12 }).then((response) => {
            setList(response.data.list);
        });
    }, []);

    const boardList = List.map((list, index) => {
        const listDateTime = list.datetime
            ? moment(list.datetime).format("YYYY-MM-DD HH:mm:ss")
            : "";

        return (
            <li key={index}>
                <Link to={`/board/${list.board_id}`}>
                    <p className={`${boardListStyle.number}`}>{list.board_id}</p>
                    <p className={`${boardListStyle.nickname}`}>{list.user_nickname}</p>
                    <p className={`${boardListStyle.subject}`}>
                        <span>{list.subject}</span>
                        {list.comment !== 0 && <span>({list.comment})</span>}
                    </p>
                    <p className={`${boardListStyle.time}`}>{listDateTime}</p>
                </Link>
            </li>
        );
    });

    return (
        <div>
            <Head></Head>
            <div className={`${boardListStyle.container}`}>
                <h2 className={`${boardListStyle.tit} fontf`}>자유게시판</h2>
                <div className={boardListStyle.board_wrap}>
                    <Link to="/board/write" className={`${boardListStyle.write_btn}`}>
                        글작성하기 시작
                    </Link>
                </div>
                <div className={boardListStyle.board_wrap}>
                    <ul>{boardList}</ul>
                </div>
            </div>
        </div>
    );
}

export default BoardList;

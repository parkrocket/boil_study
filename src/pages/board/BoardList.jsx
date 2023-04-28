import React, { useState } from "react";
import Head from "../../components/Head";
import boardwriteStyle from "../../Css/boardlist.module.css";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { SERVER_URL } from "../Config";
import moment from "moment";

function BoardList() {
    const [List, setList] = useState([]);

    useEffect(() => {
        axios.post(`${SERVER_URL}/api/board/list`, { page: 10 }).then((response) => {
            setList(response.data.list);
        });
    }, []);

    const boardList = List.map((list, index) => {
        console.log(list);

        const listDateTime = list.datetime
            ? moment(list.datetime).format("YYYY-MM-DD HH:mm:ss")
            : "";

        return (
            <li key={index}>
                <Link to={`/board/${list.board_id}`}>
                    {list.board_id} {list.subject} {list.user_nickname} {listDateTime}
                </Link>
            </li>
        );
    });

    return (
        <div>
            <Head></Head>

            <div className={boardwriteStyle.board_wrap}>
                <ul>{boardList}</ul>
            </div>
            <div className={boardwriteStyle.board_wrap}>
                <Link to="/board/write">글작성하기</Link>
            </div>
        </div>
    );
}

export default BoardList;

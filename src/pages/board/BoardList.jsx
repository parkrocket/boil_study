import React, { useState } from "react";
import Head from "../../components/Head";
import boardListStyle from "../../Css/boardlist.module.scss";
import axios from "axios";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { SERVER_URL } from "../Config";
import moment from "moment";
import Paging from "../../components/Pagination";

function BoardList() {
    const [List, setList] = useState([]);
    const [count, setCount] = useState(0);
    //const [page, setPage] = useState(1);

    const list = 8;
    let params = useParams();

    if (params.page === undefined) {
        params.page = 1;
    }

    useEffect(() => {
        axios
            .post(`${SERVER_URL}/api/board/list`, { list: list, page: params.page })
            .then((response) => {
                console.log(response.data.list);

                setList(response.data.list);
                setCount(response.data.count);
            });
    }, [params.page]);

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
                <div className="boardlist_pagination_box">
                    <Paging count={count} page={Number(params.page)} list={list}></Paging>
                </div>
            </div>
        </div>
    );
}

export default BoardList;

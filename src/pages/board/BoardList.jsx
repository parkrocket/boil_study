import React, { useState } from "react";
import Head from "../../components/Head";
import boardListStyle from "../../Css/boardlist.module.scss";
import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SERVER_URL } from "../Config";
import moment from "moment";
import Paging from "../../components/Pagination";

function BoardList() {
    const [List, setList] = useState([]);
    const [count, setCount] = useState(0);
    const [boardSubject, setBoardSubject] = useState("");

    const pageList = 8;
    let params = useParams();
    const navigate = useNavigate();

    if (params.page === undefined) {
        params.page = 1;
    }

    if (params.boardId === undefined) {
        params.boardId = "free";
    }

    useEffect(() => {
        axios
            .post(`${SERVER_URL}/api/admin/board/boardInfo`, { boardId: params.boardId })
            .then((response) => {
                if (response.data.info === undefined) {
                    alert("해당 게시판이 존재하지 않습니다.");
                    navigate("/");
                }
                console.log(response.data.info);
                setBoardSubject(response.data.info.board_name);
            });

        axios
            .post(`${SERVER_URL}/api/board/list`, {
                list: pageList,
                page: params.page,
                boardId: params.boardId,
            })
            .then((response) => {
                setList(response.data.list);
                setCount(response.data.count);
            });
    }, [params.page, params.boardId, navigate]);

    const boardList =
        List &&
        List.map((list, index) => {
            const listDateTime = list.datetime
                ? moment(list.datetime).format("YYYY-MM-DD HH:mm:ss")
                : "";

            //게시판 넘버링 계산식 총 게시물수 - 반복인덱스 - (현재페이지 - 1) * 한페이지당 보이는 게시글수
            const numbering = count - index - (params.page - 1) * pageList;

            return (
                <li key={index}>
                    <Link to={`/board/${params.boardId}/${list.wr_no}`}>
                        <p className={`${boardListStyle.number}`}>{numbering}</p>
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
                <h2 className={`${boardListStyle.tit} fontf`}>{boardSubject}</h2>
                <div className={boardListStyle.board_wrap}>
                    <Link
                        to={`/board/${params.boardId}/write`}
                        className={`${boardListStyle.write_btn}`}>
                        글 작성하기
                    </Link>
                </div>
                <div className={boardListStyle.board_wrap}>
                    <ul>{boardList}</ul>
                </div>
                <div className="boardlist_pagination_box">
                    <Paging
                        count={count}
                        page={Number(params.page)}
                        list={pageList}
                        path="/board/page/"></Paging>
                </div>
            </div>
        </div>
    );
}

export default BoardList;

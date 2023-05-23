import React, { useEffect, useState } from "react";
import "../App.css";
import Head from "../components/Head";
import Footer from "../components/Footer";
import axios from "axios";

import BoardLatest from "./board/BoardLatest";
import { SERVER_URL } from "./Config";

function Main() {
    const [latestList, setLatestList] = useState([]);

    //통신
    useEffect(() => {
        axios.post(`${SERVER_URL}/api/board/boards`).then((response) => {
            if (response.data.boardsListSuccess === false) {
                alert("게시판을 불러오는데 실패하였습니다.");
            }
            setLatestList(response.data.boardsList);
        });
    }, []);

    return (
        <div>
            <Head></Head>
            <div className="container_wrap">
                <BoardLatest latestList={latestList}></BoardLatest>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Main;

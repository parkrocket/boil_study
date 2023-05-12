import React, { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_URL } from "../Config";
import moment from "moment";

function BoardLatest() {
    const [latestList, setLatestList] = useState([]);

    useEffect(() => {
        axios
            .post(`${SERVER_URL}/api/board/latest`, { table: `board`, count: 5 })
            .then((response) => {
                setLatestList(response.data.list);
            });
    }, []);

    const boardList = latestList.map((list, index) => {
        const listDateTime = list.datetime
            ? moment(list.datetime).format("YYYY-MM-DD HH:mm:ss")
            : "";

        return (
            <li key={index}>
                <span>{list.board_id}</span>
                <span>{list.subject}</span>
                <span>{list.comment}</span>
                <span>{listDateTime}</span>
            </li>
        );
    });

    return (
        <div>
            <ul>{boardList}</ul>
        </div>
    );
}

export default BoardLatest;

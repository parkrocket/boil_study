import React, { useState, useEffect } from "react";
import AdminLnb from "../AdminLnb";
import AdminHead from "../AdminHead";
import AdminFoot from "../AdminFoot";
import adminStyle from "../../../Css/admin.module.scss";
import { ChakraProvider } from "@chakra-ui/react";
import axios from "axios";
import { SERVER_URL } from "../../Config";
import { useParams, Link } from "react-router-dom";

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
    }, []);

    const adminboardList = boardList.map((list, index) => {
        return (
            <li key={index}>
                <Link to={`/board/${list.board_id}`}>
                    <p>{list.board_id}</p>
                    <p>
                        <span>{list.board_name}</span>
                    </p>
                </Link>
            </li>
        );
    });

    return (
        <ChakraProvider>
            <div className={`${adminStyle.admin}`}>
                <AdminLnb></AdminLnb>
                <div className={`${adminStyle.right}`}>
                    <AdminHead></AdminHead>
                    <div>
                        <Link to="/admin/board/write">게시판 만들기</Link>
                    </div>
                    <div>{adminboardList}</div>
                    <AdminFoot></AdminFoot>
                </div>
            </div>
        </ChakraProvider>
    );
}

export default AdminBoard;

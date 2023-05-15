import React, { useState } from "react";
import AdminLnb from "../AdminLnb";
import AdminHead from "../AdminHead";
import AdminFoot from "../AdminFoot";
import adminStyle from "../../../Css/admin.module.scss";
import { ChakraProvider } from "@chakra-ui/react";
import axios from "axios";
import { SERVER_URL } from "../../Config";
import { useNavigate } from "react-router-dom";

function AdminBoardWrite() {
    const [tableId, setTableId] = useState("");
    const [tableName, setTableName] = useState("");

    const navigate = useNavigate();

    function tableIdChangeHandler(e) {
        setTableId(e.target.value);
    }

    function tableNameChangeHandler(e) {
        setTableName(e.target.value);
    }

    function onSubmitHandler(e) {
        const data = { tableId: tableId, tableName: tableName };

        axios.post(`${SERVER_URL}/api/admin/board/insert`, data).then((response) => {
            console.log(response);
            if (
                response.data.boardInsertSuccess &&
                response.data.createTablesuccess &&
                response.data.commentInsertSuccess
            ) {
                alert("게시판이 생성되었습니다.");
                navigate(`/admin/board`);
            } else {
                alert("게시판 생성에 실패하셨습니다.");
            }
        });

        e.preventDefault();
    }

    return (
        <ChakraProvider>
            <div className={`${adminStyle.admin}`}>
                <AdminLnb></AdminLnb>
                <div className={`${adminStyle.right}`}>
                    <AdminHead></AdminHead>
                    <div>
                        <form onSubmit={onSubmitHandler}>
                            테이블 ID
                            <input
                                type="text"
                                defaultValue=""
                                onChange={tableIdChangeHandler}></input>
                            테이블 이름
                            <input
                                type="text"
                                defaultValue=""
                                onChange={tableNameChangeHandler}></input>
                            <button>전송</button>
                        </form>
                    </div>
                    <AdminFoot></AdminFoot>
                </div>
            </div>
        </ChakraProvider>
    );
}

export default AdminBoardWrite;

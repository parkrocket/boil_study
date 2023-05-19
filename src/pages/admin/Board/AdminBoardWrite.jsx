import React, { useState, useEffect, useRef } from "react";
import { Select } from "@chakra-ui/react";
import axios from "axios";
import { SERVER_URL } from "../../Config";
import { useNavigate, useParams } from "react-router-dom";
import adminBoardStyle from "../../../Css/adminBoard.module.scss";


function AdminBoardWrite() {
    const [tableId, setTableId] = useState("");
    const [tableName, setTableName] = useState("");
    const [fileUploadNumber, setFileUploadNumber] = useState(2);

    const navigate = useNavigate();
    const params = useParams();
    const ref = useRef();

    let apiUrl = "";
    if (params.boardId === undefined) {
        apiUrl = `${SERVER_URL}/api/admin/board/insert`;
    } else {
        apiUrl = `${SERVER_URL}/api/admin/board/update`;
    }
    useEffect(() => {
        if (params.boardId !== undefined) {
            axios
                .post(`${SERVER_URL}/api/admin/board/view`, { boardId: params.boardId })
                .then((response) => {
                    if (response.data.boardViewSuccess === false) {
                        alert("게시물을 불러오지 못했습니다.");
                    }

                    setTableId(response.data.view.board_id);
                    setTableName(response.data.view.board_name);
                    setFileUploadNumber(response.data.view.upload_count);
                });

            ref.current.readOnly = true;
        }
    }, [params.boardId]);

    function tableIdChangeHandler(e) {
        setTableId(e.target.value);
    }

    function tableNameChangeHandler(e) {
        setTableName(e.target.value);
    }

    function onSubmitHandler(e) {
        const data = { tableId: tableId, tableName: tableName, uploadCount: fileUploadNumber };

        axios.post(apiUrl, data).then((response) => {
            if (params.boardId !== undefined) {
                if (response.data.boardUpdateSuccess) {
                    alert("게시판이 수정되었습니다.");
                    navigate(`/admin/board`);
                } else {
                    alert("게시판 수정에 실패하셨습니다.");
                }
            } else {
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
            }
        });

        e.preventDefault();
    }

    const uploadCountOption = [...Array(10)].map((el, index) => {
        return (
            <option key={index} defaultValue={index}>
                {index}
            </option>
        );
    });

    function selectChangeHandler(e) {
        setFileUploadNumber(e.target.value);
    }

    console.log(fileUploadNumber);

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                테이블 ID
                <input
                    type="text"
                    defaultValue={tableId}
                    onChange={tableIdChangeHandler}
                    ref={ref}></input>
                테이블 이름
                <input
                    type="text"
                    defaultValue={tableName}
                    onChange={tableNameChangeHandler}></input>
                업로드 파일 갯수
                <Select
                    placeholder="업로드 파일 갯수"
                    value={fileUploadNumber}
                    onChange={selectChangeHandler}>
                    {uploadCountOption}
                </Select>
                <button>전송</button>
            </form>
        </div>
    );
}

export default AdminBoardWrite;

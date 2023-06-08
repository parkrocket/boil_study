import React, { useState, useEffect, useRef } from "react";
import { Select } from "@chakra-ui/react";
import axios from "axios";
import { SERVER_URL } from "../../Config";
import { useNavigate, useParams } from "react-router-dom";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import adminBoardWriteStyle from "../../../Css/adminBoardWrite.module.scss";
import adminStyle from "../../../Css/admin.module.scss";

function AdminBoardWrite() {
    const [tableId, setTableId] = useState("");
    const [tableName, setTableName] = useState("");
    const [downPoint, setDownPoint] = useState(0);
    const [readPoint, setReadPoint] = useState(0);
    const [writePoint, setWritePoint] = useState(0);
    const [commentPoint, setCommentPoint] = useState(0);
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
                    setDownPoint(response.data.view.download_point);
                    setReadPoint(response.data.view.read_point);
                    setWritePoint(response.data.view.write_point);
                    setCommentPoint(response.data.view.comment_point);
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

    function downPointHandler(e) {
        setDownPoint(e.target.value);
    }

    function readPointHandler(e) {
        setReadPoint(e.target.value);
    }

    function writePointHandler(e) {
        setWritePoint(e.target.value);
    }

    function commentPointHandler(e) {
        setCommentPoint(e.target.value);
    }

    function onSubmitHandler(e) {
        const data = {
            tableId: tableId,
            tableName: tableName,
            uploadCount: fileUploadNumber,
            downPoint: downPoint,
            readPoint: readPoint,
            writePoint: writePoint,
            commentPoint: commentPoint,
        };

        axios.post(apiUrl, data).then((response) => {
            console.log(response);
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
        <div className={`${adminBoardWriteStyle.admin_board_write} ${adminStyle.admin_outer}`}>
            <div className={`${adminStyle.container}`}>
                <div className={`${adminStyle.tit_box}`}>
                    <h2 className={`${adminStyle.tit}`}>
                        <ContentPasteIcon />
                        게시판 등록
                    </h2>
                </div>
                <div className={`${adminBoardWriteStyle.form_box}`}>
                    <form onSubmit={onSubmitHandler}>
                        <div>
                            <label>테이블 ID</label>
                            <input
                                type="text"
                                defaultValue={tableId}
                                onChange={tableIdChangeHandler}
                                ref={ref}></input>
                        </div>
                        <div>
                            <label>테이블 이름</label>
                            <input
                                type="text"
                                defaultValue={tableName}
                                onChange={tableNameChangeHandler}></input>
                        </div>
                        <div>
                            <label>다운로드 소모 포인트</label>
                            <input
                                type="text"
                                value={downPoint}
                                onChange={downPointHandler}></input>
                        </div>
                        <div>
                            <label>글읽을때 소모 포인트</label>
                            <input
                                type="text"
                                value={readPoint}
                                onChange={readPointHandler}></input>
                        </div>
                        <div>
                            <label>글쓸때 획득 포인트</label>
                            <input
                                type="text"
                                value={writePoint}
                                onChange={writePointHandler}></input>
                        </div>
                        <div>
                            <label>댓글쓸때 획득 포인트</label>
                            <input
                                type="text"
                                value={commentPoint}
                                onChange={commentPointHandler}></input>
                        </div>
                        <div>
                            <label>업로드 파일 갯수</label>
                            <Select
                                placeholder="업로드 파일 갯수"
                                value={fileUploadNumber}
                                onChange={selectChangeHandler}>
                                {uploadCountOption}
                            </Select>
                        </div>
                        <button className={`${adminBoardWriteStyle.submit_btn}`}>전송</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminBoardWrite;

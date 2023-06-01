import React, { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../Config";
import Paging from "../../../components/Pagination";
import { useParams, Link } from "react-router-dom";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import adminUserListStyle from "../../../Css/adminUserList.module.scss";
import adminStyle from "../../../Css/admin.module.scss";
import moment from "moment";
import * as xlsx from "xlsx";

function UserList() {
    const [userList, setUserList] = useState([]);
    const [userExcelList, setUserExcelList] = useState([]);
    const [count, setCount] = useState(0);
    const [checkItems, setCheckItems] = useState([]);

    const handleSingleCheck = (checked, id) => {
        if (checked) {
            setCheckItems((prev) => [...prev, id]);
        } else {
            setCheckItems(checkItems.filter((el) => el !== id));
        }
    };

    const handleAllCheck = (checked) => {
        if (checked) {
            const idArray = [];
            userList.forEach((el) => idArray.push(el.user_no));
            setCheckItems(idArray);
        } else {
            setCheckItems([]);
        }
    };

    let params = useParams();

    if (params.page === undefined) {
        params.page = 1;
    }

    const listCount = 20;

    useEffect(() => {
        const data = { listCount: listCount, page: params.page };
        axios.post(`${SERVER_URL}/api/admin/users/list`, data).then((response) => {
            if (response.data.adminUsersListSuccess === false) {
                alert("회원정보를 불러오는데 실패하였습니다.");
            }

            setCount(response.data.count);
            setUserList(response.data.userList);
        });
    }, [params.page]);

    const userListArray = userList.map((user, index) => {
        const listDateTime = user.user_datetime
            ? moment(user.user_datetime).format("YYYY-MM-DD HH:mm:ss")
            : "";
        return (
            <li key={user.user_no}>
                <div className={`${adminUserListStyle.check_box}`}>
                    <input
                        type="checkbox"
                        name="user_no[]"
                        className="user_check"
                        defaultValue={user.user_no}
                        onChange={(e) => handleSingleCheck(e.target.checked, user.user_no)}
                        checked={checkItems.includes(user.user_no) ? true : false}></input>
                </div>
                <p className={`${adminUserListStyle.user_id}`}>{user.user_id}</p>
                <p className={`${adminUserListStyle.user_name}`}>{user.user_name}</p>
                <p className={`${adminUserListStyle.user_nickname}`}>{user.user_nickname}</p>
                <p className={`${adminUserListStyle.user_datetime}`}>{listDateTime}</p>
                <p>
                    <Link
                        to={`/admin/users/update/${user.user_no}`}
                        className={`${adminUserListStyle.retouch_btn}`}>
                        수정
                    </Link>
                </p>
            </li>
        );
    });

    function userCheckHandler(e) {
        if (checkItems.length === 0) {
            alert(`삭제할 데이터가 없습니다.`);

            return;
        }

        if (window.confirm(`${checkItems.length}개를 삭제하시겠습니까?`)) {
            const data = { memberList: checkItems, listCount: listCount, page: params.page };

            axios.post(`${SERVER_URL}/api/admin/users/delete`, data).then((response) => {
                setCount(response.data.count);
                setUserList(response.data.userList);

                alert("삭제에 성공했습니다.");
            });
        }
    }

    function userExcelHandler(e) {
        if (checkItems.length === 0) {
            alert(`다운로드할 데이터가 없습니다.`);

            return;
        }

        if (window.confirm(`${checkItems.length}개를 엑셀다운로드 하시겠습니까?`)) {
            const data = { memberList: checkItems, listCount: listCount, page: params.page };

            axios.post(`${SERVER_URL}/api/admin/users/excelDown`, data).then((response) => {
                const ws = xlsx.utils.json_to_sheet(response.data.list);

                const wb = xlsx.utils.book_new();

                xlsx.utils.book_append_sheet(wb, ws, "Sheet1");

                xlsx.writeFile(wb, "users.xlsx");
            });
        }
    }

    return (
        <div className={`${adminStyle.admin_outer}`}>
            <div className={`${adminUserListStyle.container} ${adminStyle.container}`}>
                <div className={`${adminStyle.tit_box}`}>
                    <h2 className={`${adminStyle.tit}`}>
                        <ManageAccountsIcon />
                        회원 관리
                    </h2>
                </div>
                <ul className={`${adminUserListStyle.user_list}`}>
                    <li className={`${adminUserListStyle.list_head}`}>
                        <div className={`${adminUserListStyle.check_box}`}>
                            <input
                                type="checkbox"
                                name="select-all"
                                onChange={(e) => handleAllCheck(e.target.checked)}
                                checked={checkItems.length === userList.length ? true : false}
                            />
                        </div>
                        <p>ID</p>
                        <p>이름</p>
                        <p>닉네임</p>
                        <p>가입일</p>
                        <p></p>
                    </li>
                    {userListArray}
                </ul>
                <div className={`${adminUserListStyle.delete_box}`}>
                    <button
                        onClick={userExcelHandler}
                        className={`${adminUserListStyle.delete_btn}`}>
                        엑셀 다운로드
                    </button>
                    <button
                        onClick={userCheckHandler}
                        className={`${adminUserListStyle.delete_btn}`}>
                        삭제
                    </button>
                </div>
                <div className={`boardlist_pagination_box ${adminUserListStyle.pagination}`}>
                    <Paging
                        count={count}
                        page={Number(params.page)}
                        list={listCount}
                        path="/admin/users/page/"></Paging>
                </div>
            </div>
        </div>
    );
}

export default UserList;

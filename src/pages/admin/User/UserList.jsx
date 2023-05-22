import React, { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../Config";
import Paging from "../../../components/Pagination";
import { useParams } from "react-router-dom";

function UserList() {
    const [userList, setUserList] = useState([]);
    const [count, setCount] = useState(0);

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

    const userListArray = userList.map((user) => {
        return (
            <li key={user.user_no}>
                <span>
                    <input
                        type="checkbox"
                        name="user_no[]"
                        className="user_check"
                        defaultValue={user.user_no}></input>
                </span>
                {user.user_id} {user.user_name} {user.user_nickname} {user.user_datetime}
            </li>
        );
    });

    function userCheckHandler(e) {
        const query = 'input[name="user_no[]"]:checked';

        const formData = new FormData();
        console.log(document.querySelectorAll(query));
    }

    return (
        <div>
            <ul>{userListArray}</ul>
            <div>
                <button onClick={userCheckHandler}>버튼</button>
            </div>
            <div className="boardlist_pagination_box">
                <Paging
                    count={count}
                    page={Number(params.page)}
                    list={listCount}
                    path="/admin/users/page/"></Paging>
            </div>
        </div>
    );
}

export default UserList;

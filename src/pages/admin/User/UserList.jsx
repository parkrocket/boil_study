import React, { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../Config";
import Paging from "../../../components/Pagination";
import { useParams } from "react-router-dom";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import adminUserListStyle from "../../../Css/adminUserList.module.scss";
import adminStyle from "../../../Css/admin.module.scss";

function UserList() {
    const [userList, setUserList] = useState([]);
    const [count, setCount] = useState(0);
    const [checkItems, setCheckItems] = useState([]);

    const handleSingleCheck = (checked, id) => {
        if (checked) {
        setCheckItems(prev => [...prev, id]);
        } else {
            setCheckItems(checkItems.filter((el) => el !== id));
        }
    };

    const handleAllCheck = (checked) => {
        if(checked) {
        const idArray = [];
        userList.forEach((el) => idArray.push(el.user_id));
        setCheckItems(idArray);
        }
        else {
        setCheckItems([]);
        }
    }
    
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


    const userListArray = userList.map((user , index) => {
        return (
            <li key={user.user_no}>
                <div className={`${adminUserListStyle.check_box}`}>
                    <input
                        type="checkbox"
                        name="user_no[]"
                        className="user_check"
                        defaultValue={user.user_no}
                        onChange={(e) => handleSingleCheck(e.target.checked, user.user_id)}
                        checked={checkItems.includes(user.user_id) ? true : false}
                        ></input>
                </div>
                <p className={`${adminUserListStyle.user_id}`}>{user.user_id}</p>
                <p className={`${adminUserListStyle.user_name}`}>{user.user_name}</p>
                <p className={`${adminUserListStyle.user_nickname}`}>{user.user_nickname}</p>
                <p className={`${adminUserListStyle.user_datetime}`}>{user.user_datetime}</p>
            </li>
        );
    });

    function userCheckHandler(e) {
        const query = 'input[name="user_no[]"]:checked';

        const formData = new FormData();
        console.log(document.querySelectorAll(query));
    }

    return (
        <div className={`${adminStyle.admin_outer}`}>
            <div className={`${adminUserListStyle.container} ${adminStyle.container}`}>
                <div className={`${adminStyle.tit_box}`}>
                    <h2 className={`${adminStyle.tit}`}><ManageAccountsIcon/>회원 관리</h2>
                </div>
                <ul className={`${adminUserListStyle.user_list}`}>
                    <li className={`${adminUserListStyle.list_head}`}>
                        <div className={`${adminUserListStyle.check_box}`}>
                            <input 
                            type="checkbox"
                            name='select-all'
                            onChange={(e) => handleAllCheck(e.target.checked)}
                            checked={checkItems.length === userList.length ? true : false}
                            />
                        </div>
                        <p>ID</p>
                        <p>이름</p>
                        <p>닉네임</p>
                        <p>가입일</p>
                    </li>
                    {userListArray}
                </ul>
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
        </div>
    );
}

export default UserList;

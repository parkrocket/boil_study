import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../../Config";
import { Input, Button, Select } from "@chakra-ui/react";

function UserUpdate() {
    const [userNo, setUserNo] = useState("");
    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");
    const [userNickName, setUserNickName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userRole, setUserRole] = useState(0);

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const data = { userNo: params.userNo };

        axios.post(`${SERVER_URL}/api/admin/users/info`, data).then((response) => {
            if (response.data.userInfoSuccess === false) {
                alert("사용자 정보 로딩에 실패했습니다.");
                navigate("/admin/users");
            }

            setUserId(response.data.userInfo.user_id);
            setUserName(response.data.userInfo.user_name);
            setUserNickName(response.data.userInfo.user_nickname);
            setUserEmail(response.data.userInfo.user_email);
            setUserRole(response.data.userInfo.user_role);
            setUserNo(response.data.userInfo.user_no);
        });
    }, [params.userNo, navigate]);

    function selectChangeHandler(e) {
        setUserRole(e.target.value);
    }

    function userSubmitHandler(e) {
        const data = {
            userNo: userNo,
            userId: userId,
            userName: userName,
            userNickName: userNickName,
            userEmail: userEmail,
            userRole: userRole,
        };

        axios.post(`${SERVER_URL}/api/admin/users/update`, data).then((response) => {
            if (response.data.userUpdateSuccess === false) {
                alert("수정에 실패했습니다.");
            } else {
                alert("수정되었습니다.");
            }
        });
    }
    return (
        <div>
            <Input defaultValue={userId} readOnly />
            <Input defaultValue={userName} />
            <Input defaultValue={userNickName} />
            <Input defaultValue={userEmail} />
            <Select value={userRole} onChange={selectChangeHandler}>
                <option value="0">일반</option>
                <option value="1">관리자</option>
            </Select>
            <Button onClick={userSubmitHandler}>수정하기</Button>
        </div>
    );
}

export default UserUpdate;

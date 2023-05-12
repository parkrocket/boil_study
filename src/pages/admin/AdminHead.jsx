import React from "react";
import adminStyle from '../../Css/admin.module.scss';
import { Avatar } from "@chakra-ui/react";
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function AdminHead() {
    return (
        <div className={`${adminStyle.admin_head}`}>
            <div className={`${adminStyle.container}`}>
                <div className={`${adminStyle.left}`}>
                    <a href="" className={`${adminStyle.ham_btn}`}><MenuIcon/></a>
                </div>
                <div className={`${adminStyle.right}`}>
                    <ul className={`${adminStyle.util}`}>
                        <li>
                            <ul className={`${adminStyle.util_sub}`}>
                                <li><a href="">관리자</a></li>
                                <li><a href="">무료모집</a></li>
                            </ul>
                        </li>
                        <li>
                            <div className={`${adminStyle.profile}`}>
                                <Avatar className={`${adminStyle.img}`}></Avatar>
                                <p><span>nickName</span><ArrowDropDownIcon/></p>
                            </div>
                            <ul className={`${adminStyle.profile_sub}`}>
                                <li><a href="">쿠폰</a></li>
                                <li><a href="">광고주 정보수정</a></li>
                                <li><a href="">고객센터</a></li>
                                <li><a href="">오늘리뷰</a></li>
                                <li><a href="">로그아웃<LogoutIcon/></a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AdminHead;

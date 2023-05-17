import React, { useState } from "react";
import adminStyle from '../../Css/admin.module.scss';
import { Avatar } from "@chakra-ui/react";
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { NavLink, Link } from "react-router-dom";


function AdminHead(props) {

    const [nickNameClick, setNickNameClick] = useState(false);
    const [gnbMenuClick, setgnbMenuClick] = useState(false);

    const handleNickNameClick = () => {
        setNickNameClick(!nickNameClick);
        console.log(nickNameClick);
    };

    return (
        <div className={`${adminStyle.admin_head}`}>
            <div className={`${adminStyle.container}`}>
                <div className={`${adminStyle.left}`}>
                    <Link to="" className={`${adminStyle.ham_btn}`}><MenuIcon/></Link>
                </div>
                <div className={`${adminStyle.right}`}>
                    <ul className={`${adminStyle.util}`}>
                        <li>
                            <ul className={`${adminStyle.util_sub}`}>
                                <li><NavLink to="/admin">관리자</NavLink></li>
                                <li><NavLink to="/free">무료모집</NavLink></li>
                            </ul>
                        </li>
                        <li>
                            <div className={`${adminStyle.profile}`} onClick={handleNickNameClick}>
                                <Avatar className={`${adminStyle.img}`}></Avatar>
                                <p className={`${nickNameClick ? adminStyle.active : ""}`}><span>nickName</span><ArrowDropDownIcon/></p>
                            </div>
                            <ul className={`${adminStyle.profile_sub} ${nickNameClick ? adminStyle.active : ""}`}>
                                <li><NavLink to="">쿠폰</NavLink></li>
                                <li><NavLink to="">광고주 정보수정</NavLink></li>
                                <li><NavLink to="">고객센터</NavLink></li>
                                <li><NavLink to="">오늘리뷰</NavLink></li>
                                <li><NavLink to="">로그아웃<LogoutIcon/></NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AdminHead;

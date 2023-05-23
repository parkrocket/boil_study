import React, { useState } from "react";
import adminStyle from "../../Css/admin.module.scss";
import { Avatar } from "@chakra-ui/react";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../_actions/user_actions";
import { useCookies } from "react-cookie";

function AdminHead(props) {
    const [nickNameClick, setNickNameClick] = useState(false);
    const [, , removeCookie] = useCookies(["x_auth"]);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    const handleNickNameClick = () => {
        setNickNameClick(!nickNameClick);
    };

    const handleHamClick = () => {
        const booleanObject = {
            AdminLnbOpen: !props.hamClick,
        };
        window.localStorage.setItem("AdminLnbOpen", JSON.stringify(booleanObject));

        props.setHamClick(!props.hamClick);
    };

    const logOutHandler = (event) => {
        dispatch(logout(user)).then((response) => {
            console.log(response);
            if (response.payload.success === true) {
                localStorage.removeItem("userId");
                removeCookie("x_auth");
                navigate("/");
            } else {
                alert("로그아웃에 실패하였습니다.");
            }
        });
    };

    return (
        <div className={`${adminStyle.admin_head}`}>
            <div className={`${adminStyle.container}`}>
                <div className={`${adminStyle.left}`}>
                    <button onClick={handleHamClick} className={`${adminStyle.ham_btn}`}>
                        <MenuIcon />
                    </button>
                </div>
                <div className={`${adminStyle.right}`}>
                    <ul className={`${adminStyle.util}`}>
                        <li>
                            <ul className={`${adminStyle.util_sub}`}>
                                <li>
                                    <NavLink to="/admin">관리자</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/free">무료모집</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className={`${adminStyle.profile}`} onClick={handleNickNameClick}>
                                <Avatar
                                    className={`${adminStyle.img}`}
                                    src={user.auth.image}></Avatar>
                                <p className={`${nickNameClick ? adminStyle.active : ""}`}>
                                    <span>{user.auth.nickName}</span>
                                    <ArrowDropDownIcon />
                                </p>
                            </div>
                            <ul
                                className={`${adminStyle.profile_sub} ${
                                    nickNameClick ? adminStyle.active : ""
                                }`}>
                                {/*
                                <li>
                                    <NavLink to="">쿠폰</NavLink>
                                </li>
                                <li>
                                    <NavLink to="">광고주 정보수정</NavLink>
                                </li>
                                <li>
                                    <NavLink to="">고객센터</NavLink>
                                </li>
                                <li>
                                    <NavLink to="">오늘리뷰</NavLink>
                                </li>
                                 */}
                                <li onClick={logOutHandler}>
                                    <NavLink to="">
                                        로그아웃
                                        <LogoutIcon />
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AdminHead;

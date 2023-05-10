import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { logout } from "../_actions/user_actions";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@chakra-ui/react";

function HeadRight(props) {
    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(["x_auth"]);
    const [profile, setProfile] = useState(`${user.auth.image}`);
    const [isHovering, setIsHovering] = useState(false);
    

    const handleClick = () => {
        props.setIsClick(!props.isClick);
    };
    let toggleClassCheck = props.isClick ? 'active' : '';

    const handleMouseEnter = () => {
        setIsHovering(true);
    };
    const handleMouseLeave = () => {
        setIsHovering(false);
    };
    let isHoveringCheck = isHovering ? 'active' : '';

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

    if (user.auth && !user.auth.isAuth) {
        return (
            <ul className="head-login">
                <li>
                    <Link to="/login">로그인</Link>
                </li>
                <li>
                    <Link to="/register">회원가입</Link>
                </li>
                <li>
                    <button className={`ham_btn ${toggleClassCheck}`} onClick={handleClick}><span></span></button>
                </li>
            </ul>
        );
    } else {
        return (
            <ul className="head-login">
                <li>
                    <Link to="/admin">관리자</Link>
                </li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className="profile">
                        <Avatar src={profile} className="img"></Avatar>
                        <p>{user.auth.nickName}</p>
                    </div>
                    <ul className={`head-login-sub ${isHoveringCheck}`}>
                        <li>
                            <Link to="/mypage">마이페이지</Link>
                        </li>
                        <li>
                            <a href="#!" onClick={logOutHandler}>
                                로그아웃
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <button className={`ham_btn ${toggleClassCheck}`} onClick={handleClick}><span></span></button>
                </li>
            </ul>
        );
    }
}

export default HeadRight;

import React from "react";
import { Link } from "react-router-dom";

function HeadMenu(props) {
    let toggleClassCheck = props.isClick ? "active" : "";

    return (
        <ul className={`main_gnb ${toggleClassCheck}`} onMouseEnter={() => {props.setIsHover(true)}}>
            <li>
                <Link to="/introduce">자기소개</Link>
                <ul className="main_sub_gnb">
                    <li>
                        <Link>자기소개1</Link>
                    </li>
                    <li>
                        <Link>자기소개2</Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="/board">자유게시판</Link>
                <ul className="main_sub_gnb">
                    <li>
                        <Link>자유게시판1</Link>
                    </li>
                    <li>
                        <Link>자유게시판2</Link>
                    </li>
                    <li>
                        <Link>자유게시판3</Link>
                    </li>
                    <li>
                        <Link>자유게시판4</Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="/board/notice">공지사항</Link>
                <ul className="main_sub_gnb">
                    <li>
                        <Link>공지사항1</Link>
                    </li>
                    <li>
                        <Link>공지사항2</Link>
                    </li>
                    <li>
                        <Link>공지사항3</Link>
                    </li>
                </ul>
            </li>
        </ul>
    );
}

export default HeadMenu;

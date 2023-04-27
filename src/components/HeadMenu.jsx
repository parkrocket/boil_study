import React from "react";
import { Link } from "react-router-dom";

function HeadMenu() {
    return (
        <ul className="gnb">
            <li>
                <Link to="/introduce">자기소개</Link>
            </li>
            <li>
                <Link to="/board">자유게시판</Link>
            </li>
            <li>
                <Link to="/ppp">404에러</Link>
            </li>
        </ul>
    );
}

export default HeadMenu;

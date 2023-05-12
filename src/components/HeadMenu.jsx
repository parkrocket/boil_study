import React from "react";
import { Link } from "react-router-dom";

function HeadMenu(props) {
    let toggleClassCheck = props.isClick ? "active" : "";

    return (
        <ul className={`gnb ${toggleClassCheck}`}>
            <li>
                <Link to="/introduce">자기소개</Link>
            </li>
            <li>
                <Link to="/board">자유게시판</Link>
            </li>
        </ul>
    );
}

export default HeadMenu;

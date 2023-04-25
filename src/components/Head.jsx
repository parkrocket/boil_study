import React from "react";
import { Link } from "react-router-dom";
import HeadRight from "./HeadRight";

function Head() {
    //console.log(user.auth.isAuth);

    return (
        <div>
            <div id="header">
                <div className="header-inner">
                    <h1 className="logo fontf">
                        <Link to="/">kakao</Link>
                    </h1>
                    <ul className="gnb">
                        <li>
                            <Link to="/introduce">자기소개</Link>
                        </li>
                        <li>
                            <Link to="">메뉴2</Link>
                        </li>
                        <li>
                            <Link to="">메뉴3</Link>
                        </li>
                    </ul>
                    <HeadRight></HeadRight>
                </div>
            </div>
        </div>
    );
}

export default Head;

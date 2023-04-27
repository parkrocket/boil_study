import React from "react";
import { Link } from "react-router-dom";
import HeadRight from "./HeadRight";
import HeadMenu from "./HeadMenu";

function Head() {
    //console.log(user.auth.isAuth);

    return (
        <div>
            <div id="header">
                <div className="header-inner">
                    <h1 className="logo fontf">
                        <Link to="/">kakao</Link>
                    </h1>
                    <HeadMenu></HeadMenu>
                    <HeadRight></HeadRight>
                </div>
            </div>
        </div>
    );
}

export default Head;

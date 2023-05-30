import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeadRight from "./HeadRight";
import HeadMenu from "./HeadMenu";

function Head() {
    //console.log(user.auth.isAuth);

    const [isClick, setIsClick] = useState(false);
    const [isScroll, setIsScroll] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const handleScroll = () => {
        // console.log(document.getElementById("root").offsetHeight);

        if (document.getElementById("root").offsetHeight > 1200) {
            if (window.scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        }
    };
    let scrollCheck = isScroll ? "active" : "";
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <div id="header" className={`${scrollCheck} ${isHover ? 'active' : ''}`}>
                <div className="header-inner" onMouseLeave={() => setIsHover(false)}>
                    <h1 className="logo fontf">
                        <Link to="/">LinkBoard</Link>
                    </h1>
                    <HeadMenu isClick={isClick} isHover={isHover} setIsHover={setIsHover}></HeadMenu>
                    <HeadRight setIsClick={setIsClick} isClick={isClick}></HeadRight>
                </div>
            </div>
        </div>
    );
}

export default Head;

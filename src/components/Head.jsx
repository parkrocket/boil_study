import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeadRight from "./HeadRight";
import HeadMenu from "./HeadMenu";
import { useSelector } from "react-redux";
import { SERVER_URL } from "../pages/Config";

function Head() {
    //console.log(user.auth.isAuth);

    const [isClick, setIsClick] = useState(false);
    const [isScroll, setIsScroll] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [logoImage, setLogoImage] = useState("");

    const config = useSelector((state) => state.configSet.config.config);

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
        setLogoImage(`${SERVER_URL}/${config.logo_image}`);

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [config]);

    return (
        <div>
            <div id="header" className={`${scrollCheck} ${isHover ? "active" : ""}`}>
                <div className="header-inner" onMouseLeave={() => setIsHover(false)}>
                    <h1 className="logo fontf">
                        <Link to="/">
                            <img src={logoImage} alt="logo" />
                        </Link>
                    </h1>
                    <HeadMenu
                        isClick={isClick}
                        isHover={isHover}
                        setIsHover={setIsHover}></HeadMenu>
                    <HeadRight setIsClick={setIsClick} isClick={isClick}></HeadRight>
                </div>
            </div>
        </div>
    );
}

export default Head;

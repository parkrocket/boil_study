import React from "react";
import notfoundStyle from "../Css/notfound.module.css";
import { useEffect } from "react";

function NotFound() {
    useEffect(() => {
        document.querySelector("html").style.height = "100%";
        document.querySelector("html").style.overflow = "hidden";
        document.querySelector("body").style.height = "100%";
        //document.querySelector("body").style.background = "#181828";
        document.querySelector("body").style.position = "inherit";
    }, []);

    return (
        <div className={notfoundStyle.error_page}>
            <a href="/">
                <header className={notfoundStyle.topheader}></header>

                <div>
                    <div className={notfoundStyle.starsec}></div>
                    <div className={notfoundStyle.starthird}></div>
                    <div className={notfoundStyle.starfourth}></div>
                    <div className={notfoundStyle.starfifth}></div>
                </div>

                <div className={notfoundStyle.lamp__wrap}>
                    <div className={notfoundStyle.lamp}>
                        <div className={notfoundStyle.cable}></div>
                        <div className={notfoundStyle.cover}></div>
                        <div className={notfoundStyle.incover}>
                            <div className={notfoundStyle.bulb}></div>
                        </div>
                        <div className={notfoundStyle.light}></div>
                    </div>
                </div>

                <section className={notfoundStyle.error}>
                    <div className={notfoundStyle.error__content}>
                        <div className={`${notfoundStyle.error__message} ${notfoundStyle.message}`}>
                            <h1 className={notfoundStyle.message__title}>Page Not Found</h1>
                            <p className={notfoundStyle.message__text}>
                                앗 이런. 이곳은 아무것도 없는 페이지에요. <br></br>하단 버튼을
                                클릭해서 정상적으로 이용해주세요!
                            </p>
                        </div>
                        <div className={`${notfoundStyle.error__nav} ${notfoundStyle.e_nav}`}>
                            <span className={notfoundStyle.e_nav__link}></span>
                        </div>
                    </div>
                </section>
            </a>
        </div>
    );
}

export default NotFound;

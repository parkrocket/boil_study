import React, { useState, useEffect } from "react";
import adminStyle from "../../Css/admin.module.scss";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import BarChartIcon from "@mui/icons-material/BarChart";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NavLink, Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./../../App";

function AdminLnb(props) {
    console.log(props.path);
    const adminMenu = useSelector((state) => state);

    console.log(adminMenu);


    useEffect(() => {
        const ppp = document.getElementsByClassName("menu1");
        const ppp2 = document.getElementsByClassName("menu2");

        Array.prototype.forEach.call(ppp, (element) => {

            //console.log();
            const href = element.href.replace(window.location.origin, "");

            //console.log(props.path, href);

            if (props.path === href) {
                //element.className = `${adminStyle.active}`;
                element.parentElement.className = `${adminStyle.active}`;
            } else {
                element.parentElement.classList.remove(`${adminStyle.active}`);
            }
        });
        
    }, [props.path]);

    /*
    const [gnbClick1, setGnbClick1] = useState(false);
    const [gnbClick2, setGnbClick2] = useState(false);
    const [gnbClick3, setGnbClick3] = useState(false);
    const [gnbClick4, setGnbClick4] = useState(false);
    const [gnbClick5, setGnbClick5] = useState(false);
    const [gnbClick6, setGnbClick6] = useState(false);

    const handleGnbClick1 = () => {
        setGnbClick1(!gnbClick1);
        setGnbClick2(gnbClick2 ? !gnbClick2 : gnbClick2);
        setGnbClick3(gnbClick3 ? !gnbClick3 : gnbClick3);
        setGnbClick4(gnbClick4 ? !gnbClick4 : gnbClick4);
        setGnbClick5(gnbClick5 ? !gnbClick5 : gnbClick5);
        setGnbClick6(gnbClick6 ? !gnbClick6 : gnbClick6);
    };

    const handleGnbClick2 = () => {
        setGnbClick1(gnbClick1 ? !gnbClick1 : gnbClick1);
        setGnbClick2(!gnbClick2);
        setGnbClick3(gnbClick3 ? !gnbClick3 : gnbClick3);
        setGnbClick4(gnbClick4 ? !gnbClick4 : gnbClick4);
        setGnbClick5(gnbClick5 ? !gnbClick5 : gnbClick5);
        setGnbClick6(gnbClick6 ? !gnbClick6 : gnbClick6);
    };

    const handleGnbClick3 = () => {
        setGnbClick1(gnbClick1 ? !gnbClick1 : gnbClick1);
        setGnbClick2(gnbClick2 ? !gnbClick2 : gnbClick2);
        setGnbClick3(!gnbClick3);
        setGnbClick4(gnbClick4 ? !gnbClick4 : gnbClick4);
        setGnbClick5(gnbClick5 ? !gnbClick5 : gnbClick5);
        setGnbClick6(gnbClick6 ? !gnbClick6 : gnbClick6);
    };

    const handleGnbClick4 = () => {
        setGnbClick1(gnbClick1 ? !gnbClick1 : gnbClick1);
        setGnbClick2(gnbClick2 ? !gnbClick2 : gnbClick2);
        setGnbClick3(gnbClick3 ? !gnbClick3 : gnbClick3);
        setGnbClick4(!gnbClick4);
        setGnbClick5(gnbClick5 ? !gnbClick5 : gnbClick5);
        setGnbClick6(gnbClick6 ? !gnbClick6 : gnbClick6);
    };

    const handleGnbClick5 = () => {
        setGnbClick1(gnbClick1 ? !gnbClick1 : gnbClick1);
        setGnbClick2(gnbClick2 ? !gnbClick2 : gnbClick2);
        setGnbClick3(gnbClick3 ? !gnbClick3 : gnbClick3);
        setGnbClick4(gnbClick4 ? !gnbClick4 : gnbClick4);
        setGnbClick5(!gnbClick5);
        setGnbClick6(gnbClick6 ? !gnbClick6 : gnbClick6);
    };

    const handleGnbClick6 = () => {
        setGnbClick1(gnbClick1 ? !gnbClick1 : gnbClick1);
        setGnbClick2(gnbClick2 ? !gnbClick2 : gnbClick2);
        setGnbClick3(gnbClick3 ? !gnbClick3 : gnbClick3);
        setGnbClick4(gnbClick4 ? !gnbClick4 : gnbClick4);
        setGnbClick5(gnbClick5 ? !gnbClick5 : gnbClick5);
        setGnbClick6(!gnbClick6);
    };

    let gnbToggleClassCheck1 = gnbClick1 ? `${adminStyle.active}` : "";
    let gnbToggleClassCheck2 = gnbClick2 ? `${adminStyle.active}` : "";
    let gnbToggleClassCheck3 = gnbClick3 ? `${adminStyle.active}` : "";
    let gnbToggleClassCheck4 = gnbClick4 ? `${adminStyle.active}` : "";
    let gnbToggleClassCheck5 = gnbClick5 ? `${adminStyle.active}` : "";
    let gnbToggleClassCheck6 = gnbClick6 ? `${adminStyle.active}` : "";
    */
    return (
        <div className={`${adminStyle.admin_lnb}`}>
            <div className={`${adminStyle.container}`}>
                <h1 className={`${adminStyle.tit}`}>
                    <Link to="/admin">
                        <span className={`${adminStyle.pc}`}>admin home</span>
                        <span className={`${adminStyle.mo}`}>admin</span>
                        <HomeIcon />
                    </Link>
                </h1>
                <nav>
                    <ul className={`${adminStyle.gnb}`}>
                        <li className={``}>
                            <NavLink to="/admin" className="menu1">
                                <EditNoteIcon className={`${adminStyle.cate_ico}`}/>
                                <span>캠페인 등록</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/board"  className="menu1">
                                <FormatListBulletedIcon className={`${adminStyle.cate_ico}`}/>
                                <span>게시판 관리</span>
                                <ExpandMoreIcon className={`${adminStyle.arrow_ico}`} />
                            </NavLink>
                            <ul className={`${adminStyle.gnb_sub}`}>
                                <li>
                                    <NavLink to="/admin/board" className="menu2">
                                        전체 게시판
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/admin/board/test" className="menu2">선정 캠페인</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/admin/board/test2" className="menu2">모집 캠페인</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/admin/board/test3" className="menu2">리뷰 캠페인</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/admin"  className="menu1">
                                <ContentCopyIcon className={`${adminStyle.cate_ico}`}/>
                                <span>등록된 리뷰</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin"  className="menu1">
                                <BarChartIcon className={`${adminStyle.cate_ico}`}/>
                                <span>브랜드 비교분석</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin"  className="menu1">
                                <ControlPointDuplicateIcon className={`${adminStyle.cate_ico}`}/>
                                <span>포인트 충전</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin"  className="menu1">
                                <MoreHorizIcon className={`${adminStyle.cate_ico}`}/>
                                <span>고객센터</span>
                                <ExpandMoreIcon className={`${adminStyle.arrow_ico}`} />
                            </NavLink>
                            <ul className={`${adminStyle.gnb_sub}`}>
                                <li>
                                    <NavLink to="">구매내역(견적서)</NavLink>
                                </li>
                                <li>
                                    <NavLink to="">공지사항</NavLink>
                                </li>
                                <li>
                                    <NavLink to="">1:1 문의</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div className={`${adminStyle.notify_box}`}>
                    <p>
                        <Link to="">
                            <NotificationsNoneIcon />
                            <span>선정하지 않은 캠페인이 있습니다.</span>
                        </Link>
                    </p>
                    <p>
                        <Link to="">
                            <NotificationsNoneIcon />
                            <span>선정하지 않은 캠페인이 있습니다.</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AdminLnb;

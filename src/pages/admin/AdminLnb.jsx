import React, { useState } from "react";
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
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import Home from "./../../App";

function AdminLnb(props) {
    const [gnbClick1, setGnbClick1] = useState(false);
    const [gnbClick2, setGnbClick2] = useState(false);
    const [gnbClick3, setGnbClick3] = useState(false);
    const [gnbClick4, setGnbClick4] = useState(false);
    const [gnbClick5, setGnbClick5] = useState(false);
    const [gnbClick6, setGnbClick6] = useState(false);

    const onClick1 = () => {
        setGnbClick1(!gnbClick1);
        setGnbClick2(gnbClick2 ? !gnbClick2 : gnbClick2);
        setGnbClick3(gnbClick3 ? !gnbClick3 : gnbClick3);
        setGnbClick4(gnbClick4 ? !gnbClick4 : gnbClick4);
        setGnbClick5(gnbClick5 ? !gnbClick5 : gnbClick5);
        setGnbClick6(gnbClick6 ? !gnbClick6 : gnbClick6);
    };

    const onClick2 = () => {
        setGnbClick1(gnbClick1 ? !gnbClick1 : gnbClick1);
        setGnbClick2(!gnbClick2);
        setGnbClick3(gnbClick3 ? !gnbClick3 : gnbClick3);
        setGnbClick4(gnbClick4 ? !gnbClick4 : gnbClick4);
        setGnbClick5(gnbClick5 ? !gnbClick5 : gnbClick5);
        setGnbClick6(gnbClick6 ? !gnbClick6 : gnbClick6);
    };

    const onClick3 = () => {
        setGnbClick1(gnbClick1 ? !gnbClick1 : gnbClick1);
        setGnbClick2(gnbClick2 ? !gnbClick2 : gnbClick2);
        setGnbClick3(!gnbClick3);
        setGnbClick4(gnbClick4 ? !gnbClick4 : gnbClick4);
        setGnbClick5(gnbClick5 ? !gnbClick5 : gnbClick5);
        setGnbClick6(gnbClick6 ? !gnbClick6 : gnbClick6);
    };

    const onClick4 = () => {
        setGnbClick1(gnbClick1 ? !gnbClick1 : gnbClick1);
        setGnbClick2(gnbClick2 ? !gnbClick2 : gnbClick2);
        setGnbClick3(gnbClick3 ? !gnbClick3 : gnbClick3);
        setGnbClick4(!gnbClick4);
        setGnbClick5(gnbClick5 ? !gnbClick5 : gnbClick5);
        setGnbClick6(gnbClick6 ? !gnbClick6 : gnbClick6);
    };

    const onClick5 = () => {
        setGnbClick1(gnbClick1 ? !gnbClick1 : gnbClick1);
        setGnbClick2(gnbClick2 ? !gnbClick2 : gnbClick2);
        setGnbClick3(gnbClick3 ? !gnbClick3 : gnbClick3);
        setGnbClick4(gnbClick4 ? !gnbClick4 : gnbClick4);
        setGnbClick5(!gnbClick5);
        setGnbClick6(gnbClick6 ? !gnbClick6 : gnbClick6);
    };

    const onClick6 = () => {
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

    return (
        <div className={`${adminStyle.admin_lnb}`}>
            <div className={`${adminStyle.container}`}>
                <h1 className={`${adminStyle.tit}`}>
                    <Link href="/admin">
                        <span className={`${adminStyle.pc}`}>admin home</span>
                        <span className={`${adminStyle.mo}`}>admin</span>
                        <HomeIcon />
                    </Link>
                </h1>
                <nav>
                    <ul className={`${adminStyle.gnb}`}>
                        <li onClick={onClick1} className={`${gnbToggleClassCheck1}`}>
                            <NavLink to="">
                                <EditNoteIcon />
                                <span>캠페인 등록</span>
                            </NavLink>
                        </li>
                        <li onClick={onClick2} className={`${gnbToggleClassCheck2}`}>
                            <NavLink to="">
                                <FormatListBulletedIcon />
                                <span>게시판 관리</span>
                                <ExpandMoreIcon className={`${adminStyle.arrow_ico}`} />
                            </NavLink>
                            <ul className={`${adminStyle.gnb_sub}`}>
                                <li>
                                    <NavLink to="/admin/board" className={`${adminStyle.active}`}>
                                        전체 게시판
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="">선정 캠페인</NavLink>
                                </li>
                                <li>
                                    <NavLink to="">모집 캠페인</NavLink>
                                </li>
                                <li>
                                    <NavLink to="">리뷰 캠페인</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li onClick={onClick3} className={`${gnbToggleClassCheck3}`}>
                            <NavLink to="">
                                <ContentCopyIcon />
                                <span>등록된 리뷰</span>
                            </NavLink>
                        </li>
                        <li onClick={onClick4} className={`${gnbToggleClassCheck4}`}>
                            <NavLink to="">
                                <BarChartIcon />
                                <span>브랜드 비교분석</span>
                            </NavLink>
                        </li>
                        <li onClick={onClick5} className={`${gnbToggleClassCheck5}`}>
                            <NavLink to="">
                                <ControlPointDuplicateIcon />
                                <span>포인트 충전</span>
                            </NavLink>
                        </li>
                        <li onClick={onClick6} className={`${gnbToggleClassCheck6}`}>
                            <NavLink to="">
                                <MoreHorizIcon />
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

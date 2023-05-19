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
    const adminMenu = useSelector((state) => state);

    useEffect(() => {
        props.setAdminMenus(adminMenu.adminMenu.adminMenu);

        const menu = props.adminMenus.menu;
        const subMenu = props.adminMenus.subMenu;

        const ppp = document.getElementsByClassName("menu1");

        if (menu !== 0) {
            Array.prototype.forEach.call(ppp, (element, index) => {
                if (index + 1 === menu) {
                    element.parentElement.classList.add(`${adminStyle.active}`);
                } else {
                    element.parentElement.classList.remove(`${adminStyle.active}`);
                }

                if (subMenu !== 0) {
                    if (index + 1 === menu) {
                        const sss =
                            element.parentElement.childNodes[1].getElementsByClassName("menu2");

                        Array.prototype.forEach.call(sss, (element2, index2) => {
                            if (index2 + 1 === subMenu) {
                                element2.classList.add(`${adminStyle.active}`);
                            } else {
                                element2.classList.remove(`${adminStyle.active}`);
                            }
                        });
                    }
                }
            });
        } else {
            Array.prototype.forEach.call(ppp, (element, index) => {
                element.parentElement.classList.remove(`${adminStyle.active}`);
            });
        }
    }, [props, adminMenu.adminMenu.adminMenu]);

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
                            <NavLink to="/admin/config" className="menu1">
                                <EditNoteIcon className={`${adminStyle.cate_ico}`} />
                                <span>사이트 관리</span>
                            </NavLink>
                        </li>
                        <li className={``}>
                            <NavLink to="/admin/users" className="menu1">
                                <EditNoteIcon className={`${adminStyle.cate_ico}`} />
                                <span>회원 관리</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/board" className="menu1">
                                <FormatListBulletedIcon className={`${adminStyle.cate_ico}`} />
                                <span>게시판 관리</span>
                                <ExpandMoreIcon className={`${adminStyle.arrow_ico}`} />
                            </NavLink>
                            <ul className={`${adminStyle.gnb_sub}`}>
                                <li>
                                    <NavLink to="/admin/board/write" className="menu2">
                                        게시판 등록
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/admin/board" className="menu2">
                                        게시판 목록
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/admin" className="menu1">
                                <ContentCopyIcon className={`${adminStyle.cate_ico}`} />
                                <span>등록된 리뷰</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin" className="menu1">
                                <BarChartIcon className={`${adminStyle.cate_ico}`} />
                                <span>브랜드 비교분석</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin" className="menu1">
                                <ControlPointDuplicateIcon className={`${adminStyle.cate_ico}`} />
                                <span>포인트 충전</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin" className="menu1">
                                <MoreHorizIcon className={`${adminStyle.cate_ico}`} />
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

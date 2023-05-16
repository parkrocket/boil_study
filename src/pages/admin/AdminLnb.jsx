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

function AdminLnb() {
    const [click, setClick] = useState(false);
    const onClick = () => {
        setClick(!click);
    };

    return (
        <div className={`${adminStyle.admin_lnb}`}>
            <div className={`${adminStyle.container}`}>
                <h1 className={`${adminStyle.tit}`}>
                    <Link to="#">
                        admin home
                        <HomeIcon />
                    </Link>
                </h1>
                <nav>
                    <ul className={`${adminStyle.gnb}`}>
                        <li>
                            <NavLink to="">
                                <EditNoteIcon />
                                <span>캠페인 등록</span>
                            </NavLink>
                        </li>
                        <li className={`${adminStyle.active}`}>
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
                        <li>
                            <NavLink to="">
                                <ContentCopyIcon />
                                <span>등록된 리뷰</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="">
                                <BarChartIcon />
                                <span>브랜드 비교분석</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="">
                                <ControlPointDuplicateIcon />
                                <span>포인트 충전</span>
                            </NavLink>
                        </li>
                        <li>
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

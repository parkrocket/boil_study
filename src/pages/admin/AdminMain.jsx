import React, { useState, useEffect } from "react";
import adminStyle from "../../Css/admin.module.scss";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import PieChartIcon from "@mui/icons-material/PieChart";
import axios from "axios";
import { SERVER_URL } from "../Config";

function AdminMain() {
    const [userCount, setUserCount] = useState(0);
    const [writeCount, setWriteCount] = useState(0);
    const [commentCount, setCommentCount] = useState(0);
    const [pointCount, setPointCount] = useState(0);

    useEffect(() => {
        axios.post(`${SERVER_URL}/api/admin/stats/statsCount`).then((res) => {
            setUserCount(res.data.userCount);
            setWriteCount(res.data.writeCount);
            setCommentCount(res.data.commentCount);
            setPointCount(res.data.pointCount);
        });
    }, []);

    return (
        <div className={`${adminStyle.admin_main}`}>
            <div className={`${adminStyle.container}`}>
                <div className={`${adminStyle.row} ${adminStyle.row1}`}>
                    <div className={`${adminStyle.left}`}>
                        <ul className={`${adminStyle.count_list}`}>
                            <li>
                                <h4>전체회원수</h4>
                                <p>
                                    <span>{userCount}</span>
                                </p>
                            </li>
                            <li>
                                <h4>게시글수</h4>
                                <p>
                                    <span>{writeCount}</span>
                                </p>
                            </li>
                            <li>
                                <h4>댓글수</h4>
                                <p>
                                    <span>{commentCount}</span>
                                </p>
                            </li>
                            <li className={`${adminStyle.point}`}>
                                <h4>회원포인트</h4>
                                <p>
                                    <span>{pointCount}</span>P
                                </p>
                                <button className={`${adminStyle.refresh}`}>
                                    <RefreshIcon></RefreshIcon>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className={`${adminStyle.right}`}>
                        <div className={`${adminStyle.notify}`}>
                            <h3>공지사항</h3>
                            <ul>
                                <li>
                                    <NotificationsActiveIcon></NotificationsActiveIcon>
                                    <strong>[공지]</strong>무료모집 제공 서비스 종료 안내
                                    <span>2022-07-01</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`${adminStyle.row} ${adminStyle.row2}`}>
                    <div className={`${adminStyle.left}`}>
                        <div className={`${adminStyle.info}`}>
                            <h3>비즈 정보</h3>
                            <Link className={`${adminStyle.shortcut_link}`}>
                                <SettingsIcon />
                                정보수정
                            </Link>
                        </div>
                        <div className={`${adminStyle.current}`}>
                            <h3>캠페인 진행현황</h3>
                            <Link className={`${adminStyle.shortcut_link}`}>
                                <EditNoteIcon />
                                신규등록
                            </Link>
                        </div>
                    </div>
                    <div className={`${adminStyle.right}`}>
                        <div className={`${adminStyle.recent}`}>
                            <h3>최근 진행 캠페인</h3>
                            <Link className={`${adminStyle.shortcut_link}`}>
                                <ShortcutIcon />
                                캠페인보기
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={`${adminStyle.row} ${adminStyle.row3}`}>
                    <div className={`${adminStyle.left}`}>
                        <div className={`${adminStyle.view_count}`}>
                            <h3>전체 갬페인 누적 조회수</h3>
                        </div>
                    </div>
                    <div className={`${adminStyle.right}`}>
                        <div className={`${adminStyle.analyze}`}>
                            <h3>브랜드 비교 분석</h3>
                            <Link className={`${adminStyle.shortcut_link}`}>
                                <PieChartIcon />
                                분석하기
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminMain;

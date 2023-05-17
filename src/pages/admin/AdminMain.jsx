import React from "react";
import adminStyle from '../../Css/admin.module.scss';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Link } from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import PieChartIcon from '@mui/icons-material/PieChart';

function AdminMain() {
    return (
        <div className={`${adminStyle.admin_main}`}>
            <div className={`${adminStyle.container}`}>
                <div className={`${adminStyle.row} ${adminStyle.row1}`}>
                    <div className={`${adminStyle.left}`}>
                        <ul className={`${adminStyle.count_list}`}>
                            <li>
                                <h4>전체캠페인</h4>
                                <p><span>1,728</span></p>
                            </li>
                            <li>
                                <h4>누적리뷰수</h4>
                                <p><span>5,595</span></p>
                            </li>
                            <li>
                                <h4>누적조회수</h4>
                                <p><span>1,373,766</span></p>
                            </li>
                            <li className={`${adminStyle.point}`}>
                                <h4>포인트</h4>
                                <p><span>173,105</span>P</p>
                                <button className={`${adminStyle.refresh}`}><RefreshIcon></RefreshIcon></button>
                            </li>
                        </ul>
                    </div>
                    <div className={`${adminStyle.right}`}>
                        <div className={`${adminStyle.notify}`}>
                            <h3>공지사항</h3>
                            <ul>
                                <li><NotificationsActiveIcon></NotificationsActiveIcon><strong>[공지]</strong>무료모집 제공 서비스 종료 안내<span>2022-07-01</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`${adminStyle.row} ${adminStyle.row2}`}>
                    <div className={`${adminStyle.left}`}>
                        <div className={`${adminStyle.info}`}>
                            <h3>비즈 정보</h3>
                            <Link className={`${adminStyle.shortcut_link}`}><SettingsIcon/>정보수정</Link>
                        </div>
                        <div className={`${adminStyle.current}`}>
                            <h3>캠페인 진행현황</h3>
                            <Link className={`${adminStyle.shortcut_link}`}><EditNoteIcon/>신규등록</Link>

                        </div>
                    </div>
                    <div className={`${adminStyle.right}`}>
                        <div className={`${adminStyle.recent}`}>
                            <h3>최근 진행 캠페인</h3>
                            <Link className={`${adminStyle.shortcut_link}`}><ShortcutIcon/>캠페인보기</Link>
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
                            <Link className={`${adminStyle.shortcut_link}`}><PieChartIcon/>분석하기</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminMain;

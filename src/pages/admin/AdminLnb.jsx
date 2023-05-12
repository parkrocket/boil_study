import React from "react";
import adminStyle from '../../Css/admin.module.scss';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import BarChartIcon from '@mui/icons-material/BarChart';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AdminLnb() {
    return (
        <div className={`${adminStyle.admin_lnb}`}>
            <div className={`${adminStyle.container}`}>
                <h1 className={`${adminStyle.tit}`}>
                    <a href="#">admin home<HomeIcon/></a>
                </h1>
                <nav>
                    <ul className={`${adminStyle.gnb}`}>
                        <li><a href=""><EditNoteIcon/><span>캠페인 등록</span></a></li>
                        <li className={`${adminStyle.active}`}>
                            <a href=""><FormatListBulletedIcon/><span>캠페인 목록</span><ExpandMoreIcon className={`${adminStyle.arrow_ico}`}/></a>
                            <ul className={`${adminStyle.gnb_sub}`}>
                                <li><a href="" className={`${adminStyle.active}`}>전체 캠페인</a></li>
                                <li><a href="">선정 캠페인</a></li>
                                <li><a href="">모집 캠페인</a></li>
                                <li><a href="">리뷰 캠페인</a></li>
                            </ul>
                        </li>
                        <li><a href=""><ContentCopyIcon/><span>등록된 리뷰</span></a></li>
                        <li><a href=""><BarChartIcon/><span>브랜드 비교분석</span></a></li>
                        <li><a href=""><ControlPointDuplicateIcon/><span>포인트 충전</span></a></li>
                        <li>
                            <a href=""><MoreHorizIcon/><span>고객센터</span><ExpandMoreIcon className={`${adminStyle.arrow_ico}`}/></a>
                            <ul className={`${adminStyle.gnb_sub}`}>
                                <li><a href="">구매내역(견적서)</a></li>
                                <li><a href="">공지사항</a></li>
                                <li><a href="">1:1 문의</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div className={`${adminStyle.notify_box}`}>
                    <p>
                        <a href=""><NotificationsNoneIcon/><span>선정하지 않은 캠페인이 있습니다.</span></a>
                    </p>
                    <p>
                        <a href=""><NotificationsNoneIcon/><span>선정하지 않은 캠페인이 있습니다.</span></a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AdminLnb;

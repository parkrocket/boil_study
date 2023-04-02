import React from 'react';
import { Link } from 'react-router-dom';

function Head() {
    return (
        <div>
            <div id="header">
                <div className="header-inner">
                    <h1 className="logo fontf"><Link to="">kakao</Link></h1>
                    <ul className="gnb">
                        <li><Link to="">메뉴1</Link></li>
                        <li><Link to="">메뉴2</Link></li>
                        <li><Link to="">메뉴3</Link></li>
                    </ul>
                    <ul className="head-login">
                        <li><Link to="/login">로그인</Link></li>
                        {/*<Link to="/logout">로그아웃</Link>*/}
                        <li><Link to="/register">회원가입</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Head;

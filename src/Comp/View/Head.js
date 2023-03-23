import React from 'react';
import { Link } from 'react-router-dom';

function Head() {
    return (
        <div>
            <Link to="/login">로그인</Link>
            <Link to="/logout">로그아웃</Link>
            <Link to="/register">회원가입</Link>
        </div>
    );
}

export default Head;

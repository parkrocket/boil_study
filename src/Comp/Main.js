import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Head from './View/Head';

export const Main = () => {
    return (
        <div>
            <Head></Head>
            <div>
                <Link to="/introduce">소개페이지</Link>
            </div>
            <div>푸터</div>
        </div>
    );
};

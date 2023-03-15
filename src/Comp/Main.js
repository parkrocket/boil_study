import React from 'react';
import logo from '../logo.svg';
import '../App.css';

export const Main = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    리액트 스터디 스타트입니다. 다들 중도 탈락하지 마시고 화이팅해요!
                </a>
            </header>
        </div>
    );
};

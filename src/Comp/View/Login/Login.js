import React, { useState } from 'react';
import axios from 'axios';
import Head from '../Head';
import '../../../Css/login.css';
import '../../../Css/media.css';


function Login() {
    const [Id, setId] = useState('');
    const [Password, setPassword] = useState('');

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onSubmitHandler = (event) => {
        const data = { id: Id, password: Password };

        //console.log(data);

        axios({
            method: 'post',
            url: 'http://54.180.35.70/api/users',
            data: data,
        }).then((response) => console.log(response));

        event.preventDefault();
    };
    return (
        <div>
            <Head></Head>
            <div className="wrap">
                <div className="login_wrap">
                    <div className="login_title">
                        <h2 className="logo fontf">kakao</h2>
                        <span>kakao 로그인</span>
                    </div>                   
                    <form onSubmit={onSubmitHandler}>
                        <div className="log_section">
                            <em>아이디</em>
                            <input type="text" name="id" defaultValue="" onChange={onIdHandler}></input>
                        </div>
                        <div className="log_section">
                            <em>비밀번호</em>
                            <input type="password" name="password" defaultValue="" onChange={onPasswordHandler}></input>
                        </div>
                        <div className="log_section log_lost"><a href="#!">아이디/비밀번호 찾기 </a></div>
                        <div>
                            <input type="submit" defaultValue="로그인하기" className="login_btn"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;

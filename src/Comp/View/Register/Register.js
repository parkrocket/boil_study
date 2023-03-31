import React from 'react';
import Head from '../Head';
import '../../../Css/login.css';
import '../../../Css/media.css';

function Register() {
    return (
        <div>
            <Head></Head>
            <div className="wrap">
                <div className="login_wrap">
                    <div className="login_title">
                        <h2 className="logo fontf">kakao</h2>
                        <span>kakao 회원가입</span>
                    </div> 
                    <div className="log_section">
                        <em>아이디</em>
                        <input type="text"></input>
                    </div>
                    <div className="log_section">
                        <em>비밀번호</em>
                        <input type="text"></input>
                    </div>
                    <div className="log_section">
                        <em>이메일</em>
                        <input type="text"></input>
                    </div>
                    <div className="log_section">
                        <em>실명</em>
                        <input type="text"></input>
                    </div>
                    <div className="log_section">
                        <em>닉네임</em>
                        <input type="text"></input>
                    </div>
                    <div className="chk_wrap">
                        <div className="chkbox">
                            <input type="radio" id="chk_1" name="" />
                            <label  htmlFor="chk_1"><em>(필수)</em> 이용 약관 동의</label>
                            <span className="pop">약관보기 햣 </span>
                        </div>
                        <div className="chkbox">
                            <input type="radio" id="chk_2" name="" />
                            <label htmlFor="chk_2"><em>(필수)</em> 개인정보처리방침 동의</label>
                            <span className="pop">약관보기 </span>
                        </div>
                    </div>
                    <div>
                        <input type="submit" defaultValue="회원가입" className="login_btn"></input>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default Register;

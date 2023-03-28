import React from 'react';

function Login() {
    return (
        <div>
            <form>
                <div>
                    <input type="text" name="id" value=""></input>
                </div>
                <div>
                    <input type="password" name="password" value=""></input>
                </div>
                <div>
                    <input type="submit" value="로그인하기"></input>
                </div>
            </form>
        </div>
    );
}

export default Login;

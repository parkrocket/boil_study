import React, { useState } from 'react';
import axios from 'axios';

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

        console.log(data);

        axios({
            method: 'post',
            url: 'http://54.180.35.70/api/users',
            data: data,
        }).then((response) => console.log(response));

        event.preventDefault();
    };
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <input type="text" name="id" defaultValue="" onChange={onIdHandler}></input>
                </div>
                <div>
                    <input type="password" name="password" defaultValue="" onChange={onPasswordHandler}></input>
                </div>
                <div>
                    <input type="submit" defaultValue="로그인하기"></input>
                </div>
            </form>
        </div>
    );
}

export default Login;

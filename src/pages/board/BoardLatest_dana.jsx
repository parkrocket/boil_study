import React, { useEffect } from 'react';
import axios from 'axios';
import { SERVER_URL } from "../Config";

function BoardLatest_dana() {

    useEffect(() => {
        axios.post(`${SERVER_URL}/api/board/allLatest`, { count: 5 }).then((response) => {
            console.log(response);
        });
    });

    return (
        <div>BoardLatest_dana</div>
    )
}

export default BoardLatest_dana
import React from "react";
import axios from "axios";

function DbLook() {
    axios({
        method: "post",
        url: "http://54.180.35.70/api/mbSelect",
    }).then((response) => console.log(response));

    return <div>DbLook</div>;
}

export default DbLook;

import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Head from "../components/Head";
import Footer from "../components/Footer";

import BoardLatest from "./board/BoardLatest";

function Main() {
    return (
        <div>
            <Head></Head>
            <div className="container_wrap">
                <BoardLatest></BoardLatest>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Main;

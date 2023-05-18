import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Head from "../components/Head";
import Footer from "../components/Footer";

import BoardLatest from "./board/BoardLatest";
import BoardLatestDana from "./board/BoardLatest_dana";

function Main() {
    return (
        <div>
            <Head></Head>
            <div className="container_wrap">
                <BoardLatest></BoardLatest>
                <BoardLatestDana></BoardLatestDana>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Main;

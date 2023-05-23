import React, { useEffect } from "react";

import { Routes } from "./pages/Routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { configSet } from "./_actions/adminMenu_action";
import { useState } from "react";

function App() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");

    useEffect(() => {
        const data = { check: "adminadmin" };
        dispatch(configSet(data)).then((response) => {
            if (response.payload.configListSuccess === false) {
                alert("설정을 불러오는데 실패했습니다.");
            } else {
                setTitle(response.payload.config.title);
            }
        });
    }, [dispatch]);
    return (
        <React.Fragment>
            <HelmetProvider>
                <Helmet>
                    <title>{title}</title>
                </Helmet>
                <Routes />
            </HelmetProvider>
        </React.Fragment>
    );
}

export default App;

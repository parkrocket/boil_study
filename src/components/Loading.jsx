import React from "react";
import { css } from "@emotion/react";
import { PacmanLoader } from "react-spinners";

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

const Loading = () => {
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
            }}>
            <PacmanLoader color="white" css={override} size={25} />
        </div>
    );
};

export default Loading;

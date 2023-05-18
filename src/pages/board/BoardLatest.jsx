import React, { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_URL } from "../Config";
import BoardLatestList from "./BoardLatestList";
import { Flex } from "@chakra-ui/react";
import boardLatestStyle from "../../Css/boardLatest.module.scss";

function BoardLatest(props) {
    const content = props.latestList.map((cont, index) => {
        return <BoardLatestList cont={cont} key={index} />;
    });

    return (
        <React.Fragment>
            <Flex spacing="24px" className={`${boardLatestStyle.board_latest_container}`}>
                {content}
            </Flex>
        </React.Fragment>
    );
}

export default BoardLatest;

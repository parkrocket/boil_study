import React from "react";

import BoardLatestList from "./BoardLatestList";
import { Flex } from "@chakra-ui/react";
import boardLatestStyle from "../../Css/boardLatest.module.scss";

function BoardLatest(props) {
    const content = props.latestList.map((cont, index) => {
        return <BoardLatestList cont={cont} key={index} />;
    });

    return (
        <React.Fragment>
            <div className={`${boardLatestStyle.board_latest_container}`}>
                {content}
            </div>
        </React.Fragment>
    );
}

export default BoardLatest;

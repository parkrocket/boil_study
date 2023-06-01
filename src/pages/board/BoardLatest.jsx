import React from "react";
import BoardLatestList from "./BoardLatestList";
import boardLatestStyle from "../../Css/boardLatest.module.scss";
import Masonry from "react-masonry-css";

function BoardLatest(props) {
    const content = props.latestList.map((cont, index) => {
        return <BoardLatestList cont={cont} key={index} />;
    });

    const breakpointColumnsObj = {
        default: 3,
        1000: 2,
        650: 1
      };

    return (
        <React.Fragment>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={`${boardLatestStyle.board_latest_container}`}
                columnClassName="column"
                >
                    {content}
            </Masonry>
        </React.Fragment>
    );
}

export default BoardLatest;

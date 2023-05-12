import React from "react";
import Pagination from "react-js-pagination";
import { useNavigate } from "react-router-dom";
import boardListStyle from "./../Css/boardlist.module.scss";

const Paging = (props) => {
    const navigate = useNavigate();

    function pageChangeHandler(page) {
        navigate(`/board/page/${page}`);
    }

    return (
        <Pagination
            activePage={props.page}
            itemsCountPerPage={props.list}
            totalItemsCount={props.count}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={pageChangeHandler}
        />
    );
};

export default Paging;

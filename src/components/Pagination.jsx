import React from "react";
import Pagination from "react-js-pagination";
import { useNavigate } from "react-router-dom";

const Paging = (props) => {
    const navigate = useNavigate();

    function pageChangeHandler(page) {
        let url = `${props.path}${page}`;

        if (props.searchText !== null) {
            url += `?category=${props.category}&searchText=${props.searchText}`;
        }
        navigate(url);
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

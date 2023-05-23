import React, { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_URL } from "../pages/Config";

function HeadMenu(props) {
    let toggleClassCheck = props.isClick ? "active" : "";
    const [headMenu, setHeadMenu] = useState([]);

    useEffect(() => {
        axios.post(`${SERVER_URL}/api/admin/menu/menuList`).then((response) => {
            setHeadMenu(response.data.menuList);
        });
    }, []);

    console.log(headMenu);

    const HeadMenuComp =
        headMenu &&
        headMenu.map((head, index) => {
            console.log(head);

            const headMenuSubComp = head.menusubList.map((subHead, index) => {
                console.log(subHead.menuList.menu_link);
                return (
                    <li key={subHead.menuList.menu_id}>
                        <a href={`${subHead.menuList.menu_link}`}>{subHead.menuList.menu_name}</a>
                    </li>
                );
            });

            return (
                <li key={head.menuList.menu_id}>
                    <a href={head.menuList.menu_link}>{head.menuList.menu_name}</a>
                    <ul className="main_sub_gnb">{headMenuSubComp}</ul>
                </li>
            );
        });
    return (
        <ul
            className={`main_gnb ${toggleClassCheck}`}
            onMouseEnter={() => {
                props.setIsHover(true);
            }}>
            {HeadMenuComp}
        </ul>
    );
}

export default HeadMenu;

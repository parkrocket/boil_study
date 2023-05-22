import React, { useState, useEffect } from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import MenuModal from "./MenuModal";
import { SERVER_URL } from "../../Config";

function MenuEdit() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [menuList, setMenuList] = useState([]);

    useEffect(() => {
        axios.post(`${SERVER_URL}/api/admin/menu/menuList`).then((response) => {
            if (response.data.menuListSuccess === false) {
                alert("메뉴 리스트 로딩에 실패하였습니다.");
            } else {
                setMenuList(response.data.menuList);
            }
        });
    }, []);

    const menuListComp = menuList.map((menu, index) => {
        return (
            <li key={menu.menu_id}>
                {menu.menu_name} / {menu.menu_link} / {menu.menu_code} /{menu.menu_order}
            </li>
        );
    });

    return (
        <>
            <Button onClick={onOpen}>메뉴추가</Button>

            <MenuModal isOpen={isOpen} onClose={onClose} setMenuList={setMenuList}></MenuModal>
            <div>{menuListComp}</div>
        </>
    );
}

export default MenuEdit;
